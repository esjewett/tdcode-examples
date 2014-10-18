// This is the view in detail area which is instantiate within mailInbox.controller.js.
sap.ui.jsview("view.demoFour.Demo", {

	getControllerName: function() {
		return "view.demoFour.Demo";
	},

	createContent : function(oController) {

		this.page = new sap.m.Page({
			title: "Facet Filter Example (Crossfilter)",
			showNavButton: sap.ui.Device.system.phone,
			icon: "{img>/icon/UI5}",
			content: []
		}).addStyleClass("sapUiStdPage");

		return this.page;
	}
});