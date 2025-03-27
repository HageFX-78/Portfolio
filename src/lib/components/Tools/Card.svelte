<script lang="ts">
	import { fly, slide } from 'svelte/transition';

	export let image: string;
	export let gametitle: string;
	export let link: string;

	let isHovered = false;
</script>

<button
	class="card"
	on:click={() => window.open(link, '_blank')}
	on:mouseenter={() => (isHovered = true)}
	on:mouseleave={() => (isHovered = false)}
	aria-label={`Open ${gametitle}`}
	type="button"
	in:fly={{ y: 200, duration: 200 }}
>
	<div class="card-image">
		<img src={image} alt={gametitle} />
	</div>
	{#if isHovered}
		<div class="card-content" in:slide={{ axis: 'y', duration: 400 }}>
			{gametitle}
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
		width: 250px;
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

		transition: all 0.2s ease-in-out;
		background-color: transparent;
		/* outline: 4px solid rgb(93, 93, 93); */
	}
	.card:hover {
		/* filter: brightness(1.5); */
		outline: 4px solid var(--cwhite);
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

		filter: brightness(0.5);

		transition: all 0.2s ease-in-out;
	}

	.card-content {
		font-size: 24px;
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		height: 100%;
		transform: translate(-50%, -50%);
		background-color: rgba(0, 0, 0, 0.774);

		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
