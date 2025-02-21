<script lang="ts">
	interface IProps {
		links: { title: string; path?: string }[];
	}

	const { links }: IProps = $props();
</script>

<nav class="flex" aria-label="Breadcrumb">
	<ol role="list" class="flex items-center space-x-4">
		{#each links as link, index}
			<li>
				<div class="flex items-center">
					{#if index > 0}
						<svg
							class="size-5 shrink-0 text-content-2"
							fill="currentColor"
							viewBox="0 0 20 20"
							aria-hidden="true"
						>
							<path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
						</svg>
					{/if}
					{#if link.path}
						<a
							href={link.path}
							class={`${index > 0 && 'ml-4'} text-sm font-medium text-content-2 hover:text-content-1`}
						>
							{link.title}
						</a>
					{:else}
						<p class={`${index > 0 && 'ml-4'} cursor-auto text-sm font-medium text-content-2 `}>
							{link.title}
						</p>
					{/if}
				</div>
			</li>
		{/each}
	</ol>
</nav>
