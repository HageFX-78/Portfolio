<script lang="ts">
	import BaseDetails from '$lib/components/ProjectDetails/Components/Header.svelte';
	import TextContent from '$lib/components/ProjectDetails/Components/TextContent.svelte';
	import CodeBlock from '$lib/components/ProjectDetails/Components/CodeBlock.svelte';
	import GifBlock from '$lib/components/ProjectDetails/Components/GifBlock.svelte';
	import Loading from '$lib/components/GeneralComponents/Loading.svelte';

	import contentBlock from '$lib/data/DetailsData/Shadow/Content.json';

	import { shadowProps } from '$lib/data/GameData';
	import { onMount } from 'svelte';

	let codeblock1 = '';
	let codeblock2 = '';
	let codeblock3 = '';
	let codeblock4 = '';

	let isLoaded = false;

	onMount(async () => {
		// Load Markdown lazily
		const [cb1, cb2, cb3, cb4] = await Promise.all([
			import('$lib/data/DetailsData/Shadow/CodeBlock1.md?raw'),
			import('$lib/data/DetailsData/Shadow/CodeBlock2.md?raw'),
			import('$lib/data/DetailsData/Shadow/CodeBlock3.md?raw'),
			import('$lib/data/DetailsData/Shadow/CodeBlock4.md?raw'),
			import('$lib/data/DetailsData/TEST_FILLER.md?raw')
		]);
		codeblock1 = cb1.default;
		codeblock2 = cb2.default;
		codeblock3 = cb3.default;
		codeblock4 = cb4.default;

		// isLoaded = true;
	});
</script>

{#if isLoaded}
	<BaseDetails data={shadowProps} />

	<TextContent text={contentBlock.block1} />

	<GifBlock title="Shadow Generation Showcase" imageUrl="images/normalgames/shadow/g3.gif" />

	<TextContent text={contentBlock.block2} />

	<CodeBlock code={codeblock1} />

	<TextContent text={contentBlock.block3} />

	<CodeBlock code={codeblock2} />

	<TextContent text={contentBlock.block4} />

	<GifBlock title="Week 2 Concept Showcase" imageUrl="images/normalgames/shadow/g1.gif" />

	<TextContent text={contentBlock.block5} />

	<GifBlock
		title="Light disabling enemy specific colliders and reenabling out of range"
		imageUrl="images/normalgames/shadow/g2.gif"
	/>

	<TextContent text={contentBlock.block6} />

	<CodeBlock code={codeblock3} />

	<TextContent text={contentBlock.block7} />

	<CodeBlock code={codeblock4} />
{:else}
	<Loading />
{/if}
