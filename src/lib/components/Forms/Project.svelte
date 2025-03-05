<script lang="ts">
	import { enhance } from '$app/forms';
	import { TextArea, TextInput } from 'svelte-input-components';

	interface Props {
		projectID?: number | null;
		title?: string | null;
		url?: string | null;
		company?: string | null;
		date?: string | null;
		description?: string | null;
		contribution?: string | null;
	}

	const { projectID, title, url, company, date, description, contribution }: Props = $props();
</script>

<form class="grid grid-cols-1 md:grid-cols-2 gap-4" method="post" action="/p/new" use:enhance>
	<input type="hidden" class="hidden" name="projectID" value={projectID} />
	<TextInput id="title" label="Project Name" value={title || ''} />
	<TextInput id="url" label="Project Link" value={url || ''} />
	<TextInput id="company" label="Company" value={company || ''} />
	<TextInput id="date" label="Date" type="date" value={date || ''} />
	<TextArea class="" id="description" label="Description" value={description || ''} />
	<TextArea class="" id="contribution" label="Contribution" value={contribution || ''} />
	<div class="md:col-span-2 flex justify-end">
		{#if projectID}
			<button formaction={`/p/${projectID}?/update`} class="btn btn-primary">Update</button>
		{:else}
			<button class="btn btn-primary">Save</button>
		{/if}
	</div>
</form>
