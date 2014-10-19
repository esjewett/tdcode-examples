// This is the view in detail area which is instantiate within mailInbox.controller.js.
sap.ui.jsview("view.demoFive.Demo", {

	getControllerName: function() {
		return "view.demoFive.Demo";
	},

	createContent : function(oController) {

		this.page = new sap.m.Page({
			title: "UI5 Facet Filter with dc.js charts - all using Crossfilter",
			showNavButton: sap.ui.Device.system.phone,
			icon: "{img>/icon/UI5}",
			content: []
		}).addStyleClass("sapUiStdPage");

		return this.page;
	}
});