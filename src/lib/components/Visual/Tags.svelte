<script lang="ts">
	export let tags: string[] = [];
	export let color: string = 'var(--cwhite)';
	export let opacity: string = '0.8';
</script>

{#each tags as tag}
	<span style="opacity: {opacity}; color:{color}; border: 3px solid {color};">{tag}</span>
{/each}

<style>
	span {
		color: var(--cwhite);
		padding: 3px 10px;
		font-size: 16px;
		font-weight: bold;

		transition: all 0.3s ease;
		border-radius: 25px;
	}
</style>
