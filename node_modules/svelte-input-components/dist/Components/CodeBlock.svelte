<script lang="ts">
	import Prism from 'prismjs';
	import 'prism-svelte';

	let { code }: { code: string } = $props();

	const html = Prism.highlight(code, Prism.languages.svelte, 'svelte');
</script>

<svelte:head>
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.22.0/themes/prism.min.css"
		rel="stylesheet"
	/>
</svelte:head>

<pre class="">
    <code class="language-svelte whitespace-pre-wrap">
        {@html html}
    </code>
</pre>
