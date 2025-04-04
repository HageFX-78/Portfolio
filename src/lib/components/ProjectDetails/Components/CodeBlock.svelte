<script lang="ts">
	import Highlight, { LineNumbers, HighlightAuto } from 'svelte-highlight';
	import { getFileName } from '$lib/data/Utility';

	import theme from 'svelte-highlight/styles/atom-one-dark';
	import theme2 from 'svelte-highlight/styles/snazzy';

	export let code: string = `// Empty code`;
	// export let language: string = CodeLanguage.CPP;
</script>

<svelte:head>
	{@html theme2}
</svelte:head>

<div class="code-block">
	<HighlightAuto {code} let:highlighted langtag>
		<LineNumbers
			{highlighted}
			hideBorder
			wrapLines
			--line-number-color="rgba(255, 255, 255, 0.3)"
			--border-color="rgba(255, 255, 255, 0.1)"
		/>
	</HighlightAuto>
</div>

<style>
	.code-block {
		width: 100%;
		height: 100%;
		box-sizing: border-box;

		padding: 40px 0;
	}

	:global(pre code, pre code span) {
		font-size: 14px;
	}
</style>
