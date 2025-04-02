<script lang="ts">
	export let title: string = '';
	export let imageUrl: string = '';
</script>

<b>{title}</b><br />

<div class="gif-container">
	<img src={imageUrl} alt="inline-gif" draggable="false" />
</div>

<style>
	.gif-container {
		width: 100%;
		height: 100%;
		padding-bottom: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
	}

	.gif-container img {
		width: 100%;
		height: auto;
		max-width: 80%;
		max-height: 80%;
		object-fit: cover;

		image-rendering: pixelated;
	}
	b {
		font-size: 24px;
		width: 100%;
		display: block;
	}
</style>
