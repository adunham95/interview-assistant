<script lang="ts">
	interface Props {
		title: string;
		data: { label: string; value: string }[];
		onSectionEdit?: () => void;
	}

	const { title, data, onSectionEdit }: Props = $props();
</script>

<div>
	<div class="px-4 sm:px-0 flex items-center">
		<h3 class="text-lg font-semibold text-gray-900">{title}</h3>
		{#if onSectionEdit}
			<button onclick={onSectionEdit} class="btn btn-success btn-text text-sm p-1 ml-1"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class=" size-4"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
					/>
				</svg>
				<span class="sr-only">Edit</span>
			</button>
		{/if}
	</div>
	<div class="mt-3 border-t border-gray-100">
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
