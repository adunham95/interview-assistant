<script lang="ts">
	let { children, className = '' } = $props();
</script>

<div class={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 ${className}`}>
	{@render children()}
</div>
