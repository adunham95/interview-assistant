<script>
	import AppHeader from '$lib/components/AppHeader.svelte';
	let { children, data } = $props();

	$inspect(data);
</script>

<AppHeader firstName={data.user.firstName} lastName={data.user.lastName} />

{@render children()}
