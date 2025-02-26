<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Container from '$lib/components/Container.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	const { data } = $props();

	$inspect(data);
</script>

<Container>
	<div class="py-3">
		<Breadcrumbs
			links={[
				{ title: 'Accomplishments', path: '/accomplishments' },
				{ title: data.project?.title || '' }
			]}
		/>
	</div>
	<h2>{data.project?.title}</h2>
	<SvelteMarkdown source={data.project?.description} />
	<SvelteMarkdown source={data.project?.contribution} />
</Container>
