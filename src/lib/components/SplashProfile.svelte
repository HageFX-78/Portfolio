<script>
	let name = 'HageFx';
	let description = 'I am a game dev and tools programmer...';
	let image = 'images/general/raymoo.png';
</script>

<section>
	<img src={image} alt="{name}'s profile picture" />
	<div>
		<h2>{name}</h2>
		<p>{description}</p>
	</div>
</section>

<style>
	section {
		display: flex;
		align-items: center;
	}
	img {
		width: 150px;
		height: 150px;
	}
</style>
