document.addEventListener("DOMContentLoaded", () => {
    const follower = document.getElementById("follower");
    const followerWidth = follower.offsetWidth;
    const followerHeight = follower.offsetHeight;

    document.addEventListener("mousemove", (e) => {
        // Get the mouse coordinates
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Calculate the position to center the circle on the cursor
        const followerX = mouseX - followerWidth / 2;
        const followerY = mouseY - followerHeight / 2;

        // Update the follower's position using CSS transform
        follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
    });
});