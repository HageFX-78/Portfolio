<script lang="ts">
	import { fly } from 'svelte/transition';
	import Tabs from '$lib/components/Projects/Tabs.svelte';
	import SkillSection from '$lib/components/GeneralComponents/SkillSection.svelte';

	import {
		languages,
		gameEngines,
		frameworks,
		versionControl,
		devTools,
		creativeTools,
		hardware
	} from '$lib/data/MySkillData';

	const pairValues = {
		p0: { image: 'images/general/face.jpg', name: 'Hope you can see my eyes :D' },
		p1: { image: 'images/pixelated/face/face-1.jpg', name: 'Click to dipixelate! :D' },
		p2: { image: 'images/pixelated/face/face-2.jpg', name: 'Yup like that!' },
		p3: { image: 'images/pixelated/face/face-3.jpg', name: "That's it, keep going!" },
		p4: { image: 'images/pixelated/face/face-4.jpg', name: 'Almost there!' },
		p5: { image: 'images/general/rick.gif', name: 'Gottcha :D' }
	};

	const faceImages = [
		// Temporary hard coded images, will be replaced with a better system later
		pairValues.p1,
		pairValues.p2,
		pairValues.p2,
		pairValues.p2,
		pairValues.p2,
		pairValues.p2,
		pairValues.p3,
		pairValues.p3,
		pairValues.p3,
		pairValues.p3,
		pairValues.p3,
		pairValues.p4,
		pairValues.p4,
		pairValues.p4,
		pairValues.p4,
		pairValues.p4,
		pairValues.p4,
		pairValues.p5,
		pairValues.p5,
		pairValues.p5,
		pairValues.p5,
		pairValues.p5,
		pairValues.p5,
		pairValues.p5,
		pairValues.p5,
		pairValues.p5,
		pairValues.p0
	];

	let currentFace = 0;
	let currentFaceImage = faceImages[currentFace].image;
	let currentHint = 'Click the picture to dipixelate! :D';

	const ActiveTab = {
		Lore: 0,
		Skills: 1,
		Certificates: 2,
		Hobby: 3
	};
	const tabs = [
		{ project: ActiveTab.Lore, tabname: 'Lore' },
		{ project: ActiveTab.Skills, tabname: 'Skills' }
	];

	let activeTab: (typeof ActiveTab)[keyof typeof ActiveTab] = ActiveTab.Lore;

	function onImageClick() {
		if (currentFace == faceImages.length - 1) {
			return;
		}
		currentFace = currentFace + 1;
		currentFaceImage = faceImages[currentFace].image;
		currentHint = faceImages[currentFace].name;
	}

	let spaceVar = '&nbsp;&nbsp;&nbsp;&nbsp;';
</script>

<div
	class="projects-container"
	in:fly={{ y: 200, duration: 400 }}
	out:fly={{ y: 200, duration: 200 }}
>
	<div class="page-title">About Me</div>

	<div class="page-container">
		<div class="profile-summary">
			<button
				class="profile-pic-button"
				on:click={() => {
					onImageClick();
				}}
				aria-label="Profile picture"
			>
				<img src={currentFaceImage} alt="Profile" class="profile-pic" />
			</button>
			<div class="profile-pic-text">
				<p>{currentHint}</p>
			</div>
		</div>
		<div class="profile-lore">
			<Tabs {tabs} bind:activeTab width={'100%'} />
			{#if activeTab === ActiveTab.Lore}
				<div
					class="profile-text"
					in:fly={{ y: 200, duration: 400 }}
					out:fly={{ y: 200, duration: 200 }}
				>
					{@html spaceVar}Hey I'm JJ / Hage, a gameplay programmer + tools programmer. I'm a fresh
					grad from UOWKDU Malaysia with a degree in Game Tech. I like developing plugins, tools and
					mods for software and games to cheat or improve the workflow. My personal philosophy is
					every coding problem has a solution.
					<br />
					<br />
					{@html spaceVar}I'm confident in problem-solving and creating tools to help speed up the
					development process as the faster you can get a prototype out, the faster you can iterate
					and improve on it. I also tend to focus on the UI/UX as it irks me if they look
					horrendous. I have experience with Network programmng at my previous intern as well from
					Roblox Studio. My favourite programming languages are C++ and Lua.
					<br />
					<br />
					{@html spaceVar}Favourite genres of games are Puzzle, Simulation, Mech, Comedy and Eroges.
					My hobbies involve watching anime/reading manga, building Gunpla and creating
					scripts/tools for minor inconveniences. I also like to look into varying topics such as
					retro hardware emulation, cryptography, astronomy cause who doesn't like space and things
					I forgot about.
					<br />
					<br />
					{@html spaceVar}I like drawing as well, although non profesionally. Most solo game artwork
					are done by myself, I tend to prefer Pixel art but I've drawn some raster art like the
					promotional for my FYP game Hazepoint. I also have some experience in Blender and
					Blockbench for hobby projects that are work in progress.
				</div>
			{:else if activeTab === ActiveTab.Skills}
				<div
					class="profile-skills"
					in:fly={{ y: 200, duration: 400 }}
					out:fly={{ y: 200, duration: 200 }}
				>
					<SkillSection sectionTitle="Languages" skills={languages} />
					<SkillSection sectionTitle="Libs/Framework" skills={frameworks} />
					<SkillSection sectionTitle="Game Engines" skills={gameEngines} />
					<SkillSection sectionTitle="Version Control" skills={versionControl} />
					<SkillSection sectionTitle="Dev Tools" skills={devTools} />
					<SkillSection sectionTitle="Creative Tools" skills={creativeTools} />
					<SkillSection sectionTitle="Hardware" skills={hardware} />
				</div>
			{/if}
		</div>
	</div>

	<!-- <Window /> -->
</div>

<style>
	.projects-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		height: 100%;
		gap: 30px;
		margin: 0 15%;
		overflow-y: auto;
		overflow-x: hidden;
		box-sizing: border-box;
	}

	.page-container {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: flex-start;
		width: 100%;
		height: fit-content;
		gap: 20px;
		/* position: relative; */
		grid-template-areas: 'psum pskills';
		grid-template-columns: 40% 60%;
		box-sizing: border-box;

		padding-bottom: 100px;
	}

	.profile-summary {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 20px;

		width: 40%;
		position: relative;

		grid-area: psum;
	}

	.profile-text {
		position: absolute;
		top: 50px;
		font-size: 0.8em;
		color: var(--cwhite);
		text-align: justify;
		line-height: 1.5em;
		padding: 20px;
		box-sizing: border-box;

		background-color: rgba(0, 0, 0, 0.5);
	}

	.profile-lore {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		width: 60%;
		height: fit-content;
		gap: 20px;
		position: relative;
		/* padding: 10px; */
		box-sizing: border-box;
		/* padding: 0px 40px; */
		grid-area: pskills;
	}
	.profile-skills {
		position: absolute;
		top: 80px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: fit-content;
		gap: 50px;
		padding: 0px 20px;
		padding-bottom: 100px;
		box-sizing: border-box;
	}

	.profile-pic-button {
		all: unset;
		width: 80%;
		aspect-ratio: 1/1;
		background-color: var(--cwhite);
		padding: 2%;

		box-sizing: border-box;
		cursor: pointer;
		transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	.profile-pic-button:hover {
		transform: scale(1.05);
	}
	.profile-pic-button:active {
		transform: scale(0.95);
	}

	.profile-pic-text {
		text-align: center;

		color: var(--cwhite);
		background-color: black;
		padding: 10px 20px;
		box-sizing: border-box;
	}
	.profile-pic {
		width: 100%;
		height: 100%;
		object-fit: cover;
		/* filter: saturate(0.9) sepia(0.2) brightness(0.9); */
		image-rendering: pixelated;
	}

	/**-----------------------------------------------------*/
</style>
