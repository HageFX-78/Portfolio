<div class="scrollbar-container">
	<div class="scrollbar-circle top"></div>
	<div class="scrollbar-circle bottom"></div>
</div>

<style>
	/* Make sure the scrollbar container is positioned relatively */
	.scrollbar-container {
		position: relative; /* Allows circles to be positioned inside */
		width: 100%; /* Adjust based on your layout */
	}

	/* Custom Circles */
	.scrollbar-circle {
		position: absolute;
		right: 0; /* Stick to the right of the container */
		width: 20px;
		height: 20px;
		border: 4px solid #ffffff; /* Hollow circle */
		border-radius: 50%;
		background: transparent;
		z-index: 9999;
	}

	.scrollbar-circle.top {
		top: 10vh; /* Adjust position relative to the container */
	}

	.scrollbar-circle.bottom {
		bottom: 10vh; /* Adjust position relative to the container */
	}
</style>
