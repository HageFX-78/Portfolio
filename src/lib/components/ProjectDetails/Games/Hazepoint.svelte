<script lang="ts">
	import BaseDetails from '$lib/components/ProjectDetails/Components/Header.svelte';
	import TextContent from '$lib/components/ProjectDetails/Components/TextContent.svelte';

	import block1 from '$lib/data/DetailsData/Hazepoint/Block1.html?raw';
	import block2 from '$lib/data/DetailsData/Hazepoint/Block2.html?raw';
	import block3 from '$lib/data/DetailsData/Hazepoint/Block3.html?raw';

	import { hazepointProps } from '$lib/data/NJGameData';
</script>

<BaseDetails
	projectLogo={hazepointProps.projectLogo}
	projectVideo={hazepointProps.projectVideo}
	projectItchFrame={hazepointProps.projectItchFrame}
/>
<TextContent text={block1} />

<!-- 	CODE HERE -->
<TextContent text={block2} />

<!-- 	CODE HERE -->
<TextContent text={block3} />

<style>
</style>
