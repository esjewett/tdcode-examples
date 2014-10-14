/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.library");jQuery.sap.require("sap.ui.core.Core");jQuery.sap.require("sap.ui.core.library");sap.ui.getCore().initLibrary({name:"sap.m",dependencies:["sap.ui.core"],types:["sap.m.BackgroundDesign","sap.m.BarDesign","sap.m.ButtonType","sap.m.DateTimeInputType","sap.m.DialogType","sap.m.FacetFilterType","sap.m.FlexAlignItems","sap.m.FlexAlignSelf","sap.m.FlexDirection","sap.m.FlexJustifyContent","sap.m.FlexRendertype","sap.m.HeaderLevel","sap.m.IBarHTMLTag","sap.m.IconTabFilterDesign","sap.m.InputType","sap.m.LabelDesign","sap.m.ListHeaderDesign","sap.m.ListMode","sap.m.ListSeparators","sap.m.ListType","sap.m.PageBackgroundDesign","sap.m.PlacementType","sap.m.PopinDisplay","sap.m.RatingIndicatorVisualMode","sap.m.ScreenSize","sap.m.SelectType","sap.m.SplitAppMode","sap.m.StandardTileType","sap.m.SwipeDirection","sap.m.SwitchType","sap.m.ToolbarDesign"],interfaces:["sap.m.IBar","sap.m.IconTab","sap.m.ObjectHeaderContainer"],controls:["sap.m.ActionListItem","sap.m.ActionSelect","sap.m.ActionSheet","sap.m.App","sap.m.Bar","sap.m.BusyDialog","sap.m.BusyIndicator","sap.m.Button","sap.m.Carousel","sap.m.CheckBox","sap.m.ColumnListItem","sap.m.ComboBox","sap.m.ComboBoxBase","sap.m.CustomListItem","sap.m.CustomTile","sap.m.DatePicker","sap.m.DateRangeSelection","sap.m.DateTimeInput","sap.m.Dialog","sap.m.DisplayListItem","sap.m.FacetFilter","sap.m.FacetFilterItem","sap.m.FacetFilterList","sap.m.FeedInput","sap.m.FeedListItem","sap.m.FlexBox","sap.m.GroupHeaderListItem","sap.m.GrowingList","sap.m.HBox","sap.m.IconTabBar","sap.m.IconTabHeader","sap.m.Image","sap.m.Input","sap.m.InputBase","sap.m.InputListItem","sap.m.Label","sap.m.Link","sap.m.List","sap.m.ListBase","sap.m.ListItemBase","sap.m.MultiComboBox","sap.m.MultiInput","sap.m.NavContainer","sap.m.ObjectAttribute","sap.m.ObjectHeader","sap.m.ObjectIdentifier","sap.m.ObjectListItem","sap.m.ObjectNumber","sap.m.ObjectStatus","sap.m.Page","sap.m.Panel","sap.m.Popover","sap.m.ProgressIndicator","sap.m.PullToRefresh","sap.m.RadioButton","sap.m.RatingIndicator","sap.m.ResponsivePopover","sap.m.ScrollContainer","sap.m.SearchField","sap.m.SegmentedButton","sap.m.Select","sap.m.SelectDialog","sap.m.Shell","sap.m.Slider","sap.m.SplitApp","sap.m.SplitContainer","sap.m.StandardListItem","sap.m.StandardTile","sap.m.Switch","sap.m.Table","sap.m.TableSelectDialog","sap.m.Text","sap.m.TextArea","sap.m.Tile","sap.m.TileContainer","sap.m.ToggleButton","sap.m.Token","sap.m.Tokenizer","sap.m.Toolbar","sap.m.ToolbarSpacer","sap.m.VBox","sap.m.ViewSettingsDialog"],elements:["sap.m.Column","sap.m.FlexItemData","sap.m.IconTabFilter","sap.m.IconTabSeparator","sap.m.ToolbarLayoutData","sap.m.ViewSettingsCustomItem","sap.m.ViewSettingsFilterItem","sap.m.ViewSettingsItem"],version:"1.22.10"});jQuery.sap.declare("sap.m.BackgroundDesign");sap.m.BackgroundDesign={Solid:"Solid",Transparent:"Transparent",Translucent:"Translucent"};jQuery.sap.declare("sap.m.BarDesign");sap.m.BarDesign={Auto:"Auto",Header:"Header",SubHeader:"SubHeader",Footer:"Footer"};jQuery.sap.declare("sap.m.ButtonType");sap.m.ButtonType={Default:"Default",Back:"Back",Accept:"Accept",Reject:"Reject",Transparent:"Transparent",Up:"Up",Unstyled:"Unstyled",Emphasized:"Emphasized"};jQuery.sap.declare("sap.m.DateTimeInputType");sap.m.DateTimeInputType={Date:"Date",DateTime:"DateTime",Time:"Time"};jQuery.sap.declare("sap.m.DialogType");sap.m.DialogType={Standard:"Standard",Message:"Message"};jQuery.sap.declare("sap.m.FacetFilterType");sap.m.FacetFilterType={Simple:"Simple",Light:"Light"};jQuery.sap.declare("sap.m.FlexAlignItems");sap.m.FlexAlignItems={Start:"Start",End:"End",Center:"Center",Baseline:"Baseline",Stretch:"Stretch",Inherit:"Inherit"};jQuery.sap.declare("sap.m.FlexAlignSelf");sap.m.FlexAlignSelf={Auto:"Auto",Start:"Start",End:"End",Center:"Center",Baseline:"Baseline",Stretch:"Stretch",Inherit:"Inherit"};jQuery.sap.declare("sap.m.FlexDirection");sap.m.FlexDirection={Row:"Row",Column:"Column",RowReverse:"RowReverse",ColumnReverse:"ColumnReverse",Inherit:"Inherit"};jQuery.sap.declare("sap.m.FlexJustifyContent");sap.m.FlexJustifyContent={Start:"Start",End:"End",Center:"Center",SpaceBetween:"SpaceBetween",SpaceAround:"SpaceAround",Inherit:"Inherit"};jQuery.sap.declare("sap.m.FlexRendertype");sap.m.FlexRendertype={Div:"Div",List:"List"};jQuery.sap.declare("sap.m.HeaderLevel");sap.m.HeaderLevel={H1:"H1",H2:"H2",H3:"H3",H4:"H4",H5:"H5",H6:"H6"};jQuery.sap.declare("sap.m.IBarHTMLTag");sap.m.IBarHTMLTag={Div:"Div",Header:"Header",Footer:"Footer"};jQuery.sap.declare("sap.m.IconTabFilterDesign");sap.m.IconTabFilterDesign={Horizontal:"Horizontal",Vertical:"Vertical"};jQuery.sap.declare("sap.m.InputType");sap.m.InputType={Text:"Text",Date:"Date",Datetime:"Datetime",DatetimeLocale:"DatetimeLocale",Email:"Email",Month:"Month",Number:"Number",Tel:"Tel",Time:"Time",Url:"Url",Week:"Week",Password:"Password"};jQuery.sap.declare("sap.m.LabelDesign");sap.m.LabelDesign={Bold:"Bold",Standard:"Standard"};jQuery.sap.declare("sap.m.ListHeaderDesign");sap.m.ListHeaderDesign={Standard:"Standard",Plain:"Plain"};jQuery.sap.declare("sap.m.ListMode");sap.m.ListMode={None:"None",SingleSelect:"SingleSelect",MultiSelect:"MultiSelect",Delete:"Delete",SingleSelectMaster:"SingleSelectMaster",SingleSelectLeft:"SingleSelectLeft"};jQuery.sap.declare("sap.m.ListSeparators");sap.m.ListSeparators={All:"All",Inner:"Inner",None:"None"};jQuery.sap.declare("sap.m.ListType");sap.m.ListType={Inactive:"Inactive",Detail:"Detail",Navigation:"Navigation",Active:"Active",DetailAndActive:"DetailAndActive"};jQuery.sap.declare("sap.m.PageBackgroundDesign");sap.m.PageBackgroundDesign={Standard:"Standard",List:"List",Solid:"Solid",Transparent:"Transparent"};jQuery.sap.declare("sap.m.PlacementType");sap.m.PlacementType={Left:"Left",Right:"Right",Top:"Top",Bottom:"Bottom",Vertical:"Vertical",Horizontal:"Horizontal",Auto:"Auto"};jQuery.sap.declare("sap.m.PopinDisplay");sap.m.PopinDisplay={Block:"Block",Inline:"Inline"};jQuery.sap.declare("sap.m.RatingIndicatorVisualMode");sap.m.RatingIndicatorVisualMode={Full:"Full",Half:"Half"};jQuery.sap.declare("sap.m.ScreenSize");sap.m.ScreenSize={Phone:"Phone",Tablet:"Tablet",Desktop:"Desktop",XXSmall:"XXSmall",XSmall:"XSmall",Small:"Small",Medium:"Medium",Large:"Large",XLarge:"XLarge",XXLarge:"XXLarge"};jQuery.sap.declare("sap.m.SelectType");sap.m.SelectType={Default:"Default",IconOnly:"IconOnly"};jQuery.sap.declare("sap.m.SplitAppMode");sap.m.SplitAppMode={ShowHideMode:"ShowHideMode",StretchCompressMode:"StretchCompressMode",PopoverMode:"PopoverMode",HideMode:"HideMode"};jQuery.sap.declare("sap.m.StandardTileType");sap.m.StandardTileType={Create:"Create",Monitor:"Monitor",None:"None"};jQuery.sap.declare("sap.m.SwipeDirection");sap.m.SwipeDirection={LeftToRight:"LeftToRight",RightToLeft:"RightToLeft",Both:"Both"};jQuery.sap.declare("sap.m.SwitchType");sap.m.SwitchType={Default:"Default",AcceptReject:"AcceptReject"};jQuery.sap.declare("sap.m.ToolbarDesign");sap.m.ToolbarDesign={Auto:"Auto",Transparent:"Transparent",Info:"Info",Solid:"Solid"};
/*!
 * @copyright@
 */
jQuery.sap.require("jquery.sap.mobile");jQuery.sap.require("sap.m.Support");sap.ui.lazyRequire("sap.m.MessageToast","show");jQuery.sap.require("sap.ui.Device");if(sap.ui.Device.os.ios&&sap.ui.Device.os.version>=7&&sap.ui.Device.os.version<8&&sap.ui.Device.browser.name==="sf"){jQuery.sap.require("sap.m.ios7")}if(/sap-ui-xx-formfactor=compact/.test(location.search)){jQuery("html").addClass("sapUiSizeCompact");sap.m._bSizeCompact=true}if(/sap-ui-xx-formfactor=condensed/.test(location.search)){jQuery("html").addClass("sapUiSizeCondensed");sap.m._bSizeCondensed=true}if(sap.m&&!sap.m.touch){sap.m.touch={}}
sap.m.touch.find=function(t,T){var i,a;if(!(t instanceof Object)){return}if(T instanceof Object&&typeof T.identifier!=="undefined"){T=T.identifier}else if(typeof T!=="number"){return}a=t.length;for(i=0;i<a;i++){if(t[i].identifier===T){return t[i]}}};
sap.m.touch.countContained=function(t,e){var i,T=0,a,E,$;if(!(t instanceof Object)){return}if(e instanceof Element){e=jQuery(e)}else if(typeof e==="string"){e=jQuery.sap.byId(e)}else if(!(e instanceof jQuery)){return}E=e.children().length;a=t.length;for(i=0;i<a;i++){$=jQuery(t[i].target);if((E===0&&$.is(e))||(e[0].contains($[0]))){T++}}return T};
!function(l){l.getInvalidDate=function(){return null};l.getLocale=function(){var c=sap.ui.getCore().getConfiguration(),L=c.getFormatSettings().getFormatLocale().toString(),o=new sap.ui.core.Locale(L);c=L=null;l.getLocale=function(){return o};return o};l.getLocaleData=function(){jQuery.sap.require("sap.ui.model.type.Date");var L=sap.ui.core.LocaleData.getInstance(l.getLocale());l.getLocaleData=function(){return L};return L};l.isDate=function(v){return v&&Object.prototype.toString.call(v)=="[object Date]"&&!isNaN(v)};l.getIScroll=function(c){if(typeof window.iScroll!="function"||!(c instanceof sap.ui.core.Control)){return}var p,s;for(p=c;p=p.oParent;){s=p.getScrollDelegate?p.getScrollDelegate()._scroller:null;if(s&&s instanceof window.iScroll){return s}}};l.getScrollDelegate=function(c){if(!(c instanceof sap.ui.core.Control)){return}for(var p=c;p=p.oParent;){if(typeof p.getScrollDelegate=="function"){return p.getScrollDelegate()}}};l.ScreenSizes={phone:240,tablet:600,desktop:1024,xxsmall:240,xsmall:320,small:480,medium:560,large:768,xlarge:960,xxlarge:1120};l.BaseFontSize=jQuery(document.documentElement).css("font-size");l.closeKeyboard=function(){var a=document.activeElement;if(!sap.ui.Device.system.desktop&&a&&/(INPUT|TEXTAREA)/i.test(a.tagName)){a.blur()}}}(sap.m);sap.m.URLHelper=(function($,w){function i(v){return v&&Object.prototype.toString.call(v)=="[object String]"}function f(t){if(!i(t)){return""}return t.replace(/[^0-9\+\*#]/g,"")}function a(t){if(!i(t)){return""}t=t.split(/\r\n|\r|\n/g).join("\r\n");return w.encodeURIComponent(t)}return $.extend(new sap.ui.base.EventProvider(),{normalizeTel:function(t){return"tel:"+f(t)},normalizeSms:function(t){return"sms:"+f(t)},normalizeEmail:function(e,s,b,c,B){var p=[],u="mailto:",d=w.encodeURIComponent;i(e)&&(u+=d($.trim(e)));i(s)&&p.push("subject="+d(s));i(b)&&p.push("body="+a(b));i(B)&&p.push("bcc="+d($.trim(B)));i(c)&&p.push("cc="+d($.trim(c)));if(p.length){u+="?"+p.join("&")}return u},redirect:function(u,n){this.fireEvent("redirect",u);if(!n){w.location.href=u}else{w.open(u,"_blank")}},attachRedirect:function(F,l){return this.attachEvent("redirect",F,l)},detachRedirect:function(F,l){return this.detachEvent("redirect",F,l)},triggerTel:function(t){this.redirect(this.normalizeTel(t))},triggerSms:function(t){this.redirect(this.normalizeSms(t))},triggerEmail:function(e,s,b,c,B){this.redirect(this.normalizeEmail.apply(0,arguments))},toString:function(){return"sap.m.URLHelper"}})}(jQuery,window));sap.m.BackgroundHelper=(function($,w){return{addBackgroundColorStyles:function(r,b,B,c){r.addClass(c||"sapMGlobalBackgroundColor");if(b||B){r.addStyle("background-image","none");r.addStyle("filter","none")}if(b){r.addStyle("background-color",jQuery.sap.escapeHTML(b))}},renderBackgroundImageTag:function(r,c,C,b,R,o){r.write("<div id='"+c.getId()+"-BG' ");r.addClass(C);r.addClass("sapMGlobalBackgroundImage");if(b){r.addStyle("display","block");r.addStyle("background-image","url("+jQuery.sap.encodeHTML(b)+")");r.addStyle("background-repeat",R?"repeat":"no-repeat");if(!R){r.addStyle("background-size","cover");r.addStyle("background-position","center")}else{r.addStyle("background-position","left top")}}else{}if(o!==1){if(o>1){o=1}r.addStyle("opacity",o)}r.writeClasses();r.writeStyles();r.write("></div>")}}}());sap.m.ImageHelper=(function($,w){function c(C,p,v){if(v!==undefined){var s=C['set'+jQuery.sap.charToUpperCase(p)];if(typeof(s)==="function"){s.call(C,v);return true}}return false}return{getImageControl:function(i,I,p,P,C,a){if(I&&(I.getSrc()!=P['src'])){I.destroy();I=undefined}var o=I;if(!!o&&(o instanceof sap.m.Image||o instanceof sap.ui.core.Icon)){for(var b in P){c(o,b,P[b])}}else{if(!sap.m.Image){jQuery.sap.require("sap.m.Image")}var s=P;s['id']=i;o=sap.ui.core.IconPool.createControlByURI(s,sap.m.Image);o.setParent(p,null,true)}if(!!a){for(var l=0,r=a.length;l!==r;l++){o.removeStyleClass(a[l])}}if(!!C){for(var k=0,d=C.length;k!==d;k++){o.addStyleClass(C[k])}}return I=o}}}());sap.m.PopupHelper=(function(){return{calcPercentageSize:function(p,b){if(typeof p!=="string"){jQuery.sap.log.warning("sap.m.PopupHelper: calcPercentageSize, the first parameter"+p+"isn't with type string");return null}if(p.indexOf("%")<=0){jQuery.sap.log.warning("sap.m.PopupHelper: calcPercentageSize, the first parameter"+p+"is not a percentage string (for example '25%')");return null}var P=parseFloat(p)/100,f=parseFloat(b);return Math.floor(P*f)+"px"}}}());sap.m.InputODataSuggestProvider=(function(){var _=function(e){var c=e.getSource();var v=c.data(c.getId()+"-#valueListAnnotation");if(!v){return}var r=e.getParameter("selectedRow");jQuery.each(r.getCells(),function(i,C){jQuery.each(v.outParameters,function(k,o){if(!o.displayOnly&&o.value==C.getBinding("text").getPath()){var V=C.getBinding("text").getValue();if(V)c.getModel().setProperty(k,V,c.getBinding("value").getContext())}})});return true};var a=function(c,r){var M=c.getModel();var s=M.getServiceMetadata();var o=M.oMetadata;var p=M.resolve(c.getBindingPath("value"),c.getBindingContext());var e=o._getEntityTypeByPath(p);var t=e.entityType+"/"+c.getBindingPath("value");var v={};v.searchSupported=false;v.collectionPath="";v.outParameters={};v.inParameters={};v.selection=[];var A=M.getProperty(p+"/#com.sap.vocabularies.Common.v1.ValueList");if(!A){return false}var P=p.substr(p.lastIndexOf('/')+1);v.inProperty=P;jQuery.each(A.record,function(i,b){jQuery.each(b,function(j,d){if(d.property==="SearchSupported"&&d.bool){v.searchSupported=true}if(d.property==="CollectionPath"){v.collectionPath=d.string}if(d.property==="Parameters"){jQuery.each(d.collection.record,function(k,R){if(R.type==="com.sap.vocabularies.Common.v1.ValueListParameterIn"){var l;jQuery.each(R.propertyValue,function(m,f){if(f.property==="LocalDataProperty"){l=f.propertyPath}});jQuery.each(R.propertyValue,function(m,f){if(f.property==="ValueListProperty"){v.inParameters[l]={value:f.string}}})}else if(R.type==="com.sap.vocabularies.Common.v1.ValueListParameterInOut"){var l;jQuery.each(R.propertyValue,function(m,f){if(f.property==="LocalDataProperty"){l=f.propertyPath}});jQuery.each(R.propertyValue,function(m,f){if(f.property==="ValueListProperty"){v.outParameters[l]={value:f.string};v.inParameters[l]={value:f.string}}})}else if(R.type==="com.sap.vocabularies.Common.v1.ValueListParameterOut"){var l;jQuery.each(R.propertyValue,function(m,f){if(f.property==="LocalDataProperty"){l=f.propertyPath}});jQuery.each(R.propertyValue,function(m,f){if(f.property==="ValueListProperty"){v.outParameters[l]={value:f.string}}})}else if(R.type==="com.sap.vocabularies.Common.v1.ValueListParameterDisplayOnly"){var l;jQuery.each(R.propertyValue,function(m,f){if(f.property==="ValueListProperty"){v.outParameters[f.string]={value:f.string,displayOnly:true}}})}})}})});v.resultEntity=o._getEntityTypeByPath("/"+v.collectionPath);v.listItem=new sap.m.ColumnListItem();jQuery.each(v.outParameters,function(k,O){v.listItem.addCell(new sap.m.Text({text:"{"+O.value+"}",wrapping:false}));c.addSuggestionColumn(new sap.m.Column({header:new sap.m.Text({text:"{/#"+v.resultEntity.name+"/"+O.value+"/@sap:label}",wrapping:false})}));v.selection.push(O.value)});c.data(c.getId()+"-#valueListAnnotation",v);if(r){c.attachSuggestionItemSelected(_)}};return{suggest:function(e,r,R,l){var v,c=e.getSource();r=r===undefined?true:r;R=R===undefined?true:R;if(!c.data(c.getId()+"-#valueListAnnotation")){a(c,R)}v=c.data(c.getId()+"-#valueListAnnotation");if(!v){return}var b=function(e){var B=this.getLength();if(B&&B<=l){c.setShowTableSuggestionValueHelp(false)}else{c.setShowTableSuggestionValueHelp(true)}};if(v.searchSupported){var f=[];var s,C={};if(r){jQuery.each(v.inParameters,function(k,o){if(k==v.inProperty){s=o.value}else if(r){var V=c.getModel().getProperty(k,c.getBinding("value").getContext());if(V){f.push(new sap.ui.model.Filter(o.value,sap.ui.model.FilterOperator.StartsWith,V))}}})}C.search=e.getParameter("suggestValue");if(v.inParameters.length){if(s){C["search-focus"]=s}else{}}c.bindAggregation("suggestionRows",{path:"/"+v.collectionPath,length:l,filters:f,parameters:{select:v.selection.join(','),custom:C},events:{dataReceived:b},template:v.listItem})}else{var f=[];jQuery.each(v.inParameters,function(k,o){if(k==v.inProperty){f.push(new sap.ui.model.Filter(o.value,sap.ui.model.FilterOperator.StartsWith,e.getParameter("suggestValue")))}else if(r){var V=c.getModel().getProperty(k,c.getBinding("value").getContext());if(V){f.push(new sap.ui.model.Filter(o.value,sap.ui.model.FilterOperator.StartsWith,V))}}});c.bindAggregation("suggestionRows",{path:"/"+v.collectionPath,filters:f,template:v.listItem,length:l,parameters:{select:v.selection.join(',')},events:{dataReceived:b}})}}}}());jQuery.sap.setObject("sap.ui.layout.form.FormHelper",{createLabel:function(t){return new sap.m.Label({text:t})},createButton:function(i,p,t){var b=new sap.m.Button(i);b.attachEvent('press',p,t);return b},setButtonContent:function(b,t,T,i,I){b.setText(t);b.setTooltip(T);b.setIcon(i);b.setActiveIcon(I)},addFormClass:function(){return"sapUiFormM"},bArrowKeySupport:false,bFinal:true});jQuery.sap.setObject("sap.ui.unified.FileUploaderHelper",{createTextField:function(i){var t=new sap.m.Input(i);return t},setTextFieldContent:function(t,w){t.setWidth(w)},createButton:function(){var b=new sap.m.Button();return b},bFinal:true});jQuery.sap.setObject("sap.ui.table.TableHelper",{createLabel:function(c){return new sap.m.Label(c)},createTextView:function(c){return new sap.m.Label(c)},createTextField:function(c){return new sap.m.Input(c)},createImage:function(c){return new sap.m.Image(c)},bFinal:true});