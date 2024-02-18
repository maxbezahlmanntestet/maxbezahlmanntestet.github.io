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

function ChangeConfig4() {
	document.querySelector(".location1content").style.display = "block";
	document.querySelector(".location2content").style.display = "none";
	document.querySelector(".location3content").style.display = "none";
	document.querySelector(".location4content").style.display = "none";
	
	document.querySelector(".location1coords").style.display = "block";
	document.querySelector(".location2coords").style.display = "none";
	document.querySelector(".location3coords").style.display = "none";
	document.querySelector(".location4coords").style.display = "none";
	
	document.querySelector(".location1header").style.backgroundColor = "#21bf13";
	document.querySelector(".location2header").style.backgroundColor = "#e5e5e5";
	document.querySelector(".location3header").style.backgroundColor = "#e5e5e5";
	document.querySelector(".location4header").style.backgroundColor = "#e5e5e5";
	
	document.querySelector(".location1header").style.boxShadow = "0 0 8px 4px rgba(0, 0, 0, 0.4)";
	document.querySelector(".location2header").style.boxShadow = "0 0 0px 0px rgba(0, 0, 0, 0.4)";
	document.querySelector(".location3header").style.boxShadow = "0 0 0px 0px rgba(0, 0, 0, 0.4)";
	document.querySelector(".location4header").style.boxShadow = "0 0 0px 0px rgba(0, 0, 0, 0.4)";
	
	document.querySelector(".location1").style.height = "69.6%";
	document.querySelector(".location2").style.height = "9.2%";
	document.querySelector(".location3").style.height = "9.2%";
	document.querySelector(".location4").style.height = "9.2%";
	
	document.querySelector(".marker4").style.filter = "invert(64%) sepia(55%) saturate(5036%) hue-rotate(79deg) brightness(132%) contrast(91%)";
	document.querySelector(".marker3").style.filter = "";
	document.querySelector(".marker2").style.filter = "";
	document.querySelector(".marker1").style.filter = "";
	
		
	document.querySelector(".unibutton").style.width = "100%";
}

function ChangeConfig3() {
	document.querySelector(".location2content").style.display = "block";
	document.querySelector(".location1content").style.display = "none";
	document.querySelector(".location3content").style.display = "none";
	document.querySelector(".location4content").style.display = "none";
	
	document.querySelector(".location2coords").style.display = "block";
	document.querySelector(".location1coords").style.display = "none";
	document.querySelector(".location3coords").style.display = "none";
	document.querySelector(".location4coords").style.display = "none";
	
	document.querySelector(".location2header").style.backgroundColor = "#21bf13";
	document.querySelector(".location1header").style.backgroundColor = "#e5e5e5";
	document.querySelector(".location3header").style.backgroundColor = "#e5e5e5";
	document.querySelector(".location4header").style.backgroundColor = "#e5e5e5";
	
	document.querySelector(".location2header").style.boxShadow = "0 0 8px 4px rgba(0, 0, 0, 0.4)";
	document.querySelector(".location1header").style.boxShadow = "0 0 0px 0px rgba(0, 0, 0, 0.4)";
	document.querySelector(".location3header").style.boxShadow = "0 0 0px 0px rgba(0, 0, 0, 0.4)";
	document.querySelector(".location4header").style.boxShadow = "0 0 0px 0px rgba(0, 0, 0, 0.4)";
	
	document.querySelector(".location2").style.height = "69.6%";
	document.querySelector(".location1").style.height = "9.2%";
	document.querySelector(".location3").style.height = "9.2%";
	document.querySelector(".location4").style.height = "9.2%";
	
	document.querySelector(".marker3").style.filter = "invert(64%) sepia(55%) saturate(5036%) hue-rotate(79deg) brightness(132%) contrast(91%)";
	document.querySelector(".marker4").style.filter = "";
	document.querySelector(".marker2").style.filter = "";
	document.querySelector(".marker1").style.filter = "";
	
		
	document.querySelector(".unibutton").style.width = "100%";
}

function ChangeConfig2() {
	document.querySelector(".location3content").style.display = "block";
	document.querySelector(".location1content").style.display = "none";
	document.querySelector(".location2content").style.display = "none";
	document.querySelector(".location4content").style.display = "none";
	
	document.querySelector(".location3coords").style.display = "block";
	document.querySelector(".location1coords").style.display = "none";
	document.querySelector(".location2coords").style.display = "none";
	document.querySelector(".location4coords").style.display = "none";
	
	document.querySelector(".location3header").style.backgroundColor = "#21bf13";
	document.querySelector(".location1header").style.backgroundColor = "#e5e5e5";
	document.querySelector(".location2header").style.backgroundColor = "#e5e5e5";
	document.querySelector(".location4header").style.backgroundColor = "#e5e5e5";
	
	document.querySelector(".location3header").style.boxShadow = "0 0 8px 4px rgba(0, 0, 0, 0.4)";
	document.querySelector(".location1header").style.boxShadow = "0 0 0px 0px rgba(0, 0, 0, 0.4)";
	document.querySelector(".location2header").style.boxShadow = "0 0 0px 0px rgba(0, 0, 0, 0.4)";
	document.querySelector(".location4header").style.boxShadow = "0 0 0px 0px rgba(0, 0, 0, 0.4)";
	
	document.querySelector(".location3").style.height = "69.6%";
	document.querySelector(".location1").style.height = "9.2%";
	document.querySelector(".location2").style.height = "9.2%";
	document.querySelector(".location4").style.height = "9.2%";
	
	document.querySelector(".marker2").style.filter = "invert(64%) sepia(55%) saturate(5036%) hue-rotate(79deg) brightness(132%) contrast(91%)";
	document.querySelector(".marker4").style.filter = "";
	document.querySelector(".marker3").style.filter = "";
	document.querySelector(".marker1").style.filter = "";
}

function ChangeConfig1() {
	document.querySelector(".location4content").style.display = "block";
	document.querySelector(".location1content").style.display = "none";
	document.querySelector(".location2content").style.display = "none";
	document.querySelector(".location3content").style.display = "none";
	
	document.querySelector(".location4coords").style.display = "block";
	document.querySelector(".location1coords").style.display = "none";
	document.querySelector(".location2coords").style.display = "none";
	document.querySelector(".location3coords").style.display = "none";
	
	document.querySelector(".location4header").style.backgroundColor = "#21bf13";
	document.querySelector(".location1header").style.backgroundColor = "#e5e5e5";
	document.querySelector(".location2header").style.backgroundColor = "#e5e5e5";
	document.querySelector(".location3header").style.backgroundColor = "#e5e5e5";
	
	document.querySelector(".location4header").style.boxShadow = "0 0 8px 4px rgba(0, 0, 0, 0.4)";
	document.querySelector(".location1header").style.boxShadow = "0 0 0px 0px rgba(0, 0, 0, 0.4)";
	document.querySelector(".location2header").style.boxShadow = "0 0 0px 0px rgba(0, 0, 0, 0.4)";
	document.querySelector(".location3header").style.boxShadow = "0 0 0px 0px rgba(0, 0, 0, 0.4)";
	
	document.querySelector(".location4").style.height = "69.6%";
	document.querySelector(".location1").style.height = "9.2%";
	document.querySelector(".location2").style.height = "9.2%";
	document.querySelector(".location3").style.height = "9.2%";
	
	document.querySelector(".marker1").style.filter = "invert(64%) sepia(55%) saturate(5036%) hue-rotate(79deg) brightness(132%) contrast(91%)";
	document.querySelector(".marker4").style.filter = "";
	document.querySelector(".marker3").style.filter = "";
	document.querySelector(".marker2").style.filter = "";
	
	document.querySelector(".unibutton").style.width = "0%";
}

