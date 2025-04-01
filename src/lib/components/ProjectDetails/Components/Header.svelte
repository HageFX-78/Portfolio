<script lang="ts">
	import type { WindowContent } from '$lib/components/Types/WindowContent';

	let data = $props();
</script>

<!-- 
<div class="logo-container">
	{@html `<img src="${data.projectLogo}" alt="logo"/>`}
</div> -->
<div class="video-container">{@html data.projectVideo}</div>
<div class="itch-container">
	{@html data.projectItchFrame}
</div>

<style>
	.logo-container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.video-container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;

		padding: 50px;
	}

	.itch-container {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;

		padding: 50px;
	}

	:global(.logo-container img) {
		max-width: 500px;
		max-height: 500px;
		object-fit: contain;
	}
</style>
