<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import TopLinks from '$lib/components/Topbar.svelte';

	import { setContext, onMount } from 'svelte';

	let backgroundImage = '';
	let lastBackgroundImage = '';

	setContext('backgroundImage', {
		get: () => backgroundImage,
		set: (newImage: string) => {
			if (newImage !== '') {
				lastBackgroundImage = newImage; // Store last valid image
			}
			backgroundImage = newImage;
			console.log('Background image set to:', backgroundImage);
		}
	});

	let x = 0;
	let y = 0;

	function handleMouseMove(event: MouseEvent) {
		let mscale = 150;

		x = -((event.pageX / window.innerWidth) * mscale - mscale * 0.5);
		y = -((event.pageY / window.innerHeight) * mscale - mscale * 0.5);
	}

	onMount(() => {
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	});
</script>

<svelte:head>
	<title>Hage's Portfolio</title>
</svelte:head>
<div class="container">
	<div
		class="background"
		style={`
			background-image: url(${lastBackgroundImage});
			transform: translate(${x}px, ${y}px) scale(1.1);
		`}
		class:opacityFilled={backgroundImage !== ''}
	></div>

	<Navbar />
	<TopLinks />

	<div class="content">
		<slot />
	</div>
</div>

<style>
	@font-face {
		font-family: 'crtbest';
		src: url('/fonts/BestTen-CRT.otf');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'mononoki';
		src: url('/fonts/mononoki-Regular.ttf') format('mononoki');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'dotbest';
		src: url('/fonts/BestTen-DOT.otf');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'pixeloid';
		src: url('/fonts/PixeloidMono-d94EV.ttf');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'pixelFJ';
		src: url('/fonts/pixelFJ8pt1__.TTF');
		font-weight: normal;
		font-style: normal;
	}
	:global(*) {
		font-family: 'mononoki', monospace;
		font-size: 20px;
		color: #ffffff;
	}

	:global(:root) {
		--cwhite: #ffffff;
		--lowWhite: #dedede;
		--cblack: #00000095;
		--cblackHard: #000000;
		--tertiary-color: #ff00de;
	}
	:global(html, body) {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100vh;
		/* text-shadow: 0px 0px 2px white,0px 0px 10px white; */
		overflow: hidden;
	}
	:global(html) {
		cursor: url('/images/general/cursor.png'), auto;
	}

	:global(img) {
		pointer-events: none;
		user-select: none;
		-webkit-user-drag: none;
	}
	:global(body) {
		/* background-color: aqua; */
		background-image: url('/images/background/forest2.webp');
	}

	:global(body)::after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background:
			linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.366) 50%),
			linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
		z-index: 9999;
		mix-blend-mode: overlay;
		background-size:
			100% 3px,
			1px 100%;
		pointer-events: none;

		animation: flicker 0.1s infinite alternate;
	}
	:global(body)::before {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;

		background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.467) 100%);

		z-index: 9998;
	}

	:global(::-webkit-scrollbar) {
		width: 15px;
	}

	:global(::-webkit-scrollbar-thumb) {
		background: rgb(235, 235, 235);
	}

	:global(::-webkit-scrollbar-track) {
		background: var(--lowWhite);
		border-left: 6px solid transparent;
		border-right: 6px solid transparent;
		background-clip: padding-box;
		margin: 20vh 0;
	}
	:global(::-webkit-scrollbar-track-piece) {
		background-color: transparent;
	}

	:global(::-webkit-scrollbar-button) {
		width: 0px;
		height: 0px;
		display: none;
	}
	:global(.noselect) {
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
	}
	:global(::selection) {
		background: var(--cwhite);
		color: var(--cblack);
	}

	:global(.page-title) {
		font-size: 40px;
		letter-spacing: 5px;
		margin: 0;
		margin-top: 40px;

		width: fit-content;
		padding: 10px;
	}

	/* Subtle Flicker */
	@keyframes flicker {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.95;
		}
		100% {
			opacity: 1;
		}
	}

	.container {
		margin: 0;
		width: 100%;
		height: 100%;
		/* background-color: aqua; */

		background: radial-gradient(
			circle,
			rgb(46, 46, 46) 0%,
			rgba(0, 0, 0, 1) 85%,
			rgba(0, 0, 0, 1) 100%
		);

		overflow: hidden;
	}
	.content {
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;

		margin: 0;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		box-sizing: border-box;
		z-index: 2;
	}

	.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		/* background-image: url({backgroundImage}); */
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		z-index: 1;
		transition: opacity 0.5s ease-in-out;

		filter: blur(0px) saturate(130%) brightness(0.7);

		opacity: 0;
		overflow: hidden;
	}
	.opacityFilled {
		opacity: 1;
	}
</style>
