<script>
	let name = 'HageFx';
	let description = 'Tools + Gameplay Programmer';
	let image = 'images/general/raymoo.png';
</script>

<div class="profile">
	<img src={image} alt="{name}'s profile picture" />
	<div>
		<h2>{name}</h2>
		<p>{description}</p>
	</div>
</div>

<style>
	.profile {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		gap: 5%;
	}
	.profile > img {
		width: 150px;
		height: 150px;
	}
</style>
