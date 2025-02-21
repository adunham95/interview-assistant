<script>
	import { enhance } from '$app/forms';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Container from '$lib/components/Container.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	const { data } = $props();

	$inspect(data);
</script>

<Container>
	<Breadcrumbs links={[{ title: 'My Jobs', path: '/my-jobs' }, { title: data.job?.title || '' }]} />
	<div class="flex lg:items-center justify-between">
		<div class="min-w-0 flex-1">
			<h2 class="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
				{data.job?.title}
			</h2>

			<div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
				{#if data.job?.company}
					<div class="mt-2 flex items-center text-sm text-gray-500">
						<svg
							class="mr-1.5 size-5 shrink-0 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
						>
							<path
								fill-rule="evenodd"
								d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z"
								clip-rule="evenodd"
							/>
							<path
								d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z"
							/>
						</svg>
						{data.job?.company}
					</div>
				{/if}
				{#if data.job?.salary}
					<div class="mt-2 flex items-center text-sm text-gray-500">
						<svg
							class="mr-1.5 size-5 shrink-0 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
						>
							<path
								d="M10.75 10.818v2.614A3.13 3.13 0 0 0 11.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 0 0-1.138-.432ZM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 0 0-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152Z"
							/>
							<path
								fill-rule="evenodd"
								d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-6a.75.75 0 0 1 .75.75v.316a3.78 3.78 0 0 1 1.653.713c.426.33.744.74.925 1.2a.75.75 0 0 1-1.395.55 1.35 1.35 0 0 0-.447-.563 2.187 2.187 0 0 0-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 1 1-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 1 1 1.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 0 1-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 0 1 1.653-.713V4.75A.75.75 0 0 1 10 4Z"
								clip-rule="evenodd"
							/>
						</svg>
						{data.job?.salary}
					</div>
				{/if}
				{#if data.job?.status}
					<div class="mt-2 flex items-center text-sm text-gray-500">
						<svg
							class="mr-1.5 size-5 shrink-0 text-gray-400"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
						>
							<path
								fill-rule="evenodd"
								d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
								clip-rule="evenodd"
							/>
						</svg>
						{data.job.status}
					</div>
				{/if}
			</div>
		</div>
		<div class="flex lg:ml-4">
			<span class="">
				<a href={`/jobs/${data.job?.id}/interview`} class="btn btn-primary"> Start Interview </a>
			</span>
		</div>
	</div>

	<details class="p-4 [&_svg]:open:-rotate-180">
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
			<div>Job Description</div>
		</summary>
		<div class="pt-2">
			{#if data?.job?.jobDescription}
				<SvelteMarkdown source={data.job?.jobDescription} />
			{:else}
				<p>No Job Description</p>
			{/if}
		</div>
	</details>

	<div class="pt-4">
		<form method="post" action="?/newNote" use:enhance class="relative">
			<div class="rounded-md bg-white border-2 border-surface-1">
				<div class="p-1">
					<input hidden name="jobID" class="hidden" id="jobID" value={data.job?.id} />
					<label for="title" class="sr-only">Title</label>
					<input
						type="text"
						name="title"
						id="title"
						class="block w-full px-3 pt-2.5 text-lg font-medium text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 border-none outline-none"
						placeholder="Title"
					/>
					<label for="note" class="sr-only">Note</label>
					<textarea
						rows="3"
						name="note"
						id="note"
						class="block w-full resize-none px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 border-none outline-none"
						placeholder="Take a note..."
					></textarea>
				</div>
				<div
					class="flex items-center justify-end space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3"
				>
					<div class="shrink-0">
						<button type="submit" class="btn btn-primary">New Note</button>
					</div>
				</div>
			</div>
		</form>
	</div>

	<div class="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
		{#each data.job?.notes || [] as note}
			<div class="col-span-1 rounded-lg bg-white shadow items-center">
				<div class="flex w-full items-center justify-between space-x-6 p-6">
					<div class="flex-1 truncate">
						<h2 class="text-2xl font-bold tracking-tight text-gray-900">{note.title}</h2>
						<p class="mt-1">
							{note.message}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</Container>
