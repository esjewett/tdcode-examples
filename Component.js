jQuery.sap.declare("esjewett.tddemo.Component");

sap.ui.core.UIComponent.extend("esjewett.tddemo.Component", {

	metadata : {
		routing : {
			config : {
				viewType : "JS",
				viewPath : "view",
				targetControl : "splitApp",
				clearTarget : false,
				transition: "slide"
			},
			routes : [
				{
					pattern : "",
					name : "home",
					viewPath : "view.demoList",
					view : "DemoList",
					viewLevel : 0,
					preservePageInSplitContainer : true,
					targetAggregation : "masterPages",
					subroutes : [
						{
							pattern : "demo/1",
							name : "demoOne",
							view : "Demo",
							viewPath : "view.demoOne",
							viewType : "HTML",
							viewLevel : 2,
							targetAggregation : "detailPages"
						},
						{
							pattern : "demo/2",
							name : "demoTwo",
							view : "Demo",
							viewPath : "view.demoTwo",
							viewType : "HTML",
							viewLevel : 2,
							targetAggregation : "detailPages"
						},
						{
							pattern : "demo/3",
							name : "demoThree",
							view : "Demo",
							viewPath : "view.demoThree",
							// viewType : "HTML",
							viewLevel : 2,
							targetAggregation : "detailPages"
						},
						{
							pattern : "demo/4",
							name : "demoFour",
							view : "Demo",
							viewPath : "view.demoFour",
							// viewType : "HTML",
							viewLevel : 2,
							targetAggregation : "detailPages"
						}
					]
				},
			]
		}
	},

	/**
	 * !!! The steps in here are sequence dependent !!!
	 */
	init : function () {

		// 1. some very generic requires
		jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
		jQuery.sap.require("esjewett.tddemo.MyRouter");
		jQuery.sap.require("util.ObjectSearch");

		// 2. call overridden init (calls createContent)
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

		// 3a. monkey patch the router
		var router = this.getRouter();
		router.myNavBack = esjewett.tddemo.MyRouter.myNavBack;
		router.myNavToWithoutHash = esjewett.tddemo.MyRouter.myNavToWithoutHash;

		// 4. initialize the router
		this.routeHandler = new sap.m.routing.RouteMatchedHandler(router);
		router.initialize();
	},

	destroy : function () {
		if (this.routeHandler) {
			this.routeHandler.destroy();
		}

		// call overridden destroy
		sap.ui.core.UIComponent.prototype.destroy.apply(this, arguments);
	},

	createContent : function () {
		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "view.App",
			type : "JS",
			viewData : { component : this }
		});

		// done
		return oView;
	}
});