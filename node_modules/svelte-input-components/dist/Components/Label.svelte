<script lang="ts">
	export interface LabelProps {
		class?: string;
		label: string;
		id: string;
		labelType?: 'legend' | 'label';
		hideLabel?: boolean;
	}
	let {
		class: className = '',
		label,
		id,
		labelType = 'label',
		hideLabel = false
	}: LabelProps = $props();
</script>

{#if labelType === 'label'}
	<label
		for={id}
		class={`block text-sm font-medium leading-6 text-gray-700 ${hideLabel ? 'sr-only' : ''} ${className}`}
		>{label}</label
	>
{:else if labelType === 'legend'}
	<legend
		class={`block text-sm font-medium leading-6 text-gray-700 ${hideLabel ? 'sr-only' : ''} ${className}`}
		>{label}</legend
	>
{/if}
