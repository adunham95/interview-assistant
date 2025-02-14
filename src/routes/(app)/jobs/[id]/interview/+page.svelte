<script>
	import Container from '$lib/components/Container.svelte';
	import NoteForm from '$lib/components/NoteForm.svelte';
</script>

<Container>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<section>
			<NoteForm
				titlePlaceholder="Round Number/Interview Type"
				notePlaceholder="Type your notes here..."
				ctaText="Save notes"
			/>
		</section>
		<section class="card">
			<div class="p-4">
				<h2 class=" font-semibold text-content-1 text-lg">Job Description</h2>
				<p>
					We are seeking an experienced Senior Software Engineer to join our dynamic team. The ideal
					candidate will have strong expertise in full-stack development, with particular emphasis
					on: 5+ years of experience with modern JavaScript frameworks Strong background in system
					design and architecture Experience with cloud services (AWS/Azure/GCP) Track record of
					leading technical initiatives
				</p>
			</div>
		</section>
		<section>
			<h2 class="font-semibold text-content-1 text-lg mb-2">Previous Notes</h2>
			<div class="card">
				<div class="p-4">
					<h2 class=" font-semibold text-content-1 text-lg">Round 1</h2>
					<p>Salary</p>
				</div>
			</div>
		</section>
		<section>
			<h2 class="font-semibold text-content-1 text-lg mb-2">Projects</h2>
			<details class="card p-4 [&_svg]:open:-rotate-180">
				<summary class="flex cursor-pointer list-none items-center gap-4">
					<div>
						<!-- notice here, we added our own triangle/arrow svg -->
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
					<div>Open this box</div>
				</summary>
				<div class="pt-2">
					Ran a really large multi media company with no experince and made all the money
				</div>
			</details>
		</section>
	</div>
</Container>
