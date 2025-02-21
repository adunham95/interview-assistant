<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Container from '$lib/components/Container.svelte';

	const { data } = $props();

	$inspect(data);
</script>

<Container>
	<Breadcrumbs
		links={[
			{ title: 'Accomplishments', path: '/accomplishments' },
			{ title: data.project?.title || '' }
		]}
	/>
	<h2>{data.project?.title}</h2>
</Container>
