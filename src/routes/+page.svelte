<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	let name = 'Lim Jun Jie';
	let description = 'Tools + Gameplay Programmer';
	let image = 'images/general/raymoo.png';

	let x = 0;
	let y = 0;

	let isFlipped = false;

	function handleMouseMove(event: MouseEvent) {
		let mscale = 20;

		x = (event.pageX / window.innerWidth) * mscale - mscale * 0.5;
		y = -((event.pageY / window.innerHeight) * mscale - mscale * 0.5);
	}

	function copyToClipboard(text: string) {
		navigator.clipboard.writeText(text).then(
			() => {
				console.log(`Text copied to clipboard: ${text}`);
			},
			(err) => {
				console.error('Could not copy text: ', err);
			}
		);
	}
	function flipCard(event: MouseEvent) {
		isFlipped = !isFlipped;
	}

	onMount(() => {
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	});
</script>

<button
	class="profile noselect"
	style="transform: translate(-50%, -50%) translate({-x}px, {y}px) perspective(1000px) rotateX({y}deg) rotateY({x}deg) rotateY({isFlipped
		? 180
		: 0}deg);"
	in:scale={{ duration: 500 }}
	on:click={flipCard}
>
	{#if !isFlipped}
		<div id="card-front" class="card-face">
			<div class="top-sec">
				<div>
					<h1>{name}</h1>
					<h1>HageFX</h1>
					<p>{description}</p>
				</div>
				<img src={image} alt="{name}'s profile picture" />
			</div>

			<div class="bottom-sec">
				<div
					class="sec-title"
					id="email"
					on:click={(event) => {
						event.stopPropagation();
						copyToClipboard('jjfreelim@gmail.com');
					}}
				>
					<img class="sec-icon" src="images/icons/email.png" alt="Email icon" />
					jjfreelim@gmail.com
				</div>

				<div
					class="sec-title"
					id="discord"
					on:click={(event) => {
						event.stopPropagation();
						copyToClipboard('hagetonakaifx');
					}}
				>
					<img class="sec-icon" src="images/icons/discord.png" alt="Discord icon" />
					hagetonakaifx
				</div>
			</div>
		</div>
	{:else}
		<div id="card-back" class="card-face">
			This site is still WIP :P <br /> Not everything is here <br />
			Check out my itch page from the top right!
		</div>
	{/if}
</button>

<style>
	.profile {
		all: unset;

		position: absolute;
		top: 50%;
		left: 50%;
		/* transform: translate(-50%, -50%) rotateX(25deg) rotateY(-25deg) perspective(100px); */
		gap: 20px;

		padding: 30px;
		width: 750px;
		aspect-ratio: 1.9/1;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		overflow: none;

		transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

		box-sizing: border-box;

		background-image: url('/images/normalgames/hazepoint/promo_art.png');
		background-size: cover;
		background-position: center;
	}
	.profile:hover {
		outline: 2px solid #fff;
	}
	.card-face {
		display: flex;

		width: 100%;
		height: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	#card-back {
		background: black;
		color: white;
		transform: rotateY(180deg);
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
	.sec-title:active {
		transform: scale(0.95);
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

	@media (max-width: 768px) {
		.profile {
			width: 100%;
			padding: 10px;
			gap: 5px;
		}
		.top-sec > img {
			width: 150px;
			height: 150px;
			padding: 10px;
		}
		.top-sec > div > h1 {
			font-size: 20px;
		}
		.top-sec > div > p {
			font-size: 14px;
			margin: 5px 0;
			padding: 5px;
		}
		.sec-title {
			font-size: 16px;
			height: 20px;
			width: fit-content;
			padding: 5px;
		}
	}
</style>
