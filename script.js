document.addEventListener('DOMContentLoaded', function() {
    // Select the image correctly
    const profileImage = document.querySelector('.profile-image');

    // Initialize a variable for the hue value
    let hue = 0;

    // Define the animation function
    function animateHue() {
        // Increment the hue
        hue++;
        // Reset the hue to 0 after a full rotation
        if (hue > 360) hue = 0;
        // Apply the hue rotation filter to the image
        profileImage.style.filter = `hue-rotate(${hue}deg)`;
        // Request the next frame of the animation
        requestAnimationFrame(animateHue);
    }

    // Start the animation
    animateHue();
});