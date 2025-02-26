<script>
	import Container from '$lib/components/Container.svelte';
	import DetailsList from '$lib/components/DetailsList.svelte';
</script>

<Container>
	<DetailsList
		title="Profile Details"
		data={[
			{ label: 'First Name', value: 'John' },
			{ label: 'Last Name', value: 'Smith' },
			{ label: 'Email', value: 'jsmith@test.com' },
			{ label: 'Job Title', value: 'QA Tester' }
		]}
	/>
</Container>
