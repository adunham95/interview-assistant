<script lang="ts">
	import { enhance } from '$app/forms';
	import Container from '$lib/components/Container.svelte';
	import NoteForm from '$lib/components/NoteForm.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
	$inspect(data);
</script>

<Container>
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
				{#if data?.job.url}
					<a class="text-info underline cursor-pointer" target="_blank" href={data.job?.url}
						>Job Link</a
					>
				{/if}
				<div class="max-h-[250px] overflow-y-scroll">
					<SvelteMarkdown source={data.job?.jobDescription} />
				</div>
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
					<div>Led a Successful Product Launch</div>
				</summary>
				<div class="pt-2">
					<p>
						Managed the development and launch of a new web app, exceeding user acquisition goals by
						30% in the first month.
					</p>
				</div>
			</details>
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
					<div>E-commerce Optimization Project</div>
				</summary>
				<div class="pt-2">
					<p>
						Revamped an online store’s checkout process, leading to a 15% reduction in cart
						abandonment.
					</p>
				</div>
			</details>
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
					<div>Resolved Major Customer Issue</div>
				</summary>
				<div class="pt-2">
					<p>
						Designed a streamlined support process that improved customer satisfaction ratings by
						40%.
					</p>
				</div>
			</details>
		</section>
	</div>
</Container>
