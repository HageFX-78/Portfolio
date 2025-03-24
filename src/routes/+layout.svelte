<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import TopLinks from '$lib/components/Topbar.svelte';
</script>

<div class="container">
	<Navbar />
	<!-- Left Navigation Bar -->
	<TopLinks />
	<!-- Top Right Links -->
	<div class="content">
		<slot />
		<!-- This is where the page-specific content goes -->
	</div>
</div>

<style>
	@font-face {
		font-family: 'Agave';
		src: url('/fonts/Agave-Regular') format('agave');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'mononoki';
		src: url('/fonts/mononoki-Regular') format('mononoki');
		font-weight: normal;
		font-style: normal;
	}
	:global(*) {
		font-family: 'mononoki', sans-serif;
		font-size: 16px;
		color: #ffffff;
	}

	:root {
		--primary-color: #333;
		--secondary-color: #a5a5a5;
		--tertiary-color: #ff00de;
	}
	:global(html, body) {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100vh;
		/*glow text*/

		/* text-shadow: 0px 0px 2px white,0px 0px 10px white; */

		background: radial-gradient(
			circle,
			rgb(30, 30, 30) 0%,
			rgba(0, 0, 0, 1) 85%,
			rgba(0, 0, 0, 1) 100%
		);
	}
	:global(body)::after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background:
			linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
			linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
		z-index: 2;
		background-size:
			100% 3px,
			1px 100%;
		pointer-events: none;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100vh;
	}
	.container {
		margin: 0;
		width: 100%;
	}
</style>
