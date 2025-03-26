<script lang="ts">
	const { width }: { width: string } = $props();
</script>

<div class="divider" style="width: {width};"></div>

<style>
	.divider {
		border-top: 5px solid var(--cwhite);
		margin: 10px 0;
	}
</style>
