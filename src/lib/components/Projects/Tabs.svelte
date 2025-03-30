<script lang="ts">
	import Arrow from '$lib/components/Visual/AnimatedArrow.svelte';
	import { Direction } from '$lib/components/Types/Direction';

	export let tabs: { project: number; tabname: string }[] = [];
	export let activeTab: number = 0;
	export let width: string = '80%'; // Default width

	function changeTab(tab: number) {
		activeTab = tab;
	}
</script>

<div class="tab-selector noselect" style="width: {width};">
	{#each tabs as { project, tabname }}
		<button class="tab" on:click={() => changeTab(project)} class:active={activeTab === project}>
			{#if activeTab === project}
				<Arrow direction={Direction.RIGHT} isDark={true} size={0.8} />
			{/if}

			{tabname}

			{#if activeTab === project}
				<Arrow direction={Direction.LEFT} isDark={true} size={0.8} />
			{/if}
		</button>
	{/each}
</div>

<style>
	.tab-selector {
		display: flex;
		/* width: 80%; */
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
