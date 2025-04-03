<script lang="ts">
	import AnimatedArrow from '$lib/components/GeneralComponents/AnimatedArrow.svelte';
	import type { WindowContent } from '$lib/components/Types/WindowContent';
	import { onMount } from 'svelte';
	import { fly, scale } from 'svelte/transition';

	let fx = 0;
	let fy = 0;

	let iframePointerAllow = false;

	function handleMouseMove(event: MouseEvent) {
		let mscale = 40;

		fx = -((event.pageX / window.innerWidth) * mscale - mscale * 0.5);
		fy = -((event.pageY / window.innerHeight) * mscale - mscale * 0.5);
	}
	function allowIframePointer() {
		iframePointerAllow = true;
	}

	onMount(() => {
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	});

	export let data: WindowContent = {
		projectBackdrop: 'images/projects/ProjectBackdrop.png',
		projectLogo: 'images/projects/ProjectLogo.png',
		projectVideo: '',
		projectItchLink: 'https://itch.io/project-link'
	};
</script>

<div class="logo-container">
	<img
		id="logo-backdrop"
		src={data.projectBackdrop}
		alt="background"
		style="transform: translate(-50%, -50%) translate({fx}px, {fy}px)"
	/>

	<img
		id="logo"
		src={data.projectLogo}
		alt="logo"
		in:scale={{ duration: 100 }}
		out:scale={{ duration: 400 }}
	/>
</div>
<div class="video-container" class:allowPointer={iframePointerAllow}>
	{#if !iframePointerAllow}
		<button class="activate-video" on:click={() => allowIframePointer()}>
			Click to activate video
		</button>
	{/if}

	{@html data.projectVideo}
</div>
<div class="itch-container">
	<a href={data.projectItchLink} target="_blank" rel="noopener noreferrer">
		<img src="images/icons/itch.png" alt="itch" /> Play on Itch.io
	</a>
</div>

<style>
	:global(iframe) {
		pointer-events: none;
		width: 80%;
		aspect-ratio: 16/9;
		z-index: 2; /* Ensure it's in front of the backdrop */
	}
	:global(.allowPointer > iframe) {
		pointer-events: all !important;
	}

	.logo-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative; /* Needed to contain the backdrop */
		padding: 20px 0;
		box-sizing: border-box;
	}

	.activate-video {
		all: unset;
		position: absolute; /* Constrain button inside logo-container */
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;

		padding: 50px;
		font-size: 24px;
		font-weight: bold;
		color: var(--cwhite);
		background-color: rgba(0, 0, 0, 0.725);
		padding: 50px;
		transition: all 0.1s var(--easeOutQuad);

		cursor: pointer;
		z-index: 10; /* Ensure it's in front of the backdrop */
	}
	.activate-video:hover {
		transform: translate(-50%, -50%) scale(1.05);
		/* box-shadow: 0 0 10px var(--cwhite); */
		outline: solid 4px var(--cwhite);
	}

	#logo-backdrop {
		position: absolute; /* Constrain backdrop inside logo-container */
		width: 100%;
		height: 100%;

		top: 50%;
		left: 50%;
		object-fit: cover;
		z-index: 0; /* Ensure it stays behind the logo */
	}

	#logo {
		width: 100%;
		max-width: 800px;

		object-fit: contain;
		z-index: 1; /* Ensure it's in front of the backdrop */
	}

	.video-container {
		all: unset;

		position: relative;
		width: 100%;
		height: 100%;
		display: flex;

		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		z-index: 2; /* Ensure it's in front of the backdrop */

		padding: 50px;
	}

	/* .arrow-container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		z-index: 1; 
		box-sizing: border-box;

		padding-top: 50px;
	} */
	.itch-container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		z-index: 1; /* Ensure it's in front of the backdrop */
		box-sizing: border-box;

		padding-bottom: 50px;
	}
	.itch-container > a {
		color: var(--cwhite);
		text-decoration: none;
		display: inline-block;
		padding: 5px 40px;
		font-size: 18px;
		padding-left: 50px;
		text-align: center;
		font-weight: bold;
		width: fit-content;
		transition: all 0.1s var(--easeOutQuad);

		background-color: var(--itchColor);
		padding: 20px;
	}

	.itch-container > a:hover {
		transform: scale(1.05);
		/* color: var(--cblack); */
		outline: 4px solid var(--cwhite);
		/* background: var(--cwhite); */
	}

	.itch-container > a img {
		transform: scale(1.6);

		height: 1rem;
		padding: 0 10px;

		aspect-ratio: 1/1;
		object-fit: fill;
		overflow: hidden;
	}
</style>
