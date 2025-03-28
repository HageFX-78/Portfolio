<script lang="ts">
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';

	import Divider from '$lib/components/Projects/TitleDivider.svelte';
	import Card from '$lib/components/Tools/Card.svelte';
	import Arrow from '$lib/components/Visual/ArrowSelector.svelte';
	import Gear from '$lib/components/Visual/Gear.svelte';
	import { Direction } from '$lib/components/Types/Direction';
	const bgContext = getContext<{ set: (image: string) => void }>('backgroundImage');

	function changeBackground(newImage: string) {
		bgContext.set(newImage);
	}

	const ActiveTab = {
		SideProjects: 0,
		Tools: 1
	};

	let activeTab: (typeof ActiveTab)[keyof typeof ActiveTab] = ActiveTab.SideProjects;

	function changeTab(tab: (typeof ActiveTab)[keyof typeof ActiveTab]) {
		activeTab = tab;
	}
</script>

<div
	class="projects-container"
	in:fly={{ y: 200, duration: 400 }}
	out:fly={{ y: 200, duration: 200 }}
>
	<div class="page-title">Tools / Side Projects</div>
	<!-- <Divider width="60%" /> -->
	<div class="tab-selector noselect">
		<button
			class="tab"
			on:click={() => changeTab(ActiveTab.SideProjects)}
			class:active={activeTab === ActiveTab.SideProjects}
		>
			Tools
			{#if activeTab === ActiveTab.SideProjects}
				<Arrow direction={Direction.LEFT} isDark={true} size="15px" />
			{/if}
		</button>
		<button
			class="tab"
			on:click={() => changeTab(ActiveTab.Tools)}
			class:active={activeTab === ActiveTab.Tools}
		>
			Side Projects
			{#if activeTab === ActiveTab.Tools}
				<Arrow direction={Direction.LEFT} isDark={true} size="15px" />
			{/if}
		</button>
	</div>

	<div class="card-container">
		<Card
			image={'images/normalgames/shadow/g3.gif'}
			gametitle={'2DSG'}
			link={'https://google.com'}
			gameDescription={'A 3D model to 2D spite generator made for a mobile 3D game. Generates flat 2D shadows based on an angle on a wall that is interactable as a 2D platformer.'}
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
	</div>
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
		overflow-y: auto;
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

	.tab-selector {
		display: flex;
		width: 80%;
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
	.tab {
		flex: 1; /* Makes both tabs equally take up full width */
		padding: 10px 0;
		text-align: center;
		cursor: pointer;
		font-size: 20px;
		color: white;
		background: black;
		border: 2px solid transparent;
		transition: background 0.2s ease-in-out;
	}

	.tab:hover {
		border: 2px solid white;
		background: rgba(255, 255, 255, 0.1);
	}

	.tab.active {
		border: 2px solid white;
		background: white;
		color: black;
		font-weight: bold;
	}
</style>
