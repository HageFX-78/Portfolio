<script lang="ts">
	import { Direction } from '$lib/components/Types/Direction';

	export let direction: Direction = Direction.LEFT;
	export let isDark: boolean = true;
	export let animationDuration: number = 0.5; // Default animation duration in seconds
	export let size: number = 1; // Default size multiplier
</script>

<div class="arrow-container" style="height: {size}em;">
	<div
		class="arrow {direction}"
		class:bouncing={direction === Direction.DOWN || direction === Direction.UP}
		class:sliding={direction === Direction.LEFT || direction === Direction.RIGHT}
		style="
			background-color: {isDark ? 'var(--cblackHard)' : 'var(--cwhite)'};
			--anim-duration: {animationDuration}s;"
	></div>
</div>

<style>
	:root {
		--bouncePixels: -5px;
		--offsetbouncePixels: 5px;
	}
	.arrow-container {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: auto;
		height: 1em; /* Matches text size */
	}

	.arrow {
		display: inline-block;
		width: auto;
		height: 100%;
		aspect-ratio: 1 / 1;
		background-color: var(--cblackHard);
		clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
		transition: transform 0.3s ease-in-out;
		vertical-align: middle;
	}

	/* Rotate arrow for different directions */
	.arrow.left {
		clip-path: polygon(0% 50%, 100% 0%, 100% 100%);
	}
	.arrow.down {
		clip-path: polygon(50% 100%, 0% 0%, 100% 0%);
	}
	.arrow.right {
		clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
	}

	/* Adjust the animations based on the direction */
	.arrow.bouncing.up {
		animation: bounce-up var(--anim-duration) infinite alternate;
	}
	.arrow.bouncing.down {
		animation: bounce-down var(--anim-duration) infinite alternate;
	}

	.arrow.sliding.left {
		animation: slide-left var(--anim-duration) infinite alternate;
	}
	.arrow.sliding.right {
		animation: slide-right var(--anim-duration) infinite alternate;
	}

	/* Opposing bounce animations */
	@keyframes bounce-up {
		0% {
			transform: translateY(var(--bouncePixels));
		}
		100% {
			transform: translateY(var(--offsetbouncePixels));
		}
	}
	@keyframes bounce-down {
		0% {
			transform: translateY(var(--offsetbouncePixels));
		}
		100% {
			transform: translateY(var(--bouncePixels));
		}
	}

	/* Opposing sliding animations */
	@keyframes slide-left {
		0% {
			transform: translateX(var(--bouncePixels));
		}
		100% {
			transform: translateX(var(--offsetbouncePixels));
		}
	}
	@keyframes slide-right {
		0% {
			transform: translateX(var(--offsetbouncePixels));
		}
		100% {
			transform: translateX(var(--bouncePixels));
		}
	}
</style>
