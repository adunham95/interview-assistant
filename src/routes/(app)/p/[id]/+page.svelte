<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Container from '$lib/components/Container.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import Time from 'svelte-time';

	const { data } = $props();

	$inspect(data);
</script>

<Container>
	<div class="py-3">
		<Breadcrumbs
			links={[
				{ title: 'Accomplishments', path: '/accomplishments' },
				{ title: data.project?.title || '' }
			]}
		/>
	</div>
	<PageHeader title={data.project?.title}>
		{#snippet details()}
			{#if data.project?.date}
				<div class="flex items-center text-sm text-content-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="mr-1.5 size-5 shrink-0 text-content-2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
						/>
					</svg>

					<Time timestamp={data.project.date} format="MMMM D, YYYY" />
				</div>
			{/if}
			{#if data.project?.company}
				<div class="flex items-center text-sm text-content-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="mr-1.5 size-5 shrink-0 text-content-2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
						/>
					</svg>
					{data.project?.company}
				</div>
			{/if}
			{#if data.project?.url}
				<a href={data.project.url} target="_blank" class="flex items-center text-sm text-content-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="mr-1.5 size-5 shrink-0 text-content-2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
						/>
					</svg>
					Project Link
				</a>
			{/if}
		{/snippet}
		{#snippet actions()}
			<a href={`/p/${data.project?.id}/edit`} class="btn btn-warning">Edit</a>

			<form method="post">
				<button formaction={`/p/${data.project?.id}?/delete`} class="btn btn-error">Delete</button>
			</form>
		{/snippet}
	</PageHeader>
	<div class="h-2"></div>
	<div class="[&_code]:text-wrap space-y-4 divide-y-2 divide-surface-4">
		{#if data.project?.description}
			<div>
				<h3 class="pb-1 font-medium">Description</h3>
				<SvelteMarkdown source={data.project?.description || ''} />
			</div>
		{/if}
		{#if data.project?.contribution}
			<div>
				<h3 class="pt-2 pb-1 font-medium">Contribution</h3>
				<SvelteMarkdown source={data.project?.contribution || ''} />
			</div>
		{/if}
		{#if data.project?.problem}
			<div>
				<h3 class="pt-2 pb-1 font-medium">Problem</h3>
				<SvelteMarkdown source={data.project?.problem || ''} />
			</div>
		{/if}
		{#if data.project?.solution}
			<div>
				<h3 class="pt-2 pb-1 font-medium">Solution</h3>
				<SvelteMarkdown source={data.project?.solution || ''} />
			</div>
		{/if}
	</div>
</Container>
