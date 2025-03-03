<script>
	import Container from '$lib/components/Container.svelte';
	import Note from '$lib/components/Forms/Note.svelte';
</script>

<div class="fixed bottom-0 right-0">
	<div class="h-10 bg-green-500 w-[250px]"></div>
</div>

<Container>
	<div class="flex justify-center">
		<div class=" w-full max-w-[500px] card">
			<div class="card-body">
				<Note />
			</div>
		</div>
	</div>
	<!-- <ContriubutionChart /> -->

	<div class="card bg-sky-100">
		<div class="card-body"></div>
	</div>
</Container>

<div class="h-[10000px]"></div>
