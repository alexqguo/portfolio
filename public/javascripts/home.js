(function() {
	var slider = document.getElementById("slider");
	var navLinks = document.getElementsByClassName("navlink");
	var sections = document.getElementsByTagName("section");

	function hideSlider() {
		slider.className += " hidden";
	}

	function showSlider() {
		slider.className = "";
	}

	function displayNewTab(newTab) {
		showSlider();

		setTimeout(function() {
			for (var i = 0; i < sections.length; i++) {
				sections[i].className += " hide";
			};

			newTab.className = "";

			hideSlider();
		}, 500);

	}

	function navLinkClick(e) {
		e.preventDefault();
		var tabName = e.currentTarget.getAttribute("data-tab");
		var newTab = document.getElementById(tabName);

		displayNewTab(newTab);
	}

	for (var i = 0; i < navLinks.length; i++) {
		navLinks[i].addEventListener("click", navLinkClick);
	};

	setTimeout(function() {
		slider.className += " hidden";
	}, 300);

}());