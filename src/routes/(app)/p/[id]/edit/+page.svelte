<script>
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Container from '$lib/components/Container.svelte';
	import Project from '$lib/components/Forms/Project.svelte';

	const { data } = $props();

	$inspect(data);
</script>

<Container className="pb-3">
	<div class="py-3">
		<Breadcrumbs
			links={[
				{ title: 'Accomplishments', path: '/accomplishments' },
				{ title: data.project?.title || '', path: `/p/${data.project.id}` },
				{ title: 'Edit Project' }
			]}
		/>
	</div>
	<Project projectID={data.project.id} {...data.project} />
</Container>
