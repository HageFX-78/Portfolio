<script lang="ts">
	import { fly } from 'svelte/transition';

	export let url: string;
	export let name: string;
	export let invert: boolean = false; // Default value is false

	let isHovered: boolean = false;
</script>

<div class="skillblock noselect">
	<img
		src={url}
		alt={name}
		style="filter: invert({invert ? 1.0 : 0}) saturate(0.8)"
		loading="lazy"
	/>
	<!-- {#if isHovered} -->
	<span>{name}</span>
</div>

<style>
	.skillblock {
		width: 70px;
		aspect-ratio: 1/1;
		gap: 10px;

		/* background-color: black; */
		padding: 10px;
		box-sizing: border-box;

		position: relative;
		overflow: hidden; /*prevents twitching for other images */
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	}

	span {
		display: block;
		opacity: 0;
		font-size: 14px;
		color: var(--cwhite);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
		background-color: rgba(0, 0, 0, 0.815);
		padding: 5px 10px;
		width: 100%;
		/* overflow: auto; */
		/* white-space: nowrap; Prevent wrapping */
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.skillblock:hover span {
		/* background-color: var(--cblack); */
		opacity: 1;
	}

	.skillblock:hover img {
		transform: scale(1.2);
	}
</style>
