<script lang="ts">
	interface Props {
		title: string;
		data: { label: string; value: string }[];
	}

	const { title, data }: Props = $props();
</script>

<div>
	<div class="px-4 sm:px-0">
		<h3 class="text-lg font-semibold text-gray-900">{title}</h3>
	</div>
	<div class="mt-6 border-t border-gray-100">
		<dl class="divide-y divide-gray-100">
			{#each data as item}
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt class="text-sm/6 font-medium text-gray-900">{item.label}</dt>
					<dd class="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">{item.value}</dd>
				</div>
			{/each}
		</dl>
	</div>
</div>
