<script lang="ts">
	import { onMount } from 'svelte';

	let name = 'Lim Jun Jie';
	let description = 'Tools + Gameplay Programmer';
	let image = 'images/general/raymoo.png';

	let x = 0;
	let y = 0;

	function handleMouseMove(event: MouseEvent) {
		let mscale = 20;

		x = (event.pageX / window.innerWidth) * mscale - mscale * 0.5;
		y = -((event.pageY / window.innerHeight) * mscale - mscale * 0.5);
	}

	onMount(() => {
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	});
</script>

<div
	class="profile noselect"
	style="transform: translate(-50%, -50%) translate({-x}px, {y}px) perspective(1000px) rotateX({y}deg) rotateY({x}deg)"
>
	<div class="top-sec">
		<div>
			<h1>{name}</h1>
			<h1>HageFX</h1>
			<p>{description}</p>
		</div>
		<img src={image} alt="{name}'s profile picture" />
	</div>

	<div class="bottom-sec">
		<div class="sec-title" id="email">
			<img class="sec-icon" src="images/icons/email.png" alt="Email icon" />Email
		</div>
		<div class="sec-title" id="discord">
			<img class="sec-icon" src="images/icons/discord.png" alt="Discord icon" />
			Discord
		</div>
	</div>
</div>

<style>
	.profile {
		position: absolute;
		top: 50%;
		left: 50%;
		/* transform: translate(-50%, -50%) rotateX(25deg) rotateY(-25deg) perspective(100px); */
		gap: 20px;

		padding: 30px;
		height: 400px;
		width: 750px;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		overflow: none;

		box-sizing: border-box;

		background-image: url('images/normalgames/hazepoint/promotional_art_nologo.png');
		background-size: cover;
		background-position: center;
	}
	.profile:hover {
		outline: 2px solid #fff;
	}

	.top-sec {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.top-sec > img {
		width: 250px;
		height: 250px;
		padding: 20px;
	}
	.top-sec > div {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.top-sec > div > h1 {
		font-size: 40px;
		letter-spacing: 5px;
		background-color: black;
		margin: 0;
		width: fit-content;
		padding: 5px 10px;
	}
	.top-sec > div > p {
		font-size: 24px;
		background-color: black;
		margin: 10px 0;
		padding: 5px 10px;
		width: fit-content;
	}

	.sec-icon {
		width: 24px;
		height: 24px;
		object-fit: contain;
		vertical-align: middle;
		margin-right: 5px;
		display: inline-block;
	}
	.bottom-sec {
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: 40px;
		justify-content: center;
		align-items: center;
		margin: 0px 0;
	}
	.sec-title {
		display: flex;
		align-items: center;
		gap: 5px;
		font-size: 24px;
		height: 30px;
		width: fit-content;
		background-color: black;
		padding: 5px 10px;
	}
	.sec-title:hover {
		cursor: pointer;
	}
	#discord:hover {
		background-color: #5865f2;
	}
	#email:hover {
		background-color: #fe7e28;
	}
</style>
