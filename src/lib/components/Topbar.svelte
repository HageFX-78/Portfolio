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

	<button type="button" class="icon-button" on:click={() => openLink('https://hagefx78.itch.io')}>
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
		z-index: 10;
		pointer-events: none;
	}
	.icon-button {
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;

		display: inline-block;
		height: 40px;
		width: 40px;
		pointer-events: all;
	}
	.icon-button:hover {
		transform: scale(1.1);
	}
	.icon-button:active {
		transform: scale(0.9);
	}
	.icon-button:hover img {
		filter: brightness(2);
	}
	.icon-button img {
		height: 100%;
		width: 100%;
	}
	@media (max-width: 768px) {
		.top-links {
			padding: 20px 20px;
			gap: 10px;
		}
		.icon-button {
			height: 30px;
			width: 30px;
		}
	}
</style>
