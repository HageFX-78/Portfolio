<script lang="ts">
	import Arrow from '$lib/components/GeneralComponents/AnimatedArrow.svelte';
	import { getContext } from 'svelte';
	import { Page } from '$lib/components/Types/Page';
	import { isMobile } from '$lib/data/Utils';
	import { Direction } from './Types/Direction';

	const isMobileDevice: boolean = isMobile();
	const bgContext = getContext<{ set: (image: string) => void }>('backgroundImage');

	let activeTab: (typeof Page)[keyof typeof Page] = Page.HOME;

	type NavItem = {
		name: string;
		page: (typeof Page)[keyof typeof Page];
		href: string;
		background?: string;
	};

	const navItems: NavItem[] = [
		{ name: 'Home', page: Page.HOME, href: '/' },
		{ name: 'Games', page: Page.GAMES, href: '/games' },
		{ name: 'Tools', page: Page.TOOLS, href: '/tools' },
		{
			name: 'About Me',
			page: Page.ABOUTME,
			href: '/aboutme',
			background: 'https://media1.tenor.com/m/ZjR_YoigTqIAAAAC/popsicle-relax.gif'
		}
	];

	function handleClick(page: (typeof Page)[keyof typeof Page], backgroundURL?: string) {
		activeTab = page;

		if (backgroundURL) {
			bgContext.set(backgroundURL);
		} else {
			bgContext.set('');
		}
	}
</script>

<nav class="noselect">
	{#each navItems as item}
		<div>
			<!-- {#if activeTab === item.page && isMobileDevice}
				<Arrow isDark={false} animationDuration={0.3} size={0.8} direction={Direction.DOWN} />
			{/if} -->
			<a
				class:active={activeTab === item.page}
				href={item.href}
				on:click={() => handleClick(item.page, item.background)}
			>
				{item.name}
			</a>
			{#if activeTab === item.page && !isMobileDevice}
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
		transform: translateY(-50%);
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

	@media (max-width: 768px) {
		nav {
			position: absolute;
			bottom: 0;
			left: 0;
			top: auto;
			transform: translate(0, 0);
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			width: 100%;
			padding: 10px 0;
			background-color: black;
			height: 5%;
			gap: 0;
			margin: 0;
		}

		nav > div {
			flex-grow: 1; /* Ensure each div stretches */
			/* display: flex; Ensure flexbox layout */
			width: fit-content;
			height: fit-content;
		}

		a {
			/* flex-grow: 1; Make each item stretch */
			text-align: center;
			font-size: 14px;
			padding: 10px 0;
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		a.active {
			font-size: 16px;
			transform: scale(1.1);
		}
		a:hover {
			font-size: 16px;
			transform: scale(1.1);
		}
	}
</style>
