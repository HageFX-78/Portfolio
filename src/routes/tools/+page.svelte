<script lang="ts">
	import Divider from '$lib/components/Projects/TitleDivider.svelte';
</script>

<div class="projects-container">
	<h1 class="page-title">Tools</h1>
	<Divider width="60%" />

	<div class="fake-window">
		<div class="fake-titlebar">
			<div class="fake-title">Toolbox</div>
			<div class="fake-buttons">
				<div class="fake-button close"></div>
				<div class="fake-button minimize"></div>
				<div class="fake-button maximize"></div>
			</div>
		</div>
		<div class="fake-content">
			<p>Here is a list of tools that I have created for various purposes.</p>
		</div>
	</div>
</div>

<style>
	.projects-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		height: 100%;
		gap: 30px;
		margin: 0 10%;
		padding-bottom: 50px;
		overflow: hidden;
		box-sizing: border-box;
	}
	.projects-container h1 {
		font-size: 50px;
	}
	/* Fake window */

	.fake-window {
		width: 80%;
		height: 400px; /* Set a fixed height */
		position: relative;
		background-color: var(--cwhite);

		box-sizing: border-box;
		/* padding: 10px; */
		padding-top: 0;
		display: flex;
		flex-direction: column;
	}

	.fake-titlebar {
		height: auto;
		margin: 0;
		box-sizing: border-box;
		margin: 0px;
		width: 100%;
	}
	.fake-title {
		color: var(--cblack);

		font-size: 20px;
		font-weight: bold;
		padding: 5px;
		display: inline-block;
	}

	.fake-content {
		background-color: black;
		width: 100%;
		flex-grow: 1;
		box-sizing: border-box;
		border: 3px solid blue;
		border-top: none;
	}
</style>
