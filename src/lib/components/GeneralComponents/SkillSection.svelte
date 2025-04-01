<script lang="ts">
	import SkillBlock from './SkillBlock.svelte';

	type Skill = {
		url: string;
		name: string;
		invert?: boolean;
	};

	export let sectionTitle: string;
	export let skills: Skill[];
</script>

<div class="profile-skills">
	<div class="profile-skills-list">
		<div class="profile-skills-title noselect">{sectionTitle}</div>
		{#each skills as skill}
			<SkillBlock url={skill.url} name={skill.name} invert={skill.invert} />
		{/each}
	</div>
</div>

<style>
	.profile-skills {
		width: 100%;
		position: relative;
		box-sizing: border-box;
		background-color: rgb(31, 126, 123);
		padding: 4px;
		/* padding-top: 0px; */
		/* overflow: hidden; */

		transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1);
	}
	.profile-skills:hover {
		transform: scale(1.05);
	}
	.profile-skills-title {
		position: absolute;
		top: -1em;
		left: 1em;

		font-size: 0.9em;
		/* font-weight: 600; */
		color: var(--cwhite);
		text-align: center;
		display: block;
		padding: 5px 20px;
		background: black;
		border: 4px solid rgb(31, 126, 123);
		width: 15em;
		/* border: none; */
		cursor: pointer;
		box-sizing: border-box;
	}
	.profile-skills-list {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 30px 20px;
		box-sizing: border-box;
		background-color: black;

		overflow: hidden;
		transition:
			max-height 0.3s cubic-bezier(0.25, 1, 0.5, 1),
			padding 0.3s cubic-bezier(0.25, 1, 0.5, 1);
	}
</style>
