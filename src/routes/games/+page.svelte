<script lang="ts">
	import { getContext } from 'svelte';
	import GameBlock from '$lib/components/Projects/Game.svelte';
	import Divider from '$lib/components/Projects/TitleDivider.svelte';

	const bgContext = getContext<{ set: (image: string) => void }>('backgroundImage');

	function changeBackground(newImage: string) {
		bgContext.set(newImage); // Update layout's background
	}
</script>

<div class="projects-container">
	<h1 class="page-title">Game Projects</h1>
	<Divider width="60%" />

	<GameBlock
		gametitle="Hazepoint"
		image="images/normalgames/hazepoint/tn.png"
		backimage="images/normalgames/hazepoint/promotional_art_nologo.png"
		summary="This is a summary of the project"
		tags={['Unreal 5', 'C++', 'Solo']}
		onHover={changeBackground}
	/>
	<GameBlock
		gametitle="Shadow"
		image="images/normalgames/shadow/shadow1.png"
		backimage="images/normalgames/shadow/g2.gif"
		summary="This is a summary of the project"
		tags={['Unity', 'C#', 'Group', 'Tools']}
		onHover={changeBackground}
	/>
	<GameBlock
		gametitle="Guilt Trip"
		image="images/normalgames/guilttrip/gt1.png"
		backimage="images/normalgames/guilttrip/g1.gif"
		summary="This is a summary of the project"
		tags={['Unity', 'C#', 'Group']}
		onHover={changeBackground}
	/>
</div>

<style>
	.projects-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		height: 100%;
		gap: 30px;
		margin: 0 10%;
		padding-bottom: 50px;
		overflow-y: auto;
		box-sizing: border-box;
	}
	.projects-container h1 {
		font-size: 50px;
	}
</style>
