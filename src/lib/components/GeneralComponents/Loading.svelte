<div class="loading-container noselect">
	<img src="images/general/neco.gif" alt="Loading GIF" class="loading-gif" />
	<div class="loading-text">Loading...</div>
</div>

<style>
	.loading-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		background-color: #000; /* Optional: Set a background color */
		padding: 50px;
		padding-top: 100px;
		box-sizing: border-box;
	}

	.loading-gif {
		width: 300px; /* Adjust size as needed */
		height: auto;

		animation: loading-gif-animation 0.2s infinite; /* Animation for the GIF */
	}

	.loading-text {
		margin-top: 20px;
		font-size: 24px;
		color: #fff; /* Optional: Set text color */

		animation: loading-animation 2s infinite; /* Animation for the text */
	}

	@keyframes loading-animation {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(10px);
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes loading-gif-animation {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.2);
		}
		100% {
			transform: scale(1);
		}
	}
	@media (max-width: 768px) {
		.loading-gif {
			width: 150px; /* Adjust size for smaller screens */
		}

		.loading-text {
			font-size: 18px; /* Adjust text size for smaller screens */
		}
	}
</style>
