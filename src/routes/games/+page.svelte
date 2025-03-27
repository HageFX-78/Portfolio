<script lang="ts">
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';
	import GameBlock from '$lib/components/Projects/Game.svelte';
	import Divider from '$lib/components/Projects/TitleDivider.svelte';
	import Arrow from '$lib/components/Visual/ArrowSelector.svelte';
	import { Direction } from '$lib/components/Types/Direction';

	const bgContext = getContext<{ set: (image: string) => void }>('backgroundImage');

	function changeBackground(newImage: string) {
		bgContext.set(newImage); // Update layout's background
	}

	const ActiveTab = {
		Normal: 0,
		Jam: 1
	};

	let activeTab: (typeof ActiveTab)[keyof typeof ActiveTab] = ActiveTab.Normal;

	function changeTab(tab: (typeof ActiveTab)[keyof typeof ActiveTab]) {
		activeTab = tab;
	}
</script>

<div class="projects-container">
	<div class="page-title">Game Projects</div>
	<!-- <Divider width="50%" /> -->
	<div class="tab-selector noselect">
		<button
			class="tab"
			on:click={() => changeTab(ActiveTab.Normal)}
			type="button"
			aria-pressed="true"
			class:active={activeTab === ActiveTab.Normal}
		>
			Normal Games
			{#if activeTab === ActiveTab.Normal}
				<Arrow direction={Direction.LEFT} isDark={true} size="15px" />
			{/if}
		</button>
		<button
			class="tab"
			on:click={() => changeTab(ActiveTab.Jam)}
			type="button"
			aria-pressed="false"
			class:active={activeTab === ActiveTab.Jam}
		>
			Jam Games
			{#if activeTab === ActiveTab.Jam}
				<Arrow direction={Direction.LEFT} isDark={true} size="15px" />
			{/if}
		</button>
	</div>

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
	}
	.tab-selector {
		display: flex;
		width: 80%;
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
