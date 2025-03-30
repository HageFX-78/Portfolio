<script lang="ts">
	import { fly, slide } from 'svelte/transition';
	import Tags from '$lib/components/Visual/Tags.svelte';

	export let image: string;
	export let gametitle: string;
	export let link: string;
	export let gameDescription: string;
	export let tags: string[] = [];
	export let onHoverChange: (image: string) => void;

	let isHovered = false;

	function handleMouseEnter() {
		isHovered = true;
		onHoverChange?.(image);
		console.log('Hovered:', image);
	}
	function handleMouseLeave() {
		isHovered = false;
		onHoverChange?.('');
	}
</script>

<button
	class="card"
	on:click={() => window.open(link, '_blank')}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	aria-label={`Open ${gametitle}`}
	type="button"
	in:fly={{ y: 200, duration: 200 }}
>
	<div class="card-image">
		<img src={image} alt={gametitle} />
	</div>

	<div class="card-content hover">
		{#if isHovered}
			<p class="game-title">{gametitle}</p>
			<p class="game-details">{gameDescription}</p>
			<div class="tags">
				<Tags {tags} color="rgb(255, 195, 85)" opacity="0.8" />
			</div>
		{/if}
	</div>

	{#if !isHovered}
		<div class="card-content no-hover">
			<p class="game-title">{gametitle}</p>
		</div>
	{/if}
</button>

<style>
	@font-face {
		font-family: 'crtbest';
		src: url('/fonts/BestTen-CRT.otf');
	}

	.card {
		/* background-color: rgba(0, 0, 0, 0.5); */
		width: 500px;
		height: 250px;

		cursor: pointer;
		text-align: center;

		overflow: hidden;
		border: none;
		padding: 0;
		margin: 0;
		outline: none;
		box-shadow: none;

		box-sizing: border-box;
		position: relative;

		transition: all 0.3s ease-in-out;
		background-color: transparent;
		/* outline: 4px solid rgb(93, 93, 93); */
	}
	.card:hover {
		/* filter: brightness(1.5); */
		outline: 6px solid var(--cwhite);
		transform: scale(1.05);
	}

	.card:hover img {
		transform: scale(1.1);
		filter: blur(0px) brightness(0.8);
	}
	.card-image {
		position: absolute;
		inset: 0; /* Top, Right, Bottom, and Left all set to 0 */
		width: 100%;
		height: 100%;
	}
	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		border: none;
		box-shadow: none;
		padding: 0;

		transition: all 0.3s ease-in-out;
	}

	.card-content {
		position: absolute;
		top: 0;
		/* left: 0; */
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.593);
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		justify-content: center;
		/* padding: 15%; */
		padding: 20px 40px;

		box-sizing: border-box;
	}

	.card-content.hover {
		clip-path: inset(0 0 0 60%); /* Clipped at 50% initially */
		transition: clip-path 0.6s cubic-bezier(0.25, 1, 0.5, 1); /*Quant out iirc*/
	}

	.card-content.no-hover {
		right: 0 !important;
		width: 40% !important;
		align-items: center !important;

		/* border-right: 4px solid white; */
	}

	.card:hover .card-content {
		clip-path: inset(0 0 0 0);
	}

	.game-title {
		font-size: 26px;
		font-weight: bold;
		margin: 0;
		padding: 0;
	}

	.game-details {
		font-size: 16px;
		text-align: left;
		visibility: visible;
		transition: opacity 0.3s ease-in-out;
		opacity: 0.8;
	}

	.tags {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
		padding: 10px;
		width: 100%;
		box-sizing: border-box;
	}
</style>
