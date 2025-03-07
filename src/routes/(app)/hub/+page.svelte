<script>
	import Container from '$lib/components/Container.svelte';
	import Note from '$lib/components/Forms/Note.svelte';

	const { data } = $props();
	$inspect(data);
</script>

<Container className="max-w-4xl grid grid-cols-5 gap-4">
	<div class="card col-span-5">
		<div class="p-4 flex justify-between items-center">
			<h2 class=" text-4xl font-bold">Hello {data.user.firstName}!</h2>
			<div>
				<a href="/resumes" class=" rounded-sm border-2 text-sm p-2"> Resume </a>
			</div>
		</div>
	</div>
	<div class="flex justify-center col-span-2">
		<div class=" w-full max-w-[500px] card">
			<div class="card-body">
				<Note />
			</div>
		</div>
	</div>
</Container>
