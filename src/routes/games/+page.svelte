<script lang="ts">
	import { getContext } from 'svelte';
	import { fly } from 'svelte/transition';

	import { njGameData } from '$lib/data/GameData';
	import { jamData } from '$lib/data/JamGData';
	import { isMobile } from '$lib/data/Utility';

	import GameBlock from '$lib/components/Projects/Game.svelte';
	import Tabs from '$lib/components/Projects/Tabs.svelte';

	const isMobileDevice: boolean = isMobile();
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
			{#each njGameData as game}
				<GameBlock
					gametitle={game.projectTitle}
					image={game.image}
					backimage={game.backimage}
					summary={game.summary}
					tags={game.tags}
					svelteComponent={game.svelteComponent}
					itchLink={game.itchLink}
					onHover={changeBackground}
				/>
			{/each}
		</div>
	{:else if activeTab === ActiveTab.Jam}
		<div
			class="game-container"
			in:fly={{ x: 200, duration: 600 }}
			out:fly={{ x: 200, duration: 100 }}
		>
			{#each jamData as game}
				<GameBlock
					gametitle={game.projectTitle}
					image={game.image}
					backimage={game.backimage}
					summary={game.summary}
					tags={game.tags}
					itchLink={game.itchLink}
					onHover={changeBackground}
					isJamGame={true}
				/>
			{/each}
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

	@media (max-width: 768px) {
		.projects-container {
			margin: 0 5%;
		}
		.game-container {
			width: 100%;
			padding-bottom: 50px;
		}
	}
</style>
