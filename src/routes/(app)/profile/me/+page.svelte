<script>
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Container from '$lib/components/Container.svelte';
	import DetailsList from '$lib/components/DetailsList.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import dayjs from 'dayjs';

	const { data } = $props();

	$inspect(data);
</script>

<Container>
	<div class="py-3">
		<Breadcrumbs links={[{ title: 'Profile' }]} />
	</div>
	<PageHeader title="My Profile" />
	<div class="pt-4 space-y-3">
		<DetailsList
			title="Account Details"
			data={[
				{ label: 'First Name', value: data.user.firstName || '' },
				{ label: 'Last Name', value: data.user.lastName || '' },
				{ label: 'Username', value: data.user.username || '' },
				{ label: 'Account Since', value: dayjs(data.user.createdAt).format('MMMM D, YYYY') }
			]}
		/>
		<DetailsList
			title="Profile Details"
			data={[{ label: 'Current Job Title', value: 'Lead Engineer' }]}
		/>
	</div>
</Container>
