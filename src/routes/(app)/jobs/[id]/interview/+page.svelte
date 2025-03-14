<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Note from '$lib/components/Forms/Note.svelte';

	let { data } = $props();
	$inspect(data);
</script>

<Container>
	<div class="py-3">
		<Breadcrumbs
			links={[
				{ title: 'My Jobs', path: '/my-jobs' },
				{ title: data.job?.title || '', path: `/jobs/${data.job?.id}` },
				{ title: 'Interview' }
			]}
		/>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<!-- New Note -->
		<section>
			<Note
				jobID={data?.job?.id}
				titlePlaceholder="Round Number/Interview Type"
				notePlaceholder="Type your notes here..."
				onSuccess={(note) => {
					if (data.job) {
						data = { ...data, job: { ...data?.job, notes: [...(data.job?.notes || []), note] } };
					}
				}}
			/>
		</section>
		<!-- Job Description -->
		<section class="card">
			<div class="p-4 [&_code]:text-wrap">
				<h2 class=" font-semibold text-content-1 text-lg">Job Description</h2>
				{#if data.job?.jobDescription}
					<div class="md:max-h-[250px] md:overflow-y-scroll">
						<SvelteMarkdown source={data.job?.jobDescription} />
					</div>
				{:else if data.job?.url}
					<a class="text-info underline cursor-pointer" target="_blank" href={data.job?.url}
						>Job Link</a
					>
				{:else}
					<p>No Job Description</p>
				{/if}
			</div>
		</section>

		<!-- Previous Notes -->
		<section class=" space-y-2">
			<h2 class="font-semibold text-content-1 text-lg mb-2">Previous Notes</h2>
			{#each data.job?.notes || [] as note}
				<div class="card">
					<div class="p-4">
						<h2 class=" font-semibold text-content-1 text-lg">{note.title}</h2>
						<p>{note.message}</p>
					</div>
				</div>
			{/each}
		</section>
		<!-- Projects -->
		<section class=" space-y-2">
			<h2 class="font-semibold text-content-1 text-lg mb-2">Projects & Achievements</h2>
			<div class="max-h-[375px] overflow-y-auto">
				{#each data?.projects || [] as project}
					<details class="card p-4 [&_svg]:open:-rotate-180 mb-1">
						<summary class="flex cursor-pointer list-none items-center gap-4">
							<div>
								<svg
									class="rotate-0 transform text-blue-700 transition-all duration-300"
									fill="none"
									height="20"
									width="20"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
								>
									<polyline points="6 9 12 15 18 9"></polyline>
								</svg>
							</div>
							<div>{project.title}</div>
						</summary>
						<div class="[&_code]:text-wrap space-y-4 divide-y-2 divide-surface-4 pt-2">
							{#if project?.description}
								<div>
									<h3 class="pb-1 font-medium">Description</h3>
									<SvelteMarkdown source={project?.description || ''} />
								</div>
							{/if}
							{#if project?.contribution}
								<div>
									<h3 class="pt-2 pb-1 font-medium">Contribution</h3>
									<SvelteMarkdown source={project?.contribution || ''} />
								</div>
							{/if}
							{#if project?.problem}
								<div>
									<h3 class="pt-2 pb-1 font-medium">Problem</h3>
									<SvelteMarkdown source={project?.problem || ''} />
								</div>
							{/if}
							{#if project?.solution}
								<div>
									<h3 class="pt-2 pb-1 font-medium">Solution</h3>
									<SvelteMarkdown source={project?.solution || ''} />
								</div>
							{/if}
						</div>
					</details>
				{/each}
			</div>
		</section>
	</div>
</Container>
