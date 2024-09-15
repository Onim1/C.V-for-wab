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


document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.dropdown');
  const dropbtn = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropbtn.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
  });

  window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
      if (dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
      }
    }
  });
});