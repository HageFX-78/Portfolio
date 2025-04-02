<script lang="ts">
	import Highlight, { LineNumbers } from 'svelte-highlight';
	import { getFileName } from '$lib/data/Utils';

	import cpp from 'svelte-highlight/languages/cpp';

	import theme from 'svelte-highlight/styles/atom-one-dark';
	import theme2 from 'svelte-highlight/styles/snazzy';

	import { CodeLanguage } from '$lib/components/Types/CodeLanguage';

	export let code: string = `// Empty code`;
	// export let language: string = CodeLanguage.JAVASCRIPT;
</script>

<svelte:head>
	{@html theme2}
</svelte:head>

<div class="code-block">
	<Highlight
		language={cpp}
		{code}
		let:highlighted
		langtag
		--langtag-top="0.5rem"
		--langtag-right="0.5rem"
	>
		<LineNumbers
			{highlighted}
			hideBorder
			wrapLines
			--line-number-color="rgba(255, 255, 255, 0.3)"
			--border-color="rgba(255, 255, 255, 0.1)"
		/>
	</Highlight>
</div>

<style>
	.code-block {
		width: 100%;
		height: 100%;
		box-sizing: border-box;

		padding: 40px 0;
		/* opacity: 0.7; */

		/* font-size: 18px !important; */
	}

	:global(pre code, pre code span) {
		font-size: 14px;
	}
</style>
