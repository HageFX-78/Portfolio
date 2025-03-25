<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import TopLinks from '$lib/components/Topbar.svelte';
	import { onMount } from 'svelte';

	let x = 0;
	let y = 0;

	function handleMouseMove(event: MouseEvent) {
		x = (event.pageX / window.innerWidth) * 10;
		y = (event.pageY / window.innerHeight) * 10;
	}

	onMount(() => {
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	});
</script>

<div class="container">
	<Navbar />
	<TopLinks />

	<div class="content" style="transform: translate(-{x}px, -{y}px)">
		<slot />
		<!-- This is where the page-specific content goes -->
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
		font-family: 'summerpixel';
		src: url('/fonts/SummerPixel.ttf');
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
		font-family: 'dotbest', monospace;
		font-size: 24px;
		color: #ffffff;
	}

	:root {
		--primary-color: #333;
		--secondary-color: #a5a5a5;
		--tertiary-color: #ff00de;
	}
	:global(html, body) {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100vh;
		/* text-shadow: 0px 0px 2px white,0px 0px 10px white; */
	}
	:global(body) {
		background: radial-gradient(
			circle,
			rgb(46, 46, 46) 0%,
			rgba(0, 0, 0, 1) 85%,
			rgba(0, 0, 0, 1) 100%
		);
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
			linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
			linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
		z-index: 2;
		background-size:
			100% 3px,
			1px 100%;
		pointer-events: none;
	}

	.content {
		display: block;
		position: relative;

		margin: 0;
		padding: 0;
		width: 100%;
		height: 100vh;
	}
	.container {
		margin: 0;
		width: 100%;
		height: 100%;
	}
</style>
