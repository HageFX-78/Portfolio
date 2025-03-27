<script lang="ts">
	import Divider from '$lib/components/Projects/TitleDivider.svelte';
	import Card from '$lib/components/Tools/Card.svelte';
	import Arrow from '$lib/components/Visual/ArrowSelector.svelte';
	import Gear from '$lib/components/Visual/Gear.svelte';
	import { Direction } from '$lib/components/Types/Direction';

	const ActiveTab = {
		SideProjects: 0,
		Tools: 1
	};

	let activeTab: (typeof ActiveTab)[keyof typeof ActiveTab] = ActiveTab.SideProjects;

	function changeTab(tab: (typeof ActiveTab)[keyof typeof ActiveTab]) {
		activeTab = tab;
	}
</script>

<div class="projects-container">
	<div class="page-title">Tools / Side Projects</div>
	<!-- <Divider width="60%" /> -->
	<div class="tab-selector noselect">
		<button
			class="tab"
			on:click={() => changeTab(ActiveTab.SideProjects)}
			type="button"
			aria-pressed="true"
			class:active={activeTab === ActiveTab.SideProjects}
		>
			<Gear size="40px" />
			{#if activeTab === ActiveTab.SideProjects}
				<Arrow direction={Direction.LEFT} isDark={true} size="15px" />
			{/if}
		</button>
		<button
			class="tab"
			on:click={() => changeTab(ActiveTab.Tools)}
			type="button"
			aria-pressed="false"
			class:active={activeTab === ActiveTab.Tools}
		>
			<Gear size="40px" />
			{#if activeTab === ActiveTab.Tools}
				<Arrow direction={Direction.LEFT} isDark={true} size="15px" />
			{/if}
		</button>
	</div>

	<div class="card-container">
		<Card
			image={'images/normalgames/shadow/g3.gif'}
			gametitle={'Test'}
			link={'https://google.com'}
		/>
		<Card image={'images/general/raymoo.png'} gametitle={'Test'} link={'https://google.com'} />
		<Card image={'images/general/raymoo.png'} gametitle={'Test'} link={'https://google.com'} />
		<Card image={'images/general/raymoo.png'} gametitle={'Test'} link={'https://google.com'} />
		<Card image={'images/general/raymoo.png'} gametitle={'Test'} link={'https://google.com'} />
		<Card image={'images/general/raymoo.png'} gametitle={'Test'} link={'https://google.com'} />
		<Card image={'images/general/raymoo.png'} gametitle={'Test'} link={'https://google.com'} />
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
		margin-bottom: 20px; /* Adds spacing between title and container */
		text-align: center;
	}

	.tab-selector {
		position: absolute;
		top: 0;
		left: 0;
		display: flex;

		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		/* grid-area: tab-selector; */
		z-index: 6;
	}

	.card-container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 20px;
		width: 80%;
		height: auto;
		padding: 20px 0;
	}
	.tab {
		border: none;
		/* background-color: rgb(236, 66, 66); */
		padding: 10px;

		color: white;
		aspect-ratio: 1;
	}
	.tab:hover {
		background-color: rgba(255, 255, 255, 0.1);
		cursor: pointer;
	}
</style>
