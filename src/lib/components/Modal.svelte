<script>
	let { showModal = $bindable(), header = null, children, onClose = () => null } = $props();

	let dialog = $state(); // HTMLDialogElement

	$effect(() => {
		if (showModal) dialog.showModal();
		if (!showModal) dialog.close();
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
	class="mt-8 rounded-xl shadow-3xl backdrop:bg-black/25"
	bind:this={dialog}
	onclose={() => {
		showModal = false;
		onClose();
	}}
	onclick={(e) => {
		if (e.target === dialog) {
			dialog.close();
			onClose();
		}
	}}
>
	<div>
		{@render header?.()}
		<hr />
		{@render children?.()}
		<hr />
	</div>
</dialog>
