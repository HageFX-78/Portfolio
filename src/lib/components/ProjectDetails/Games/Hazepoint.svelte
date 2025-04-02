<script lang="ts">
	import Header from '$lib/components/ProjectDetails/Components/Header.svelte';
	import TextContent from '$lib/components/ProjectDetails/Components/TextContent.svelte';
	import CodeBlock from '$lib/components/ProjectDetails/Components/CodeBlock.svelte';

	import contentBlock from '$lib/data/DetailsData/Hazepoint/Content.json';
	import { hazepointProps } from '$lib/data/GameData';
	import { onMount } from 'svelte';

	let codeblock1 = '';
	let codeblock2 = '';

	onMount(async () => {
		// Load Markdown lazily
		const [cb1, cb2] = await Promise.all([
			import('$lib/data/DetailsData/Hazepoint/CodeBlock1.md?raw'),
			import('$lib/data/DetailsData/Hazepoint/CodeBlock2.md?raw')
		]);
		codeblock1 = cb1.default;
		codeblock2 = cb2.default;
	});
</script>

<Header data={hazepointProps} />

<TextContent text={contentBlock.block1} />

{#if codeblock1 !== ''}
	<CodeBlock code={codeblock1} />
{/if}

<TextContent text={contentBlock.block2} />

{#if codeblock2 !== ''}
	<CodeBlock code={codeblock2} />
{/if}

<TextContent text={contentBlock.block3} />
