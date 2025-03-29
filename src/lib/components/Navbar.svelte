<script lang="ts">
	import Arrow from '$lib/components/Visual/AnimatedArrow.svelte';
	import { Direction } from '$lib/components/Types/Direction';
	import { Page } from '$lib/components/Types/Page';

	let activeTab: (typeof Page)[keyof typeof Page] = Page.HOME;

	const navItems = [
		{ name: 'Home', page: Page.HOME, href: '/' },
		{ name: 'Games', page: Page.GAMES, href: '/games' },
		{ name: 'Tools', page: Page.TOOLS, href: '/tools' },
		{ name: 'About Me', page: Page.ABOUTME, href: '/aboutme' }
	];

	function handleClick(page: (typeof Page)[keyof typeof Page]) {
		activeTab = page;
	}
</script>

<nav class="noselect">
	{#each navItems as { name, page, href }}
		<div>
			<a class:active={activeTab === page} {href} on:click={() => handleClick(page)}>
				{name}
			</a>
			{#if activeTab === page}
				<Arrow isDark={false} animationDuration={0.3} />
			{/if}
		</div>
	{/each}
</nav>

<style>
	nav {
		color: white;
		left: 0;
		top: 50%;
		transform: translateY(-50%); /* Centers vertically */
		position: absolute;
		width: auto;
		display: flex;
		flex-direction: column;
		gap: 10px;

		z-index: 5;
	}
	a {
		color: var(--cwhite);
		text-decoration: none;
		display: inline-block;
		/* transition: 0.3s; */
		/* margin: 10px 0; */
		padding: 5px 40px;
		font-size: 22px;
		padding-left: 50px;
		text-align: center;
		width: fit-content;
		transition: all 0.2s ease-in-out;
	}
	a:hover {
		color: #333;
		font-size: 30px;
		background: var(--cwhite);
	}

	a.active {
		color: #333;
		font-size: 30px;
		background: var(--cwhite);
	}
</style>
