<script lang="ts">
	const { width }: { width: string } = $props();
</script>

<div class="divider" style="width: {width};"></div>

<style>
	.divider {
		border-top: 2px solid var(--cwhite);
	}
</style>
