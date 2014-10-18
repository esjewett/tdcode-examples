sap.ui.controller("view.demoFive.Demo", {

	onInit: function(){
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);

		var xfilter = crossfilter();

		var origin = xfilter.dimension(function(d) { return d.origin; });
		var origins = origin.group();
		var destination = xfilter.dimension(function(d) { return d.destination; });
		var destinations = destination.group();
		var delay = xfilter.dimension(function(d) { return Math.max(-60, Math.min(149, d.delay)); });
		var delays = delay.group(function(d) { return Math.floor(d / 10) * 10; });

		var date = xfilter.dimension(function(d) { return d.date; });
		var dates = date.group(d3.time.day);
		var hour = xfilter.dimension(function(d) { return d.date.getHours() + d.date.getMinutes() / 60; });
		var hours = hour.group(Math.floor);
		var delay = xfilter.dimension(function(d) { return Math.max(-60, Math.min(149, d.delay)); });
		var delays = delay.group(function(d) { return Math.floor(d / 10) * 10; });
		var distance = xfilter.dimension(function(d) { return Math.min(1999, d.distance); });
		var distances = distance.group(function(d) { return Math.floor(d / 50) * 50; });
			
		var oData;

		function buildData() {
			return {
				flights : origin.top(Infinity),
				origins: origins.top(Infinity).filter(function(d) { return d.value > 0; }),
				destinations: destinations.top(Infinity).filter(function(d) { return d.value > 0; }),
				delays: delays.top(Infinity).filter(function(d) { return d.value > 0; })						
			};
		}

		oData = buildData();

		var oFFL1, oFFL2, oFFL3, oTable;

		var renderAll;

		// Remember filter values so we can update later
		var filter1, filter2, filter3;

		var oFacetFilter = new sap.ui.ux3.FacetFilter("myFacetFilterThree");

   		var oModel = new sap.ui.model.json.JSONModel();
    	oModel.setData(oData);
    	// sap.ui.getCore().setModel(oModel);
    	this.oView.setModel(oModel);

    	function refreshBindings() {

    		oData = buildData();
    		oModel.setData(oData);
    		oFFL1.getBinding("items").refresh();
			oFFL2.getBinding("items").refresh();
			oFFL3.getBinding("items").refresh();
			oTable.getBinding('rows');

			// Reset filters as the highlighting is not properly retained even though the keys match.
			oFFL1.setSelectedKeys(filter1);
			oFFL2.setSelectedKeys(filter2);
			oFFL3.setSelectedKeys(filter3);

    	}
		
    	var oItemTemplate = new sap.ui.core.ListItem({text:"{key}", key:"{key}", additionalText: "{value}"});
    	
		oFFL1 = new sap.ui.ux3.FacetFilterList("ffl1_three", {
			title:"Origin",
			displaySecondaryValues: true,
			items : {path : "/origins", template : oItemTemplate}
		});
		oFFL1.attachSelect(function(oEvent) {
			if(oEvent.getParameter("all")) {
				origin.filterAll();
				filter1 = [];
			} else {
				filter1 = oEvent.getParameter("selectedItems").map(function(d) {return d.getText();});
				origin.filter(function(d) { return filter1.indexOf(d) !== -1; });
			}
			renderAll();
			refreshBindings();
		});

		oFacetFilter.addList(oFFL1);

		oFFL2 = new sap.ui.ux3.FacetFilterList("ffl2_three", {
			title:"Destination",
			multiSelect: false,
			displaySecondaryValues: true,
			items : {path : "/destinations", template : oItemTemplate}
		});
		oFFL2.attachSelect(function(oEvent) {
			if(oEvent.getParameter("all")) {
				destination.filterAll();
				filter2 = [];
			} else {
				filter2 = oEvent.getParameter("selectedItems").map(function(d) {return d.getText();});
				destination.filter(function(d) { return filter2.indexOf(d) !== -1; });
			}
			renderAll();
			refreshBindings();
		});
		oFacetFilter.addList(oFFL2);

		oFFL3 = new sap.ui.ux3.FacetFilterList("ffl3_three", {
			title:"Delay",
			displaySecondaryValues: true,
			items : {path : "/delays", template : oItemTemplate}
		});
		oFFL3.attachSelect(function(oEvent) {
			if(oEvent.getParameter("all")) {
				delay.filterAll();
				filter3 = [];
			} else {
				filter3 = oEvent.getParameter("selectedItems").map(function(d) {return d.getText();});
				delay.filter(function(d) { return filter3.indexOf(d) !== -1; });
			}
			renderAll();
			refreshBindings();
		});
		oFacetFilter.addList(oFFL3);

		oTable = new sap.ui.table.Table();
		// oTable.setTitle("Table");
		oTable.addExtension(oFacetFilter);

		var oControl = new sap.ui.commons.TextView().bindProperty("text", "origin");
		oTable.addColumn(new sap.ui.table.Column({label: new sap.ui.commons.Label({text: "Origin"}), template: oControl, sortProperty: "origin", filterProperty: "origin", width: "300px"}));
		oControl = new sap.ui.commons.TextView().bindProperty("text", "destination");
		oTable.addColumn(new sap.ui.table.Column({label: new sap.ui.commons.Label({text: "Destination"}), template: oControl, sortProperty: "destination", filterProperty: "destination", width: "300px"}));
		oControl = new sap.ui.commons.TextView().bindProperty("text", "delay");
	 	oTable.addColumn(new sap.ui.table.Column({label: new sap.ui.commons.Label({text: "Delay"}), template: oControl, sortProperty: "delay", filterProperty: "delay", width: "300px"}));

		oTable.bindRows("/flights");

		var oHtml = new sap.ui.core.HTML('htmlElement', {
			content: '<div id="view-content-five"></div>',
			afterRendering: afterRenderFunction
		});

		oHtml.placeAt(this.oView.page);
		oTable.placeAt(this.oView.page);

		d3.csv("./model/flights-3m.csv", function(error, flights) {

			// Like d3.time.format, but faster.
			function parseDate(d) {
				return new Date(2001,
				    d.substring(0, 2) - 1,
				    d.substring(2, 4),
				    d.substring(4, 6),
				    d.substring(6, 8));
			}

			// A little coercion, since the CSV is untyped.
			flights.forEach(function(d, i) {
			d.index = i;
			d.date = parseDate(d.date);
			d.delay = +d.delay;
			d.distance = +d.distance;
			});

			// Create the crossfilter for the relevant dimensions and groups.
			xfilter.add(flights);

			refreshBindings();
		});

		function afterRenderFunction(oEvent) { 
			var html = '<div id="charts-five">' +
				'<div id="hour-chart-five" class="chart-five">' +
					'<div class="title">Time of Day</div>' +
				'</div>' +
				'<div id="delay-chart-five" class="chart-five">' +
					'<div class="title">Arrival Delay (min.)</div>' +
				'</div>' +
				'<div id="distance-chart-five" class="chart-five">' +
					'<div class="title">Distance (mi.)</div>' +
				'</div>' +
				'<div id="date-chart-five" class="chart-five">' +
					'<div class="title">Date</div>' +
				'</div>' +
			'</div>';

			$('#view-content-five').html(html);

			d3.csv("./model/flights-3m.csv", function(error, flights) {

				// Various formatters.
				var formatNumber = d3.format(",d"),
				  formatChange = d3.format("+,d"),
				  formatDate = d3.time.format("%B %d, %Y"),
				  formatTime = d3.time.format("%I:%M %p");

				var charts = [

				barChart()
				    .dimension(hour)
				    .group(hours)
				  .x(d3.scale.linear()
				    .domain([0, 24])
				    .rangeRound([0, 10 * 24])),

				barChart()
				    .dimension(delay)
				    .group(delays)
				  .x(d3.scale.linear()
				    .domain([-60, 150])
				    .rangeRound([0, 10 * 21])),

				barChart()
				    .dimension(distance)
				    .group(distances)
				  .x(d3.scale.linear()
				    .domain([0, 2000])
				    .rangeRound([0, 10 * 40])),

				barChart()
				    .dimension(date)
				    .group(dates)
				    .round(d3.time.day.round)
				  .x(d3.time.scale()
				    .domain([new Date(2001, 0, 1), new Date(2001, 3, 1)])
				    .rangeRound([0, 10 * 90]))
				    .filter([new Date(2001, 1, 1), new Date(2001, 2, 1)])

				];

				// Given our array of charts, which we assume are in the same order as the
				// .chart elements in the DOM, bind the charts to the DOM and render them.
				// We also listen to the chart's brush events to update the display.
				var chart = d3.selectAll(".chart-five")
				  .data(charts)
				  .each(function(chart) { chart.on("brush", renderAll).on("brushend", renderAll); });

				// Whenever the brush moves, re-rendering everything.
				renderAll = function () {
				chart.each(render);
				refreshBindings();
				}

				renderAll();

				// Renders the specified chart or list.
				function render(method) {
				d3.select(this).call(method);
				}

				// Like d3.time.format, but faster.
				function parseDate(d) {
				return new Date(2001,
				    d.substring(0, 2) - 1,
				    d.substring(2, 4),
				    d.substring(4, 6),
				    d.substring(6, 8));
				}

				window.filter = function(filters) {
				filters.forEach(function(d, i) { charts[i].filter(d); });
				renderAll();
				};

				window.reset = function(i) {
				charts[i].filter(null);
				renderAll();
				};

				function barChart() {
				if (!barChart.id) barChart.id = 0;

				var margin = {top: 10, right: 10, bottom: 20, left: 10},
				    x,
				    y = d3.scale.linear().range([100, 0]),
				    id = barChart.id++,
				    axis = d3.svg.axis().orient("bottom"),
				    brush = d3.svg.brush(),
				    brushDirty,
				    dimension,
				    group,
				    round;

				function chart(div) {
				  var width = x.range()[1],
				      height = y.range()[0];

				  y.domain([0, group.top(1)[0].value]);

				  div.each(function() {
				    var div = d3.select(this),
				        g = div.select("g");

				    // Create the skeletal chart.
				    if (g.empty()) {
				      div.select(".title").append("a")
				          .attr("href", "javascript:reset(" + id + ")")
				          .attr("class", "reset")
				          .text("reset")
				          .style("display", "none");

				      g = div.append("svg")
				          .attr("width", width + margin.left + margin.right)
				          .attr("height", height + margin.top + margin.bottom)
				        .append("g")
				          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

				      g.append("clipPath")
				          .attr("id", "clip-" + id)
				        .append("rect")
				          .attr("width", width)
				          .attr("height", height);

				      g.selectAll(".bar")
				          .data(["background", "foreground"])
				        .enter().append("path")
				          .attr("class", function(d) { return d + " bar"; })
				          .datum(group.all());

				      g.selectAll(".foreground.bar")
				          .attr("clip-path", "url(#clip-" + id + ")");

				      g.append("g")
				          .attr("class", "axis")
				          .attr("transform", "translate(0," + height + ")")
				          .call(axis);

				      // Initialize the brush component with pretty resize handles.
				      var gBrush = g.append("g").attr("class", "brush").call(brush);
				      gBrush.selectAll("rect").attr("height", height);
				      gBrush.selectAll(".resize").append("path").attr("d", resizePath);
				    }

				    // Only redraw the brush if set externally.
				    if (brushDirty) {
				      brushDirty = false;
				      g.selectAll(".brush").call(brush);
				      div.select(".title a").style("display", brush.empty() ? "none" : null);
				      if (brush.empty()) {
				        g.selectAll("#clip-" + id + " rect")
				            .attr("x", 0)
				            .attr("width", width);
				      } else {
				        var extent = brush.extent();
				        g.selectAll("#clip-" + id + " rect")
				            .attr("x", x(extent[0]))
				            .attr("width", x(extent[1]) - x(extent[0]));
				      }
				    }

				    g.selectAll(".bar").attr("d", barPath);
				  });

				  function barPath(groups) {
				    var path = [],
				        i = -1,
				        n = groups.length,
				        d;
				    while (++i < n) {
				      d = groups[i];
				      path.push("M", x(d.key), ",", height, "V", y(d.value), "h9V", height);
				    }
				    return path.join("");
				  }

				  function resizePath(d) {
				    var e = +(d == "e"),
				        x = e ? 1 : -1,
				        y = height / 3;
				    return "M" + (.5 * x) + "," + y
				        + "A6,6 0 0 " + e + " " + (6.5 * x) + "," + (y + 6)
				        + "V" + (2 * y - 6)
				        + "A6,6 0 0 " + e + " " + (.5 * x) + "," + (2 * y)
				        + "Z"
				        + "M" + (2.5 * x) + "," + (y + 8)
				        + "V" + (2 * y - 8)
				        + "M" + (4.5 * x) + "," + (y + 8)
				        + "V" + (2 * y - 8);
				  }
				}

				brush.on("brushstart.chart", function() {
				  var div = d3.select(this.parentNode.parentNode.parentNode);
				  div.select(".title a").style("display", null);
				});

				brush.on("brush.chart", function() {
				  var g = d3.select(this.parentNode),
				      extent = brush.extent();
				  if (round) g.select(".brush")
				      .call(brush.extent(extent = extent.map(round)))
				    .selectAll(".resize")
				      .style("display", null);
				  g.select("#clip-" + id + " rect")
				      .attr("x", x(extent[0]))
				      .attr("width", x(extent[1]) - x(extent[0]));
				  dimension.filterRange(extent);
				  renderAll();
				});

				brush.on("brushend.chart", function() {
				  if (brush.empty()) {
				    var div = d3.select(this.parentNode.parentNode.parentNode);
				    div.select(".title a").style("display", "none");
				    div.select("#clip-" + id + " rect").attr("x", null).attr("width", "100%");
				    dimension.filterAll();
				    renderAll();
				  }
				});

				chart.margin = function(_) {
				  if (!arguments.length) return margin;
				  margin = _;
				  return chart;
				};

				chart.x = function(_) {
				  if (!arguments.length) return x;
				  x = _;
				  axis.scale(x);
				  brush.x(x);
				  return chart;
				};

				chart.y = function(_) {
				  if (!arguments.length) return y;
				  y = _;
				  return chart;
				};

				chart.dimension = function(_) {
				  if (!arguments.length) return dimension;
				  dimension = _;
				  return chart;
				};

				chart.filter = function(_) {
				  if (_) {
				    brush.extent(_);
				    dimension.filterRange(_);
				  } else {
				    brush.clear();
				    dimension.filterAll();
				  }
				  brushDirty = true;
				  return chart;
				};

				chart.group = function(_) {
				  if (!arguments.length) return group;
				  group = _;
				  return chart;
				};

				chart.round = function(_) {
				  if (!arguments.length) return round;
				  round = _;
				  return chart;
				};

				return d3.rebind(chart, brush, "on");
				}
			});
		}
			  
	},

	_handleRouteMatched : function (evt) { },

	onBackButtonPress: function(oEvent) {
		this.router.myNavBack("inbox", {});
	},

	afterRender: function(oEvent) {

	}
});