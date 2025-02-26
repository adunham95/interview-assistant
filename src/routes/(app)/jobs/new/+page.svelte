<script>
	import { enhance } from '$app/forms';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Container from '$lib/components/Container.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { Select, TextArea, TextInput } from 'svelte-input-components';
</script>

<Container>
	<div class="py-3">
		<Breadcrumbs links={[{ title: 'My Jobs', path: '/my-jobs' }, { title: 'New Job' }]} />
	</div>
	<PageHeader title="New Job" />
	<form
		method="post"
		action="?/create"
		use:enhance
		class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6"
	>
		<TextInput class="col-span-1 md:col-span-2" id="title" label="Job Title" />
		<TextInput class="col-span-1" id="company" label="Company" />
		<Select
			id="status"
			class="col-span-1"
			label="Status"
			options={[
				{ id: 'applied', label: 'Applied' },
				{ id: 'interviewing', label: 'Interviewing' },
				{ id: 'rejected', label: 'Rejected' }
			]}
		/>
		<TextInput class="col-span-1 lg:col-span-2" id="url" label="Job URL" />
		<TextInput class="col-span-1 lg:col-span-2" id="salary" label="Salary" />
		<TextArea
			cols={4}
			class="col-span-1 md:col-span-2 lg:col-span-4"
			id="jobDescription"
			label="Job Description"
		/>
		<button class="btn btn-primary md:col-end-3 lg:col-end-5">Create</button>
	</form>
</Container>
