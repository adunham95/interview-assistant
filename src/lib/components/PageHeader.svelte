<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title?: string;
		details?: Snippet;
		actions?: Snippet;
	}

	const { title = '', details, actions }: Props = $props();
</script>

<div class="flex lg:items-center justify-between">
	<div class="min-w-0 flex-1">
		<h2 class="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
			{title}
		</h2>

		<div class="mt-2 flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6">
			{#if details}
				{@render details()}
			{/if}
		</div>
	</div>
	<div class="flex gap-1 lg:ml-4">
		{#if actions}
			{@render actions()}
		{/if}
	</div>
</div>
