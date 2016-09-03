$(function () {
	$("form").on("submit", function (event) {
		event.preventDefault();
		calcTipAmt();
	});

	$("input:radio").on("click", function (event) {
		calcTipAmt();
	});

	function calcTipAmt() {
		var tipRate = calcTipRate();
		var totalAmount = parseFloat($("#total-amt").val());

		$(".tip-rate").html(Math.round(tipRate * 100) + "%");

		if (!isNaN(totalAmount) && totalAmount >= 0) {
			$(".tip-amt").html("$" + (totalAmount * tipRate).toFixed(2));
		}
	}

	function calcTipRate() {
		var base = 0.12;

		var radios = $("input:radio:checked");
		for (var i = 0; i < radios.length; i++) {
			if ($(radios[i]).val() == "yes") {
				base += 0.02;
			}
		};

		return base;
	}

});