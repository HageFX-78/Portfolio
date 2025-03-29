<script lang="ts">
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';
	import GameBlock from '$lib/components/Projects/Game.svelte';
	import Tabs from '$lib/components/Projects/Tabs.svelte';
	import ScrollButtons from '$lib/components/Visual/ScrollButtons.svelte';

	const bgContext = getContext<{ set: (image: string) => void }>('backgroundImage');

	function changeBackground(newImage: string) {
		bgContext.set(newImage); // Update layout's background
	}

	const ActiveTab = {
		Normal: 0,
		Jam: 1
	};
	const tabs = [
		{ project: ActiveTab.Normal, tabname: 'Non-Jam Games' },
		{ project: ActiveTab.Jam, tabname: 'Jam Games' }
	];

	let activeTab: (typeof ActiveTab)[keyof typeof ActiveTab] = ActiveTab.Normal;
</script>

<div
	class="projects-container"
	in:fly={{ y: 200, duration: 400 }}
	out:fly={{ y: 200, duration: 200 }}
>
	<div class="page-title">Game Projects</div>
	<!-- <Divider width="50%" /> -->

	<Tabs {tabs} bind:activeTab />

	{#if activeTab === ActiveTab.Normal}
		<div
			class="game-container"
			in:fly={{ x: -200, duration: 600 }}
			out:fly={{ x: -200, duration: 100 }}
		>
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
	{:else if activeTab === ActiveTab.Jam}
		<div
			class="game-container"
			in:fly={{ x: 200, duration: 600 }}
			out:fly={{ x: 200, duration: 100 }}
		>
			<GameBlock
				gametitle="Guilt Trip"
				image="images/normalgames/guilttrip/gt1.png"
				backimage="images/normalgames/guilttrip/g1.gif"
				summary="This is a summary of the project"
				tags={['Unity', 'C#', 'Group']}
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
			<GameBlock
				gametitle="Guilt Trip"
				image="images/normalgames/guilttrip/gt1.png"
				backimage="images/normalgames/guilttrip/g1.gif"
				summary="This is a summary of the project"
				tags={['Unity', 'C#', 'Group']}
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
			<GameBlock
				gametitle="Guilt Trip"
				image="images/normalgames/guilttrip/gt1.png"
				backimage="images/normalgames/guilttrip/g1.gif"
				summary="This is a summary of the project"
				tags={['Unity', 'C#', 'Group']}
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
			<GameBlock
				gametitle="Guilt Trip"
				image="images/normalgames/guilttrip/gt1.png"
				backimage="images/normalgames/guilttrip/g1.gif"
				summary="This is a summary of the project"
				tags={['Unity', 'C#', 'Group']}
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
	{/if}
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
		overflow-y: auto;
		overflow-x: hidden;
		box-sizing: border-box;

		/* max-height: 500px; */
	}
	.game-container {
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		gap: 30px;
		padding-bottom: 100px;
		/* overflow-y: auto; */
		box-sizing: border-box;
	}
</style>
