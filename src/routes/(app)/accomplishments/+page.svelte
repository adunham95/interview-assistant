<script>
	import Container from '$lib/components/Container.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	const { data } = $props();

	$inspect(data);
</script>

<Container>
	<PageHeader title="Accomplishments & Projects" />
	<ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
		<li
			class="col-span-1 divide-y divide-content-3 rounded-lg bg-surface shadow flex justify-center items-center"
		>
			<a href="/p/new">
				<div class="p-6">
					<h2>Create New Project</h2>
				</div>
			</a>
		</li>
		{#each data.projects || [] as project}
			<li class="col-span-1 divide-y divide-content-3 rounded-lg bg-surface shadow">
				<a href={`/p/${project.id}`}>
					<div class="flex w-full items-center justify-between space-x-6 p-6">
						<div class="flex-1 truncate">
							<div class="flex items-center space-x-3">
								<h3 class="truncate text-base font-medium text-content">{project.title}</h3>
							</div>
							{#if project.company}
								<p class="truncate text-xs text-content-2">{project.company}</p>
							{/if}
							<p class="mt-1 truncate text-sm text-content-1">{project.description}</p>
						</div>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</Container>
