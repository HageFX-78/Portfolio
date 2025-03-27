<script lang="ts">
	import { Direction } from '$lib/components/Types/Direction';

	const { direction, isDark, size } = $props<{
		direction: Direction;
		isDark: boolean;
		size: string;
	}>();
</script>

<div
	class="arrow {direction}"
	class:bouncing={direction === Direction.DOWN || direction === Direction.UP}
	class:sliding={direction === Direction.LEFT || direction === Direction.RIGHT}
	style="background-color: {isDark ? 'var(--cblackHard)' : 'var(--cwhite)'};
    width: {size};"
></div>

<style>
	:root {
		--bouncePixels: -5px;
	}
	.arrow {
		width: 20px;
		aspect-ratio: 1/1;
		display: inline-block;
		background-color: var(--cblackHard);
		clip-path: polygon(50% 0%, 100% 100%, 0% 100%); /* Default down arrow */
		transition: transform 0.3s ease-in-out;
	}

	/* Rotate arrow for different directions */
	.arrow.left {
		clip-path: polygon(0% 50%, 100% 0%, 100% 100%); /* Left arrow */
	}

	.arrow.up {
		clip-path: polygon(50% 0%, 100% 100%, 0% 100%); /* Up arrow (same as default) */
	}

	.arrow.right {
		clip-path: polygon(0% 0%, 100% 50%, 0% 100%); /* Right arrow */
	}

	/* Add animation for a bounce effect */
	.arrow.bouncing {
		animation: bounce 0.5s infinite alternate;
	}
	.arrow.sliding {
		animation: sliding 0.5s infinite alternate;
	}

	@keyframes bounce {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(var(--bouncePixels));
		}
	}
	@keyframes sliding {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(var(--bouncePixels));
		}
	}
</style>
