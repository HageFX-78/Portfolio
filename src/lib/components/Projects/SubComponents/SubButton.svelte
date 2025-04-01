<script lang="ts">
	export let buttonContent: string;
	export let backgroundColor: string = 'var(--cwhite)';
	export let backgroundHoverColor: string = 'var(--cblack)';
	export let icon: string = '';
	export let callback: () => void;

	let isHovered: boolean = false;
</script>

<button
	style="background-color: {isHovered ? backgroundHoverColor : backgroundColor}"
	on:mouseenter={() => (isHovered = true)}
	on:mouseleave={() => (isHovered = false)}
	on:click={callback}
	class:is-hovered={isHovered}
>
	{#if icon !== ''}
		<img src={icon} alt="Icon" />
	{/if}
	<span>{buttonContent} </span>
</button>

<style>
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;

		border: none;
		box-shadow: none;

		width: 100%;
		flex-grow: 1;
		box-sizing: border-box;

		transition: all 0.4s var(--easeOutQuad);
		overflow: hidden;
	}
	button span {
		font-size: 20px;
		font-weight: bold;
		color: var(--cblack);
		transition: all 0.4s var(--easeOutQuad);
		box-sizing: border-box;
	}

	button:hover {
		outline: 4px solid var(--cwhite) !important;
		transform: scale(1.05);
	}
	button:hover span {
		color: #ffffff;
		letter-spacing: 2px;
	}

	img {
		height: 1rem;
		padding-right: 10px;
		aspect-ratio: 1/1;
		object-fit: cover;
		transition: all 0.4s var(--easeOutQuad);
	}

	button:hover img {
		transform: scale(1.2);
		filter: invert(1);
	}
</style>
