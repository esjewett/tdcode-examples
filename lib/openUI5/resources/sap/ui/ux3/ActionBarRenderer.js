/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.ux3.ActionBarRenderer");sap.ui.ux3.ActionBarRenderer={};
sap.ui.ux3.ActionBarRenderer.render=function(r,c){var a=r;a.write("<div");a.writeControlData(c);a.addClass("sapUiUx3ActionBar");a.writeClasses();if(sap.ui.getCore().getConfiguration().getAccessibility()){a.writeAttribute('role','toolbar')}a.write(">");a.write("<ul");a.writeAttribute('id',c.getId()+"-socialActions");a.addClass("sapUiUx3ActionBarSocialActions");a.writeClasses();a.addStyle("min-width",c._getSocialActionListMinWidth()+"px");a.writeStyles();a.write(">");this.renderSocialActions(a,c);a.write("</ul>");a.write("<ul  id='"+c.getId()+"-businessActions' class='sapUiUx3ActionBarBusinessActions'>");this.renderBusinessActionButtons(a,c);a.write("</ul>");a.write("</div>")};
;
sap.ui.ux3.ActionBarRenderer.renderBusinessActionButtons=function(r,c){var a=c._getBusinessActionButtons();var m=c._getMoreMenuButton();if(a&&a.length>0){for(var i=0;i<a.length;i++){var b=a[i];r.write("<li");r.addClass("sapUiUx3ActionBarItemRight");r.writeClasses();r.write(">");r.renderControl(b);r.write("</li>")}this._renderMoreMenuButton(r,m)}else if(m){this._renderMoreMenuButton(r,m)}};
sap.ui.ux3.ActionBarRenderer._renderMoreMenuButton=function(r,m){if(m){r.write("<li");r.addClass("sapUiUx3ActionBarItemRight");r.addClass("sapUiUx3ActionBarMoreButton");r.writeClasses();r.write(">");r.renderControl(m);r.write("</li>")}};
;
sap.ui.ux3.ActionBarRenderer.renderSocialActions=function(r,c){var m=c.mActionMap;var k=c.mActionKeys;if(m[k.Update]){this._renderSocialActionListItem(r,c,m[k.Update])}if(m[k.Follow]){this._renderSocialActionListItem(r,c,m[k.Follow])}if(m[k.Flag]){this._renderSocialActionListItem(r,c,m[k.Flag])}if(m[k.Favorite]){this._renderSocialActionListItem(r,c,m[k.Favorite])}if(m[k.Open]){this._renderSocialActionListItem(r,c,m[k.Open])}for(var K in m){if(!K in sap.ui.ux3.ActionBarSocialActions){this._renderSocialActionListItem(r,c,m[K])}}};
;
sap.ui.ux3.ActionBarRenderer._renderSocialActionListItem=function(r,c,a){if(a&&!a.hide){r.write("<li");r.addClass("sapUiUx3ActionBarItem");r.writeClasses();r.write(">");this._renderSocialAction(r,c,a);r.write("</li>")}};
;
sap.ui.ux3.ActionBarRenderer._renderSocialAction=function(r,c,a){if(a.isMenu&&a.isMenu(c)){r.write("<a role=\"button\" aria-disabled=\"false\" aria-haspopup=\"true\"")}else{r.write("<a  role=\"button\" aria-disabled=\"false\" aria-haspopup=\"false\"")}if(a.name==c.mActionKeys.Flag||a.name==c.mActionKeys.Favorite){r.writeAttribute("aria-pressed",a.fnCalculateState(c)=="Selected"?"true":"false")}r.writeAttribute("tabindex","0");r.writeElementData(a);r.addClass(a.cssClass);if(a.fnCalculateState){r.addClass(a.fnCalculateState(c))}r.addClass("sapUiUx3ActionBarAction");r.writeClasses();if(a.getTooltip()){r.writeAttributeEscaped("title",a.getTooltip())}if(a.text){r.writeAttributeEscaped("text",c.getLocalizedText(a.getText()))}r.write("></a>")};
