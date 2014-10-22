sap.ui.controller("view.demoFour.Demo", {

	onInit: function(){
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);

		var cars = [
			{brand: "BMW", model: "320d", type: "Limousine"},
			{brand: "BMW", model: "320d", type: "Coupé"},
			{brand: "BMW", model: "320d", type: "Cabrio"},
			{brand: "BMW", model: "325i", type: "Limousine"},
			{brand: "BMW", model: "330d", type: "Limousine"},
			{brand: "BMW", model: "330i", type: "Limousine"},
			{brand: "BMW", model: "335i", type: "Limousine"},
			{brand: "AUDI", model: "A1", type: "Limousine"},
			{brand: "AUDI", model: "A3", type: "Limousine"},
			{brand: "AUDI", model: "A4", type: "Limousine"},
			{brand: "AUDI", model: "A5", type: "Limousine"},
			{brand: "AUDI", model: "A6", type: "Limousine"}
		]

		// for(var i = 0; i < 14; i++) {
		// 	cars = cars.concat(cars);
		// }

		// console.log(cars.length);

		var xfilter = crossfilter(cars);

		var brand = xfilter.dimension(function(d) { return d.brand; });
		var brands = brand.group();
		var model = xfilter.dimension(function(d) { return d.model; });
		var models = model.group();
		var type = xfilter.dimension(function(d) { return d.type; });
		var types = type.group();
			
		var oData = {};

		function buildData() {
			oData.cars =  brand.top(Infinity);
			oData.brands = brands.top(Infinity).filter(function(d) { return d.value > 0; });
			oData.models = models.top(Infinity).filter(function(d) { return d.value > 0; });
			oData.types = types.top(Infinity).filter(function(d) { return d.value > 0; });					
		};

		buildData();

		var oFFL1, oFFL2, oFFL3, oTable;

		// Remember filter values so we can update later
		var filter1, filter2, filter3;

		var oFacetFilter = new sap.ui.ux3.FacetFilter("myFacetFilterTwo");

   		var oModel = new sap.ui.model.json.JSONModel();
    	oModel.setData(oData);
    	// sap.ui.getCore().setModel(oModel);
    	var oView = this.oView;
    	oView.setModel(oModel);

    	function refreshBindings() {

    		buildData();
    		oModel.refresh();

			// Reset filters as the highlighting is not properly retained even though the keys match.
			oFFL1.setSelectedKeys(filter1);
			oFFL2.setSelectedKeys(filter2);
			oFFL3.setSelectedKeys(filter3);

    	}
		
    	var oItemTemplate = new sap.ui.core.ListItem({text:"{key}", key:"{key}", additionalText: "{value}"});
    	
		oFFL1 = new sap.ui.ux3.FacetFilterList("ffl1_two", {
			title:"Car Brand",
			displaySecondaryValues: true,
			items : {path : "/brands", template : oItemTemplate}
		});
		oFFL1.attachSelect(function(oEvent) {
			if(oEvent.getParameter("all")) {
				brand.filterAll();
				filter1 = [];
			} else {
				filter1 = oEvent.getParameter("selectedItems").map(function(d) {return d.getText();});
				brand.filter(function(d) { return filter1.indexOf(d) !== -1; });
			}
			refreshBindings();
		});

		oFacetFilter.addList(oFFL1);

		oFFL2 = new sap.ui.ux3.FacetFilterList("ffl2_two", {
			title:"Car Model",
			multiSelect: false,
			displaySecondaryValues: true,
			items : {path : "/models", template : oItemTemplate}
		});
		oFFL2.attachSelect(function(oEvent) {
			if(oEvent.getParameter("all")) {
				model.filterAll();
				filter2 = [];
			} else {
				filter2 = oEvent.getParameter("selectedItems").map(function(d) {return d.getText();});
				model.filter(function(d) { return filter2.indexOf(d) !== -1; });
			}
			refreshBindings();
		});
		oFacetFilter.addList(oFFL2);

		oFFL3 = new sap.ui.ux3.FacetFilterList("ffl3_two", {
			title:"Type",
			displaySecondaryValues: true,
			items : {path : "/types", template : oItemTemplate}
		});
		oFFL3.attachSelect(function(oEvent) {
			if(oEvent.getParameter("all")) {
				type.filterAll();
				filter3 = [];
			} else {
				filter3 = oEvent.getParameter("selectedItems").map(function(d) {return d.getText();});
				type.filter(function(d) { return filter3.indexOf(d) !== -1; });
			}
			refreshBindings();
		});
		oFacetFilter.addList(oFFL3);

		oTable = new sap.ui.table.Table();
		oTable.setTitle("Table");
		oTable.addExtension(oFacetFilter);

		var oControl = new sap.ui.commons.TextView().bindProperty("text", "brand");
		oTable.addColumn(new sap.ui.table.Column({label: new sap.ui.commons.Label({text: "Car Brand"}), template: oControl, sortProperty: "brand", filterProperty: "brand", width: "300px"}));
		oControl = new sap.ui.commons.TextView().bindProperty("text", "model");
		oTable.addColumn(new sap.ui.table.Column({label: new sap.ui.commons.Label({text: "Car Model"}), template: oControl, sortProperty: "model", filterProperty: "model", width: "300px"}));
		oControl = new sap.ui.commons.TextView().bindProperty("text", "type");
	 	oTable.addColumn(new sap.ui.table.Column({label: new sap.ui.commons.Label({text: "Type"}), template: oControl, sortProperty: "type", filterProperty: "type", width: "300px"}));

		oTable.bindRows("/cars");

		oTable.placeAt(this.oView.page);
	},

	_handleRouteMatched : function (evt) { },

	onBackButtonPress: function(oEvent) {
		this.router.myNavBack("inbox", {});
	},

	afterRender: function(oEvent) {

	}
});