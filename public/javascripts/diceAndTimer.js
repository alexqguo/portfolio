$(function() {

	var total, mins, seconds = 0;
	var sound = new Audio('/sounds/ding.mp3');

	function formatSeconds(secs) {
		return secs < 10 ? "0" + secs : secs;
	}

	function updateTime() {
		mins = Math.floor(total / 60);
		secs = formatSeconds(total % 60);
		$(".mins").html(mins);
		$(".secs").html(secs);

		if (total == 0) {
			$(".time-display").addClass("timeup");
			sound.play();
		}
	}

	function calculateTime() {
		if (total >= 0) {
			updateTime();
		}

		--total;
	}

	function startTimer(e) {
		total = $(e.currentTarget).data("time");
		$(".time-display").removeClass("timeup");
		calculateTime();
	}

	function generateRoll() {
		return Math.floor((Math.random() * 6) + 1);
	}

	function rollDice(e) {
		var roll = generateRoll();
		$(".dot, .die").hide();
		$(".die").fadeToggle("fast");

		switch (roll) {
			case 1:
				$(".dot.center").fadeToggle("fast");
				break;
			case 2:
				$(".dot.top-right, .dot.bottom-left").fadeToggle("fast");
				break;
			case 3:
				$(".dot.top-right, .dot.bottom-left, .dot.center").fadeToggle("fast");
				break;
			case 4:
				$(".dot.top-right, .dot.bottom-left, .dot.top-left, .dot.bottom-right").fadeToggle("fast");
				break;
			case 5:
				$(".dot.top-right, .dot.bottom-left, .dot.top-left, .dot.bottom-right, .dot.center").fadeToggle("fast");
				break;
			case 6:
				$(".dot.top-right, .dot.bottom-left, .dot.top-left, .dot.bottom-right, .dot.middle-right, .dot.middle-left").fadeToggle("fast");
				break;
			default:
				console.log("Oops, problem with the dice roll");
				break;
		}

	}


	rollDice();
	setInterval(calculateTime, 1000);
	$(".roll").click(rollDice);
	$(".time-button").click(startTimer);
});