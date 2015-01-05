(function(root) {
	var Snow = root.Snow = (root.Snow || {});
	Snow.snowflakes = [];
	Snow.falling = null;
	Snow.throttleTime = Date.now();
	Snow.mouseCheckDelay = 500;
	Snow.height = 3;
	Snow.FALL_SPEED = 2.5;
	Snow.HORIZONTAL_SPEED = 0;
	Snow.TOTAL_SNOWFLAKES = 250;
	Snow.maxX = window.innerWidth;
	Snow.maxY = window.innerHeight;

	var Snowflake = Snow.Snowflake = function (centerX, centerY, radius) {
		this.fallSpeed = Snow.FALL_SPEED + Math.random() * radius;
		this.centerX = centerX;
		this.centerY = centerY;
		this.radius = radius;
		this.color = "#eee";
	};

	Snowflake.MAX_RADIUS = 5;

	Snowflake.generateRandom = function(startFromTop) {
		var startingY = startFromTop ? 0 : Snow.maxY * Math.random();

		return new Snowflake(
		  Snow.maxX * Math.random(),
		  startingY,
		  Snowflake.MAX_RADIUS * Math.random()
		);
	};

	Snowflake.prototype.fall = function() {
		this.centerY += this.fallSpeed;
		this.centerX += Snow.HORIZONTAL_SPEED;

		if (this.centerY > Snow.maxY - Snow.height) {
			Snow.addNewSnowflake();
			this.fallSpeed = 0;
		}
		if (this.centerX > Snow.maxX) {
			this.centerX = 0;
		} else if (this.centerX < 0) {
			this.centerX = Snow.maxX;
		}
	};

	Snowflake.prototype.render = function(ctx) {
		ctx.fillStyle = this.color;
		ctx.beginPath();

		ctx.arc(
			this.centerX,
			this.centerY,
			this.radius,
			0,
			2 * Math.PI,
			false
		);

		ctx.fill();
	};

	Snow.addNewSnowflake = function() {
		this.snowflakes.push(Snowflake.generateRandom(true));
	}

	Snow.render = function(ctx) {
		ctx.clearRect(0, 0, Snow.maxX, Snow.maxY);

		Snow.snowflakes.forEach(function(snowflake) {
			snowflake.render(ctx);
		});
	};

	Snow.fall = function() {
		Snow.snowflakes.forEach(function(snowflake) {
			if (snowflake.fallSpeed > 0) {
				snowflake.fall();
			}
		});

		if (Snow.snowflakes.length % 500 == 0) {
			Snow.height += 2;
		}

		if (Snow.snowflakes.length > 4500) {
			Snow.reset();
		}
	};

	Snow.start = function() {
		for (var i = 0; i < Snow.TOTAL_SNOWFLAKES; i++) {
			Snow.snowflakes.push(Snowflake.generateRandom());
		};

		Snow.toggle();
	};

	Snow.toggle = function() {
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");

		if (Snow.falling) {
			window.clearInterval(Snow.falling);
			Snow.falling = null;
		} else {
			canvas.width = Snow.maxX;
			canvas.height = Snow.maxY;

			Snow.falling = setInterval(function() {
				Snow.fall();
				Snow.render(ctx);
			}, 25);
		}
	};

	Snow.reset = function() {
		Snow.snowflakes.length = 0;
		Snow.height = 3;
		Snow.toggle();
		Snow.start();
	}

})(this);

window.addEventListener("mousemove", function(e) {
	var now = Date.now();

	if (now > Snow.throttleTime + Snow.mouseCheckDelay) {
		var mouseX = e.x;
		var oneThird = Snow.maxX / 3;
		var twoThirds = (Snow.maxX / 3) * 2;
		Snow.throttleTime = now;

		if (mouseX <= oneThird) {
			Snow.HORIZONTAL_SPEED = -0.5;
		} else if (mouseX > oneThird && mouseX < twoThirds) {
			Snow.HORIZONTAL_SPEED = 0;
		} else {
			Snow.HORIZONTAL_SPEED = 0.5;
		}
	}
});

Snow.start();