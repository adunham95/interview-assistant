<script>
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Container from '$lib/components/Container.svelte';
	import Job from '$lib/components/Forms/Job.svelte';

	const { data } = $props();
	$inspect(data);
</script>

<Container>
	<div class="py-3">
		<Breadcrumbs
			links={[
				{ title: 'My Jobs', path: '/my-jobs' },
				{ title: data.job?.title || '', path: `/jobs/${data.job?.id}` },
				{ title: 'Edit Job' }
			]}
		/>
	</div>
	<Job jobID={data.job?.id} {...data.job} />
</Container>
