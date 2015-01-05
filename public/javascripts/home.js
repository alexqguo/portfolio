$(function() {

	setTimeout(function() { // not sure why but this is needed or else there's no animation
		$("#slider").animate({height: "0%"});
	}, 30);

	$("#nav a").click(function(e) {
		var url = $(this).attr("href");

		$("#slider").animate({
			height: "100%"
		}, function() {
			document.location.href = url;
		});

		return false;
	});

	$("#main").smoothState();
});