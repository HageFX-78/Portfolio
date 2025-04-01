<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import type { Component } from 'svelte';

	export let isOpen: boolean = true;
	export let svelteComponent: Component;
</script>

{#if isOpen}
	<button
		class="overlay-backdrop"
		in:fade={{ duration: 200 }}
		out:fade={{ duration: 400 }}
		on:click|stopPropagation={() => (isOpen = false)}
		aria-label="Close window"
	></button>
	<div class="fake-window" in:scale={{ duration: 200 }} out:scale={{ duration: 400 }}>
		<div class="fake-titlebar">
			<div class="fake-title">Toolbox</div>
			<div class="fake-buttons">
				<div class="fake-button close"></div>
				<div class="fake-button minimize"></div>
				<div class="fake-button maximize"></div>
			</div>
		</div>
		<div class="fake-content">
			<div class="fake-content-inner">
				<svelte:component this={svelteComponent} />
			</div>
		</div>
	</div>
{/if}

<style>
	.overlay-backdrop {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 40 !important;

		display: flex;
		justify-content: center;
		align-items: center;
	}
	/* Fake window */

	.fake-window {
		z-index: 41 !important;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		width: 70%;
		/* z-index: 51; */

		max-height: 85%;

		background-color: var(--cwhite);

		box-sizing: border-box;
		/* padding: 10px; */
		padding-top: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;

		border: none;
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
		display: flex; /* Allow it to expand */
		flex-direction: column;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border: 3px solid rgb(255, 255, 255);
		border-top: none;

		overflow: hidden;
		flex-grow: 1;
		padding: 0 50px;
	}

	.fake-content-inner {
		padding: 100px 10px;
		padding-right: 40px;
		width: 100%;
		max-height: 100%;
		overflow-y: auto;
		box-sizing: border-box;
	}
</style>
