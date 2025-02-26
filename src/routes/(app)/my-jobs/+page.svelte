<script>
	import { enhance } from '$app/forms';
	import Container from '$lib/components/Container.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import StatusBadge from '$lib/components/StatusBadge.svelte';
	import { TextArea } from 'svelte-input-components';

	const { data } = $props();

	$inspect(data);
</script>

<Container>
	<PageHeader title="My Jobs" />
	<ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
		<li
			class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow flex justify-center items-center"
		>
			<a href="/jobs/new">
				<div class="p-6">
					<h2>Create New Job</h2>
				</div>
			</a>
		</li>
		<li
			class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow flex justify-center items-center"
		>
			<form class="p-1 w-full" method="post" action="?/newNote" use:enhance>
				<TextArea
					id="note"
					label="New Note"
					hideLabel
					class="w-full h-full mt-0"
					placeholder="New Note"
				/>
				<div class="flex justify-end">
					<button class="btn btn-accent my-1 w-full btn-text">Create</button>
				</div>
			</form>
		</li>
		{#each data.jobs || [] as job}
			<li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
				<a href={`/jobs/${job.id}`}>
					<div class="flex w-full items-center justify-between space-x-6 p-6">
						<div class="flex-1 truncate">
							<div class="flex items-center space-x-3">
								<h3 class="truncate text-sm font-medium text-gray-900">{job.title}</h3>
								<StatusBadge status={job.status || ''} />
							</div>
							<p class="mt-1 truncate text-sm text-gray-500">{job.company}</p>
						</div>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</Container>
