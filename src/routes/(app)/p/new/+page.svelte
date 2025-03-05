<script>
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Container from '$lib/components/Container.svelte';
	import Project from '$lib/components/Forms/Project.svelte';
</script>

<Container>
	<div class="py-3">
		<Breadcrumbs
			links={[
				{ title: 'Accomplishments', path: '/accomplishments' },
				{ title: 'New Project Project' }
			]}
		/>
	</div>
	<Project />
</Container>
