<script lang="ts">
	import { fly } from 'svelte/transition';
	import Window from '$lib/components/Tools/Window.svelte';
</script>

<div
	class="projects-container"
	in:fly={{ y: 200, duration: 400 }}
	out:fly={{ y: 200, duration: 200 }}
>
	<div class="page-title">About Me</div>

	<div class="profile-summary">
		<img src="images/general/face.jpg" alt="Profile" class="profile-pic" />

		<div class="profile-text">I want a job please</div>
	</div>

	<div class="profile-skills">
		<div class="profile-skills-title">Skills</div>
		<div class="profile-skills-list">
			<div class="profile-skill">C++</div>
			<div class="profile-skill">C#</div>
			<div class="profile-skill">Unreal Engine</div>
			<div class="profile-skill">Unity</div>
			<div class="profile-skill">Game Design</div>
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
		margin: 0 10%;
		overflow-y: auto;
		overflow-x: hidden;
		box-sizing: border-box;
	}

	.profile-summary {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}

	.profile-pic {
		width: 200px;
		height: 200px;
		object-fit: cover;
		filter: saturate(0.9) sepia(0.2) brightness(0.9);
	}
</style>
