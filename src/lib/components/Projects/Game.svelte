<script lang="ts">
	const { gametitle, image, backimage, summary, tags, onHover } = $props<{
		gametitle: string;
		image: string;
		backimage: string;
		summary: string;
		tags: string[];
		onHover?: (image: string) => void;
	}>();
</script>

<div
	class="project-block noselect"
	onmouseenter={() => {
		onHover?.(backimage);
	}}
	onmouseleave={() => {
		onHover?.('');
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
			<h3>{gametitle}</h3>
			<p>{summary}</p>
		</div>

		<div class="tags">
			{#each tags as tag}
				<span>{tag}</span>
			{/each}
		</div>
	</div>
</div>

<style>
	.project-block {
		position: relative;
		background-color: rgb(40, 40, 40);
		width: 70%;

		/* padding: 10px; */
		color: var(--cwhite);
		transition: 0.2s;
		box-sizing: border-box;

		/* border: 5px solid transparent; */
	}
	.project-block:hover {
		background-color: rgb(50, 50, 50);
		transform: scale(1.1);
		outline: 5px solid var(--cwhite);
	}

	.project-block:hover .project-overlay .tags span {
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
		width: 100%;
		height: 100%;

		display: grid;
		grid-template-columns: 20% 60% 20%;

		grid-template-areas: 'thumbnail info tags';

		box-sizing: border-box;
		background-color: var(--cblack);
		z-index: 2;
	}

	.thumbnail {
		width: 100%;
		height: auto;
		padding-top: 100%; /* Makes it square */
		position: relative;
		z-index: 2;
		grid-area: thumbnail;
	}

	.thumbnail img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.project-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 20px;
		z-index: 2;
		width: 100%;

		grid-area: info;
		box-sizing: border-box;
	}

	.project-info h3 {
		font-size: 36px;
		font-weight: bold;
		margin-bottom: 5px;
	}

	.project-info p {
		font-size: 18px;
		max-width: 80%;
		line-height: 1.4;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.project-block:hover .project-info p {
		opacity: 1;
	}

	.tags {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		overflow: hidden;
		flex-wrap: wrap; /* Allows wrapping if needed */
		gap: 10px; /* Adds spacing between tags */
		z-index: 2;
		margin: auto;
		padding: 0 20px;
		align-content: flex-start;
		grid-area: tags;
		box-sizing: border-box;
	}

	.tags span {
		color: var(--cwhite);
		padding: 2.5px 5px;
		font-size: 16px;

		/* border-radius: 50px; */
		border: 2px solid var(--cwhite);
		opacity: 0.8;
		/* border-radius: 50px; */

		transition: all 0.3s ease;
	}

	@media (max-width: 768px) {
		.project-block {
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
		}

		.project-info,
		.tags {
			width: 100%;
		}

		.thumbnail {
			width: 80%; /* Makes it smaller on mobile */
			max-width: 300px;
		}
	}
</style>
