<script lang="ts">
	import BaseDetails from '$lib/components/ProjectDetails/Components/Header.svelte';
	import TextContent from '$lib/components/ProjectDetails/Components/TextContent.svelte';
	import CodeBlock from '$lib/components/ProjectDetails/Components/CodeBlock.svelte';
	import GifBlock from '$lib/components/ProjectDetails/Components/GifBlock.svelte';
	import Loading from '$lib/components/GeneralComponents/Loading.svelte';

	import contentBlock from '$lib/data/DetailsData/GuiltTrip/Content.json';

	import { guiltTripProps } from '$lib/data/GameData';
	import { onMount } from 'svelte';

	let codeblock1 = '';
	let codeblock2 = '';
	let codeblock3 = '';

	let isLoaded = false;

	onMount(async () => {
		// Load Markdown lazily
		const [cb1, cb2, cb3] = await Promise.all([
			import('$lib/data/DetailsData/GuiltTrip/CodeBlock1.md?raw'),
			import('$lib/data/DetailsData/GuiltTrip/CodeBlock2.md?raw'),
			import('$lib/data/DetailsData/GuiltTrip/CodeBlock3.md?raw')
		]);
		codeblock1 = cb1.default;
		codeblock2 = cb2.default;
		codeblock3 = cb3.default;

		isLoaded = true;
	});
</script>

{#if isLoaded}
	<BaseDetails data={guiltTripProps} />

	<TextContent text={contentBlock.block1} />

	<GifBlock title="Battle System" imageUrl="images/normalgames/guilttrip/g2.gif" />

	<TextContent text={contentBlock.block2} />

	<GifBlock title="Dialogue System" imageUrl="images/normalgames/guilttrip/g1.gif" />

	<TextContent text={contentBlock.block3} />

	<CodeBlock code={codeblock1} />

	<TextContent text={contentBlock.block4} />

	<CodeBlock code={codeblock2} />

	<CodeBlock code={codeblock3} />
{:else}
	<Loading />
{/if}
