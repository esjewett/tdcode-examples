sap.ui.controller("view.demoList.DemoList", {
	
	onInit : function () {
		this.router = sap.ui.core.UIComponent.getRouterFor(this);
	},
	
	onDemoOneTap: function(oEvent){
		// Navigation based on item tapped here.
		oEvent.oSource.setUnread(false);
		this.router.navTo("demoOne");
	},

	onDemoTwoTap: function(oEvent){
		// Navigation based on item tapped here.
		oEvent.oSource.setUnread(false);
		this.router.navTo("demoTwo");
	},

	onDemoThreeTap: function(oEvent){
		// Navigation based on item tapped here.
		oEvent.oSource.setUnread(false);
		this.router.navTo("demoThree");
	},

	onDemoFourTap: function(oEvent){
		// Navigation based on item tapped here.
		oEvent.oSource.setUnread(false);
		this.router.navTo("demoFour");
	},

	onDemoFiveTap: function(oEvent){
		// Navigation based on item tapped here.
		oEvent.oSource.setUnread(false);
		this.router.navTo("demoFive");
	}
});