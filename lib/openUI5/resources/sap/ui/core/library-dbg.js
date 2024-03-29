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
 * Initialization Code and shared classes of library sap.ui.core (1.22.10)
 */
sap.ui.define(['./Core'], function() {

/**
 * The SAPUI5 Core Runtime. 
 *   
 *   Contains the UI5 jQuery plugins (jQuery.sap.*), the Core and all its components, 
 *   base classes for Controls, Components and the Model View Controller classes.
 *
 * @namespace
 * @name sap.ui.core
 * @public
 */


// delegate further initialization of this library to the Core
sap.ui.getCore().initLibrary({
  name : "sap.ui.core",
  types: [
    "sap.ui.core.AccessibleRole",
    "sap.ui.core.BarColor",
    "sap.ui.core.CSSColor",
    "sap.ui.core.CSSSize",
    "sap.ui.core.CSSSizeShortHand",
    "sap.ui.core.Collision",
    "sap.ui.core.Design",
    "sap.ui.core.Dock",
    "sap.ui.core.HorizontalAlign",
    "sap.ui.core.ID",
    "sap.ui.core.IconColor",
    "sap.ui.core.ImeMode",
    "sap.ui.core.MessageType",
    "sap.ui.core.OpenState",
    "sap.ui.core.Orientation",
    "sap.ui.core.Percentage",
    "sap.ui.core.ScrollBarAction",
    "sap.ui.core.Scrolling",
    "sap.ui.core.TextAlign",
    "sap.ui.core.TextDirection",
    "sap.ui.core.TitleLevel",
    "sap.ui.core.URI",
    "sap.ui.core.ValueState",
    "sap.ui.core.VerticalAlign",
    "sap.ui.core.Wrapping",
    "any",
    "boolean",
    "float",
    "int",
    "sap.ui.core.mvc.ViewType",
    "object",
    "sap.ui.core.routing.HistoryDirection",
    "string",
    "void"
  ],
  interfaces: [
    "sap.ui.core.Label",
    "sap.ui.core.PopupInterface",
    "sap.ui.core.Toolbar"
  ],
  controls: [
    "sap.ui.core.ComponentContainer",
    "sap.ui.core.Control",
    "sap.ui.core.HTML",
    "sap.ui.core.Icon",
    "sap.ui.core.LocalBusyIndicator",
    "sap.ui.core.ScrollBar",
    "sap.ui.core.TooltipBase",
    "sap.ui.core.UIComponent",
    "sap.ui.core.mvc.HTMLView",
    "sap.ui.core.mvc.JSONView",
    "sap.ui.core.mvc.JSView",
    "sap.ui.core.mvc.TemplateView",
    "sap.ui.core.mvc.View",
    "sap.ui.core.mvc.XMLView",
    "sap.ui.core.tmpl.DOMElement",
    "sap.ui.core.tmpl.Template",
    "sap.ui.core.tmpl.TemplateControl"
  ],
  elements: [
    "sap.ui.core.CustomData",
    "sap.ui.core.Element",
    "sap.ui.core.Item",
    "sap.ui.core.LayoutData",
    "sap.ui.core.ListItem",
    "sap.ui.core.Message",
    "sap.ui.core.SeparatorItem",
    "sap.ui.core.Title",
    "sap.ui.core.VariantLayoutData",
    "sap.ui.core.search.OpenSearchProvider",
    "sap.ui.core.search.SearchProvider",
    "sap.ui.core.tmpl.DOMAttribute"
  ],
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

// Provides enumeration sap.ui.core.AccessibleRole.
sap.ui.define("sap/ui/core/AccessibleRole", function() {
	"use strict";

/**
 * @class Defines the accessible roles for ARIA support. This enumeration is used with the AccessibleRole control property.
 * For more information, goto "Roles for Accessible Rich Internet Applications (WAI-ARIA Roles)" at the www.w3.org homepage.
 * 
 *
 * @version 1.22.10
 * @static
 * @public
 */
sap.ui.core.AccessibleRole = {

	/**
	 * No explicit role is applicable. An AccessibleName should be specified for the control.
	 * 
	 * @public
	 */
	None : "None",

	/**
	 * A message with an alert or error information.
	 * 
	 * @public
	 */
	Alert : "Alert",

	/**
	 * A separate window with an alert or error information.
	 * 
	 * @public
	 */
	AlertDialog : "AlertDialog",

	/**
	 * A software unit executing a set of tasks for the user.
	 * @public
	 */
	Application : "Application",

	/**
	 * Usually defined as the advertisement at the top of a web page.
	 * The banner content typically contains the site or company logo, or other key advertisements.
	 * 
	 * @public
	 */
	Banner : "Banner",

	/**
	 * Allows user-triggered actions.
	 * 
	 * @public
	 */
	Button : "Button",

	/**
	 * A control that has three possible values: true, false, mixed.
	 * @public
	 */
	Checkbox : "Checkbox",

	/**
	 * A table cell containing header information for a column.
	 * @public
	 */
	ColumnHeader : "ColumnHeader",

	/**
	 * Allows selecting an item from a list, or to enter data directly in the input field.
	 * @public
	 */
	Combobox : "Combobox",

	/**
	 * Information about the content on the page. Examples are footnotes, copyrights, or links to privacy statements.
	 * 
	 * @public
	 */
	ContentInfo : "ContentInfo",

	/**
	 * The content of the associated element represents a definition.
	 * If there is a definition element within the content, this one represents the term being defined.
	 * 
	 * @public
	 */
	Definition : "Definition",

	/**
	 * Descriptive content for a page element.
	 * @public
	 */
	Description : "Description",

	/**
	 * A small window that is designed to interrupt the current application processing
	 * in order to inform the user and to get some response.
	 * @public
	 */
	Dialog : "Dialog",

	/**
	 * A list of references to members of a single group.
	 * 
	 * @public
	 */
	Directory : "Directory",

	/**
	 * Content that contains related information, such as a book.
	 * @public
	 */
	Document : "Document",

	/**
	 * Contains cells of tabular data arranged in rows and columns, for example in a table.
	 * @public
	 */
	Grid : "Grid",

	/**
	 * A table cell in a grid where the cells can be active, editable, and selectable.
	 * Cells may have functional relationships to controls, for example.
	 * @public
	 */
	GridCell : "GridCell",

	/**
	 * A section of user interface objects.
	 * @public
	 */
	Group : "Group",

	/**
	 * A heading for a section of the page.
	 * @public
	 */
	Heading : "Heading",

	/**
	 * A container for a collection of elements that form an image.
	 * @public
	 */
	Img : "Img",

	/**
	 * An interactive reference to a resource.
	 * @public
	 */
	Link : "Link",

	/**
	 * A container for non-interactive list items which are the children of the list.
	 * @public
	 */
	List : "List",

	/**
	 * A widget that allows the user to select one or more items from a list.
	 * The items within the list are static and can contain images.
	 * @public
	 */
	Listbox : "Listbox",

	/**
	 * A single item in a list.
	 * @public
	 */
	ListItem : "ListItem",

	/**
	 * An area where new information is added, or old information disappears.
	 * Information types are chat logs, messaging, or error logs, for example.
	 * The log contains a sequence: New information is always added to the end of the log.
	 * @public
	 */
	Log : "Log",

	/**
	 * Defines the main content of a document.
	 * 
	 * @public
	 */
	Main : "Main",

	/**
	 * Is used to scroll text across the page.
	 * 
	 * @public
	 */
	Marquee : "Marquee",

	/**
	 * Offers a list of choices to the user.
	 * 
	 * @public
	 */
	Menu : "Menu",

	/**
	 * A container for menu items where each item may activate a submenu.
	 * 
	 * @public
	 */
	Menubar : "Menubar",

	/**
	 * A child in a menu.
	 * @public
	 */
	MenuItem : "MenuItem",

	/**
	 * A checkable menu item (tri-state).
	 * @public
	 */
	MenuItemCheckbox : "MenuItemCheckbox",

	/**
	 * A menu item which is part of a group of menuitemradio roles.
	 * @public
	 */
	MenuItemRadio : "MenuItemRadio",

	/**
	 * A collection of links suitable for use when navigating the document or related documents.
	 * @public
	 */
	Navigation : "Navigation",

	/**
	 * The content is parenthetic or ancillary to the main content of the resource.
	 * @public
	 */
	Note : "Note",

	/**
	 * A selectable item in a list represented by a select.
	 * 
	 * @public
	 */
	Option : "Option",

	/**
	 * An element whose role is presentational does not need to be mapped to the accessibility API.
	 * @public
	 */
	Presentation : "Presentation",

	/**
	 * Shows the execution progress in applications providing functions that take a long time.
	 * @public
	 */
	ProgressBar : "ProgressBar",

	/**
	 * An option in single-select list. Only one radio control in a radiogroup can be selected at the same time.
	 * 
	 * @public
	 */
	Radio : "Radio",

	/**
	 * A group of radio controls.
	 * @public
	 */
	RadioGroup : "RadioGroup",

	/**
	 * A large section on the web page.
	 * @public
	 */
	Region : "Region",

	/**
	 * A row of table cells.
	 * @public
	 */
	Row : "Row",

	/**
	 * A table cell containing header information for a row.
	 * @public
	 */
	RowHeader : "RowHeader",

	/**
	 * A search section of a web document. In many cases, this is a form used to submit search requests about the site,
	 * or a more general Internet wide search service.
	 * @public
	 */
	Search : "Search",

	/**
	 * A unique section of the document. In the case of a portal, this may include time display, weather forecast,
	 * or stock price.
	 * @public
	 */
	Secondary : "Secondary",

	/**
	 * Indicates that the element contains content that is related to the main content of the page.
	 * @public
	 */
	SeeAlso : "SeeAlso",

	/**
	 * A line or bar that separates sections of content.
	 * @public
	 */
	Separator : "Separator",

	/**
	 * A user input where the user selects an input in a given range. This form of range expects an analogous keyboard
	 * interface.
	 * @public
	 */
	Slider : "Slider",

	/**
	 * Allows users to select a value from a list of given entries where exactly one value is displayed at runtime, and
	 * the other ones can be displayed by scrolling using the arrow up and arrow down key.
	 * 
	 * @public
	 */
	SpinButton : "SpinButton",

	/**
	 * A container for processing advisory information.
	 * @public
	 */
	Status : "Status",

	/**
	 * A header for a tab panel.
	 * @public
	 */
	Tab : "Tab",

	/**
	 * A list of tabs which are references to tab panels.
	 * 
	 * @public
	 */
	Tablist : "Tablist",

	/**
	 * A container for the resources associated with a tab.
	 * @public
	 */
	Tabpanel : "Tabpanel",

	/**
	 * Inputs that allow free-form text as their value.
	 * @public
	 */
	Textbox : "Textbox",

	/**
	 * A numerical counter which indicates an amount of elapsed time from a start point,
	 * or of the time remaining until a certain end point.
	 * @public
	 */
	Timer : "Timer",

	/**
	 * A collection of commonly used functions represented in compact visual form.
	 * @public
	 */
	Toolbar : "Toolbar",

	/**
	 * A popup that displays a description for an element when the user passes over or rests on that element.
	 * Supplement to the normal tooltip processing of the user agent.
	 * 
	 * @public
	 */
	Tooltip : "Tooltip",

	/**
	 * A form of a list (tree) having groups (subtrees) inside groups (subtrees), where the sub trees can be collapsed and expanded.
	 * 
	 * @public
	 */
	Tree : "Tree",

	/**
	 * A grid whose rows are expandable and collapsable in the same manner as the ones of trees.
	 * @public
	 */
	TreeGrid : "TreeGrid",

	/**
	 * A tree node
	 * @public
	 */
	TreeItem : "TreeItem"

};


	return sap.ui.core.AccessibleRole;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.core.BarColor.
sap.ui.define("sap/ui/core/BarColor", function() {
	"use strict";

/**
 * @class Configuration options for the colors of a progress bar
 *
 * @version 1.22.10
 * @static
 * @public
 */
sap.ui.core.BarColor = {

	/**
	 * Color: blue (#b8d0e8)
	 * @public
	 */
	NEUTRAL : "NEUTRAL",

	/**
	 * Color: green (#b5e7a8)
	 * @public
	 */
	POSITIVE : "POSITIVE",

	/**
	 * Color: yellow (#faf2b0)
	 * @public
	 */
	CRITICAL : "CRITICAL",

	/**
	 * Color: red (#ff9a90)
	 * @public
	 */
	NEGATIVE : "NEGATIVE"

};


	return sap.ui.core.BarColor;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

// Provides data type sap.ui.core.CSSColor
sap.ui.define('sap/ui/core/CSSColor',['sap/ui/base/DataType'], function(DataType) {

	/**
 * @class A string type that represents CSS color values. Allowed values are CSS hex colors like "#666666" or
 * 	"#fff", RGB/HSL values like "rgb(0,0,0)" or "hsla(50%,10%,30%,0.5)" as well as css color
 * 	names like "green" and "darkblue" and values like "inherit" and "transparent".
 * 	The empty string is also allowed and has the same effect as setting no color.
	 *
	 * @author SAP AG
	 * @static
	 * @public
	 */
	sap.ui.core.CSSColor = DataType.createType('sap.ui.core.CSSColor', {
	    isValid : function(vValue) {
	      return /^(#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})|rgb\(\s*((1?[0-9]?[0-9]|2([0-4][0-9]|5[0-5]))|([0-9]?[0-9](\.[0-9]+)?|100(\.0+)?)%)\s*(,\s*((1?[0-9]?[0-9]|2([0-4][0-9]|5[0-5]))|([0-9]?[0-9](\.[0-9]+)?|100(\.0+)?)%)\s*){2}\)|rgba\((\s*((1?[0-9]?[0-9]|2([0-4][0-9]|5[0-5]))|([0-9]?[0-9](\.[0-9]+)?|100(\.0+)?)%)\s*,){3}\s*(0(\.[0-9]+)?|1(\.0+)?)\s*\)|hsl\(\s*([0-2]?[0-9]?[0-9]|3([0-5][0-9]|60))\s*(,\s*(([0-9]?[0-9](\.[0-9]+)?|100(\.0+)?)%)\s*){2}\)|hsla\(\s*([0-2]?[0-9]?[0-9]|3([0-5][0-9]|60))\s*,(\s*(([0-9]?[0-9](\.[0-9]+)?|100(\.0+)?)%)\s*,){2}\s*(0(\.[0-9]+)?|1(\.0+)?)\s*\)|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coralcornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silverskyblue|slateblue|slategray|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen|transparent|inherit|)$/.test(vValue);
	    }

	  },
	  DataType.getType('string')
	);

	return sap.ui.core.CSSColor;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

// Provides data type sap.ui.core.CSSSize
sap.ui.define('sap/ui/core/CSSSize',['sap/ui/base/DataType'], function(DataType) {

	/**
 * @class A string type that represents CSS size values. Allowed values are CSS sizes like "1px" or "2em" or "50%", but also the special values "auto" and "inherit". 
 * Note that CSS does not allow all of these values for every CSS property representing a size. E.g. "auto" is not an allowed value for a padding size.
	 *
	 * @author SAP AG
	 * @static
	 * @public
	 */
	sap.ui.core.CSSSize = DataType.createType('sap.ui.core.CSSSize', {
	    isValid : function(vValue) {
	      return /^(auto|inherit|[-+]?(0*|([0-9]+|[0-9]*\.[0-9]+)([rR][eE][mM]|[eE][mM]|[eE][xX]|[pP][xX]|[cC][mM]|[mM][mM]|[iI][nN]|[pP][tT]|[pP][cC]|%)))$/.test(vValue);
	    }

	  },
	  DataType.getType('string')
	);

	return sap.ui.core.CSSSize;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

// Provides data type sap.ui.core.CSSSizeShortHand
sap.ui.define('sap/ui/core/CSSSizeShortHand',['sap/ui/base/DataType'], function(DataType) {

	/**
 * @class This type checks the short hand form of a margin or
 * 		padding definition. E.g. "1px 1px" or up to four values are allowed.
 * 	
	 *
	 * @author SAP AG
 * @since 1.11.0
	 * @static
	 * @public
	 */
	sap.ui.core.CSSSizeShortHand = DataType.createType('sap.ui.core.CSSSizeShortHand', {
	    isValid : function(vValue) {
	      return /^(inherit|(auto|[-+]?(0*|(\d+|\d*\.\d+)([eE][mM]|[eE][xX]|[pP][xX]|[cC][mM]|[mM][mM]|[iI][nN]|[pP][tT]|[pP][cC]|%))){1}(\s(auto|[-+]?(0*|(\d+|\d*\.\d+)([eE][mM]|[eE][xX]|[pP][xX]|[cC][mM]|[mM][mM]|[iI][nN]|[pP][tT]|[pP][cC]|%)))){0,3})$/.test(vValue);
	    }

	  },
	  DataType.getType('string')
	);

	return sap.ui.core.CSSSizeShortHand;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

// Provides data type sap.ui.core.Collision
sap.ui.define('sap/ui/core/Collision',['sap/ui/base/DataType'], function(DataType) {

	/**
 * @class Collision behavior: horizontal/vertical.
 * Defines how the position of an element should be adjusted in case it overflows the window in some direction. For both
 * directions this can be "flip", "fit" or "none". If only one behavior is provided it is applied to both directions.
 * Examples: "flip", "fit none".
	 *
	 * @author SAP AG
	 * @static
	 * @public
	 */
	sap.ui.core.Collision = DataType.createType('sap.ui.core.Collision', {
	    isValid : function(vValue) {
	      return /^((flip|fit|none)( (flip|fit|none))?)$/.test(vValue);
	    }

	  },
	  DataType.getType('string')
	);

	return sap.ui.core.Collision;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.core.Design.
sap.ui.define("sap/ui/core/Design", function() {
	"use strict";

/**
 * @class Font design for texts
 *
 * @version 1.22.10
 * @static
 * @public
 */
sap.ui.core.Design = {

	/**
	 * Standard font
	 * @public
	 */
	Standard : "Standard",

	/**
	 * Mono space font
	 * @public
	 */
	Monospace : "Monospace"

};


	return sap.ui.core.Design;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

// Provides data type sap.ui.core.Dock
sap.ui.define('sap/ui/core/Dock',['sap/ui/base/DataType'], function(DataType) {

	/**
 * @class Docking position: horizontal/vertical.
 * Defines a position on the element which is used for aligned positioning of another element (e.g. the left top 
 * corner of a popup is positioned at the left bottom corner of the input field). For the horizontal position possible values 
 * are "begin", "left", "center", "right" and "end", where left/right always are left and right, or begin/end which are 
 * dependent on the text direction. For the vertical position possible values are "top", "center" and "bottom".
 * Examples: "left top", "end bottom", "center center".
	 *
	 * @author SAP AG
	 * @static
	 * @public
	 */
	sap.ui.core.Dock = DataType.createType('sap.ui.core.Dock', {
	    isValid : function(vValue) {
	      return /^((begin|left|center|right|end) (top|center|bottom))$/.test(vValue);
	    }

	  },
	  DataType.getType('string')
	);

	return sap.ui.core.Dock;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.core.HorizontalAlign.
sap.ui.define("sap/ui/core/HorizontalAlign", function() {
	"use strict";

/**
 * @class Configuration options for horizontal alignments of controls
 *
 * @version 1.22.10
 * @static
 * @public
 */
sap.ui.core.HorizontalAlign = {

	/**
	 * Locale-specific positioning at the beginning of the line
	 * @public
	 */
	Begin : "Begin",

	/**
	 * Locale-specific positioning at the end of the line
	 * @public
	 */
	End : "End",

	/**
	 * Hard option for left alignment
	 * @public
	 */
	Left : "Left",

	/**
	 * Hard option for right alignment
	 * @public
	 */
	Right : "Right",

	/**
	 * Centered alignment of text
	 * @public
	 */
	Center : "Center"

};


	return sap.ui.core.HorizontalAlign;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

// Provides data type sap.ui.core.ID
sap.ui.define('sap/ui/core/ID',['sap/ui/base/DataType'], function(DataType) {

	/**
 * @class A string type representing an Id or a name.
	 *
	 * @author SAP AG
	 * @static
	 * @public
	 */
	sap.ui.core.ID = DataType.createType('sap.ui.core.ID', {
	    isValid : function(vValue) {
	      return /^([A-Za-z_][-A-Za-z0-9_.:]*)$/.test(vValue);
	    }

	  },
	  DataType.getType('string')
	);

	return sap.ui.core.ID;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.core.IconColor.
sap.ui.define("sap/ui/core/IconColor", function() {
	"use strict";

/**
 * @class Semantic Colors of an icon.
 *
 * @version 1.22.10
 * @static
 * @public
 */
sap.ui.core.IconColor = {

	/**
	 * Default color (brand color)
	 * @public
	 */
	Default : "Default",

	/**
	 * Positive color
	 * @public
	 */
	Positive : "Positive",

	/**
	 * Negative color
	 * @public
	 */
	Negative : "Negative",

	/**
	 * Critical color
	 * @public
	 */
	Critical : "Critical",

	/**
	 * Neutral color.
	 * @public
	 */
	Neutral : "Neutral"

};


	return sap.ui.core.IconColor;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.core.ImeMode.
sap.ui.define("sap/ui/core/ImeMode", function() {
	"use strict";

/**
 * @class State of the Input Method Editor (IME) for the control. Depending on its value, it allows users to enter and edit for example Chinese characters.
 *
 * @version 1.22.10
 * @static
 * @public
 */
sap.ui.core.ImeMode = {

	/**
	 * The value is automatically computed by the user agent.
	 * @public
	 */
	Auto : "Auto",

	/**
	 * IME is used for entering characters.
	 * @public
	 */
	Active : "Active",

	/**
	 * IME is not used for entering characters.
	 * @public
	 */
	Inactive : "Inactive",

	/**
	 * IME is disabled.
	 * @public
	 */
	Disabled : "Disabled"

};


	return sap.ui.core.ImeMode;
}, /* bExport = */ true);
/**
 * 
 *   Marker interface for controls which are suitable for use as label.
 *   
 *
 * @author SAP
 * @name sap.ui.core.Label
 * @interface
 * @public
 */

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.core.MessageType.
sap.ui.define("sap/ui/core/MessageType", function() {
	"use strict";

/**
 * @class Defines the different message types of a message
 *
 * @version 1.22.10
 * @static
 * @public
 */
sap.ui.core.MessageType = {

	/**
	 * Message should be just an information
	 * @public
	 */
	Information : "Information",

	/**
	 * Message is a warning
	 * @public
	 */
	Warning : "Warning",

	/**
	 * Message is an error
	 * @public
	 */
	Error : "Error",

	/**
	 * Message has no specific level
	 * @public
	 */
	None : "None",

	/**
	 * Message is an success message
	 * @public
	 */
	Success : "Success"

};


	return sap.ui.core.MessageType;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.core.OpenState.
sap.ui.define("sap/ui/core/OpenState", function() {
	"use strict";

/**
 * @class Defines the different possible states of an element that can be open or closed and does not only toggle between these states, but also spends some time in between (e.g. because of an animation).
 *
 * @version 1.22.10
 * @static
 * @public
 */
sap.ui.core.OpenState = {

	/**
	 * Open and currently not changing states.
	 * @public
	 */
	OPEN : "OPEN",

	/**
	 * Closed and currently not changing states.
	 * @public
	 */
	CLOSED : "CLOSED",

	/**
	 * Already left the CLOSED state, is not OPEN yet, but in the process of getting OPEN.
	 * @public
	 */
	OPENING : "OPENING",

	/**
	 * Still open, but in the process of going to the CLOSED state.
	 * @public
	 */
	CLOSING : "CLOSING"

};


	return sap.ui.core.OpenState;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.core.Orientation.
sap.ui.define("sap/ui/core/Orientation", function() {
	"use strict";

/**
 * @class Orientation of an UI element
 *
 * @version 1.22.10
 * @static
 * @public
 * @since 1.22
 */
sap.ui.core.Orientation = {

	/**
	 * Arrange Horizontally
	 * @public
	 */
	Horizontal : "Horizontal",

	/**
	 * Arrange Vertically
	 * @public
	 */
	Vertical : "Vertical"

};


	return sap.ui.core.Orientation;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

// Provides data type sap.ui.core.Percentage
sap.ui.define('sap/ui/core/Percentage',['sap/ui/base/DataType'], function(DataType) {

	/**
 * @class A string type that represents a percentage value.
	 *
	 * @author SAP AG
	 * @static
	 * @public
	 */
	sap.ui.core.Percentage = DataType.createType('sap.ui.core.Percentage', {
	    isValid : function(vValue) {
	      return /^([0-9][0-9]*(\.[0-9]+)?%)$/.test(vValue);
	    }

	  },
	  DataType.getType('string')
	);

	return sap.ui.core.Percentage;
}, /* bExport = */ true);
/**
 * 
 * Marker interface for controls that are not rendered "embedded" into other controls but need to be opened/closed. 
 * 
 * Such controls are handled differently during rendering.
 *
 * @author SAP
 * @since 1.19.0
 * @name sap.ui.core.PopupInterface
 * @interface
 * @public
 */

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.core.ScrollBarAction.
sap.ui.define("sap/ui/core/ScrollBarAction", function() {
	"use strict";

/**
 * @class Actions are: Click on track, button, drag of thumb, or mouse wheel click
 *
 * @version 1.22.10
 * @static
 * @public
 */
sap.ui.core.ScrollBarAction = {

	/**
	 * Single step scrolling caused by clicking an arrow button or arrow key.
	 * @public
	 */
	Step : "Step",

	/**
	 * Range scrolling caused by clicking track area or using page up or page down key.
	 * @public
	 */
	Page : "Page",

	/**
	 * Scrolling done by mouse wheel
	 * @public
	 */
	MouseWheel : "MouseWheel",

	/**
	 * Scrolling done by dragging the scroll bar's paint thumb
	 * @public
	 */
	Drag : "Drag"

};


	return sap.ui.core.ScrollBarAction;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.core.Scrolling.
sap.ui.define("sap/ui/core/Scrolling", function() {
	"use strict";

/**
 * @class Defines the possible values for horizontal and vertical scrolling behavior.
 *
 * @version 1.22.10
 * @static
 * @public
 */
sap.ui.core.Scrolling = {

	/**
	 * No scroll bar provided even if the content is larger than the available space.
	 * @public
	 */
	None : "None",

	/**
	 * A scroll bar is shown if the content requires more space than the given space (rectangle) provides.
	 * @public
	 */
	Auto : "Auto",

	/**
	 * A scroll bar is always shown even if the space is large enough for the current content.
	 * @public
	 */
	Scroll : "Scroll",

	/**
	 * No scroll bar is shown, and the content stays in the given rectangle.
	 * @public
	 */
	Hidden : "Hidden"

};


	return sap.ui.core.Scrolling;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.core.TextAlign.
sap.ui.define("sap/ui/core/TextAlign", function() {
	"use strict";

/**
 * @class Configuration options for text alignments.
 *
 * @version 1.22.10
 * @static
 * @public
 */
sap.ui.core.TextAlign = {

	/**
	 * Locale-specific positioning at the beginning of the line.
	 * @public
	 */
	Begin : "Begin",

	/**
	 * Locale-specific positioning at the end of the line.
	 * @public
	 */
	End : "End",

	/**
	 * Hard option for left alignment.
	 * @public
	 */
	Left : "Left",

	/**
	 * Hard option for right alignment.
	 * @public
	 */
	Right : "Right",

	/**
	 * Centered text alignment.
	 * @public
	 */
	Center : "Center"

};


	return sap.ui.core.TextAlign;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.core.TextDirection.
sap.ui.define("sap/ui/core/TextDirection", function() {
	"use strict";

/**
 * @class Configuration options for the direction of texts.
 *
 * @version 1.22.10
 * @static
 * @public
 */
sap.ui.core.TextDirection = {

	/**
	 * Specifies left-to-right text direction.
	 * @public
	 */
	LTR : "LTR",

	/**
	 * Specifies right-to-left text direction.
	 * @public
	 */
	RTL : "RTL",

	/**
	 * Inherits the direction from its parent control/container.
	 * @public
	 */
	Inherit : "Inherit"

};


	return sap.ui.core.TextDirection;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.core.TitleLevel.
sap.ui.define("sap/ui/core/TitleLevel", function() {
	"use strict";

/**
 * @class Level of a title.
 *
 * @version 1.22.10
 * @static
 * @public
 * @since 1.9.1
 */
sap.ui.core.TitleLevel = {

	/**
	 * The level of the title is choosen by the control rendering the title.
	 * @public
	 */
	Auto : "Auto",

	/**
	 * The Title is of level 1.
	 * @public
	 */
	H1 : "H1",

	/**
	 * The Title is of level 2
	 * @public
	 */
	H2 : "H2",

	/**
	 * The Title is of level 3
	 * @public
	 */
	H3 : "H3",

	/**
	 * The Title is of level 4
	 * @public
	 */
	H4 : "H4",

	/**
	 * The Title is of level 5
	 * @public
	 */
	H5 : "H5",

	/**
	 * The Title is of level 6
	 * @public
	 */
	H6 : "H6"

};


	return sap.ui.core.TitleLevel;
}, /* bExport = */ true);
/**
 * 
 * 	Marker interface for toolbar controls.
 * 	
 *
 * @author SAP AG
 * @since 1.21.0
 * @name sap.ui.core.Toolbar
 * @interface
 * @public
 */

/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* -----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ----------------------------------------------------------------------------------- */

// Provides data type sap.ui.core.URI
sap.ui.define('sap/ui/core/URI',['sap/ui/base/DataType'], function(DataType) {

	/**
 * @class A string type that represents an RFC 3986 conformant URI.
	 *
	 * @author SAP AG
	 * @static
	 * @public
	 */
	sap.ui.core.URI = DataType.createType('sap.ui.core.URI', {
	    isValid : function(vValue) {
	      return /^((([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?)$/.test(vValue);
	    }

	  },
	  DataType.getType('string')
	);

	return sap.ui.core.URI;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.core.ValueState.
sap.ui.define("sap/ui/core/ValueState", function() {
	"use strict";

/**
 * @class Marker for the correctness of the current value.
 *
 * @version 1.22.10
 * @static
 * @public
 */
sap.ui.core.ValueState = {

	/**
	 * State is not valid.
	 * @public
	 */
	Error : "Error",

	/**
	 * State is valid but with a warning.
	 * @public
	 */
	Warning : "Warning",

	/**
	 * State is valid.
	 * @public
	 */
	Success : "Success",

	/**
	 * State is not specified.
	 * @public
	 */
	None : "None"

};


	return sap.ui.core.ValueState;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.core.VerticalAlign.
sap.ui.define("sap/ui/core/VerticalAlign", function() {
	"use strict";

/**
 * @class
 * Configuration options for vertical alignments, for example of a layout cell content within the borders.
 * 
 *
 * @version 1.22.10
 * @static
 * @public
 */
sap.ui.core.VerticalAlign = {

	/**
	 * 
	 * Content is aligned at the bottom.
	 * 
	 * @public
	 */
	Bottom : "Bottom",

	/**
	 * 
	 * Content is centered vertically .
	 * 
	 * @public
	 */
	Middle : "Middle",

	/**
	 * 
	 * Content is aligned at the top.
	 * 
	 * @public
	 */
	Top : "Top",

	/**
	 * 
	 * Content respect the parent's vertical alignment.
	 * 
	 * @public
	 */
	Inherit : "Inherit"

};


	return sap.ui.core.VerticalAlign;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.core.Wrapping.
sap.ui.define("sap/ui/core/Wrapping", function() {
	"use strict";

/**
 * @class Configuration options for text wrapping.
 *
 * @version 1.22.10
 * @static
 * @public
 */
sap.ui.core.Wrapping = {

	/**
	 * The standard browser behavior is considered for wrapping.
	 * @public
	 */
	None : "None",

	/**
	 * The text is actually on the same line but displayed within several lines.
	 * @public
	 */
	Soft : "Soft",

	/**
	 * Inserts actual line breaks in the text at the wrap point.
	 * @public
	 */
	Hard : "Hard",

	/**
	 * Wrapping shall not be allowed.
	 * @public
	 */
	Off : "Off"

};


	return sap.ui.core.Wrapping;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.core.mvc.ViewType.
sap.ui.define("sap/ui/core/mvc/ViewType", function() {
	"use strict";

/**
 * @class Specifies possible view types
 *
 * @version 1.22.10
 * @static
 * @public
 */
sap.ui.core.mvc.ViewType = {

	/**
	 * JSON View
	 * @public
	 */
	JSON : "JSON",

	/**
	 * XML view
	 * @public
	 */
	XML : "XML",

	/**
	 * HTML view
	 * @public
	 */
	HTML : "HTML",

	/**
	 * JS View
	 * @public
	 */
	JS : "JS",

	/**
	 * Template View
	 * @public
	 */
	Template : "Template"

};


	return sap.ui.core.mvc.ViewType;
}, /* bExport = */ true);
/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.type, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides enumeration sap.ui.core.routing.HistoryDirection.
sap.ui.define("sap/ui/core/routing/HistoryDirection", function() {
	"use strict";

/**
 * @class Enumaration for different HistoryDirections
 *
 * @version 1.22.10
 * @static
 * @public
 */
sap.ui.core.routing.HistoryDirection = {

	/**
	 * The page has already been navigated to and it was the successor of the previous page
	 * @public
	 */
	Forwards : "Forwards",

	/**
	 * The page has already been navigated to and it was the precessor of the previous page
	 * @public
	 */
	Backwards : "Backwards",

	/**
	 * A new Entry is added to the history
	 * @public
	 */
	NewEntry : "NewEntry",

	/**
	 * A Navigation took place, but it could be any of the other three states
	 * @public
	 */
	Unknown : "Unknown"

};


	return sap.ui.core.routing.HistoryDirection;
}, /* bExport = */ true);

// -----------------------------------------------------------------------------
// Begin of Library Initialization coding, copied from shared.js
// -----------------------------------------------------------------------------

(function() {
	
	var lazy = sap.ui.lazyRequire;
	
	function each(sPackage,aClasses,sShortcutPkg) {
		for(var i=0; i<aClasses.length; i++) {
			if ( sShortcutPkg ) {
				lazy(sShortcutPkg, aClasses[i].toLowerCase(), sPackage + aClasses[i]);
			} else {
			  lazy(sPackage + aClasses[i], "new extend getMetadata");
			}
		}
	}
	
	// lazy imports
	lazy("sap.ui.core.BusyIndicator", "show hide attachOpen detachOpen attachClose detachClose");
	lazy("sap.ui.core.tmpl.Template", "registerType unregisterType");
	lazy("sap.ui.core.Fragment", "registerType");
	
	lazy("sap.ui", "xmlfragment", "sap.ui.core.Fragment"); // cannot use "each" as it assumes a module to exist for each function name
	lazy("sap.ui", "jsfragment", "sap.ui.core.Fragment");
	lazy("sap.ui", "htmlfragment", "sap.ui.core.Fragment");

	each("sap.ui.model.", ["Filter","Sorter","json.JSONModel","resource.ResourceModel","odata.ODataModel","xml.XMLModel"]);
	each("sap.ui.model.type.", ["Boolean","Integer","Float","String","Date","Time","DateTime"]);
	each("sap.ui.core.", ["Locale","LocaleData","mvc.Controller"]);
	each("sap.ui.core.mvc.", ["Controller", "View", "JSView", "JSONView", "XMLView", "HTMLView", "TemplateView"], "sap.ui");
	each("sap.ui.core.", ["Component"], "sap.ui");
	each("sap.ui.core.tmpl.", ["Template"], "sap.ui");

}());

}, /* bExport = */ false);
