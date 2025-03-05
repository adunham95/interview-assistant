<script lang="ts">
	import { enhance } from '$app/forms';

	import { Select, TextArea, TextInput } from 'svelte-input-components';

	interface Props {
		jobID?: number;
		title?: string | null;
		url?: string | null;
		company?: string | null;
		salary?: string | null;
		status?: string | null;
		jobDescription?: string | null;
	}
	const { jobID, title, url, company, salary, status, jobDescription }: Props = $props();
</script>

<form
	method="post"
	action="/jobs/new"
	use:enhance
	class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6"
>
	<input type="hidden" class="hidden" value={jobID || ''} name="jobID" />
	<TextInput class="col-span-1 md:col-span-2" id="title" label="Job Title" value={title || ''} />
	<TextInput class="col-span-1" id="company" label="Company" value={company || ''} />
	<Select
		value={status || 'applied'}
		id="status"
		class="col-span-1"
		label="Status"
		options={[
			{ id: 'applied', label: 'Applied' },
			{ id: 'interviewing', label: 'Interviewing' },
			{ id: 'rejected', label: 'Rejected' },
			{ id: 'accepted', label: 'Accepted' },
			{ id: 'offer', label: 'Offer' }
		]}
	/>
	<TextInput class="col-span-1 lg:col-span-2" id="url" label="Job URL" value={url || ''} />
	<TextInput class="col-span-1 lg:col-span-2" id="salary" label="Salary" value={salary || ''} />
	<TextArea
		value={jobDescription || ''}
		cols={4}
		class="col-span-1 md:col-span-2 lg:col-span-4"
		id="jobDescription"
		label="Job Description"
	/>
	{#if jobID}
		<button formaction={`/jobs/${jobID}?/update`} class="btn btn-primary md:col-end-3 lg:col-end-5">
			Update
		</button>
	{:else}
		<button class="btn btn-primary md:col-end-3 lg:col-end-5">Create</button>
	{/if}
</form>
