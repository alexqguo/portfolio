$(function () {
	var str;
	var oneDay = 24 * 60 * 60 * 1000;
	var commencement = new Date(2014, 4, 26);
	var today = new Date();
	var remainingDays = Math.ceil((commencement - today)/oneDay);
	var str = remainingDays > 1 ? remainingDays + " days" : remainingDays + " day";

	if (remainingDays == 1) { $(".day").html("tomorrow"); }

	$(".num-days").html(str);
});