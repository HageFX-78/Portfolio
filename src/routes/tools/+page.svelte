<script lang="ts">
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';

	import Divider from '$lib/components/Projects/TitleDivider.svelte';
	import Card from '$lib/components/Tools/Card.svelte';
	import Tabs from '$lib/components/Projects/Tabs.svelte';

	const bgContext = getContext<{ set: (image: string) => void }>('backgroundImage');

	function changeBackground(newImage: string) {
		bgContext.set(newImage);
	}

	const ActiveTab = {
		Tools: 0,
		SideProjects: 1
	};

	let activeTab: (typeof ActiveTab)[keyof typeof ActiveTab] = ActiveTab.Tools;

	const tabs = [
		{ project: ActiveTab.Tools, tabname: 'Tools' },
		{ project: ActiveTab.SideProjects, tabname: 'Side Projects' }
	];
</script>

<div
	class="projects-container"
	in:fly={{ y: 200, duration: 400 }}
	out:fly={{ y: 200, duration: 200 }}
>
	<div class="page-title">Tools / Side Projects</div>

	<Tabs {tabs} bind:activeTab />

	{#if activeTab === ActiveTab.Tools}
		<div
			class="card-container"
			in:fly={{ x: 200, duration: 600 }}
			out:fly={{ x: 200, duration: 100 }}
		>
			<Card
				image={'images/normalgames/shadow/g3.gif'}
				gametitle={'2D-SG'}
				link={'https://google.com'}
				gameDescription={'A 3D model to 2D shadow sprite generator made for a mobile 3D game. Generates flat 2D shadows based on an angle on a wall that is interactable as a 2D platformer.'}
				tags={['Unity', 'C#', 'HLSL']}
				onHoverChange={changeBackground}
			/>
			<Card
				image={'images/general/raymoo.png'}
				gametitle={'InD Framework'}
				link={'https://google.com'}
				gameDescription={'A Unity framework with focus on ease of use, generally used for game jams. It includes a simple audio management system, preset UIs, global event system and others to be added.'}
				tags={['Unity', 'C#', 'Tween']}
				onHoverChange={changeBackground}
			/>
			<Card
				image={'images/side/tools/OmensPlugin.png'}
				gametitle={'Omens Plugin'}
				link={'https://google.com'}
				gameDescription={'A Roblox studio plugin made for in-house development at Omens Animation Studios. It includes a global asset field finder and manager, enum manager (enums are not supported in the engine) and player animation overrider.'}
				tags={['Lua', 'Roblox Studio', 'Plugin']}
				onHoverChange={changeBackground}
			/>
		</div>
	{/if}
	{#if activeTab === ActiveTab.SideProjects}
		<div
			class="card-container"
			in:fly={{ x: -200, duration: 600 }}
			out:fly={{ x: -200, duration: 100 }}
		>
			<Card
				image={'images/normalgames/shadow/g3.gif'}
				gametitle={'2D-SSG'}
				link={'https://google.com'}
				gameDescription={'A 3D model to 2D spite generator made for a mobile 3D game. Generates flat 2D shadows based on an angle on a wall that is interactable as a 2D platformer.'}
				tags={['Unity', 'C#', 'HLSL']}
				onHoverChange={changeBackground}
			/>
		</div>
	{/if}
</div>

<style>
	.projects-container {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		height: 100%;
		gap: 30px;
		margin: 0 10%;
		overflow-y: scroll;
		overflow-x: hidden;
		box-sizing: border-box;

		/* background-color: #0800ff; */
	}

	.page-title {
		font-size: 2rem;
		font-weight: bold;
		/* margin-bottom: 20px; Adds spacing between title and container */
		text-align: center;
	}

	.card-container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 40px;
		width: 80%;
		height: auto;
		padding: 20px 0;
	}
</style>
