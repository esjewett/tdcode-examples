// This is the first view in master area and tapping on the list items leads to a page navigation in master area.
// The tap event handler is called when user taps the list item.
sap.ui.jsview("view.demoList.DemoList", {
	getControllerName: function(){
		return "view.demoList.DemoList";
	},
	createContent : function(oController) {
		
		var oDemoList = new sap.m.List({
			inset: false,
			items: [
				new sap.m.StandardListItem({
					title : "Crossfilter Demo",
					type : sap.m.ListType.Active,
					press : [oController.onDemoOneTap, oController],
					unread: true
				}),
				new sap.m.StandardListItem({
					title : "Demo 2",
					type : sap.m.ListType.Active,
					press : [oController.onDemoTwoTap, oController],
					unread: true
				}),
				new sap.m.StandardListItem({
					title : "Demo 3",
					type : sap.m.ListType.Active,
					press : [oController.onDemoThreeTap, oController],
					unread: true
				})
			],
			showUnread: true
		});
		
		var oPage = new sap.m.Page({
			icon: "{img>/icon/UI5}",
			title: "Demos",
			content: [oDemoList]
		});
		
		return oPage;
	}
});