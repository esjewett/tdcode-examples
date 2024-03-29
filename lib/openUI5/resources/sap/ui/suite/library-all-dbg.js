// This file has been generated by the SAPUI5 'AllInOne' Builder
jQuery.sap.declare('sap.ui.suite.library-all');
if ( !jQuery.sap.isDeclared('sap.ui.suite.QuickViewUtils') ) {
jQuery.sap.declare("sap.ui.suite.QuickViewUtils");
/**
 * Create a Quickview Instance. This Method is only working with the UI2 QuickViewserice.
 * 
 * @param {string} sServiceUrl
 * @param {string} sConfigName
 * @param {string} sThingKey
 * @returns {sap.ui.ux3.QuickView}
 */
(function() {
	
	sap.ui.suite.QuickViewUtils = {
		/* create a QV instance with content */	
		createQuickView: function(sServiceUrl,sConfigName,sThingKey,mFormatter) {
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,false);
			
			var oQV = new sap.ui.ux3.QuickView({firstTitle: "{title}", firstTitleHref: "{titleLinkURL}", type:"{Thing/text}", icon:"{imageURL}"});
			oQV.setModel(oModel);
			oQV.bindElement("/QuickviewConfigs(name='"+sConfigName+"',thingKey='"+sThingKey+"')",{expand:"Thing,QVAttributes/Attribute,QVActions/Action"});
			
			oMQVC = new sap.ui.suite.hcm.QvContent();
			oMQVC.bindAggregation("items",{path:"QVAttributes",factory: function(sId, oContext) {
				var oQVItem = new sap.ui.suite.hcm.QvItem(sId, {label:"{Attribute/label}",link: "{valueLinkURL}",order:"{order}"});
				oQVItem.bindProperty("value","value",mFormatter && mFormatter[oContext.getProperty("Attribute/name")]);
				return oQVItem;
			}});
			oQV.addContent(oMQVC);
			return oQV;
		},
		/* add content to an existing QV */
		createQuickViewData: function(oQV,sServiceUrl,sConfigName,sThingKey,mFormatter) {
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,false);
			oQV.removeAllContent();
			oQV.setModel(oModel);
			oQV.bindProperty("firstTitle", "title");
			oQV.bindProperty("firstTitleHref", "titleLinkURL");
			oQV.bindProperty("type", "Thing/text");
			oQV.bindProperty("icon", "imageURL");
			oQV.bindElement("/QuickviewConfigs(name='"+sConfigName+"',thingKey='"+sThingKey+"')",{expand:"Thing,QVAttributes/Attribute,QVActions/Action"});
			
			oMQVC = new sap.ui.suite.hcm.QvContent();
			oMQVC.bindAggregation("items",{path:"QVAttributes",factory: function(sId, oContext) {
				var oQVItem = new sap.ui.suite.hcm.QvItem(sId, {label:"{Attribute/label}",link: "{valueLinkURL}",order:"{order}"});
				oQVItem.bindProperty("value","value",mFormatter && mFormatter[oContext.getProperty("Attribute/name")]);
				return oQVItem;
			}});
			oQV.addContent(oMQVC);
		},
		/* create a QV instance with dataset content */	
		createDataSetQuickView: function(sServiceUrl, sCollection, sType, mProperties, iSizeLimit) {
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,false);
			if (iSizeLimit) {
				oModel.setSizeLimit(iSizeLimit);
			}
			var oQV = new sap.ui.ux3.QuickView({type:sType, showActionBar:false});
			oQV.setModel(oModel);
			oQV.addContent(this._createDSContent(oQV,sCollection,mProperties));
			return oQV;
		},
		/* add dataset content to an existing QV */
		createDataSetQuickViewData: function(oQV,sServiceUrl, sCollection, sType, mProperties, iSizeLimit) {
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl,false);
			if (iSizeLimit) {
				oModel.setSizeLimit(iSizeLimit);
			}
			oQV.removeAllContent();
			oQV.setType(sType);
			oQV.setShowActionBar(false);
			oQV.setModel(oModel);
			oQV.addContent(this._createDSContent(oQV,sCollection,mProperties));
		},
		
		_createDSContent: function(oQV,sCollection,mProperties) {
			var oContent = new sap.ui.commons.layout.MatrixLayout();
			var oRow = new sap.ui.commons.layout.MatrixLayoutRow();
			jQuery.each(mProperties, function(i,oProperty){
				var oControl;
				if(oProperty.href) {
					oControl = new sap.ui.commons.Link({text : oProperty.value, href: oProperty.href});
				} else {
					oControl = new sap.ui.commons.TextView({text : oProperty.value});
				}
				var oCell = new sap.ui.commons.layout.MatrixLayoutCell({content:[oControl]});
				oCell.addStyleClass("quickViewDS");
				oRow.addCell(oCell);
			});
			oContent.bindAggregation("rows",sCollection,oRow);
			return oContent;
		}
	};
	
	sap.ui.core.Element.extend("sap.ui.suite.hcm.QvItem", { 
		metadata : {   
			properties: {
				label: "string",
				value: "string",
				link: "string",	
				order: "string",
				type : "string"
			}
		}
	});
	
	sap.ui.core.Control.extend("sap.ui.suite.hcm.QvContent", { 
		metadata : {   
			aggregations: {
				   "items" : {type : "sap.ui.suite.hcm.QvItem", multiple : true}
			}
		},
		init: function() {
			this._sorted = false;
		},
		exit: function() {
			if (this._oML) {
				this._oML.destroy();
			};
		},
		renderer : function(oRm, oControl) {      // the part creating the HTML
			oRm.write("<div");
			oRm.writeControlData(oControl);
			oRm.write(">");
			oRm.renderControl(oControl._createQVContent(oControl));
			oRm.write("</div>");
		},
	    _createQVContent: function(oControl) {
	    	var oML = new sap.ui.commons.layout.MatrixLayout({widths:["75px"]}),
	    		aItems = oControl.getItems(),
	    		oMLRow, oMLCell, oLabel, oTxtView, oLink;
			
			if (this._oML) {
				this._oML.destroy();
			};
	    	oControl._sortItems(oControl);
			for ( var i = 0; i < aItems.length; i++) {
				oMLRow = new sap.ui.commons.layout.MatrixLayoutRow();
				oMLCell = new sap.ui.commons.layout.MatrixLayoutCell({vAlign:'Top'});
				oLabel  = new sap.ui.commons.Label({text:aItems[i].getLabel() +':'});
				oMLCell.addContent(oLabel);
				oMLRow.addCell(oMLCell);
				oMLCell = new sap.ui.commons.layout.MatrixLayoutCell();
				if (aItems[i].getLink()) {
					oLink = new sap.ui.commons.Link({text:aItems[i].getValue(), href:aItems[i].getLink()})
					oMLCell.addContent(oLink);
				} else {
					oTxtView = new sap.ui.commons.TextView({text:aItems[i].getValue()});
					oMLCell.addContent(oTxtView);
				}
				oMLRow.addCell(oMLCell);
				oML.addRow(oMLRow);
			}
			this._oML = oML;
			return oML;
	    },
	    _sortItems: function(oControl) {
	    	if (!oControl._sorted) { 
		    	var aItems = oControl.removeAllAggregation("items", true);
		    	aItems.sort(function(a, b) {
		    		return (parseInt(a.getOrder(), 10) - parseInt(b.getOrder(), 10));
		    	});
		    	jQuery.each(aItems, function(i,oItem) {oControl.addAggregation("items",oItem,false);});
		    	oControl._sorted = true;
	    	}
	    }
	});
})();
}; // end of sap/ui/suite/QuickViewUtils.js
if ( !jQuery.sap.isDeclared('sap.ui.suite.TaskCircleRenderer') ) {
jQuery.sap.declare("sap.ui.suite.TaskCircleRenderer");

/**
 * @class TaskCircle renderer.
 * @static
 */
sap.ui.suite.TaskCircleRenderer = function() {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.suite.TaskCircleRenderer.render = function(oRenderManager, oControl){
    // convenience variable
	var rm = oRenderManager;

    //calculate pixel size
	var minvalue = oControl.getMinValue();
	var maxvalue = oControl.getMaxValue();
	var value = oControl.getValue();
	if (minvalue < 0 || minvalue == Number.NaN) {
		minvalue = 0;
	}
	if (maxvalue < 0 || maxvalue == Number.NaN) {
		maxvalue = 1;
	}
	if (value < 0 || value == Number.NaN) {
		value = 0;
	}
	var valuestring = value.toString();
    var color = oControl.getColor();
    var style = 'sapUiTaskCircleColorGray';

    switch(color) {
       case sap.ui.suite.TaskCircleColor.Red:
          style = 'sapUiTaskCircleColorRed';
          break;
       case sap.ui.suite.TaskCircleColor.Yellow:
          style = 'sapUiTaskCircleColorYellow';
          break;
       case sap.ui.suite.TaskCircleColor.Green:
          style = 'sapUiTaskCircleColorGreen';
          break;
       case sap.ui.suite.TaskCircleColor.Gray:
          style = 'sapUiTaskCircleColorGray';
          break;
    }
    if (value < minvalue) {
    	minvalue = value;
    }
    if (value > maxvalue) {
    	maxvalue = value;
    }

    var psmall = 24;
    if (minvalue > 10) {
    	psmall = 32;
    }
    if (minvalue > 100) {
    	psmall = 46;
    }
    var plarge = 62;

    var circlesize = parseInt(Math.sqrt((value-minvalue)/(maxvalue-minvalue)*(plarge*plarge-psmall*psmall)+psmall*psmall), 10);

    var digits = (value+'').length;
    var fontsize = circlesize * 0.55;
    if (digits > 1) {
       fontsize = circlesize / digits;
    }

	// write the HTML into the render manager
    rm.write("<div");
    rm.writeControlData(oControl);
    rm.writeAttribute('tabIndex', '0');

	if (oControl.getTooltip_AsString()) {
		rm.writeAttributeEscaped("title", oControl.getTooltip_AsString());
	}
	else {
	    rm.writeAttributeEscaped("title", valuestring);
	}

    //ARIA
    if ( sap.ui.getCore().getConfiguration().getAccessibility()){
	  rm.writeAttribute('role', 'progressbar');
      rm.writeAccessibilityState(oControl, {valuemin: minvalue});
	  rm.writeAccessibilityState(oControl, {valuemax: maxvalue});
	  rm.writeAccessibilityState(oControl, {valuenow: value});
	}

    rm.writeAttribute("class","sapUiTaskCircle "+style);

	rm.addStyle("width", circlesize + "px");
	rm.addStyle("height", circlesize + "px");
	rm.addStyle("line-height", circlesize + "px");
	rm.addStyle("font-size", parseInt(fontsize, 10) + "px");
	rm.addStyle("border-radius", circlesize + "px");
	rm.addStyle("-moz-border-radius", circlesize + "px");
    rm.writeClasses();
	rm.writeStyles();
    rm.write(">");
    rm.write(value);
    rm.write("</div>");
};

}; // end of sap/ui/suite/TaskCircleRenderer.js
if ( !jQuery.sap.isDeclared('sap.ui.suite.VerticalProgressIndicatorRenderer') ) {
jQuery.sap.declare("sap.ui.suite.VerticalProgressIndicatorRenderer");

/**
 * @class VerticalProgressIndicator renderer. 
 * @static
 */
sap.ui.suite.VerticalProgressIndicatorRenderer = {
};


/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager} oRenderManager the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oControl an object representation of the control that should be rendered
 */
sap.ui.suite.VerticalProgressIndicatorRenderer.render = function(oRenderManager, oControl){ 
    // convenience variable
	var rm = oRenderManager;
	
	//calculate percentage
    var VerticalPercent = oControl.getPercentage();
    if (VerticalPercent < 0 || VerticalPercent == Number.NaN) VerticalPercent = 0;
    if (VerticalPercent > 100) VerticalPercent = 100;
    var PixelDown = Math.round(VerticalPercent * 58 / 100);
    var PixelUp   = 58 - PixelDown;
    var PercentageString = VerticalPercent.toString();

	// write the HTML into the render manager  
    rm.write("<DIV");
    rm.writeControlData(oControl);
    rm.writeAttribute('tabIndex', '0');

	if (oControl.getTooltip_AsString()) {
		rm.writeAttributeEscaped("title", oControl.getTooltip_AsString());
	}
	else {
	    rm.writeAttributeEscaped("title", PercentageString);
	}
    
    //ARIA
    if ( sap.ui.getCore().getConfiguration().getAccessibility()){
	  rm.writeAttribute('role', 'progressbar');
      rm.writeAccessibilityState(oControl, {valuemin: '0%'});
	  rm.writeAccessibilityState(oControl, {valuemax: '100%'});
	  rm.writeAccessibilityState(oControl, {valuenow: VerticalPercent + '%'});
	}
    
    rm.writeAttribute("class","sapUiVerticalProgressOuterContainer"); 
    rm.write(">"); // Outer DIV element
    rm.write("<DIV");
    rm.writeAttribute('id', oControl.getId() + '-bar');
    rm.writeAttribute("class","sapUiVerticalProgressInnerContainer");
    rm.addStyle("top", PixelUp + "px");
    rm.addStyle("height", PixelDown + "px");
    rm.writeClasses(); 
    rm.writeStyles();
    rm.write(">"); // Inner DIV element
    rm.write("</DIV>");
    rm.write("</DIV>");

};

}; // end of sap/ui/suite/VerticalProgressIndicatorRenderer.js
if ( !jQuery.sap.isDeclared('sap.ui.suite.library') ) {
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

/**
 * Initialization Code and shared classes of library sap.ui.suite (1.22.10)
 */
jQuery.sap.declare("sap.ui.suite.library");
jQuery.sap.require('sap.ui.core.Core'); // unlisted dependency retained

/**
 * SAP UI library: sap.ui.suite (by SAP, Author)
 *
 * @namespace
 * @name sap.ui.suite
 * @public
 */


// library dependencies
jQuery.sap.require('sap.ui.core.library'); // unlisted dependency retained


// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.ui.suite",
  dependencies : ["sap.ui.core"],
  types: [
    "sap.ui.suite.TaskCircleColor"
  ],
  interfaces: [],
  controls: [
    "sap.ui.suite.TaskCircle",
    "sap.ui.suite.VerticalProgressIndicator"
  ],
  elements: [],
  version: "1.22.10"});

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.suite.TaskCircleColor.
jQuery.sap.declare("sap.ui.suite.TaskCircleColor");


/**
 * @class Defined color values for the Task Circle Control
 *
 * @version 1.22.10
 * @static
 * @public
 */
sap.ui.suite.TaskCircleColor = {

	/**
	 * Red
	 * @public
	 */
	Red : "Red",

	/**
	 * Yellow
	 * @public
	 */
	Yellow : "Yellow",

	/**
	 * Green
	 * @public
	 */
	Green : "Green",

	/**
	 * Default value
	 * @public
	 */
	Gray : "Gray"

};

}; // end of sap/ui/suite/library.js
if ( !jQuery.sap.isDeclared('sap.ui.suite.TaskCircle') ) {
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.suite.TaskCircle.
jQuery.sap.declare("sap.ui.suite.TaskCircle");

jQuery.sap.require('sap.ui.core.Control'); // unlisted dependency retained



/**
 * Constructor for a new TaskCircle.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getValue value} : int (default: 0)</li>
 * <li>{@link #getMaxValue maxValue} : int (default: 100)</li>
 * <li>{@link #getMinValue minValue} : int (default: 0)</li>
 * <li>{@link #getColor color} : sap.ui.suite.TaskCircleColor (default: sap.ui.suite.TaskCircleColor.Gray)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : string | sap.ui.core.Control</li>
 * <li>{@link #getAriaDescribedBy ariaDescribedBy} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.suite.TaskCircle#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control shows a circle which radius and color depends on the given parameters
 * @extends sap.ui.core.Control
 *
 * @author Svetozar Buzdumovic 
 * @version 1.22.10
 *
 * @constructor   
 * @public
 * @experimental Since version 1.2. 
 * The API may change. User with care.
 * @name sap.ui.suite.TaskCircle
 */
sap.ui.core.Control.extend("sap.ui.suite.TaskCircle", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"focus"
	],

	// ---- control specific ----
	library : "sap.ui.suite",
	properties : {
		"value" : {type : "int", group : "Misc", defaultValue : 0},
		"maxValue" : {type : "int", group : "Misc", defaultValue : 100},
		"minValue" : {type : "int", group : "Misc", defaultValue : 0},
		"color" : {type : "sap.ui.suite.TaskCircleColor", group : "Misc", defaultValue : sap.ui.suite.TaskCircleColor.Gray}
	},
	associations : {
		"ariaLabelledBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaLabelledBy"}, 
		"ariaDescribedBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaDescribedBy"}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.suite.TaskCircle with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.ui.suite.TaskCircle.extend
 * @function
 */

sap.ui.suite.TaskCircle.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>value</code>.
 * Current value of the task circle to be displayed. In dependency of the parameters maxValue and minValue it controls the size of the circle.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>value</code>
 * @public
 * @name sap.ui.suite.TaskCircle#getValue
 * @function
 */

/**
 * Setter for property <code>value</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iValue  new value for property <code>value</code>
 * @return {sap.ui.suite.TaskCircle} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.TaskCircle#setValue
 * @function
 */


/**
 * Getter for property <code>maxValue</code>.
 * Upper limit of the displayed values. Default is 100.
 *
 * Default value is <code>100</code>
 *
 * @return {int} the value of property <code>maxValue</code>
 * @public
 * @name sap.ui.suite.TaskCircle#getMaxValue
 * @function
 */

/**
 * Setter for property <code>maxValue</code>.
 *
 * Default value is <code>100</code> 
 *
 * @param {int} iMaxValue  new value for property <code>maxValue</code>
 * @return {sap.ui.suite.TaskCircle} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.TaskCircle#setMaxValue
 * @function
 */


/**
 * Getter for property <code>minValue</code>.
 * Lower limit of the displayed values. Default is 0.
 *
 * Default value is <code>0</code>
 *
 * @return {int} the value of property <code>minValue</code>
 * @public
 * @name sap.ui.suite.TaskCircle#getMinValue
 * @function
 */

/**
 * Setter for property <code>minValue</code>.
 *
 * Default value is <code>0</code> 
 *
 * @param {int} iMinValue  new value for property <code>minValue</code>
 * @return {sap.ui.suite.TaskCircle} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.TaskCircle#setMinValue
 * @function
 */


/**
 * Getter for property <code>color</code>.
 * Color of the circle. The default color is red.
 *
 * Default value is <code>Gray</code>
 *
 * @return {sap.ui.suite.TaskCircleColor} the value of property <code>color</code>
 * @public
 * @name sap.ui.suite.TaskCircle#getColor
 * @function
 */

/**
 * Setter for property <code>color</code>.
 *
 * Default value is <code>Gray</code> 
 *
 * @param {sap.ui.suite.TaskCircleColor} oColor  new value for property <code>color</code>
 * @return {sap.ui.suite.TaskCircle} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.TaskCircle#setColor
 * @function
 */


/**
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.suite.TaskCircle#getAriaLabelledBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaLabelledBy
 *    Id of a ariaLabelledBy which becomes an additional target of this <code>ariaLabelledBy</code> association.
 *    Alternatively, a ariaLabelledBy instance may be given. 
 * @return {sap.ui.suite.TaskCircle} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.TaskCircle#addAriaLabelledBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to remove or its index or id
 * @return {string} the id of the removed ariaLabelledBy or null
 * @public
 * @name sap.ui.suite.TaskCircle#removeAriaLabelledBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.suite.TaskCircle#removeAllAriaLabelledBy
 * @function
 */

	
/**
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.suite.TaskCircle#getAriaDescribedBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaDescribedBy
 *    Id of a ariaDescribedBy which becomes an additional target of this <code>ariaDescribedBy</code> association.
 *    Alternatively, a ariaDescribedBy instance may be given. 
 * @return {sap.ui.suite.TaskCircle} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.TaskCircle#addAriaDescribedBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to remove or its index or id
 * @return {string} the id of the removed ariaDescribedBy or null
 * @public
 * @name sap.ui.suite.TaskCircle#removeAriaDescribedBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.suite.TaskCircle#removeAllAriaDescribedBy
 * @function
 */

	
/**
 * Event is fired when the user clicks the control. 
 *
 * @name sap.ui.suite.TaskCircle#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.suite.TaskCircle</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.suite.TaskCircle</code>.<br/> itself. 
 *  
 * Event is fired when the user clicks the control. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.suite.TaskCircle</code>.<br/> itself.
 *
 * @return {sap.ui.suite.TaskCircle} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.TaskCircle#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.suite.TaskCircle</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.suite.TaskCircle} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.TaskCircle#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.suite.TaskCircle} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.suite.TaskCircle#firePress
 * @function
 */


/**
 * Puts the focus to the control.
 *
 * @name sap.ui.suite.TaskCircle.prototype.focus
 * @function

 * @type void
 * @public
 */


// Start of sap\ui\suite\TaskCircle.js
jQuery.sap.require('sap.ui.core.EnabledPropagator'); // unlisted dependency retained

sap.ui.core.EnabledPropagator.call(sap.ui.suite.TaskCircle.prototype);


/**
 * init is called when the control is initialized
 */
sap.ui.suite.TaskCircle.prototype.init = function(){
};



/**
 * Function is called when control is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.suite.TaskCircle.prototype.onclick = function(oEvent){
  this.firePress({});
  oEvent.preventDefault();
  oEvent.stopPropagation();
};


// Implementation of API method focus(). Documentation available in generated code.
sap.ui.suite.TaskCircle.prototype.focus = function() {
	var oDomRef = this.getDomRef();
	if(oDomRef) {
		oDomRef.focus();
	}
};
}; // end of sap/ui/suite/TaskCircle.js
if ( !jQuery.sap.isDeclared('sap.ui.suite.VerticalProgressIndicator') ) {
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.suite.VerticalProgressIndicator.
jQuery.sap.declare("sap.ui.suite.VerticalProgressIndicator");

jQuery.sap.require('sap.ui.core.Control'); // unlisted dependency retained



/**
 * Constructor for a new VerticalProgressIndicator.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPercentage percentage} : int</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : string | sap.ui.core.Control</li>
 * <li>{@link #getAriaDescribedBy ariaDescribedBy} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.suite.VerticalProgressIndicator#event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control shows a vertical progress bar in dependency of the given percentage. Only values between 0 and 100 are valid.
 * @extends sap.ui.core.Control
 *
 * @author Svetozar Buzdumovic 
 * @version 1.22.10
 *
 * @constructor   
 * @public
 * @experimental Since version 1.2. 
 * The API may change. User with care.
 * @name sap.ui.suite.VerticalProgressIndicator
 */
sap.ui.core.Control.extend("sap.ui.suite.VerticalProgressIndicator", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"focus"
	],

	// ---- control specific ----
	library : "sap.ui.suite",
	properties : {
		"percentage" : {type : "int", group : "Misc", defaultValue : null}
	},
	associations : {
		"ariaLabelledBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaLabelledBy"}, 
		"ariaDescribedBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaDescribedBy"}
	},
	events : {
		"press" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.suite.VerticalProgressIndicator with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.ui.suite.VerticalProgressIndicator.extend
 * @function
 */

sap.ui.suite.VerticalProgressIndicator.M_EVENTS = {'press':'press'};


/**
 * Getter for property <code>percentage</code>.
 * The numerical value between 0 and 100 which determines the height of the vertical bar. Values higher than 100 will be displayed as 100%, values lower than zero will be displayed as 0%.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>percentage</code>
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#getPercentage
 * @function
 */

/**
 * Setter for property <code>percentage</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iPercentage  new value for property <code>percentage</code>
 * @return {sap.ui.suite.VerticalProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#setPercentage
 * @function
 */


/**
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#getAriaLabelledBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaLabelledBy
 *    Id of a ariaLabelledBy which becomes an additional target of this <code>ariaLabelledBy</code> association.
 *    Alternatively, a ariaLabelledBy instance may be given. 
 * @return {sap.ui.suite.VerticalProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#addAriaLabelledBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to remove or its index or id
 * @return {string} the id of the removed ariaLabelledBy or null
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#removeAriaLabelledBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#removeAllAriaLabelledBy
 * @function
 */

	
/**
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#getAriaDescribedBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaDescribedBy
 *    Id of a ariaDescribedBy which becomes an additional target of this <code>ariaDescribedBy</code> association.
 *    Alternatively, a ariaDescribedBy instance may be given. 
 * @return {sap.ui.suite.VerticalProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#addAriaDescribedBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to remove or its index or id
 * @return {string} the id of the removed ariaDescribedBy or null
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#removeAriaDescribedBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#removeAllAriaDescribedBy
 * @function
 */

	
/**
 * Event is fired when the user clicks the control. 
 *
 * @name sap.ui.suite.VerticalProgressIndicator#press
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'press' event of this <code>sap.ui.suite.VerticalProgressIndicator</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.suite.VerticalProgressIndicator</code>.<br/> itself. 
 *  
 * Event is fired when the user clicks the control. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.suite.VerticalProgressIndicator</code>.<br/> itself.
 *
 * @return {sap.ui.suite.VerticalProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#attachPress
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'press' event of this <code>sap.ui.suite.VerticalProgressIndicator</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.suite.VerticalProgressIndicator} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.suite.VerticalProgressIndicator#detachPress
 * @function
 */

/**
 * Fire event press to attached listeners.
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.suite.VerticalProgressIndicator} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.suite.VerticalProgressIndicator#firePress
 * @function
 */


/**
 * Puts the focus to the control.
 *
 * @name sap.ui.suite.VerticalProgressIndicator.prototype.focus
 * @function

 * @type void
 * @public
 */


// Start of sap\ui\suite\VerticalProgressIndicator.js
jQuery.sap.require('sap.ui.core.EnabledPropagator'); // unlisted dependency retained

sap.ui.core.EnabledPropagator.call(sap.ui.suite.VerticalProgressIndicator.prototype);

/**
 * Property setter for the Percentage, which determines the height of the vertical bar.
 * Values higher than 100 will be displayed as 100%, values lower than zero will be displayed as 0%. 
 * A new rendering is not necessary, only the bar will be moved
 *
 * @param  iPercentage
 * @return {sap.ui.suite.VerticalProgressIndicator} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.suite.VerticalProgressIndicator.prototype.setPercentage = function(iPercentage) {

  // exit if nothing changed
  var VerticalPercent = this.getPercentage();
  if (VerticalPercent == iPercentage) return this;

  // get the ProgressBar
  this.oBar  = jQuery.sap.domById(this.getId() + '-bar');

  // get the new Value and calculate Pixels
  VerticalPercent = iPercentage;
  if (VerticalPercent < 0 || VerticalPercent == Number.NaN) VerticalPercent = 0;
  if (VerticalPercent > 100) VerticalPercent = 100;
  var PixelDown = Math.round(VerticalPercent * 58 / 100);
  var PixelUp   = 58 - PixelDown;

  //set the new values
  this.setProperty('percentage', iPercentage, true); // No re-rendering!
  jQuery(this.oBar).css("top",PixelUp);
  jQuery(this.oBar).css("height",PixelDown);

  //set the ARIA property
  if(!this.oThis){
	this.oThis = jQuery.sap.byId(this.getId());
	}
  this.oThis.attr('aria-valuenow', iPercentage + '%');
  return this;

};


/**
 * Function is called when control is clicked.
 *
 * @param {jQuery.Event} oEvent
 * @private
 */
sap.ui.suite.VerticalProgressIndicator.prototype.onclick = function(oEvent) {
	this.firePress({/* no parameters */});
	oEvent.preventDefault();
	oEvent.stopPropagation();
};


// Implementation of API method focus(). Documentation available in generated code.
sap.ui.suite.VerticalProgressIndicator.prototype.focus = function() {
	var oDomRef = this.getDomRef();
	if(oDomRef) {
		oDomRef.focus();
	}
};
}; // end of sap/ui/suite/VerticalProgressIndicator.js
