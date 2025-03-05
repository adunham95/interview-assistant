<script>
	import { enhance } from '$app/forms';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Container from '$lib/components/Container.svelte';
	import Job from '$lib/components/Forms/Job.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { Select, TextArea, TextInput } from 'svelte-input-components';
</script>

<Container>
	<div class="py-3">
		<Breadcrumbs links={[{ title: 'My Jobs', path: '/my-jobs' }, { title: 'New Job' }]} />
	</div>
	<PageHeader title="New Job" />
	<Job />
</Container>
