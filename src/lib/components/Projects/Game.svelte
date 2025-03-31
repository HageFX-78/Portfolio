<script lang="ts">
	const { gametitle, image, backimage, summary, tags, onHover } = $props<{
		gametitle: string;
		image: string;
		backimage: string;
		summary: string;
		tags: string[];
		onHover?: (image: string) => void;
	}>();

	let isHovered: boolean = $state(false);
</script>

<div
	class="project-block noselect"
	onmouseenter={() => {
		onHover?.(backimage);
		isHovered = true;
	}}
	onmouseleave={() => {
		onHover?.('');
		isHovered = false;
	}}
	role="button"
	tabindex="0"
>
	<div class="backdrop">
		<img src={backimage} alt={gametitle} />
	</div>
	<div class="project-overlay">
		<div class="thumbnail">
			<img src={image} alt={gametitle} />
		</div>
		<div class="project-info">
			<div>{gametitle}</div>
			<p>{summary}</p>
			<div class="profile-tags">
				{#each tags as tag}
					<span>{tag}</span>
				{/each}
			</div>
		</div>

		<div class="project-link-block">Link</div>
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

	.backdrop {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: 1;
	}

	.backdrop img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.project-overlay {
		position: relative;
		display: flex;
		flex-direction: row;
		width: 130%;
		height: 100%;
		left: 0;
		transition: left 0.6s var(--easeOutCirc);

		box-sizing: border-box;
		background-color: var(--cblack);
		z-index: 2;
	}
	.project-block:hover .project-overlay {
		left: -30%;
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

		opacity: 0;
		transition: all 0.6s var(--easeOutCirc);
	}

	.project-block:hover .project-info p {
		height: fit-content;
		opacity: 1;
		transform: translateY(0);
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
		background-color: #f45f5d;
		height: 100%;

		transition:
			right 0.6s var(--easeOutCirc),
			background-color 0.2s var(--easeOutQuad);
		width: 20%;

		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
	}
	.project-block:hover .project-link-block {
		right: 0;
		/* width: 20%; */
		padding: 10px;
	}

	.project-link-block:hover {
		background-color: #ffa5a3;
		/* transition: background-color 0.2s var(--easeOutQuad); */
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
