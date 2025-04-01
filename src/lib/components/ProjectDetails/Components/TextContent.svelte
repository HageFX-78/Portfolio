<script lang="ts">
	export let text: string = '';
</script>

<div class="rich-text">
	{@html text}
</div>

<style>
	:global(.rich-text b) {
		font-size: 24px;
		/* letter-spacing: 2px; */
		width: 100%;
		display: block;
	}

	:global(.rich-text p) {
		color: var(--c2white) !important;
		text-align: justify;
		padding: 10px 0;
		text-indent: 50px;
		line-height: 1.2rem;
	}

	:global(.rich-text li) {
		color: var(--c2white) !important;
		text-align: justify;
		padding: 10px 0;
		line-height: 1.2rem;
	}
</style>
