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
			
		var oData = {};

		function buildData() {
			oData.flights = origin.top(Infinity);
			oData.origins = origins.top(Infinity).filter(function(d) { return d.value > 0; });
			oData.destinations = destinations.top(Infinity).filter(function(d) { return d.value > 0; });
			oData.delays = delays.top(Infinity).filter(function(d) { return d.value > 0; });
		}

		buildData();

		var oFFL1, oFFL2, oFFL3, oTable;

		// Remember filter values so we can update later
		var filter1, filter2, filter3;

		var oFacetFilter = new sap.ui.ux3.FacetFilter("myFacetFilterThree");

   		var oModel = new sap.ui.model.json.JSONModel();
    	oModel.setData(oData);
    	// sap.ui.getCore().setModel(oModel);
    	this.oView.setModel(oModel);

    	function refreshBindings() {

    		buildData();
    		oModel.refresh();

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
			dc.renderAll();
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
			dc.renderAll();
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
				delay.filter(function(d) { return filter3.indexOf("" + Math.floor(d / 10) * 10) !== -1; });
			}
			dc.renderAll();
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
			dc.renderAll();
		});

		function afterRenderFunction(oEvent) { 
			$('#view-content-five').html("<div>" +
				'<div id="demo-five-time" class="chart-five"><div class="title">Time of Day</div></div>' +
				'<div id="demo-five-delay" class="chart-five"><div class="title">Arrival Delay (min.)</div></div>' +
				'<div id="demo-five-distance" class="chart-five"><div class="title">Distance (mi.)</div></div>' +
				'<div id="demo-five-date" class="chart-five"><div class="title">Date</div></div>' +
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

				var timeChart = dc.barChart("#demo-five-time");
				var delayChart = dc.barChart("#demo-five-delay");
				var distanceChart = dc.barChart("#demo-five-distance");
				var dateChart = dc.barChart("#demo-five-date");

				dc.renderlet(function () { refreshBindings(); });

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
	},

	_handleRouteMatched : function (evt) { },

	onBackButtonPress: function(oEvent) {
		this.router.myNavBack("inbox", {});
	},

	afterRender: function(oEvent) {

	}
});