<script lang="ts">
	import { enhance } from '$app/forms';

	const {
		jobID,
		noteID,
		title,
		message
	}: {
		jobID?: number | null;
		noteID?: number | null;
		message?: string | null;
		title?: string | null;
	} = $props();

	let error: null | string = $state(null);
</script>

<form
	method="post"
	action="/note"
	use:enhance={({ formElement }) => {
		return async ({ result }) => {
			console.log({ type: result.type });
			if (result.type === 'success') {
				formElement.reset();
			}
			if (result.type === 'error') {
				error = 'There was an error saving the note';
			}
		};
	}}
	class="relative"
>
	<div class="p-1">
		<input hidden name="jobID" class="hidden" id="jobID" value={jobID} />
		<label for="title" class="sr-only">Title</label>
		<input
			type="text"
			name="title"
			id="title"
			class="block w-full px-3 pt-2.5 text-lg font-medium text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 border-none outline-none bg-transparent rounded-sm"
			placeholder="Title"
			value={title}
		/>
		<label for="note" class="sr-only">Note</label>
		<textarea
			rows="3"
			name="note"
			id="note"
			class="block w-full resize-none px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 border-none outline-none bg-transparent rounded-sm"
			placeholder="Take a note..."
			value={message}
		></textarea>
	</div>
	<div
		class="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3"
	>
		<p class="text-sm text-error">
			{error}
		</p>
		<div class="shrink-0">
			{#if noteID}
				<button formaction={`/note/${noteID}`} type="submit" class="btn btn-primary">
					Update Note
				</button>
			{:else}
				<button type="submit" class="btn btn-primary">New Note</button>
			{/if}
		</div>
	</div>
</form>
