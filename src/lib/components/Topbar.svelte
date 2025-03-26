<script lang="ts">
	let gitIcon = 'images/icons/github.png';
	let linkedinIcon = 'images/icons/linkedin.png';
	let itchIcon = 'images/icons/itch.png';

	function openLink(url: string) {
		window.open(url, '_blank');
	}
</script>

<div class="top-links">
	<button
		type="button"
		class="icon-button"
		on:click={() => openLink('https://github.com/HageFX-78')}
	>
		<img src={gitIcon} alt="GitHub" />
	</button>
	<button
		type="button"
		class="icon-button"
		on:click={() => openLink('https://www.linkedin.com/in/jjlim-hagefx/')}
	>
		<img src={linkedinIcon} alt="LinkedIn" />
	</button>

	<button type="button" class="icon-button" on:click={() => openLink('https://hagefx.itch.io/')}>
		<img src={itchIcon} alt="Itch.io" />
	</button>
</div>

<style>
	.top-links {
		display: flex;
		justify-content: flex-end;
		box-sizing: border-box;
		padding: 20px 50px;
		width: 100%;
		gap: 20px;
		margin: 0;

		position: absolute;
		z-index: 5;
	}
	.icon-button {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;

		display: inline-block;
		height: 40px;
		width: 40px;
	}
	.icon-button img {
		height: 100%;
		width: 100%;
	}
</style>
