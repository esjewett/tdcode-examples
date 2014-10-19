sap.ui.controller("view.demoTwo.Demo", {

	onInit: function(){
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
	},

	_handleRouteMatched : function (evt) { },

	onBackButtonPress: function(oEvent) {
		this.router.myNavBack("inbox", {});
	},

	afterRender: function(oEvent) {
		$('#view-content-two').html("<div>" +
				'<div id="demo-two-time" class="chart-two"><div class="title">Time of Day</div></div>' +
				'<div id="demo-two-delay" class="chart-two"><div class="title">Arrival Delay (min.)</div></div>' +
				'<div id="demo-two-distance" class="chart-two"><div class="title">Distance (mi.)</div></div>' +
				'<div id="demo-two-date" class="chart-two"><div class="title">Date</div></div>' +
				'<div id="demo-two-lists">' +
					'<div id="demo-two-flight-list" class="list-two"></div>' +
				'</div>' +
			"</div>");

		d3.csv("./model/flights-3m.csv", function(error, flights) {
			// Various formatters.
			var formatNumber = d3.format(",d"),
			  formatChange = d3.format("+,d"),
			  formatDate = d3.time.format("%B %d, %Y"),
			  formatTime = d3.time.format("%I:%M %p");

			// Like d3.time.format, but faster.
			function parseDate(d) {
				return new Date(2001,
				    d.substring(0, 2) - 1,
				    d.substring(2, 4),
				    d.substring(4, 6),
				    d.substring(6, 8));
			}

			// A nest operator, for grouping the flight list.
			var nestByDate = d3.nest()
			  .key(function(d) { return d3.time.day(d.date); });

			// A little coercion, since the CSV is untyped.
			flights.forEach(function(d, i) {
			d.index = i;
			d.date = parseDate(d.date);
			d.delay = +d.delay;
			d.distance = +d.distance;
			});

			// Create the crossfilter for the relevant dimensions and groups.
			var flight = crossfilter(flights),
			  all = flight.groupAll(),
			  date = flight.dimension(function(d) { return d.date; }),
			  dates = date.group(d3.time.day),
			  hour = flight.dimension(function(d) { return d.date.getHours() + d.date.getMinutes() / 60; }),
			  hours = hour.group(Math.floor),
			  delay = flight.dimension(function(d) { return Math.max(-60, Math.min(149, d.delay)); }),
			  delays = delay.group(function(d) { return Math.floor(d / 10) * 10; }),
			  distance = flight.dimension(function(d) { return Math.min(1999, d.distance); }),
			  distances = distance.group(function(d) { return Math.floor(d / 50) * 50; });

			var timeChart = dc.barChart("#demo-two-time");
			var delayChart = dc.barChart("#demo-two-delay");
			var distanceChart = dc.barChart("#demo-two-distance");
			var dateChart = dc.barChart("#demo-two-date");
			// var listTable = dc.dataTable("demo-two-flight-list");

			timeChart
				.width(400)
				.height(151)
				.margins({top: 10, right: 50, bottom: 30, left: 40})
				.dimension(hour)
				.group(hours)
				.elasticY(true)
				.gap(1)
				.x(d3.scale.linear().domain([0, 24]))
				.round(dc.round.floor)
				.alwaysUseRounding(true)
				.renderHorizontalGridLines(true);

			delayChart
				.width(400)
				.height(151)
				.margins({top: 10, right: 50, bottom: 30, left: 40})
				.dimension(delay)
				.elasticY(true)
				.group(delays)
				.x(d3.scale.linear().domain([-60, 150]))
				.xUnits(dc.units.fp.precision(10))
				.gap(1)
				.renderHorizontalGridLines(true);


			distanceChart
				.width(700)
				.height(151)
				.margins({top: 10, right: 50, bottom: 30, left: 40})
				.dimension(distance)
				.elasticY(true)
				.group(distances)
				.x(d3.scale.linear().domain([0, 2000]))
				.xUnits(dc.units.fp.precision(50))
				.gap(1)
				.renderHorizontalGridLines(true);

			dateChart
				.width(900)
				.height(151)
				.margins({top: 10, right: 50, bottom: 30, left: 40})
				.dimension(date)
				.elasticY(true)
				.group(dates)
				.x(d3.time.scale()
			    	.domain([new Date(2001, 0, 1), new Date(2001, 3, 1)]))
				.xUnits(d3.time.days)
				.gap(1)
				.renderHorizontalGridLines(true);

			dc.renderAll();

		});
	}
});