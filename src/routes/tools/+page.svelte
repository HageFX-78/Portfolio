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

<div class="projects-container" in:fly={{ y: 200, duration: 300 }}>
	<div class="page-title">Tools / Side Projects</div>

	<Tabs {tabs} bind:activeTab />

	{#if activeTab === ActiveTab.Tools}
		<div class="card-container">
			<Card
				image={'images/normalgames/shadow/g3.gif'}
				gametitle={'2D-SG'}
				link={'https://github.com/AaronTan1/GPS2Shadow/blob/main/Assets/Scripts/Shadow2DTest/RefreshStaticShadows.cs'}
				gameDescription={'A 3D model to 2D shadow sprite generator made for a mobile 3D game. Generates flat 2D shadows based on an angle on a wall that is interactable as a 2D platformer.'}
				tags={['Unity', 'C#', 'HLSL', 'Editor']}
				onHoverChange={changeBackground}
			/>
			<Card
				image={'images/side/tools/ind.png'}
				gametitle={'InDLib-v0.4'}
				link={'https://github.com/HageFX-78'}
				gameDescription={'A Unity framework with focus on ease of use, generally used for game jams. It includes a simple audio management system, preset UIs, global event system and others to be added. WIP'}
				tags={['Unity', 'C#', 'Tween', 'Editor']}
				onHoverChange={changeBackground}
			/>
			<Card
				image={'images/side/tools/OmensPlugin.png'}
				gametitle={'Roblox Plugin'}
				link={''}
				gameDescription={'A Roblox studio plugin made for in-house development at Omens Animation Studios. It includes a global asset field finder and manager, enum manager (enums are not supported in the engine) and player animation overrider. Not public.'}
				tags={['Lua', 'Roblox Studio', 'Plugin']}
				onHoverChange={changeBackground}
			/>
			<Card
				image={'images/side/tools/userscript.png'}
				gametitle={'Userscripts'}
				link={'https://github.com/HageFX-78'}
				gameDescription={'Mini browser scripts that add or modify websites for the of certain functionality and convenience. You can find some by clicking this which leads to my github page!'}
				tags={['JavaScript', 'UserScript', 'CSS']}
				onHoverChange={changeBackground}
			/>
		</div>
	{/if}
	{#if activeTab === ActiveTab.SideProjects}
		<div class="card-container">
			<Card
				image={'images/side/tools/fumoEngine.png'}
				gametitle={'Fumo Engine'}
				link={'https://github.com/HageFX-78/FumoEngine'}
				gameDescription={'A 2D game engine made in C++ following ECS architecture for a uni assignment. Includes 2D renderer, basic colliision system, input system, basic UI and a simple scene manager. A simple game is made to showcase the features with object pooling.'}
				tags={['C++', 'OpenGL', 'Engine', 'ECS']}
				onHoverChange={changeBackground}
			/>
			<Card
				image={'images/side/tools/lua8.png'}
				gametitle={'Lua Chip 8 Emulator'}
				link={'https://github.com/HageFX-78/LuaChip8'}
				gameDescription={'A Chip8 emulator made in Lua with Love2D framwork. The emulator is capable of running most Chip 8 roms and has passed basic render and opcode tests, flags and input may not be 100% accurate due to structure of implementation but does not largely affect the results.'}
				tags={['Lua', 'Chip8', 'Emulator', 'Love2D']}
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
