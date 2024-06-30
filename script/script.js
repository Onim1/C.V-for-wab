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


// Get the dropdown button
var dropbtn = document.querySelector(".dropbtn");

// Toggle the display of the dropdown content on click
dropbtn.onclick = function() {
  document.querySelector(".dropdown-content").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

document.querySelector('.dropbtn').addEventListener('click', function() {
  var content = this.nextElementSibling;
  if (content.style.maxHeight){
      content.style.maxHeight = null;
  } else {
      content.style.maxHeight = content.scrollHeight + "px";
  } 
});