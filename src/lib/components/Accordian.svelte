<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		actions?: Snippet;
		children: Snippet;
		childrenWrapperClassName?: string;
	}

	const { children, title, actions, childrenWrapperClassName = '' }: Props = $props();
</script>

<details class="[&_svg]:open:-rotate-180">
	<summary class="flex cursor-pointer list-none items-center gap-4 btn btn-text btn-primary">
		<div>
			<svg
				class="rotate-0 transform transition-all duration-300"
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
		<div>{title}</div>
		{@render actions?.()}
	</summary>
	<div class={`p-2 ${childrenWrapperClassName}`}>
		{@render children()}
	</div>
</details>
