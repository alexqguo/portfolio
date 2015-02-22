(function() {
	var slider = document.getElementById("slider");
	var navLinks = document.getElementsByClassName("navlink");

	function navLinkClick(e) {
		e.preventDefault();
		console.log(e.currentTarget.getAttribute("data-tab"));
	}

	function hideSlider() {
		slider.className += " hidden";
	}

	function showSlider() {
		slider.className = slider.className.replace(/\b hidden\b/g, "");
	}

	for (var i = 0; i < navLinks.length; i++) {
		navLinks[i].addEventListener("click", navLinkClick);
	};

	setTimeout(function() {
		slider.className += " hidden";
	}, 300);

}());