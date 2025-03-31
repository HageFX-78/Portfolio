<script lang="ts">
	import { fly } from 'svelte/transition';
	import Tabs from '$lib/components/Projects/Tabs.svelte';
	import Window from '$lib/components/Tools/Window.svelte';
	import SkillSection from '$lib/components/Visual/SkillSection.svelte';

	import {
		languages,
		gameEngines,
		frameworks,
		versionControl,
		devTools,
		creativeTools,
		hardware
	} from '$lib/data/skillData';

	const ActiveTab = {
		Lore: 0,
		Skills: 1,
		Certificates: 2,
		Hobby: 3
	};
	const tabs = [
		{ project: ActiveTab.Lore, tabname: 'Lore' },
		{ project: ActiveTab.Skills, tabname: 'Skills' },
		{ project: ActiveTab.Certificates, tabname: 'Certificates' },
		{ project: ActiveTab.Hobby, tabname: 'Hobbies' }
	];

	let activeTab: (typeof ActiveTab)[keyof typeof ActiveTab] = ActiveTab.Lore;
</script>

<div
	class="projects-container"
	in:fly={{ y: 200, duration: 400 }}
	out:fly={{ y: 200, duration: 200 }}
>
	<div class="page-title">About Me</div>

	<div class="page-container">
		<div class="profile-summary">
			<img src="images/general/face.jpg" alt="Profile" class="profile-pic" />
			<!-- https://media1.tenor.com/m/x8v1oNUOmg4AAAAd/rickroll-roll.gif -->
		</div>
		<div class="profile-lore">
			<Tabs {tabs} bind:activeTab width={'100%'} />
			{#if activeTab === ActiveTab.Lore}
				<div
					class="profile-text"
					in:fly={{ y: 200, duration: 400 }}
					out:fly={{ y: 200, duration: 200 }}
				>
					Hey I'm JJ / Hage, a gameplay programmer + tools programmer. I'm a fresh grad from UOWKDU
					Malaysia with a degree in Game Tech. I like developing plugins, tools and mods for
					software and games to cheat or improve the workflow. My personal philosophy is every
					coding problem has a solution.
					<br />
					<br />
					I'm confident in problem-solving and creating tools to help speed up the development process
					as the faster you can get a prototype out, the faster you can iterate and improve on it. I
					also tend to focus on the UI/UX as it irks me if they look herrendous. My favourite programming
					languages are C++ and Lua.
					<br />
					<br />
					Favourite genres of games are Puzzle, Simulation, Mech, Comedy and Eroges. My hobbies involve
					watching anime/reading manga, building Gunpla and creating scripts/tools for minor inconveniences.
					I also like to look into varying topics such as retro hardware emulation, cryptography, astronomy
					cause who doesn't like space and things I forgot about.
					<br />
					<br />
					I like drawing as well, although non profesionally. Most solo game artwork are done by myself,
					I tend to prefer Pixel art but I've drawn some raster art like the promotional for my FYP game
					Hazepoint. I also have some experience in Blender and Blockbench for hobby projects that are
					work in progress.
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
		justify-content: flex-start;
		gap: 20px;

		width: auto;
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
	}

	.profile-lore {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		width: 100%;
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

	.profile-pic {
		width: 250px;
		height: 250px;
		object-fit: cover;
		filter: saturate(0.9) sepia(0.2) brightness(0.9);
	}

	/**-----------------------------------------------------*/
</style>
