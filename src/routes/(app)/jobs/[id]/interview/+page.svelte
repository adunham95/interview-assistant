<script lang="ts">
	import { enhance } from '$app/forms';
	import Container from '$lib/components/Container.svelte';
	import NoteForm from '$lib/components/NoteForm.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import type { PageProps } from './$types';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	const { data }: PageProps = $props();
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
			<form method="post" action={`/jobs/${data.job?.id}?/newNote`} use:enhance>
				<NoteForm
					jobID={data.job?.id}
					titlePlaceholder="Round Number/Interview Type"
					notePlaceholder="Type your notes here..."
					ctaText="Save notes"
				/>
			</form>
		</section>
		<!-- Job Description -->
		<section class="card">
			<div class="p-4">
				<h2 class=" font-semibold text-content-1 text-lg">Job Description</h2>
				{#if data.job.jobDescription}
					<div class="md:max-h-[250px] md:overflow-y-scroll">
						<SvelteMarkdown source={data.job?.jobDescription} />
					</div>
				{:else if data?.job.url}
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
			{#each data.job?.notes as note}
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
			<h2 class="font-semibold text-content-1 text-lg mb-2">Projects</h2>
			{#each data?.projects || [] as project}
				<details class="card p-4 [&_svg]:open:-rotate-180">
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
					<div class="pt-2">
						<SvelteMarkdown source={project.description} />
					</div>
				</details>
			{/each}
		</section>
	</div>
</Container>
