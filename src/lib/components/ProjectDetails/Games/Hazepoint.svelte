<script lang="ts">
	import BaseDetails from '$lib/components/ProjectDetails/Components/Header.svelte';
	import TextContent from '$lib/components/ProjectDetails/Components/TextContent.svelte';

	import block1 from '$lib/data/DetailsData/Hazepoint/Block1.html?raw';
	import block2 from '$lib/data/DetailsData/Hazepoint/Block2.html?raw';
	import block3 from '$lib/data/DetailsData/Hazepoint/Block3.html?raw';

	import codeblock1 from '$lib/data/DetailsData/Hazepoint/CodeBlock1.cpp?raw';
	import codeblock2 from '$lib/data/DetailsData/Hazepoint/CodeBlock2.cpp?raw';

	import { hazepointProps } from '$lib/data/GameData';
	import CodeBlock from '../Components/CodeBlock.svelte';
</script>

<BaseDetails
	projectLogo={hazepointProps.projectLogo}
	projectVideo={hazepointProps.projectVideo}
	projectItchLink={hazepointProps.projectItchLink}
	projectBackdrop={hazepointProps.projectBackdrop}
/>

<TextContent text={block1} />

<CodeBlock code={codeblock1} />

<TextContent text={block2} />

<CodeBlock code={codeblock2} />

<TextContent text={block3} />

<style>
</style>
