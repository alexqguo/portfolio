$(function () {

	$("#carousel").slick({
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: true,
		speed: 400,
		dots: true,
		fade: true
	});

	var date = new Date("06/13/2020");
	var seconds = 1000;
	var minutes = seconds * 60;
	var hours = minutes * 60;
	var days = hours * 24;

	function st (int, str, noComma) {
		var str = " " + (int == 1 ? str : str + "s");
		
		return (noComma ? str : str + ", ");
	}

	function updateTime () {
		var now = new Date();
		var remaining = date - now;

		if (remaining < 0) {
			$(".timer").html("You're 29!");
		} else {
			var remSeconds = Math.floor((remaining % minutes) / seconds);
			var remMins = Math.floor((remaining % hours) / minutes);
			var remHours = Math.floor((remaining % days) / hours);
			var remDays = Math.floor(remaining / days);

			$(".timer").html(remDays + st(remDays, "day") + remHours + st(remHours, "hour") + 
				remMins + st(remMins, "minute") + remSeconds + st(remSeconds, "second", true));
		}
	}

	setInterval(updateTime, 1000);

	var currentTab = $($(".note-tab").not("invisible")[0]);
	$(".notes-list-item").on("click", function (event) {
		var tabName = $(event.target).data("tab");

		currentTab.toggleClass("invisible");
		currentTab = $("#" + tabName);
		currentTab.toggleClass("invisible");
	});

	$("a").attr("target", "_blank");

	if (Date.now() > new Date("12/25/2014")) {
		$(".christmas").html("<a href='/snow'>Merry Christmas :)</a>");
	}

});