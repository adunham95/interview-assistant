<script lang="ts">
	export let contributions = Array.from({ length: 52 * 7 }, () => Math.floor(Math.random() * 21));

	const getColor = (count: number) => {
		if (count > 20) return 'bg-green-700';
		if (count > 10) return 'bg-green-500';
		if (count > 5) return 'bg-green-300';
		if (count > 0) return 'bg-green-100';
		return 'bg-gray-200';
	};
</script>

<div class="grid grid-cols-52 gap-1 overflow-auto p-2">
	{#each Array(52) as _, weekIndex}
		<div class="grid grid-rows-7 gap-1">
			{#each Array(7) as _, dayIndex}
				{#if weekIndex * 7 + dayIndex < contributions.length}
					<div
						class="w-4 h-4 rounded-sm {getColor(contributions[weekIndex * 7 + dayIndex])}"
						title="{contributions[weekIndex * 7 + dayIndex]} contributions"
					></div>
				{/if}
			{/each}
		</div>
	{/each}
</div>
