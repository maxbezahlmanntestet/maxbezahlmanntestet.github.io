document.addEventListener("DOMContentLoaded", function() {
    let dropdownHovered = false;

    function updateDropdownDisplay() {
        const y = window.scrollY;

        if (y <= 200) {
            document.querySelector(".dropdown-content").style.display = "block";
        } else if (dropdownHovered){
            document.querySelector(".dropdown-content").style.display = "block";
        } else {
            document.querySelector(".dropdown-content").style.display = "none";
			dropdownHovered = false;
		}
    }

    window.addEventListener("scroll", updateDropdownDisplay);

    document.addEventListener("mousemove", function(e) {
        const y2 = e.clientY;

        if (y2 <= 50 || dropdownHovered) {
            document.querySelector(".dropdown-content").style.display = "block";
        }
    });

    document.querySelector(".dropdown-content").addEventListener("mouseover", function() {
        dropdownHovered = true;
        document.querySelector(".dropdown-content").style.display = "block";
    });

    document.querySelector(".dropdown-content").addEventListener("mouseout", function() {
        dropdownHovered = false;
		updateDropdownDisplay();
    });
});




document.addEventListener('DOMContentLoaded', function() {
    // Check if the URL contains a hash (fragment identifier)
    if (window.location.hash) {
        // Scroll to the element with the matching ID
        var targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            targetElement.scrollIntoView();
        }
    }
});

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}