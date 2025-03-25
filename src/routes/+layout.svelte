<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import TopLinks from '$lib/components/Topbar.svelte';
	import { onMount } from 'svelte';

	let x = 0;
	let y = 0;

	// MOre bias towards top left, TODO: make it more centered
	function handleMouseMove(event: MouseEvent) {
		let mscale = 20;

		x = -((event.pageX / window.innerWidth) * mscale - mscale * 0.5);
		y = -((event.pageY / window.innerHeight) * mscale - mscale * 0.5);

		console.log(x, y);
	}

	onMount(() => {
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	});
</script>

<div class="container">
	<Navbar />
	<TopLinks />

	<div class="content">
		<div class="inner-content" style="transform: translate({x}px, {y}px)">
			<slot />
		</div>
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
		--cblack: #a5a5a5;
		--tertiary-color: #ff00de;
	}
	:global(html, body) {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100vh;
		/* text-shadow: 0px 0px 2px white,0px 0px 10px white; */
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
		z-index: 2;
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

		background: radial-gradient(
			ellipse at center,
			rgba(0, 0, 0, 0) 30%,
			rgba(0, 0, 0, 0.445) 70%,
			rgba(0, 0, 0, 0.601) 100%
		);
	}

	:global(::-webkit-scrollbar) {
		width: 20px;
	}

	:global(::-webkit-scrollbar-thumb) {
		background: rgb(255, 255, 255);
	}

	:global(::-webkit-scrollbar-track) {
		background: var(--cwhite);
		border-left: 8px solid transparent;
		border-right: 8px solid transparent;
		background-clip: padding-box;
		margin: 10vh 0;
	}
	:global(::-webkit-scrollbar-track-piece) {
		background-color: transparent;
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

	.content {
		display: block;
		position: relative;

		margin: 0;
		width: 100%;
		height: 100vh;
		/* overflow: hidden; */
		box-sizing: border-box;
	}
	.inner-content {
		width: 100%;
		height: 100%;
		overflow: hidden;
		box-sizing: border-box;

		will-change: transform;
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

		/* transform: perspective(1000px) scale(0.9) rotateX(5deg) rotateY(-5deg);
		border: 5px solid var(--cwhite); */

		overflow: hidden;
	}
</style>
