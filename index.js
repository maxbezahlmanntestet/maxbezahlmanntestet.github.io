document.addEventListener("DOMContentLoaded", function() {
    let dropdownHovered = false;

    document.querySelector(".dropdown-content").addEventListener("mouseover", function() {
        dropdownHovered = true;
        document.querySelector(".dropdown-content").style.display = "block";
    });

    document.querySelector(".dropdown-content").addEventListener("mouseout", function() {
        dropdownHovered = false;
        document.querySelector(".dropdown-content").style.display = "none";
    });

    document.addEventListener("mousemove", function(e) {
        const y = e.clientY;

        if (y <= 50 || dropdownHovered) { // Adjust this value as needed
            document.querySelector(".dropdown-content").style.display = "block";
        } else {
            document.querySelector(".dropdown-content").style.display = "none";
        }
    });

    window.addEventListener("scroll", function() {
        const y = window.scrollY;

        if (y <= 50 || dropdownHovered) { // Adjust this value as needed
            document.querySelector(".dropdown-content").style.display = "block";
        } else {
            document.querySelector(".dropdown-content").style.display = "none";
        }
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