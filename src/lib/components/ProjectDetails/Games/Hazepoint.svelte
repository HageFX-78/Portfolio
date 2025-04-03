<script lang="ts">
	import Header from '$lib/components/ProjectDetails/Components/Header.svelte';
	import TextContent from '$lib/components/ProjectDetails/Components/TextContent.svelte';
	import CodeBlock from '$lib/components/ProjectDetails/Components/CodeBlock.svelte';
	import Loading from '$lib/components/GeneralComponents/Loading.svelte';

	import contentBlock from '$lib/data/DetailsData/Hazepoint/Content.json';
	import { hazepointProps } from '$lib/data/GameData';
	import { onMount } from 'svelte';

	let codeblock1 = '';
	let codeblock2 = '';
	let isLoaded = false;

	onMount(async () => {
		// Load Markdown lazily
		const [cb1, cb2] = await Promise.all([
			import('$lib/data/DetailsData/Hazepoint/CodeBlock1.md?raw'),
			import('$lib/data/DetailsData/Hazepoint/CodeBlock2.md?raw')
		]);
		codeblock1 = cb1.default;
		codeblock2 = cb2.default;

		isLoaded = true;
	});
</script>

{#if isLoaded}
	<Header data={hazepointProps} />

	<TextContent text={contentBlock.block1} />

	<CodeBlock code={codeblock1} />

	<TextContent text={contentBlock.block2} />

	<CodeBlock code={codeblock2} />

	<TextContent text={contentBlock.block3} />
{:else}
	<Loading />
{/if}
