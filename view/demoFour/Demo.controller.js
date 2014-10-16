sap.ui.controller("view.demoFour.Demo", {

	onInit: function(){
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
		this.router.attachRoutePatternMatched(this._handleRouteMatched, this);

		var aFilters1 = [];
		var aFilters2 = [];
		var aFilters3 = [];
			
		var oData = {cars : [
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
			],
			brands: [
				{name : "BMW", key: "1"},
				{name : "AUDI", key: "2"}
			],
			models: [
				{name : "320d", key: "1"},
				{name : "325i", key: "2"},
				{name : "330d", key: "3"},
				{name : "330i", key: "4"},
				{name : "335i", key: "5"},
				{name : "A1", key: "6"},
				{name : "A3", key: "7"},
				{name : "A4", key: "8"},
				{name : "A5", key: "9"},
				{name : "A6", key: "10"}
			],
			types: [
				{name : "Limousine", key: "1"},
				{name : "Coupé", key: "2"},
				{name : "Cabrio", key: "3"}
			]						
		};
		
    	
    	function calcFilter(oEvent, sFilterAtt, oFFL1, sFilterAtt1, oFFL2, sFilterAtt2) {
			var aSelectedItems = oEvent.getParameter("selectedItems");
			var aFilters = [];
			var aCrossFilters1 = [];
			var aCrossFilters2 = []; 	
		
			for(var i=0; i<aSelectedItems.length; i++){
				var sFilterText = aSelectedItems[i].getText();
 				aFilters.push(new sap.ui.model.Filter(sFilterAtt, sap.ui.model.FilterOperator.EQ, sFilterText));
	 			for(var j=0; j<oData.cars.length; j++){
	 				if (oData.cars[j][sFilterAtt] == sFilterText) {
	 					var sCrossFilterText1 = oData.cars[j][sFilterAtt1];
						var aCheckItems1 = oFFL1.getItems();
						var bCheckParam1 = false;
						for(var k=0; k<aCheckItems1.length; k++){
							sCheckText = aCheckItems1[k].getText();
	 						if (sCrossFilterText1 == sCheckText) {
	 							bCheckParam1 = true;
	 						}
						}
 						if (bCheckParam1 == true) {
 	 						var oCrossFilter1 = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.EQ, sCrossFilterText1);
 	 						aCrossFilters1.push(oCrossFilter1);
						}   	 						
	 					var sCrossFilterText2 = oData.cars[j][sFilterAtt2];
						var aCheckItems2 = oFFL2.getItems();
						var bCheckParam2 = false;
						for(var k=0; k<aCheckItems2.length; k++){
							sCheckText = aCheckItems2[k].getText();
	 						if (sCrossFilterText2 == sCheckText) {
	 							bCheckParam2 = true;
	 						}
						}
	 					if (bCheckParam2 == true) {  	 						
	 						var oCrossFilter2 = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.EQ, sCrossFilterText2);
	 						aCrossFilters2.push(oCrossFilter2);
	 					}
	 				}
	 			}
			}
				
			return {filter: aFilters, crossFilters1: aCrossFilters1, crossFilters2: aCrossFilters2};
		}
    	
		function applyFilter(oFFL1, oFFL2, aCrossFilters1, aCrossFilters2) {
			var aSaveSelectedKeys1 = oFFL1.getSelectedKeys();
 			var aSaveSelectedKeys2 = oFFL2.getSelectedKeys();
 			var aFilters = [].concat(aFilters1, aFilters2, aFilters3);
			oFFL1.getBinding("items").filter(aCrossFilters1);
			oFFL2.getBinding("items").filter(aCrossFilters2);
			oTable.getBinding('rows').filter(aFilters);	 			
			oFFL1.setSelectedKeys(aSaveSelectedKeys1 ? aSaveSelectedKeys1 : []);
			oFFL2.setSelectedKeys(aSaveSelectedKeys2 ? aSaveSelectedKeys2 : []);	
		}
		

		var oFacetFilter = new sap.ui.ux3.FacetFilter("myFacetFilterTwo");

   		var oModel = new sap.ui.model.json.JSONModel();
    	oModel.setData(oData);
    	// sap.ui.getCore().setModel(oModel);
    	this.oView.setModel(oModel);
		
    	var oItemTemplate = new sap.ui.core.ListItem({text:"{name}", key:"{key}"});
    	
		var oFFL1 = new sap.ui.ux3.FacetFilterList("ffl1_two", {
			title:"Car Brand",
			items : {path : "/brands", template : oItemTemplate}
		});
		oFFL1.attachSelect(function(oEvent) {
			aFilters1 = [];
				
			if(oEvent.getParameter("all")) {
				applyFilter(oFFL2, oFFL3, [], []);
				return;
			}

			var oFilters = calcFilter(oEvent, "brand", oFFL2, "model", oFFL3, "type");
			aFilters1 = oFilters.filter;
			applyFilter(oFFL2, oFFL3, oFilters.crossFilters1, oFilters.crossFilters2);	
		});

		oFacetFilter.addList(oFFL1);

		var oFFL2 = new sap.ui.ux3.FacetFilterList("ffl2_two", {
			title:"Car Model",
			multiSelect: false,
			items : {path : "/models", template : oItemTemplate}
		});
		oFFL2.attachSelect(function(oEvent) {
			aFilters2 = [];
				
			if(oEvent.getParameter("all")) {
				applyFilter(oFFL1, oFFL3, [], []);
				return;
			}

			var oFilters = calcFilter(oEvent, "model", oFFL1, "brand", oFFL3, "type");
			aFilters2 = oFilters.filter;
			applyFilter(oFFL1, oFFL3, oFilters.crossFilters1, oFilters.crossFilters2);	
		});
		oFacetFilter.addList(oFFL2);

		var oFFL3 = new sap.ui.ux3.FacetFilterList("ffl3_two", {
			title:"Type",
			items : {path : "/types", template : oItemTemplate}
		});
		oFFL3.attachSelect(function(oEvent) {
			aFilters3 = [];
				
			if(oEvent.getParameter("all")) {
				applyFilter(oFFL1, oFFL2, [], []);
				return;
			}

 			var oFilters = calcFilter(oEvent, "type", oFFL1, "brand", oFFL2, "model");
			aFilters2 = oFilters.filter;
 			applyFilter(oFFL1, oFFL2, oFilters.crossFilters1, oFilters.crossFilters2);	
		});
		oFacetFilter.addList(oFFL3);

		var oTable = new sap.ui.table.Table();
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