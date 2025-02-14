<script lang="ts">
	interface Props {
		jobID?: string;
		ctaText?: string;
		titlePlaceholder?: string;
		notePlaceholder?: string;
	}
	const {
		jobID,
		ctaText = 'New Note',
		titlePlaceholder = 'Title',
		notePlaceholder = 'Take a note...'
	}: Props = $props();
</script>

<div class="rounded-md bg-surface border-2 border-surface-1">
	<div class="p-1">
		{#if jobID}
			<input hidden name="jobID" class="hidden" id="jobID" value={jobID} />
		{/if}
		<label for="title" class="sr-only">Title</label>
		<input
			type="text"
			name="title"
			id="title"
			class="block w-full px-3 pt-2.5 text-lg font-medium text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 border-none outline-none bg-transparent"
			placeholder={titlePlaceholder}
		/>
		<label for="note" class="sr-only">Note</label>
		<textarea
			rows="3"
			name="note"
			id="note"
			class="block w-full resize-none px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 border-none outline-none bg-transparent"
			placeholder={notePlaceholder}
		></textarea>
	</div>
	<div class="flex items-center justify-end space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
		<div class="shrink-0">
			<button type="submit" class="btn btn-primary">{ctaText}</button>
		</div>
	</div>
</div>
