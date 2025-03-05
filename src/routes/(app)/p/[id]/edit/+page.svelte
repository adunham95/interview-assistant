<script>
	import Container from '$lib/components/Container.svelte';
	import Project from '$lib/components/Forms/Project.svelte';

	const { data } = $props();

	$inspect(data);
</script>

<Container>
	<Project projectID={data.project.id} {...data.project} />
</Container>
