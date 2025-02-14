<script lang="ts">
	interface ToggleProps {
		class?: string;
		label?: string;
		subLabel?: string;
		id: string;
		required?: boolean;
		checked?: boolean;
	}
	let {
		class: className = '',
		label,
		subLabel,
		id,
		required = false,
		checked = false
	}: ToggleProps = $props();
</script>

<div class={className}>
	<div class="flex">
		{#if label}
			<label for={id} class="mr-1 flex flex-grow flex-col">
				<span class="text-sm font-medium leading-6 text-gray-900" id="availability-label">
					{label}
				</span>
				{#if subLabel}
					<span class="text-sm text-gray-500" id="availability-description">
						{subLabel}
					</span>
				{/if}
			</label>
		{/if}
		<div class="flex items-center">
			<label
				for={id}
				class="has-[:checked]:ring-theme-brand relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 has-[:checked]:bg-blue-500"
			>
				<input hidden {id} {required} bind:checked name={id} type="checkbox" class="peer sr-only" />
				<span
					aria-hidden="true"
					class="pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out peer-[:checked]:translate-x-5"
				></span>
			</label>
		</div>
	</div>
</div>
