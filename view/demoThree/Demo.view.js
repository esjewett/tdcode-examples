// This is the view in detail area which is instantiate within mailInbox.controller.js.
sap.ui.jsview("view.demoThree.Demo", {

	getControllerName: function() {
		return "view.demoThree.Demo";
	},

	createContent : function(oController) {

		this.page = new sap.m.Page({
			title: "Facet Filter Example (pure UI5)",
			showNavButton: sap.ui.Device.system.phone,
			icon: "{img>/icon/UI5}",
			content: []
		}).addStyleClass("sapUiStdPage");

		return this.page;
	}
});