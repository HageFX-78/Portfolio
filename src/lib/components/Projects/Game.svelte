<script lang="ts">
	import BackdropImage from './SubComponents/BackdropImage.svelte';
	import SubButton from './SubComponents/SubButton.svelte';

	import type { WindowContent } from '$lib/components/Types/WindowContent';
	import { getContext } from 'svelte';
	import type { Component } from 'svelte';

	const svelteComponentContext = getContext<{ set: (data: Component) => void }>(
		'windowContentComponent'
	);
	const data = $props();

	function openLink(link: string) {
		window.open(link, '_blank');
	}
	function openPageWindow(newContent: Component, props: WindowContent) {
		svelteComponentContext.set(newContent); // Opens window when set
	}

	let isHovered: boolean = $state(false);
</script>

<div
	class="project-block noselect"
	onmouseenter={() => {
		data.onHover?.(data.gifbg);
		isHovered = true;
	}}
	onmouseleave={() => {
		data.onHover?.('');
		isHovered = false;
	}}
	role="button"
	tabindex="0"
>
	<BackdropImage backimage={data.backimage} gametitle={data.gameTitle} />

	<div class="project-overlay">
		<div class="thumbnail">
			<img src={data.image} alt={data.gametitle} loading="lazy" />
		</div>
		<div class="project-info">
			<div>{data.gametitle}</div>
			<p>{data.summary}</p>
			<div class="profile-tags">
				{#each data.tags as tag}
					<span>{tag}</span>
				{/each}
			</div>
		</div>

		<div class="project-link-block">
			{#if !data.isJamGame}
				<SubButton
					buttonContent={'Details'}
					backgroundHoverColor="#1fb4ff"
					callback={() => {
						openPageWindow(data.svelteComponent, data.props);
					}}
				/>
			{/if}
			<SubButton
				buttonContent={'Play Now'}
				icon="images/icons/redirect.png"
				backgroundHoverColor="#ff4060"
				callback={() => {
					openLink(data.itchLink);
				}}
			/>
		</div>
	</div>
</div>

<style>
	.project-block {
		position: relative;
		background-color: rgb(40, 40, 40);
		width: 70%;
		height: 200px;

		/* padding: 10px; */
		color: var(--cwhite);
		transition: 0.2s;
		box-sizing: border-box;
		overflow: hidden;

		/* border: 5px solid transparent; */
	}
	.project-block:hover {
		background-color: rgb(50, 50, 50);
		transform: scale(1.1);
		will-change: transform;
		outline: 5px solid var(--cwhite);
	}

	.project-block:hover span {
		opacity: 1;
	}

	.project-block img {
		width: 200px;
		height: 200px;
		/*cover*/

		object-fit: cover;
	}

	.project-overlay {
		position: relative;
		display: flex;
		flex-direction: row;
		width: 130%;
		height: 100%;
		left: 0;
		transform: translateX(0%);
		transition: transform 0.6s var(--easeOutCirc);

		box-sizing: border-box;
		background-color: var(--cblack);
		z-index: 2;
	}
	.project-block:hover .project-overlay {
		transform: translateX(-22%);
	}

	.thumbnail {
		width: 30%;
		height: 100%;
		position: relative;
		z-index: 2;
		grid-area: thumbnail;

		transition: all 0.6s var(--easeOutCirc);
	}

	.thumbnail img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		object-position: center;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/** - - - - - - --------------------------------------------------*/
	.project-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 20px;
		z-index: 2;
		width: 80%;
		height: 100%;

		/* grid-area: info; */
		box-sizing: border-box;
		transition: all 0.3s ease;
	}

	.project-info div {
		font-size: 30px;
		font-weight: bold;
		letter-spacing: 2px;
		transition: all 0.3s ease;
		padding: 10px;
		height: fit-content;
	}

	.project-info p {
		color: var(--c2white);
		font-size: 16px;
		margin: 0;
		max-width: 80%;
		max-height: 0;
		overflow: hidden;
		/* line-height: 1.2; */
		box-sizing: border-box;

		transform: scaleY(0);
		opacity: 0;
		transition:
			transform 0.4s ease,
			opacity 0.4s ease;
		transform-origin: top;
	}
	.project-overlay {
		will-change: transform;
	}

	.project-block:hover .project-info p {
		height: fit-content;
		opacity: 1;
		transform: scaleY(1);
		max-height: 100px;
	}
	.project-block:hover .profile-tags {
		padding: 20px !important;
		max-height: 100px;
	}

	.profile-tags {
		display: flex;
		margin: 0;
		padding: 0 !important;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 10px;
		height: fit-content;
		width: 100%;
		max-height: 0;
		box-sizing: border-box;
		/* padding: 0px; */

		transition: all 0.6s var(--easeOutCirc);
	}

	.profile-tags span {
		font-size: 14px;
		color: var(--c2white);
		opacity: 0;
		transition: all 0.6s var(--easeOutCirc);
		padding: 5px;
		background-color: var(--cblack);
		border: 2px solid var(--c2white);
		letter-spacing: normal;
		box-sizing: border-box;
	}
	.project-link-block {
		background-color: transparent;
		height: 100%;

		transition:
			right 0.6s var(--easeOutCirc),
			background-color 0.2s var(--easeOutQuad);
		width: 30%;

		border: none;
		overflow: hidden;
		padding: 20px;
		gap: 20px;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		box-sizing: border-box;
	}

	@media (max-width: 768px) {
		.project-block {
			display: flex;
			width: 100%;
			flex-direction: column;
			align-items: center;
			text-align: center;
			box-sizing: border-box;
		}

		.project-info,
		.profile-tags {
			width: 100%;
			font-size: 10px;
		}

		.thumbnail {
			width: 80%; /* Makes it smaller on mobile */
			max-width: 300px;
		}
	}
</style>
