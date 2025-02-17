<script>
	import Container from '$lib/components/Container.svelte';
	const { data } = $props();

	$inspect(data);
</script>

<Container>
	<ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
		<li
			class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow flex justify-center items-center"
		>
			<a href="/p/new">
				<div class="p-6">
					<h2>Create New Project</h2>
				</div>
			</a>
		</li>
		{#each data.projects || [] as project}
			<li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
				<a href={`/p/${project.id}`}>
					<div class="flex w-full items-center justify-between space-x-6 p-6">
						<div class="flex-1 truncate">
							<div class="flex items-center space-x-3">
								<h3 class="truncate text-sm font-medium text-gray-900">{project.title}</h3>
							</div>
							<p class="mt-1 truncate text-sm text-gray-500">{project.description}</p>
						</div>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</Container>
