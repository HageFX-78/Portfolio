<script>
    let name = "HageFx";
    let description = "I am a game dev and tools programmer...";
    let image = "images/general/raymoo.png";
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
    gap: 20px;
}
img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
</style>
  