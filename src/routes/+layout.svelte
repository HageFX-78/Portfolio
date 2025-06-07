<script lang="ts">
	export const prerender = true;
	import Navbar from '$lib/components/Navbar.svelte';
	import TopLinks from '$lib/components/Topbar.svelte';
	import Window from '$lib/components/Tools/Window.svelte';

	import { setContext, onMount } from 'svelte';
	import type { Component } from 'svelte';
	import type { WindowContent } from '$lib/components/Types/WindowContent';

	let backgroundImage = '';
	let lastBackgroundImage = '';

	// Parallax effect variables
	let x = 0;
	let y = 0;

	// Pop up window
	let windowOpen: boolean = false;
	let windowContentComponent: Component;
	let windowContentData: WindowContent;

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

	setContext('windowContentComponent', {
		get: () => windowContentComponent,
		set: (newData: Component) => {
			windowContentComponent = newData;
			windowOpen = true; // Open the window when new data is set
		}
	});

	function handleMouseMove(event: MouseEvent) {
		let mscale = 80;

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
	<!-- <video
		class="background"
		autoplay
		loop
		muted
		style={`
			transform: translate(${x}px, ${y}px) scale(1.1);
		`}
		class:opacityFilled={backgroundImage !== ''}
	>
		<source src="${lastBackgroundImage}" type="video/mp4" />
	</video> -->
	<div class="el"></div>

	<Navbar />
	<TopLinks />
	<Window bind:isOpen={windowOpen} svelteComponent={windowContentComponent} />

	<div class="content">
		<slot />
	</div>
</div>

<style>
	@import url('static/styles/global.css');
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
		height: 100%;
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

		filter: blur(0px) saturate(130%) brightness(0.6);

		opacity: 0;
		overflow: hidden;
	}
	.opacityFilled {
		opacity: 1;
	}

	@media (max-width: 768px) {
		:global(html, body) {
			font-size: 10px !important;
			width: 100vw;
			height: 100vh;
		}

		:global(.page-title) {
			font-size: 28px;

			margin-top: 50px;

			width: fit-content;
			/* padding: 10px; */
		}
		.container {
			position: relative;
			height: 100vh;
		}
	}
</style>
