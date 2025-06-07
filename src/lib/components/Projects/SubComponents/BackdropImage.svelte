<script lang="ts">
	export let backimage: string;
	export let gametitle: string;
</script>

<div class="backdrop">
	<img src={backimage} alt={gametitle} loading="lazy" />
</div>

<style>
	.backdrop {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: 1;
	}

	.backdrop img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
