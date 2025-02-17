<script>
	import { enhance } from '$app/forms';
	import Container from '$lib/components/Container.svelte';
	import { TextArea, TextInput } from 'svelte-input-components';
</script>

<Container>
	<form
		class="grid grid-cols-1 md:grid-cols-2 gap-4"
		method="post"
		action="?/newProject"
		use:enhance
	>
		<TextInput id="title" label="Project Name" />
		<TextInput id="url" label="Project Link" />
		<TextInput id="company" label="Company" />
		<TextInput id="date" label="Date" type="date" />
		<TextArea class="" id="description" label="Description" />
		<TextArea class="" id="contribution" label="Contribution" />
		<div class="md:col-span-2 flex justify-end">
			<button class="btn btn-primary">Save</button>
		</div>
	</form>
</Container>
