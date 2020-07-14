// Mr. Script v1.4.1
// 
// --------------------------------------------------------------------
// This is a Greasemonkey user script.  To install it, you need
// Greasemonkey 0.3 or later: http://greasemonkey.mozdev.org/
// To uninstall, go to Tools/Manage User Scripts,
// select "Mr. Script", and click Uninstall.
// Released under the GPL license: http://www.gnu.org/copyleft/gpl.html
// --------------------------------------------------------------------
// 
// ==UserScript==
// @name          Mr. Script
// @namespace     http://www.noblesse-oblige.org/lukifer/scripts/
// @description	  Version 1.4.1
// @include       http://*kingdomofloathing.com/*
// @include		  http://*127.0.0.1:60*
// @exclude       http://images.kingdomofloathing.com/*
// @exclude       http://forums.kingdomofloathing.com/*
// ==/UserScript==

var VERSION = 141;
var MAXLIMIT = 999;
var ENABLE_QS_REFRESH = 1;
var DISABLE_ITEM_DB = 0;
var ITEMDB_URL = "kol.cmeister2.co.uk/items/?mode=json2";
//var ITEMDB_URL = "noblesse-oblige.org/lukifer/scripts/tempdb.txt";

var thePath = document.location.pathname;
var itemDB = null;

// jQuery BEGIN

(function(){var _jQuery=window.jQuery,_$=window.$;var jQuery=window.jQuery=window.$=function(selector,context){return new jQuery.fn.init(selector,context);};var quickExpr=/^[^<]*(<(.|\s)+>)[^>]*$|^#(\w+)$/,isSimple=/^.[^:#\[\.]*$/,undefined;jQuery.fn=jQuery.prototype={init:function(selector,context){selector=selector||document;if(selector.nodeType){this[0]=selector;this.length=1;return this;}if(typeof selector=="string"){var match=quickExpr.exec(selector);if(match&&(match[1]||!context)){if(match[1])selector=jQuery.clean([match[1]],context);else{var elem=document.getElementById(match[3]);if(elem){if(elem.id!=match[3])return jQuery().find(selector);return jQuery(elem);}selector=[];}}else
return jQuery(context).find(selector);}else if(jQuery.isFunction(selector))return jQuery(document)[jQuery.fn.ready?"ready":"load"](selector);return this.setArray(jQuery.makeArray(selector));},jquery:"1.2.6",size:function(){return this.length;},length:0,get:function(num){return num==undefined?jQuery.makeArray(this):this[num];},pushStack:function(elems){var ret=jQuery(elems);ret.prevObject=this;return ret;},setArray:function(elems){this.length=0;Array.prototype.push.apply(this,elems);return this;},each:function(callback,args){return jQuery.each(this,callback,args);},index:function(elem){var ret=-1;return jQuery.inArray(elem&&elem.jquery?elem[0]:elem,this);},attr:function(name,value,type){var options=name;if(name.constructor==String)if(value===undefined)return this[0]&&jQuery[type||"attr"](this[0],name);else{options={};options[name]=value;}return this.each(function(i){for(name in options)jQuery.attr(type?this.style:this,name,jQuery.prop(this,options[name],type,i,name));});},css:function(key,value){if((key=='width'||key=='height')&&parseFloat(value)<0)value=undefined;return this.attr(key,value,"curCSS");},text:function(text){if(typeof text!="object"&&text!=null)return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(text));var ret="";jQuery.each(text||this,function(){jQuery.each(this.childNodes,function(){if(this.nodeType!=8)ret+=this.nodeType!=1?this.nodeValue:jQuery.fn.text([this]);});});return ret;},wrapAll:function(html){if(this[0])jQuery(html,this[0].ownerDocument).clone().insertBefore(this[0]).map(function(){var elem=this;while(elem.firstChild)elem=elem.firstChild;return elem;}).append(this);return this;},wrapInner:function(html){return this.each(function(){jQuery(this).contents().wrapAll(html);});},wrap:function(html){return this.each(function(){jQuery(this).wrapAll(html);});},append:function(){return this.domManip(arguments,true,false,function(elem){if(this.nodeType==1)this.appendChild(elem);});},prepend:function(){return this.domManip(arguments,true,true,function(elem){if(this.nodeType==1)this.insertBefore(elem,this.firstChild);});},before:function(){return this.domManip(arguments,false,false,function(elem){this.parentNode.insertBefore(elem,this);});},after:function(){return this.domManip(arguments,false,true,function(elem){this.parentNode.insertBefore(elem,this.nextSibling);});},end:function(){return this.prevObject||jQuery([]);},find:function(selector){var elems=jQuery.map(this,function(elem){return jQuery.find(selector,elem);});return this.pushStack(/[^+>] [^+>]/.test(selector)||selector.indexOf("..")>-1?jQuery.unique(elems):elems);},clone:function(events){var ret=this.map(function(){if(jQuery.browser.msie&&!jQuery.isXMLDoc(this)){var clone=this.cloneNode(true),container=document.createElement("div");container.appendChild(clone);return jQuery.clean([container.innerHTML])[0];}else
return this.cloneNode(true);});var clone=ret.find("*").andSelf().each(function(){if(this[expando]!=undefined)this[expando]=null;});if(events===true)this.find("*").andSelf().each(function(i){if(this.nodeType==3)return;var events=jQuery.data(this,"events");for(var type in events)for(var handler in events[type])jQuery.event.add(clone[i],type,events[type][handler],events[type][handler].data);});return ret;},filter:function(selector){return this.pushStack(jQuery.isFunction(selector)&&jQuery.grep(this,function(elem,i){return selector.call(elem,i);})||jQuery.multiFilter(selector,this));},not:function(selector){if(selector.constructor==String)if(isSimple.test(selector))return this.pushStack(jQuery.multiFilter(selector,this,true));else
selector=jQuery.multiFilter(selector,this);var isArrayLike=selector.length&&selector[selector.length-1]!==undefined&&!selector.nodeType;return this.filter(function(){return isArrayLike?jQuery.inArray(this,selector)<0:this!=selector;});},add:function(selector){return this.pushStack(jQuery.unique(jQuery.merge(this.get(),typeof selector=='string'?jQuery(selector):jQuery.makeArray(selector))));},is:function(selector){return!!selector&&jQuery.multiFilter(selector,this).length>0;},hasClass:function(selector){return this.is("."+selector);},val:function(value){if(value==undefined){if(this.length){var elem=this[0];if(jQuery.nodeName(elem,"select")){var index=elem.selectedIndex,values=[],options=elem.options,one=elem.type=="select-one";if(index<0)return null;for(var i=one?index:0,max=one?index+1:options.length;i<max;i++){var option=options[i];if(option.selected){value=jQuery.browser.msie&&!option.attributes.value.specified?option.text:option.value;if(one)return value;values.push(value);}}return values;}else
return(this[0].value||"").replace(/\r/g,"");}return undefined;}if(value.constructor==Number)value+='';return this.each(function(){if(this.nodeType!=1)return;if(value.constructor==Array&&/radio|checkbox/.test(this.type))this.checked=(jQuery.inArray(this.value,value)>=0||jQuery.inArray(this.name,value)>=0);else if(jQuery.nodeName(this,"select")){var values=jQuery.makeArray(value);jQuery("option",this).each(function(){this.selected=(jQuery.inArray(this.value,values)>=0||jQuery.inArray(this.text,values)>=0);});if(!values.length)this.selectedIndex=-1;}else
this.value=value;});},html:function(value){return value==undefined?(this[0]?this[0].innerHTML:null):this.empty().append(value);},replaceWith:function(value){return this.after(value).remove();},eq:function(i){return this.slice(i,i+1);},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments));},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},andSelf:function(){return this.add(this.prevObject);},data:function(key,value){var parts=key.split(".");parts[1]=parts[1]?"."+parts[1]:"";if(value===undefined){var data=this.triggerHandler("getData"+parts[1]+"!",[parts[0]]);if(data===undefined&&this.length)data=jQuery.data(this[0],key);return data===undefined&&parts[1]?this.data(parts[0]):data;}else
return this.trigger("setData"+parts[1]+"!",[parts[0],value]).each(function(){jQuery.data(this,key,value);});},removeData:function(key){return this.each(function(){jQuery.removeData(this,key);});},domManip:function(args,table,reverse,callback){var clone=this.length>1,elems;return this.each(function(){if(!elems){elems=jQuery.clean(args,this.ownerDocument);if(reverse)elems.reverse();}var obj=this;if(table&&jQuery.nodeName(this,"table")&&jQuery.nodeName(elems[0],"tr"))obj=this.getElementsByTagName("tbody")[0]||this.appendChild(this.ownerDocument.createElement("tbody"));var scripts=jQuery([]);jQuery.each(elems,function(){var elem=clone?jQuery(this).clone(true)[0]:this;if(jQuery.nodeName(elem,"script"))scripts=scripts.add(elem);else{if(elem.nodeType==1)scripts=scripts.add(jQuery("script",elem).remove());callback.call(obj,elem);}});scripts.each(evalScript);});}};jQuery.fn.init.prototype=jQuery.fn;function evalScript(i,elem){if(elem.src)jQuery.ajax({url:elem.src,async:false,dataType:"script"});else
jQuery.globalEval(elem.text||elem.textContent||elem.innerHTML||"");if(elem.parentNode)elem.parentNode.removeChild(elem);}function now(){return+new Date;}jQuery.extend=jQuery.fn.extend=function(){var target=arguments[0]||{},i=1,length=arguments.length,deep=false,options;if(target.constructor==Boolean){deep=target;target=arguments[1]||{};i=2;}if(typeof target!="object"&&typeof target!="function")target={};if(length==i){target=this;--i;}for(;i<length;i++)if((options=arguments[i])!=null)for(var name in options){var src=target[name],copy=options[name];if(target===copy)continue;if(deep&&copy&&typeof copy=="object"&&!copy.nodeType)target[name]=jQuery.extend(deep,src||(copy.length!=null?[]:{}),copy);else if(copy!==undefined)target[name]=copy;}return target;};var expando="jQuery"+now(),uuid=0,windowData={},exclude=/z-?index|font-?weight|opacity|zoom|line-?height/i,defaultView=document.defaultView||{};jQuery.extend({noConflict:function(deep){window.$=_$;if(deep)window.jQuery=_jQuery;return jQuery;},isFunction:function(fn){return!!fn&&typeof fn!="string"&&!fn.nodeName&&fn.constructor!=Array&&/^[\s[]?function/.test(fn+"");},isXMLDoc:function(elem){return elem.documentElement&&!elem.body||elem.tagName&&elem.ownerDocument&&!elem.ownerDocument.body;},globalEval:function(data){data=jQuery.trim(data);if(data){var head=document.getElementsByTagName("head")[0]||document.documentElement,script=document.createElement("script");script.type="text/javascript";if(jQuery.browser.msie)script.text=data;else
script.appendChild(document.createTextNode(data));head.insertBefore(script,head.firstChild);head.removeChild(script);}},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toUpperCase()==name.toUpperCase();},cache:{},data:function(elem,name,data){elem=elem==window?windowData:elem;var id=elem[expando];if(!id)id=elem[expando]=++uuid;if(name&&!jQuery.cache[id])jQuery.cache[id]={};if(data!==undefined)jQuery.cache[id][name]=data;return name?jQuery.cache[id][name]:id;},removeData:function(elem,name){elem=elem==window?windowData:elem;var id=elem[expando];if(name){if(jQuery.cache[id]){delete jQuery.cache[id][name];name="";for(name in jQuery.cache[id])break;if(!name)jQuery.removeData(elem);}}else{try{delete elem[expando];}catch(e){if(elem.removeAttribute)elem.removeAttribute(expando);}delete jQuery.cache[id];}},each:function(object,callback,args){var name,i=0,length=object.length;if(args){if(length==undefined){for(name in object)if(callback.apply(object[name],args)===false)break;}else
for(;i<length;)if(callback.apply(object[i++],args)===false)break;}else{if(length==undefined){for(name in object)if(callback.call(object[name],name,object[name])===false)break;}else
for(var value=object[0];i<length&&callback.call(value,i,value)!==false;value=object[++i]){}}return object;},prop:function(elem,value,type,i,name){if(jQuery.isFunction(value))value=value.call(elem,i);return value&&value.constructor==Number&&type=="curCSS"&&!exclude.test(name)?value+"px":value;},className:{add:function(elem,classNames){jQuery.each((classNames||"").split(/\s+/),function(i,className){if(elem.nodeType==1&&!jQuery.className.has(elem.className,className))elem.className+=(elem.className?" ":"")+className;});},remove:function(elem,classNames){if(elem.nodeType==1)elem.className=classNames!=undefined?jQuery.grep(elem.className.split(/\s+/),function(className){return!jQuery.className.has(classNames,className);}).join(" "):"";},has:function(elem,className){return jQuery.inArray(className,(elem.className||elem).toString().split(/\s+/))>-1;}},swap:function(elem,options,callback){var old={};for(var name in options){old[name]=elem.style[name];elem.style[name]=options[name];}callback.call(elem);for(var name in options)elem.style[name]=old[name];},css:function(elem,name,force){if(name=="width"||name=="height"){var val,props={position:"absolute",visibility:"hidden",display:"block"},which=name=="width"?["Left","Right"]:["Top","Bottom"];function getWH(){val=name=="width"?elem.offsetWidth:elem.offsetHeight;var padding=0,border=0;jQuery.each(which,function(){padding+=parseFloat(jQuery.curCSS(elem,"padding"+this,true))||0;border+=parseFloat(jQuery.curCSS(elem,"border"+this+"Width",true))||0;});val-=Math.round(padding+border);}if(jQuery(elem).is(":visible"))getWH();else
jQuery.swap(elem,props,getWH);return Math.max(0,val);}return jQuery.curCSS(elem,name,force);},curCSS:function(elem,name,force){var ret,style=elem.style;function color(elem){if(!jQuery.browser.safari)return false;var ret=defaultView.getComputedStyle(elem,null);return!ret||ret.getPropertyValue("color")=="";}if(name=="opacity"&&jQuery.browser.msie){ret=jQuery.attr(style,"opacity");return ret==""?"1":ret;}if(jQuery.browser.opera&&name=="display"){var save=style.outline;style.outline="0 solid black";style.outline=save;}if(name.match(/float/i))name=styleFloat;if(!force&&style&&style[name])ret=style[name];else if(defaultView.getComputedStyle){if(name.match(/float/i))name="float";name=name.replace(/([A-Z])/g,"-$1").toLowerCase();var computedStyle=defaultView.getComputedStyle(elem,null);if(computedStyle&&!color(elem))ret=computedStyle.getPropertyValue(name);else{var swap=[],stack=[],a=elem,i=0;for(;a&&color(a);a=a.parentNode)stack.unshift(a);for(;i<stack.length;i++)if(color(stack[i])){swap[i]=stack[i].style.display;stack[i].style.display="block";}ret=name=="display"&&swap[stack.length-1]!=null?"none":(computedStyle&&computedStyle.getPropertyValue(name))||"";for(i=0;i<swap.length;i++)if(swap[i]!=null)stack[i].style.display=swap[i];}if(name=="opacity"&&ret=="")ret="1";}else if(elem.currentStyle){var camelCase=name.replace(/\-(\w)/g,function(all,letter){return letter.toUpperCase();});ret=elem.currentStyle[name]||elem.currentStyle[camelCase];if(!/^\d+(px)?$/i.test(ret)&&/^\d/.test(ret)){var left=style.left,rsLeft=elem.runtimeStyle.left;elem.runtimeStyle.left=elem.currentStyle.left;style.left=ret||0;ret=style.pixelLeft+"px";style.left=left;elem.runtimeStyle.left=rsLeft;}}return ret;},clean:function(elems,context){var ret=[];context=context||document;if(typeof context.createElement=='undefined')context=context.ownerDocument||context[0]&&context[0].ownerDocument||document;jQuery.each(elems,function(i,elem){if(!elem)return;if(elem.constructor==Number)elem+='';if(typeof elem=="string"){elem=elem.replace(/(<(\w+)[^>]*?)\/>/g,function(all,front,tag){return tag.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?all:front+"></"+tag+">";});var tags=jQuery.trim(elem).toLowerCase(),div=context.createElement("div");var wrap=!tags.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!tags.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||tags.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!tags.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!tags.indexOf("<td")||!tags.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!tags.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||jQuery.browser.msie&&[1,"div<div>","</div>"]||[0,"",""];div.innerHTML=wrap[1]+elem+wrap[2];while(wrap[0]--)div=div.lastChild;if(jQuery.browser.msie){var tbody=!tags.indexOf("<table")&&tags.indexOf("<tbody")<0?div.firstChild&&div.firstChild.childNodes:wrap[1]=="<table>"&&tags.indexOf("<tbody")<0?div.childNodes:[];for(var j=tbody.length-1;j>=0;--j)if(jQuery.nodeName(tbody[j],"tbody")&&!tbody[j].childNodes.length)tbody[j].parentNode.removeChild(tbody[j]);if(/^\s/.test(elem))div.insertBefore(context.createTextNode(elem.match(/^\s*/)[0]),div.firstChild);}elem=jQuery.makeArray(div.childNodes);}if(elem.length===0&&(!jQuery.nodeName(elem,"form")&&!jQuery.nodeName(elem,"select")))return;if(elem[0]==undefined||jQuery.nodeName(elem,"form")||elem.options)ret.push(elem);else
ret=jQuery.merge(ret,elem);});return ret;},attr:function(elem,name,value){if(!elem||elem.nodeType==3||elem.nodeType==8)return undefined;var notxml=!jQuery.isXMLDoc(elem),set=value!==undefined,msie=jQuery.browser.msie;name=notxml&&jQuery.props[name]||name;if(elem.tagName){var special=/href|src|style/.test(name);if(name=="selected"&&jQuery.browser.safari)elem.parentNode.selectedIndex;if(name in elem&&notxml&&!special){if(set){if(name=="type"&&jQuery.nodeName(elem,"input")&&elem.parentNode)throw"type property can't be changed";elem[name]=value;}if(jQuery.nodeName(elem,"form")&&elem.getAttributeNode(name))return elem.getAttributeNode(name).nodeValue;return elem[name];}if(msie&&notxml&&name=="style")return jQuery.attr(elem.style,"cssText",value);if(set)elem.setAttribute(name,""+value);var attr=msie&&notxml&&special?elem.getAttribute(name,2):elem.getAttribute(name);return attr===null?undefined:attr;}if(msie&&name=="opacity"){if(set){elem.zoom=1;elem.filter=(elem.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(value)+''=="NaN"?"":"alpha(opacity="+value*100+")");}return elem.filter&&elem.filter.indexOf("opacity=")>=0?(parseFloat(elem.filter.match(/opacity=([^)]*)/)[1])/100)+'':"";}name=name.replace(/-([a-z])/ig,function(all,letter){return letter.toUpperCase();});if(set)elem[name]=value;return elem[name];},trim:function(text){return(text||"").replace(/^\s+|\s+$/g,"");},makeArray:function(array){var ret=[];if(array!=null){var i=array.length;if(i==null||array.split||array.setInterval||array.call)ret[0]=array;else
while(i)ret[--i]=array[i];}return ret;},inArray:function(elem,array){for(var i=0,length=array.length;i<length;i++)if(array[i]===elem)return i;return-1;},merge:function(first,second){var i=0,elem,pos=first.length;if(jQuery.browser.msie){while(elem=second[i++])if(elem.nodeType!=8)first[pos++]=elem;}else
while(elem=second[i++])first[pos++]=elem;return first;},unique:function(array){var ret=[],done={};try{for(var i=0,length=array.length;i<length;i++){var id=jQuery.data(array[i]);if(!done[id]){done[id]=true;ret.push(array[i]);}}}catch(e){ret=array;}return ret;},grep:function(elems,callback,inv){var ret=[];for(var i=0,length=elems.length;i<length;i++)if(!inv!=!callback(elems[i],i))ret.push(elems[i]);return ret;},map:function(elems,callback){var ret=[];for(var i=0,length=elems.length;i<length;i++){var value=callback(elems[i],i);if(value!=null)ret[ret.length]=value;}return ret.concat.apply([],ret);}});var userAgent=navigator.userAgent.toLowerCase();jQuery.browser={version:(userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],safari:/webkit/.test(userAgent),opera:/opera/.test(userAgent),msie:/msie/.test(userAgent)&&!/opera/.test(userAgent),mozilla:/mozilla/.test(userAgent)&&!/(compatible|webkit)/.test(userAgent)};var styleFloat=jQuery.browser.msie?"styleFloat":"cssFloat";jQuery.extend({boxModel:!jQuery.browser.msie||document.compatMode=="CSS1Compat",props:{"for":"htmlFor","class":"className","float":styleFloat,cssFloat:styleFloat,styleFloat:styleFloat,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing"}});jQuery.each({parent:function(elem){return elem.parentNode;},parents:function(elem){return jQuery.dir(elem,"parentNode");},next:function(elem){return jQuery.nth(elem,2,"nextSibling");},prev:function(elem){return jQuery.nth(elem,2,"previousSibling");},nextAll:function(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function(elem){return jQuery.dir(elem,"previousSibling");},siblings:function(elem){return jQuery.sibling(elem.parentNode.firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.makeArray(elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(selector){var ret=jQuery.map(this,fn);if(selector&&typeof selector=="string")ret=jQuery.multiFilter(selector,ret);return this.pushStack(jQuery.unique(ret));};});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(){var args=arguments;return this.each(function(){for(var i=0,length=args.length;i<length;i++)jQuery(args[i])[original](this);});};});jQuery.each({removeAttr:function(name){jQuery.attr(this,name,"");if(this.nodeType==1)this.removeAttribute(name);},addClass:function(classNames){jQuery.className.add(this,classNames);},removeClass:function(classNames){jQuery.className.remove(this,classNames);},toggleClass:function(classNames){jQuery.className[jQuery.className.has(this,classNames)?"remove":"add"](this,classNames);},remove:function(selector){if(!selector||jQuery.filter(selector,[this]).r.length){jQuery("*",this).add(this).each(function(){jQuery.event.remove(this);jQuery.removeData(this);});if(this.parentNode)this.parentNode.removeChild(this);}},empty:function(){jQuery(">*",this).remove();while(this.firstChild)this.removeChild(this.firstChild);}},function(name,fn){jQuery.fn[name]=function(){return this.each(fn,arguments);};});jQuery.each(["Height","Width"],function(i,name){var type=name.toLowerCase();jQuery.fn[type]=function(size){return this[0]==window?jQuery.browser.opera&&document.body["client"+name]||jQuery.browser.safari&&window["inner"+name]||document.compatMode=="CSS1Compat"&&document.documentElement["client"+name]||document.body["client"+name]:this[0]==document?Math.max(Math.max(document.body["scroll"+name],document.documentElement["scroll"+name]),Math.max(document.body["offset"+name],document.documentElement["offset"+name])):size==undefined?(this.length?jQuery.css(this[0],type):null):this.css(type,size.constructor==String?size:size+"px");};});function num(elem,prop){return elem[0]&&parseInt(jQuery.curCSS(elem[0],prop,true),10)||0;}var chars=jQuery.browser.safari&&parseInt(jQuery.browser.version)<417?"(?:[\\w*_-]|\\\\.)":"(?:[\\w\u0128-\uFFFF*_-]|\\\\.)",quickChild=new RegExp("^>\\s*("+chars+"+)"),quickID=new RegExp("^("+chars+"+)(#)("+chars+"+)"),quickClass=new RegExp("^([#.]?)("+chars+"*)");jQuery.extend({expr:{"":function(a,i,m){return m[2]=="*"||jQuery.nodeName(a,m[2]);},"#":function(a,i,m){return a.getAttribute("id")==m[2];},":":{lt:function(a,i,m){return i<m[3]-0;},gt:function(a,i,m){return i>m[3]-0;},nth:function(a,i,m){return m[3]-0==i;},eq:function(a,i,m){return m[3]-0==i;},first:function(a,i){return i==0;},last:function(a,i,m,r){return i==r.length-1;},even:function(a,i){return i%2==0;},odd:function(a,i){return i%2;},"first-child":function(a){return a.parentNode.getElementsByTagName("*")[0]==a;},"last-child":function(a){return jQuery.nth(a.parentNode.lastChild,1,"previousSibling")==a;},"only-child":function(a){return!jQuery.nth(a.parentNode.lastChild,2,"previousSibling");},parent:function(a){return a.firstChild;},empty:function(a){return!a.firstChild;},contains:function(a,i,m){return(a.textContent||a.innerText||jQuery(a).text()||"").indexOf(m[3])>=0;},visible:function(a){return"hidden"!=a.type&&jQuery.css(a,"display")!="none"&&jQuery.css(a,"visibility")!="hidden";},hidden:function(a){return"hidden"==a.type||jQuery.css(a,"display")=="none"||jQuery.css(a,"visibility")=="hidden";},enabled:function(a){return!a.disabled;},disabled:function(a){return a.disabled;},checked:function(a){return a.checked;},selected:function(a){return a.selected||jQuery.attr(a,"selected");},text:function(a){return"text"==a.type;},radio:function(a){return"radio"==a.type;},checkbox:function(a){return"checkbox"==a.type;},file:function(a){return"file"==a.type;},password:function(a){return"password"==a.type;},submit:function(a){return"submit"==a.type;},image:function(a){return"image"==a.type;},reset:function(a){return"reset"==a.type;},button:function(a){return"button"==a.type||jQuery.nodeName(a,"button");},input:function(a){return/input|select|textarea|button/i.test(a.nodeName);},has:function(a,i,m){return jQuery.find(m[3],a).length;},header:function(a){return/h\d/i.test(a.nodeName);},animated:function(a){return jQuery.grep(jQuery.timers,function(fn){return a==fn.elem;}).length;}}},parse:[/^(\[) *@?([\w-]+) *([!*$^~=]*) *('?"?)(.*?)\4 *\]/,/^(:)([\w-]+)\("?'?(.*?(\(.*?\))?[^(]*?)"?'?\)/,new RegExp("^([:.#]*)("+chars+"+)")],multiFilter:function(expr,elems,not){var old,cur=[];while(expr&&expr!=old){old=expr;var f=jQuery.filter(expr,elems,not);expr=f.t.replace(/^\s*,\s*/,"");cur=not?elems=f.r:jQuery.merge(cur,f.r);}return cur;},find:function(t,context){if(typeof t!="string")return[t];if(context&&context.nodeType!=1&&context.nodeType!=9)return[];context=context||document;var ret=[context],done=[],last,nodeName;while(t&&last!=t){var r=[];last=t;t=jQuery.trim(t);var foundToken=false,re=quickChild,m=re.exec(t);if(m){nodeName=m[1].toUpperCase();for(var i=0;ret[i];i++)for(var c=ret[i].firstChild;c;c=c.nextSibling)if(c.nodeType==1&&(nodeName=="*"||c.nodeName.toUpperCase()==nodeName))r.push(c);ret=r;t=t.replace(re,"");if(t.indexOf(" ")==0)continue;foundToken=true;}else{re=/^([>+~])\s*(\w*)/i;if((m=re.exec(t))!=null){r=[];var merge={};nodeName=m[2].toUpperCase();m=m[1];for(var j=0,rl=ret.length;j<rl;j++){var n=m=="~"||m=="+"?ret[j].nextSibling:ret[j].firstChild;for(;n;n=n.nextSibling)if(n.nodeType==1){var id=jQuery.data(n);if(m=="~"&&merge[id])break;if(!nodeName||n.nodeName.toUpperCase()==nodeName){if(m=="~")merge[id]=true;r.push(n);}if(m=="+")break;}}ret=r;t=jQuery.trim(t.replace(re,""));foundToken=true;}}if(t&&!foundToken){if(!t.indexOf(",")){if(context==ret[0])ret.shift();done=jQuery.merge(done,ret);r=ret=[context];t=" "+t.substr(1,t.length);}else{var re2=quickID;var m=re2.exec(t);if(m){m=[0,m[2],m[3],m[1]];}else{re2=quickClass;m=re2.exec(t);}m[2]=m[2].replace(/\\/g,"");var elem=ret[ret.length-1];if(m[1]=="#"&&elem&&elem.getElementById&&!jQuery.isXMLDoc(elem)){var oid=elem.getElementById(m[2]);if((jQuery.browser.msie||jQuery.browser.opera)&&oid&&typeof oid.id=="string"&&oid.id!=m[2])oid=jQuery('[@id="'+m[2]+'"]',elem)[0];ret=r=oid&&(!m[3]||jQuery.nodeName(oid,m[3]))?[oid]:[];}else{for(var i=0;ret[i];i++){var tag=m[1]=="#"&&m[3]?m[3]:m[1]!=""||m[0]==""?"*":m[2];if(tag=="*"&&ret[i].nodeName.toLowerCase()=="object")tag="param";r=jQuery.merge(r,ret[i].getElementsByTagName(tag));}if(m[1]==".")r=jQuery.classFilter(r,m[2]);if(m[1]=="#"){var tmp=[];for(var i=0;r[i];i++)if(r[i].getAttribute("id")==m[2]){tmp=[r[i]];break;}r=tmp;}ret=r;}t=t.replace(re2,"");}}if(t){var val=jQuery.filter(t,r);ret=r=val.r;t=jQuery.trim(val.t);}}if(t)ret=[];if(ret&&context==ret[0])ret.shift();done=jQuery.merge(done,ret);return done;},classFilter:function(r,m,not){m=" "+m+" ";var tmp=[];for(var i=0;r[i];i++){var pass=(" "+r[i].className+" ").indexOf(m)>=0;if(!not&&pass||not&&!pass)tmp.push(r[i]);}return tmp;},filter:function(t,r,not){var last;while(t&&t!=last){last=t;var p=jQuery.parse,m;for(var i=0;p[i];i++){m=p[i].exec(t);if(m){t=t.substring(m[0].length);m[2]=m[2].replace(/\\/g,"");break;}}if(!m)break;if(m[1]==":"&&m[2]=="not")r=isSimple.test(m[3])?jQuery.filter(m[3],r,true).r:jQuery(r).not(m[3]);else if(m[1]==".")r=jQuery.classFilter(r,m[2],not);else if(m[1]=="["){var tmp=[],type=m[3];for(var i=0,rl=r.length;i<rl;i++){var a=r[i],z=a[jQuery.props[m[2]]||m[2]];if(z==null||/href|src|selected/.test(m[2]))z=jQuery.attr(a,m[2])||'';if((type==""&&!!z||type=="="&&z==m[5]||type=="!="&&z!=m[5]||type=="^="&&z&&!z.indexOf(m[5])||type=="$="&&z.substr(z.length-m[5].length)==m[5]||(type=="*="||type=="~=")&&z.indexOf(m[5])>=0)^not)tmp.push(a);}r=tmp;}else if(m[1]==":"&&m[2]=="nth-child"){var merge={},tmp=[],test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(m[3]=="even"&&"2n"||m[3]=="odd"&&"2n+1"||!/\D/.test(m[3])&&"0n+"+m[3]||m[3]),first=(test[1]+(test[2]||1))-0,last=test[3]-0;for(var i=0,rl=r.length;i<rl;i++){var node=r[i],parentNode=node.parentNode,id=jQuery.data(parentNode);if(!merge[id]){var c=1;for(var n=parentNode.firstChild;n;n=n.nextSibling)if(n.nodeType==1)n.nodeIndex=c++;merge[id]=true;}var add=false;if(first==0){if(node.nodeIndex==last)add=true;}else if((node.nodeIndex-last)%first==0&&(node.nodeIndex-last)/first>=0)add=true;if(add^not)tmp.push(node);}r=tmp;}else{var fn=jQuery.expr[m[1]];if(typeof fn=="object")fn=fn[m[2]];if(typeof fn=="string")fn=eval("false||function(a,i){return "+fn+";}");r=jQuery.grep(r,function(elem,i){return fn(elem,i,m,r);},not);}}return{r:r,t:t};},dir:function(elem,dir){var matched=[],cur=elem[dir];while(cur&&cur!=document){if(cur.nodeType==1)matched.push(cur);cur=cur[dir];}return matched;},nth:function(cur,result,dir,elem){result=result||1;var num=0;for(;cur;cur=cur[dir])if(cur.nodeType==1&&++num==result)break;return cur;},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType==1&&n!=elem)r.push(n);}return r;}});jQuery.event={add:function(elem,types,handler,data){if(elem.nodeType==3||elem.nodeType==8)return;if(jQuery.browser.msie&&elem.setInterval)elem=window;if(!handler.guid)handler.guid=this.guid++;if(data!=undefined){var fn=handler;handler=this.proxy(fn,function(){return fn.apply(this,arguments);});handler.data=data;}var events=jQuery.data(elem,"events")||jQuery.data(elem,"events",{}),handle=jQuery.data(elem,"handle")||jQuery.data(elem,"handle",function(){if(typeof jQuery!="undefined"&&!jQuery.event.triggered)return jQuery.event.handle.apply(arguments.callee.elem,arguments);});handle.elem=elem;jQuery.each(types.split(/\s+/),function(index,type){var parts=type.split(".");type=parts[0];handler.type=parts[1];var handlers=events[type];if(!handlers){handlers=events[type]={};if(!jQuery.event.special[type]||jQuery.event.special[type].setup.call(elem)===false){if(elem.addEventListener)elem.addEventListener(type,handle,false);else if(elem.attachEvent)elem.attachEvent("on"+type,handle);}}handlers[handler.guid]=handler;jQuery.event.global[type]=true;});elem=null;},guid:1,global:{},remove:function(elem,types,handler){if(elem.nodeType==3||elem.nodeType==8)return;var events=jQuery.data(elem,"events"),ret,index;if(events){if(types==undefined||(typeof types=="string"&&types.charAt(0)=="."))for(var type in events)this.remove(elem,type+(types||""));else{if(types.type){handler=types.handler;types=types.type;}jQuery.each(types.split(/\s+/),function(index,type){var parts=type.split(".");type=parts[0];if(events[type]){if(handler)delete events[type][handler.guid];else
for(handler in events[type])if(!parts[1]||events[type][handler].type==parts[1])delete events[type][handler];for(ret in events[type])break;if(!ret){if(!jQuery.event.special[type]||jQuery.event.special[type].teardown.call(elem)===false){if(elem.removeEventListener)elem.removeEventListener(type,jQuery.data(elem,"handle"),false);else if(elem.detachEvent)elem.detachEvent("on"+type,jQuery.data(elem,"handle"));}ret=null;delete events[type];}}});}for(ret in events)break;if(!ret){var handle=jQuery.data(elem,"handle");if(handle)handle.elem=null;jQuery.removeData(elem,"events");jQuery.removeData(elem,"handle");}}},trigger:function(type,data,elem,donative,extra){data=jQuery.makeArray(data);if(type.indexOf("!")>=0){type=type.slice(0,-1);var exclusive=true;}if(!elem){if(this.global[type])jQuery("*").add([window,document]).trigger(type,data);}else{if(elem.nodeType==3||elem.nodeType==8)return undefined;var val,ret,fn=jQuery.isFunction(elem[type]||null),event=!data[0]||!data[0].preventDefault;if(event){data.unshift({type:type,target:elem,preventDefault:function(){},stopPropagation:function(){},timeStamp:now()});data[0][expando]=true;}data[0].type=type;if(exclusive)data[0].exclusive=true;var handle=jQuery.data(elem,"handle");if(handle)val=handle.apply(elem,data);if((!fn||(jQuery.nodeName(elem,'a')&&type=="click"))&&elem["on"+type]&&elem["on"+type].apply(elem,data)===false)val=false;if(event)data.shift();if(extra&&jQuery.isFunction(extra)){ret=extra.apply(elem,val==null?data:data.concat(val));if(ret!==undefined)val=ret;}if(fn&&donative!==false&&val!==false&&!(jQuery.nodeName(elem,'a')&&type=="click")){this.triggered=true;try{elem[type]();}catch(e){}}this.triggered=false;}return val;},handle:function(event){var val,ret,namespace,all,handlers;event=arguments[0]=jQuery.event.fix(event||window.event);namespace=event.type.split(".");event.type=namespace[0];namespace=namespace[1];all=!namespace&&!event.exclusive;handlers=(jQuery.data(this,"events")||{})[event.type];for(var j in handlers){var handler=handlers[j];if(all||handler.type==namespace){event.handler=handler;event.data=handler.data;ret=handler.apply(this,arguments);if(val!==false)val=ret;if(ret===false){event.preventDefault();event.stopPropagation();}}}return val;},fix:function(event){if(event[expando]==true)return event;var originalEvent=event;event={originalEvent:originalEvent};var props="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target timeStamp toElement type view wheelDelta which".split(" ");for(var i=props.length;i;i--)event[props[i]]=originalEvent[props[i]];event[expando]=true;event.preventDefault=function(){if(originalEvent.preventDefault)originalEvent.preventDefault();originalEvent.returnValue=false;};event.stopPropagation=function(){if(originalEvent.stopPropagation)originalEvent.stopPropagation();originalEvent.cancelBubble=true;};event.timeStamp=event.timeStamp||now();if(!event.target)event.target=event.srcElement||document;if(event.target.nodeType==3)event.target=event.target.parentNode;if(!event.relatedTarget&&event.fromElement)event.relatedTarget=event.fromElement==event.target?event.toElement:event.fromElement;if(event.pageX==null&&event.clientX!=null){var doc=document.documentElement,body=document.body;event.pageX=event.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc.clientLeft||0);event.pageY=event.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc.clientTop||0);}if(!event.which&&((event.charCode||event.charCode===0)?event.charCode:event.keyCode))event.which=event.charCode||event.keyCode;if(!event.metaKey&&event.ctrlKey)event.metaKey=event.ctrlKey;if(!event.which&&event.button)event.which=(event.button&1?1:(event.button&2?3:(event.button&4?2:0)));return event;},proxy:function(fn,proxy){proxy.guid=fn.guid=fn.guid||proxy.guid||this.guid++;return proxy;},special:{ready:{setup:function(){bindReady();return;},teardown:function(){return;}},mouseenter:{setup:function(){if(jQuery.browser.msie)return false;jQuery(this).bind("mouseover",jQuery.event.special.mouseenter.handler);return true;},teardown:function(){if(jQuery.browser.msie)return false;jQuery(this).unbind("mouseover",jQuery.event.special.mouseenter.handler);return true;},handler:function(event){if(withinElement(event,this))return true;event.type="mouseenter";return jQuery.event.handle.apply(this,arguments);}},mouseleave:{setup:function(){if(jQuery.browser.msie)return false;jQuery(this).bind("mouseout",jQuery.event.special.mouseleave.handler);return true;},teardown:function(){if(jQuery.browser.msie)return false;jQuery(this).unbind("mouseout",jQuery.event.special.mouseleave.handler);return true;},handler:function(event){if(withinElement(event,this))return true;event.type="mouseleave";return jQuery.event.handle.apply(this,arguments);}}}};jQuery.fn.extend({bind:function(type,data,fn){return type=="unload"?this.one(type,data,fn):this.each(function(){jQuery.event.add(this,type,fn||data,fn&&data);});},one:function(type,data,fn){var one=jQuery.event.proxy(fn||data,function(event){jQuery(this).unbind(event,one);return(fn||data).apply(this,arguments);});return this.each(function(){jQuery.event.add(this,type,one,fn&&data);});},unbind:function(type,fn){return this.each(function(){jQuery.event.remove(this,type,fn);});},trigger:function(type,data,fn){return this.each(function(){jQuery.event.trigger(type,data,this,true,fn);});},triggerHandler:function(type,data,fn){return this[0]&&jQuery.event.trigger(type,data,this[0],false,fn);},toggle:function(fn){var args=arguments,i=1;while(i<args.length)jQuery.event.proxy(fn,args[i++]);return this.click(jQuery.event.proxy(fn,function(event){this.lastToggle=(this.lastToggle||0)%i;event.preventDefault();return args[this.lastToggle++].apply(this,arguments)||false;}));},hover:function(fnOver,fnOut){return this.bind('mouseenter',fnOver).bind('mouseleave',fnOut);},ready:function(fn){bindReady();if(jQuery.isReady)fn.call(document,jQuery);else
jQuery.readyList.push(function(){return fn.call(this,jQuery);});return this;}});jQuery.extend({isReady:false,readyList:[],ready:function(){if(!jQuery.isReady){jQuery.isReady=true;if(jQuery.readyList){jQuery.each(jQuery.readyList,function(){this.call(document);});jQuery.readyList=null;}jQuery(document).triggerHandler("ready");}}});var readyBound=false;function bindReady(){if(readyBound)return;readyBound=true;if(document.addEventListener&&!jQuery.browser.opera)document.addEventListener("DOMContentLoaded",jQuery.ready,false);if(jQuery.browser.msie&&window==top)(function(){if(jQuery.isReady)return;try{document.documentElement.doScroll("left");}catch(error){setTimeout(arguments.callee,0);return;}jQuery.ready();})();if(jQuery.browser.opera)document.addEventListener("DOMContentLoaded",function(){if(jQuery.isReady)return;for(var i=0;i<document.styleSheets.length;i++)if(document.styleSheets[i].disabled){setTimeout(arguments.callee,0);return;}jQuery.ready();},false);if(jQuery.browser.safari){var numStyles;(function(){if(jQuery.isReady)return;if(document.readyState!="loaded"&&document.readyState!="complete"){setTimeout(arguments.callee,0);return;}if(numStyles===undefined)numStyles=jQuery("style, link[rel=stylesheet]").length;if(document.styleSheets.length!=numStyles){setTimeout(arguments.callee,0);return;}jQuery.ready();})();}jQuery.event.add(window,"load",jQuery.ready);}jQuery.each(("blur,focus,load,resize,scroll,unload,click,dblclick,"+"mousedown,mouseup,mousemove,mouseover,mouseout,change,select,"+"submit,keydown,keypress,keyup,error").split(","),function(i,name){jQuery.fn[name]=function(fn){return fn?this.bind(name,fn):this.trigger(name);};});var withinElement=function(event,elem){var parent=event.relatedTarget;while(parent&&parent!=elem)try{parent=parent.parentNode;}catch(error){parent=elem;}return parent==elem;};jQuery(window).bind("unload",function(){jQuery("*").add(document).unbind();});jQuery.fn.extend({_load:jQuery.fn.load,load:function(url,params,callback){if(typeof url!='string')return this._load(url);var off=url.indexOf(" ");if(off>=0){var selector=url.slice(off,url.length);url=url.slice(0,off);}callback=callback||function(){};var type="GET";if(params)if(jQuery.isFunction(params)){callback=params;params=null;}else{params=jQuery.param(params);type="POST";}var self=this;jQuery.ajax({url:url,type:type,dataType:"html",data:params,complete:function(res,status){if(status=="success"||status=="notmodified")self.html(selector?jQuery("<div/>").append(res.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(selector):res.responseText);self.each(callback,[res.responseText,status,res]);}});return this;},serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){return jQuery.nodeName(this,"form")?jQuery.makeArray(this.elements):this;}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password/i.test(this.type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:val.constructor==Array?jQuery.map(val,function(val,i){return{name:elem.name,value:val};}):{name:elem.name,value:val};}).get();}});jQuery.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(i,o){jQuery.fn[o]=function(f){return this.bind(o,f);};});var jsc=now();jQuery.extend({get:function(url,data,callback,type){if(jQuery.isFunction(data)){callback=data;data=null;}return jQuery.ajax({type:"GET",url:url,data:data,success:callback,dataType:type});},getScript:function(url,callback){return jQuery.get(url,null,callback,"script");},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},post:function(url,data,callback,type){if(jQuery.isFunction(data)){callback=data;data={};}return jQuery.ajax({type:"POST",url:url,data:data,success:callback,dataType:type});},ajaxSetup:function(settings){jQuery.extend(jQuery.ajaxSettings,settings);},ajaxSettings:{url:location.href,global:true,type:"GET",timeout:0,contentType:"application/x-www-form-urlencoded",processData:true,async:true,data:null,username:null,password:null,accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(s){s=jQuery.extend(true,s,jQuery.extend(true,{},jQuery.ajaxSettings,s));var jsonp,jsre=/=\?(&|$)/g,status,data,type=s.type.toUpperCase();if(s.data&&s.processData&&typeof s.data!="string")s.data=jQuery.param(s.data);if(s.dataType=="jsonp"){if(type=="GET"){if(!s.url.match(jsre))s.url+=(s.url.match(/\?/)?"&":"?")+(s.jsonp||"callback")+"=?";}else if(!s.data||!s.data.match(jsre))s.data=(s.data?s.data+"&":"")+(s.jsonp||"callback")+"=?";s.dataType="json";}if(s.dataType=="json"&&(s.data&&s.data.match(jsre)||s.url.match(jsre))){jsonp="jsonp"+jsc++;if(s.data)s.data=(s.data+"").replace(jsre,"="+jsonp+"$1");s.url=s.url.replace(jsre,"="+jsonp+"$1");s.dataType="script";window[jsonp]=function(tmp){data=tmp;success();complete();window[jsonp]=undefined;try{delete window[jsonp];}catch(e){}if(head)head.removeChild(script);};}if(s.dataType=="script"&&s.cache==null)s.cache=false;if(s.cache===false&&type=="GET"){var ts=now();var ret=s.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+ts+"$2");s.url=ret+((ret==s.url)?(s.url.match(/\?/)?"&":"?")+"_="+ts:"");}if(s.data&&type=="GET"){s.url+=(s.url.match(/\?/)?"&":"?")+s.data;s.data=null;}if(s.global&&!jQuery.active++)jQuery.event.trigger("ajaxStart");var remote=/^(?:\w+:)?\/\/([^\/?#]+)/;if(s.dataType=="script"&&type=="GET"&&remote.test(s.url)&&remote.exec(s.url)[1]!=location.host){var head=document.getElementsByTagName("head")[0];var script=document.createElement("script");script.src=s.url;if(s.scriptCharset)script.charset=s.scriptCharset;if(!jsonp){var done=false;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){done=true;success();complete();head.removeChild(script);}};}head.appendChild(script);return undefined;}var requestDone=false;var xhr=window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();if(s.username)xhr.open(type,s.url,s.async,s.username,s.password);else
xhr.open(type,s.url,s.async);try{if(s.data)xhr.setRequestHeader("Content-Type",s.contentType);if(s.ifModified)xhr.setRequestHeader("If-Modified-Since",jQuery.lastModified[s.url]||"Thu, 01 Jan 1970 00:00:00 GMT");xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");xhr.setRequestHeader("Accept",s.dataType&&s.accepts[s.dataType]?s.accepts[s.dataType]+", */*":s.accepts._default);}catch(e){}if(s.beforeSend&&s.beforeSend(xhr,s)===false){s.global&&jQuery.active--;xhr.abort();return false;}if(s.global)jQuery.event.trigger("ajaxSend",[xhr,s]);var onreadystatechange=function(isTimeout){if(!requestDone&&xhr&&(xhr.readyState==4||isTimeout=="timeout")){requestDone=true;if(ival){clearInterval(ival);ival=null;}status=isTimeout=="timeout"&&"timeout"||!jQuery.httpSuccess(xhr)&&"error"||s.ifModified&&jQuery.httpNotModified(xhr,s.url)&&"notmodified"||"success";if(status=="success"){try{data=jQuery.httpData(xhr,s.dataType,s.dataFilter);}catch(e){status="parsererror";}}if(status=="success"){var modRes;try{modRes=xhr.getResponseHeader("Last-Modified");}catch(e){}if(s.ifModified&&modRes)jQuery.lastModified[s.url]=modRes;if(!jsonp)success();}else
jQuery.handleError(s,xhr,status);complete();if(s.async)xhr=null;}};if(s.async){var ival=setInterval(onreadystatechange,13);if(s.timeout>0)setTimeout(function(){if(xhr){xhr.abort();if(!requestDone)onreadystatechange("timeout");}},s.timeout);}try{xhr.send(s.data);}catch(e){jQuery.handleError(s,xhr,null,e);}if(!s.async)onreadystatechange();function success(){if(s.success)s.success(data,status);if(s.global)jQuery.event.trigger("ajaxSuccess",[xhr,s]);}function complete(){if(s.complete)s.complete(xhr,status);if(s.global)jQuery.event.trigger("ajaxComplete",[xhr,s]);if(s.global&&!--jQuery.active)jQuery.event.trigger("ajaxStop");}return xhr;},handleError:function(s,xhr,status,e){if(s.error)s.error(xhr,status,e);if(s.global)jQuery.event.trigger("ajaxError",[xhr,s,e]);},active:0,httpSuccess:function(xhr){try{return!xhr.status&&location.protocol=="file:"||(xhr.status>=200&&xhr.status<300)||xhr.status==304||xhr.status==1223||jQuery.browser.safari&&xhr.status==undefined;}catch(e){}return false;},httpNotModified:function(xhr,url){try{var xhrRes=xhr.getResponseHeader("Last-Modified");return xhr.status==304||xhrRes==jQuery.lastModified[url]||jQuery.browser.safari&&xhr.status==undefined;}catch(e){}return false;},httpData:function(xhr,type,filter){var ct=xhr.getResponseHeader("content-type"),xml=type=="xml"||!type&&ct&&ct.indexOf("xml")>=0,data=xml?xhr.responseXML:xhr.responseText;if(xml&&data.documentElement.tagName=="parsererror")throw"parsererror";if(filter)data=filter(data,type);if(type=="script")jQuery.globalEval(data);if(type=="json")data=eval("("+data+")");return data;},param:function(a){var s=[];if(a.constructor==Array||a.jquery)jQuery.each(a,function(){s.push(encodeURIComponent(this.name)+"="+encodeURIComponent(this.value));});else
for(var j in a)if(a[j]&&a[j].constructor==Array)jQuery.each(a[j],function(){s.push(encodeURIComponent(j)+"="+encodeURIComponent(this));});else
s.push(encodeURIComponent(j)+"="+encodeURIComponent(jQuery.isFunction(a[j])?a[j]():a[j]));return s.join("&").replace(/%20/g,"+");}});jQuery.fn.extend({show:function(speed,callback){return speed?this.animate({height:"show",width:"show",opacity:"show"},speed,callback):this.filter(":hidden").each(function(){this.style.display=this.oldblock||"";if(jQuery.css(this,"display")=="none"){var elem=jQuery("<"+this.tagName+" />").appendTo("body");this.style.display=elem.css("display");if(this.style.display=="none")this.style.display="block";elem.remove();}}).end();},hide:function(speed,callback){return speed?this.animate({height:"hide",width:"hide",opacity:"hide"},speed,callback):this.filter(":visible").each(function(){this.oldblock=this.oldblock||jQuery.css(this,"display");this.style.display="none";}).end();},_toggle:jQuery.fn.toggle,toggle:function(fn,fn2){return jQuery.isFunction(fn)&&jQuery.isFunction(fn2)?this._toggle.apply(this,arguments):fn?this.animate({height:"toggle",width:"toggle",opacity:"toggle"},fn,fn2):this.each(function(){jQuery(this)[jQuery(this).is(":hidden")?"show":"hide"]();});},slideDown:function(speed,callback){return this.animate({height:"show"},speed,callback);},slideUp:function(speed,callback){return this.animate({height:"hide"},speed,callback);},slideToggle:function(speed,callback){return this.animate({height:"toggle"},speed,callback);},fadeIn:function(speed,callback){return this.animate({opacity:"show"},speed,callback);},fadeOut:function(speed,callback){return this.animate({opacity:"hide"},speed,callback);},fadeTo:function(speed,to,callback){return this.animate({opacity:to},speed,callback);},animate:function(prop,speed,easing,callback){var optall=jQuery.speed(speed,easing,callback);return this[optall.queue===false?"each":"queue"](function(){if(this.nodeType!=1)return false;var opt=jQuery.extend({},optall),p,hidden=jQuery(this).is(":hidden"),self=this;for(p in prop){if(prop[p]=="hide"&&hidden||prop[p]=="show"&&!hidden)return opt.complete.call(this);if(p=="height"||p=="width"){opt.display=jQuery.css(this,"display");opt.overflow=this.style.overflow;}}if(opt.overflow!=null)this.style.overflow="hidden";opt.curAnim=jQuery.extend({},prop);jQuery.each(prop,function(name,val){var e=new jQuery.fx(self,opt,name);if(/toggle|show|hide/.test(val))e[val=="toggle"?hidden?"show":"hide":val](prop);else{var parts=val.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),start=e.cur(true)||0;if(parts){var end=parseFloat(parts[2]),unit=parts[3]||"px";if(unit!="px"){self.style[name]=(end||1)+unit;start=((end||1)/e.cur(true))*start;self.style[name]=start+unit;}if(parts[1])end=((parts[1]=="-="?-1:1)*end)+start;e.custom(start,end,unit);}else
e.custom(start,val,"");}});return true;});},queue:function(type,fn){if(jQuery.isFunction(type)||(type&&type.constructor==Array)){fn=type;type="fx";}if(!type||(typeof type=="string"&&!fn))return queue(this[0],type);return this.each(function(){if(fn.constructor==Array)queue(this,type,fn);else{queue(this,type).push(fn);if(queue(this,type).length==1)fn.call(this);}});},stop:function(clearQueue,gotoEnd){var timers=jQuery.timers;if(clearQueue)this.queue([]);this.each(function(){for(var i=timers.length-1;i>=0;i--)if(timers[i].elem==this){if(gotoEnd)timers[i](true);timers.splice(i,1);}});if(!gotoEnd)this.dequeue();return this;}});var queue=function(elem,type,array){if(elem){type=type||"fx";var q=jQuery.data(elem,type+"queue");if(!q||array)q=jQuery.data(elem,type+"queue",jQuery.makeArray(array));}return q;};jQuery.fn.dequeue=function(type){type=type||"fx";return this.each(function(){var q=queue(this,type);q.shift();if(q.length)q[0].call(this);});};jQuery.extend({speed:function(speed,easing,fn){var opt=speed&&speed.constructor==Object?speed:{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&easing.constructor!=Function&&easing};opt.duration=(opt.duration&&opt.duration.constructor==Number?opt.duration:jQuery.fx.speeds[opt.duration])||jQuery.fx.speeds.def;opt.old=opt.complete;opt.complete=function(){if(opt.queue!==false)jQuery(this).dequeue();if(jQuery.isFunction(opt.old))opt.old.call(this);};return opt;},easing:{linear:function(p,n,firstNum,diff){return firstNum+diff*p;},swing:function(p,n,firstNum,diff){return((-Math.cos(p*Math.PI)/2)+0.5)*diff+firstNum;}},timers:[],timerId:null,fx:function(elem,options,prop){this.options=options;this.elem=elem;this.prop=prop;if(!options.orig)options.orig={};}});jQuery.fx.prototype={update:function(){if(this.options.step)this.options.step.call(this.elem,this.now,this);(jQuery.fx.step[this.prop]||jQuery.fx.step._default)(this);if(this.prop=="height"||this.prop=="width")this.elem.style.display="block";},cur:function(force){if(this.elem[this.prop]!=null&&this.elem.style[this.prop]==null)return this.elem[this.prop];var r=parseFloat(jQuery.css(this.elem,this.prop,force));return r&&r>-10000?r:parseFloat(jQuery.curCSS(this.elem,this.prop))||0;},custom:function(from,to,unit){this.startTime=now();this.start=from;this.end=to;this.unit=unit||this.unit||"px";this.now=this.start;this.pos=this.state=0;this.update();var self=this;function t(gotoEnd){return self.step(gotoEnd);}t.elem=this.elem;jQuery.timers.push(t);if(jQuery.timerId==null){jQuery.timerId=setInterval(function(){var timers=jQuery.timers;for(var i=0;i<timers.length;i++)if(!timers[i]())timers.splice(i--,1);if(!timers.length){clearInterval(jQuery.timerId);jQuery.timerId=null;}},13);}},show:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop);this.options.show=true;this.custom(0,this.cur());if(this.prop=="width"||this.prop=="height")this.elem.style[this.prop]="1px";jQuery(this.elem).show();},hide:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0);},step:function(gotoEnd){var t=now();if(gotoEnd||t>this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var done=true;for(var i in this.options.curAnim)if(this.options.curAnim[i]!==true)done=false;if(done){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(jQuery.css(this.elem,"display")=="none")this.elem.style.display="block";}if(this.options.hide)this.elem.style.display="none";if(this.options.hide||this.options.show)for(var p in this.options.curAnim)jQuery.attr(this.elem.style,p,this.options.orig[p]);}if(done)this.options.complete.call(this.elem);return false;}else{var n=t-this.startTime;this.state=n/this.options.duration;this.pos=jQuery.easing[this.options.easing||(jQuery.easing.swing?"swing":"linear")](this.state,n,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update();}return true;}};jQuery.extend(jQuery.fx,{speeds:{slow:600,fast:200,def:400},step:{scrollLeft:function(fx){fx.elem.scrollLeft=fx.now;},scrollTop:function(fx){fx.elem.scrollTop=fx.now;},opacity:function(fx){jQuery.attr(fx.elem.style,"opacity",fx.now);},_default:function(fx){fx.elem.style[fx.prop]=fx.now+fx.unit;}}});jQuery.fn.offset=function(){var left=0,top=0,elem=this[0],results;if(elem)with(jQuery.browser){var parent=elem.parentNode,offsetChild=elem,offsetParent=elem.offsetParent,doc=elem.ownerDocument,safari2=safari&&parseInt(version)<522&&!/adobeair/i.test(userAgent),css=jQuery.curCSS,fixed=css(elem,"position")=="fixed";if(elem.getBoundingClientRect){var box=elem.getBoundingClientRect();add(box.left+Math.max(doc.documentElement.scrollLeft,doc.body.scrollLeft),box.top+Math.max(doc.documentElement.scrollTop,doc.body.scrollTop));add(-doc.documentElement.clientLeft,-doc.documentElement.clientTop);}else{add(elem.offsetLeft,elem.offsetTop);while(offsetParent){add(offsetParent.offsetLeft,offsetParent.offsetTop);if(mozilla&&!/^t(able|d|h)$/i.test(offsetParent.tagName)||safari&&!safari2)border(offsetParent);if(!fixed&&css(offsetParent,"position")=="fixed")fixed=true;offsetChild=/^body$/i.test(offsetParent.tagName)?offsetChild:offsetParent;offsetParent=offsetParent.offsetParent;}while(parent&&parent.tagName&&!/^body|html$/i.test(parent.tagName)){if(!/^inline|table.*$/i.test(css(parent,"display")))add(-parent.scrollLeft,-parent.scrollTop);if(mozilla&&css(parent,"overflow")!="visible")border(parent);parent=parent.parentNode;}if((safari2&&(fixed||css(offsetChild,"position")=="absolute"))||(mozilla&&css(offsetChild,"position")!="absolute"))add(-doc.body.offsetLeft,-doc.body.offsetTop);if(fixed)add(Math.max(doc.documentElement.scrollLeft,doc.body.scrollLeft),Math.max(doc.documentElement.scrollTop,doc.body.scrollTop));}results={top:top,left:left};}function border(elem){add(jQuery.curCSS(elem,"borderLeftWidth",true),jQuery.curCSS(elem,"borderTopWidth",true));}function add(l,t){left+=parseInt(l,10)||0;top+=parseInt(t,10)||0;}return results;};jQuery.fn.extend({position:function(){var left=0,top=0,results;if(this[0]){var offsetParent=this.offsetParent(),offset=this.offset(),parentOffset=/^body|html$/i.test(offsetParent[0].tagName)?{top:0,left:0}:offsetParent.offset();offset.top-=num(this,'marginTop');offset.left-=num(this,'marginLeft');parentOffset.top+=num(offsetParent,'borderTopWidth');parentOffset.left+=num(offsetParent,'borderLeftWidth');results={top:offset.top-parentOffset.top,left:offset.left-parentOffset.left};}return results;},offsetParent:function(){var offsetParent=this[0].offsetParent;while(offsetParent&&(!/^body|html$/i.test(offsetParent.tagName)&&jQuery.css(offsetParent,'position')=='static'))offsetParent=offsetParent.offsetParent;return jQuery(offsetParent);}});jQuery.each(['Left','Top'],function(i,name){var method='scroll'+name;jQuery.fn[method]=function(val){if(!this[0])return;return val!=undefined?this.each(function(){this==window||this==document?window.scrollTo(!i?val:jQuery(window).scrollLeft(),i?val:jQuery(window).scrollTop()):this[method]=val;}):this[0]==window||this[0]==document?self[i?'pageYOffset':'pageXOffset']||jQuery.boxModel&&document.documentElement[method]||document.body[method]:this[0][method];};});jQuery.each(["Height","Width"],function(i,name){var tl=i?"Left":"Top",br=i?"Right":"Bottom";jQuery.fn["inner"+name]=function(){return this[name.toLowerCase()]()+num(this,"padding"+tl)+num(this,"padding"+br);};jQuery.fn["outer"+name]=function(margin){return this["inner"+name]()+num(this,"border"+tl+"Width")+num(this,"border"+br+"Width")+(margin?num(this,"margin"+tl)+num(this,"margin"+br):0);};});})();
// jQuery END


// -----------------------------------------------------------------------------
// GET/SETPREF: Don't ask why I bothered to write wrapper functions. I just did, okay?
// ----------------------------------------------------------------------------
function GetDomain()
{	return document.location.host;	}
function SetPref(which, value)
{	GM_setValue("pref." + which, value);}
function GetPref(which)
{	return GM_getValue("pref." + which);}
function SetData(which, value)
{	var server = GetDomain();
	GM_setValue(server.charAt(server.indexOf('.') - 1) + which, value);}
function GetData(which)
{	var server = GetDomain();
	return GM_getValue(server.charAt(server.indexOf('.') - 1) + which);}
function GetPwd()
{	return GM_getValue('hash.' + GetDomain().split('.')[0]);}
function SetPwd(hash)
{	GM_setValue('hash.' + GetDomain().split('.')[0], hash);}
function FindHash()
{	GM_get(GetDomain() + '/store.php?whichstore=m',
	function(blah)
	{	var hashIndex = blah.indexOf("name=phash");
		var hash = blah.substring(hashIndex+18, hashIndex+50);
		SetPwd(hash); });
}
function UpdateItemDB(version)
{	var url = ITEMDB_URL;
	if (version > 0) url += "&version=" + version;
	GM_get(url,function(result)
		{	if (result == "" || result[0] != "{") return;
			SetPref("itemdb",result);
			var span = document.createElement('span');
			itemDB = eval('('+result+')');
			$(span)
				.attr('style','font-size:10px')
				.html('<br>Mr. Script: Updated Item Database To Version ' + itemDB.version + '<br><br>');
			//addHere.parentNode.insertBefore(span, addHere);
			$('table:first').before(span);
		});
}
function GetItemDB(force)
{	if (itemDB != null && force == null) return;
	if (DISABLE_ITEM_DB > 0) {itemDB = []; return;}
	var idb = GetPref("itemdb");
	if (idb == undefined || idb == null || idb == "") UpdateItemDB(0);
	else itemDB = eval('('+idb+')');
}


// -----------------------------------------------------------
// FINDMAXQUANTITY: Figure out how many MP restoratives to use
// -----------------------------------------------------------
function FindMaxQuantity(item, howMany, deefault, safeLevel)
{
	var min, max, avg, result;
	var hp = 0;

	switch(parseInt(item))
	{
		case 344: // Knob Goblin Seltzer
			min = 8; max = 12; break;
		case 345: // Knob Goblin Superseltzer
			min = 25; max = 29; break;
		case 347: // Dyspepsi-Cola
			min = 10; max = 14; break;
		case 357: // Mountain Stream Soda
			min = 6; max = 9; break;
		case 465: // Blue Pixel Potion
			min = 55; max = 79; break;
		case 466: // Green Pixel Potion
			min = 31; max = 40; break;
		case 518: // Magical Mystery Juice
			min = 4 + (1.5 * GetData("level")); max = min + 2; break;
		case 593: // Phonics Down
			min = 46; max = 50; break;
		case 592: // Tiny House
			min = 20; max = 24; break;
		case 882: // Blatantly Canadian
			min = 20; max = 25; break;
		case 1003: // Soda Water
			min = 3; max = 5; break;
		case 1334: // Cloaca-Cola
			min = 10; max = 14; break;
		case 1559: // Tonic Water
			min = 30; max = 50; break;
		case 1658: case 1659: case 1660: // Cloaca Cola
			min = 7; max = 9; break;
		case 1788: // Unrefined Mountain Stream Syrup
			min = 50; max = 60; break;
		case 1950: // Tussin
			min = 100; max = 100; break;
		case 1965: // Monsieur Bubble
			min = 45; max = 64; break;
		case 2616: // Magi-Wipes
			min = 50; max = 60; break;
		case 2600: // Lily
			min = 60; max = 69; break;
		case 2576: // Locust
			min = 34; max = 38; break;
		case 2389: case 2437: // Soy! Soy!
			min = 70; max = 80; break;
		case 2639: // Black Cherry
			min = 9; max = 11; break;
		case 2035: // Soda
			min = 30; max = 40; break;
		case 2370: // Sooooooda
			min = 82; max = 120; break;
			
		case 231: // Doc G's Pungent Unguent
			min = 3; max = 5; hp = 1; break;
		case 232: // Doc G's Ailment Ointment
			min = 8; max = 10; hp = 1; break;
		case 233: // Doc G's Restorative Balm
			min = 13; max = 15; hp = 1; break;
		case 234: // Doc G's Homeopathic Elixir
			min = 18; max = 20; hp = 1; break;
		case 474: // Cast
			min = 15; max = 20; hp = 1; break;
		case 869: // Forest Tears
			min = 5; max = 10; hp = 1; break;
		case 1450: case 1451: case 1452: // Wads
		case 1453: case 1454: case 1455:
			if (howMany > 15) return 15;
			else return howMany; break;
		case 1154: case 1261: // Air, Hatorade
			if (howMany > 3) return 3;
			else return howMany; break;
		case 226: case 2096: // Minotaur, Bee Pollen
			if (howMany > 5) return 5;
			else return howMany; break;
		
		default:
			if (deefault == 1)
			{	if (howMany > MAXLIMIT) return MAXLIMIT;
				else return howMany;
			} else return 0;
	}
	
	switch(safeLevel)
	{ 	case 0: avg = (min+max)/2.0; break;
		case 1: avg = ((max*2)+min)/3.0; break;
		case 2: avg = max; break;
	}
	if (hp == 1) result = parseInt(GetData("maxHP")-GetData("currentHP"));
	else		 result = parseInt(GetData("maxMP")-GetData("currentMP"));
	if (result == 0) return 0;
	result = result / avg;
	if (result > howMany) result = howMany;
	if (result > 0)	return parseInt(result);
	else		return 1;
}


// -------------------------------------------------------------------------
// HASITEM: Parse HTML and determine if item is present and return quantity.
// -------------------------------------------------------------------------
function HasItem(itemName, text)
{	var index = text.indexOf(itemName);
	if (index == -1) return 0;
	var quantityText = text.substr(index+itemName.length+4, 12);
	if (quantityText.indexOf('(') != -1)
	{	quantityText = quantityText.split('<')[0];
		quantityText = quantityText.split(')')[0];
		quantityText = quantityText.split('(')[1];
		if (parseInt(quantityText)) return parseInt(quantityText);
		else return 1;
	} else return 1;
}


// ----------------------------------------------------
// GM_GET: Stolen gleefully from OneTonTomato. Tee-hee!
// ----------------------------------------------------
function GM_get(dest, callback, errCallback)
{	GM_xmlhttpRequest({
	  method: 'GET',
	  url: 'http://' + dest,
	  	onerror:function(error)
	  	{	if( typeof(errCallback)=='function' )
				callback(details.responseText);
			else GM_log("GM_get Error: " + error);
	  	},
		onload:function(details) {
			if( typeof(callback)=='function' ){
				callback(details.responseText);
}	}	});	}


// ---------------------------------------------------------------
// DESCTOITEM: Convert description ID to item entry from database.
// ---------------------------------------------------------------
function DescToItem(zeedesc)
{	GetItemDB();
	return itemDB.items[zeedesc.match(/[0-9]{7,10}/)];
}


// --------------------------------------------------
// APPENDLINK: Create link and return pointer to span
// --------------------------------------------------
function AppendLink(linkString, linkURL)
{
	var font = document.createElement('font');

	$(font)
		.attr('size', 1)
		.html(' ' + linkString);
	
	var link = document.createElement('a');
	
	$(link)
		.attr('href', linkURL)
		.attr('target', 'mainpane')
		.append(font);
	
	var finalSpan = document.createElement('span');
	$(finalSpan)
		//.html($(finalSpan).html() + ' ')
		.append(' ')
		.append(link);

	return finalSpan;
}


// ---------------------------------------
// APPENDUSEBOX: Attach use multiple form.
// ---------------------------------------
function AppendUseBox(itemNumber, skillsForm, maxButton, appendHere)
{
	var htmlString, form;
	var max = FindMaxQuantity(itemNumber, 999, 0, GetPref('safemax'));				

	var form = document.createElement('form');
	form.setAttribute('method','post');
	
	var action = document.createElement('input');
	action.setAttribute('type','hidden');
	action.setAttribute('name','action');
	action.setAttribute('value','useitem');

	var pwd = document.createElement('input');
	pwd.setAttribute('type','hidden');
	pwd.setAttribute('name','pwd');
	pwd.setAttribute('value',GetPwd());

	var which = document.createElement('input');
	which.setAttribute('type','hidden');
	which.setAttribute('name','whichitem');
	which.setAttribute('value',itemNumber);
	
	var text = document.createElement('input');
	text.setAttribute('type','text');
	text.setAttribute('class','text');
	text.setAttribute('value','1');
	text.setAttribute('size','2');
	
	if (autoclear > 0) AddAutoClear(text, autoclear);
	
	var submit = document.createElement('input');
	submit.setAttribute('type','submit');
	submit.setAttribute('class','button');
	submit.setAttribute('value','Use');

	form.appendChild(action);
	form.appendChild(pwd);
	form.appendChild(which);
	form.appendChild(text);
	form.appendChild(document.createTextNode(' '));
	form.appendChild(submit);

	if (skillsForm == 0)
	{	form.setAttribute('action','multiuse.php');
		text.setAttribute('name','quantity');
		if (maxButton != 0) MakeMaxButton(text, function(event)
		{	var box = document.getElementsByName('quantity')[0];
			box.value = FindMaxQuantity(itemNumber, 999, 0, GetPref('safemax'));
		});
	} else
	{	form.setAttribute('action','skills.php');
		text.setAttribute('name','itemquantity');
		if (maxButton != 0) MakeMaxButton(text, function(event)
		{	var box = document.getElementsByName('itemquantity')[0];
			box.value = FindMaxQuantity(itemNumber, 999, 0, GetPref('safemax'));
		});
	}
	text.addEventListener('keyup', function(event)
	{	if (event.which == 77 || event.which == 88) // 77 = 'm', 88 = 'x'
		{	var whichItem = document.getElementsByName('whichitem')[0];
			this.value = FindMaxQuantity(whichItem.value, 999, 0, GetPref('safemax'));
	}	},false);

	appendHere.appendChild(form);
}


// ---------------------------------------------
// APPENDBUYBOX: Return HTML for buying an item.
// ---------------------------------------------
function AppendBuyBox(itemNumber, whichStore, buttonText, noQuantityBox)
{
	var eventString = ""; var htmlString = ""; var quantityString;
	if (noQuantityBox == 1) quantityString = "hidden";
	else quantityString = "text";
	if (autoclear == 2) eventString = ' onFocus="this.select();"' +
		'onClick="this.select();" OnDblClick="this.select();"';
	else if (autoclear == 1) eventString = 
	' onFocus="javascript:if(this.value==1) this.value=\'\';"' +
	' onClick="javascript:if(this.value==1) this.value=\'\';"' +
	' onBlur="javascript:if(this.value==\'\') this.value=1;" ';

	htmlString =
		'<center><form action="store.php" method="post">' +
		'<input type="hidden" name="whichstore" value="' + whichStore +
		'"><input type="hidden" name="buying" value="Yep.">' +
		'<input type="hidden" name="phash" value="' + GetPwd() +
		'"><input type="' + quantityString + '" class="text" size="2" ' +
		'value="1" name="howmany"' + eventString +
		'> <input type="hidden" name="whichitem" value="' + itemNumber +
		'"><input type="submit" class="button" value="' + buttonText + '"></form></center>';

	return(htmlString);
}


// ----------------------------------------------------
// NUMBERLINK: Fine, you think of a good function name.
// ----------------------------------------------------
function NumberLink(b)
{
	var num = b.textContent.split(' ')[0];
	while(num.indexOf(',') != -1) num = num.split(',')[0] + num.split(',')[1];
	num = parseInt(num);
	if (num < 26)
	{	var txt = b.textContent.substring(
			b.textContent.indexOf(' '),b.textContent.length);
		var func = "var q = document.getElementsByName(\"quantity\");" +
			"if(q.length==0) q = document.getElementsByName(\"itemquantity\");"+
			"if(q.length) q[0].value=" + num + "; return false;";
		b.innerHTML = "<a href='javascript:void(0);' onclick='" + func + "'>" + num + "</a>" + txt;
}	}


// ------------------------------------------------------
// APPENDOUTFITSWAP: Aren't unified interfaces just keen?
// ------------------------------------------------------
function AppendOutfitSwap(outfitNumber, text)
{
	var span = document.createElement('span');
	var button1 = 0; var hidden;
	
	hidden = document.createElement('input');
	$(hidden)
		.attr('name','swap')
		.attr('type','hidden')
		.attr('value',outfitNumber);
	button1 = document.createElement('input');
	$(button1)
		.attr('type','submit')
		.attr('class','button')
		.attr('value',text)
	.click(function()
	{	this.setAttribute('disabled','disabled');
		var backup = GetPref('backup');
		var which = $('input[name=swap]').val(); 
		if (which <= 0 || backup == "")
		{	parent.frames[2].location = 'http://' + GetDomain() +
				'/inv_equip.php?action=outfit&which=2&whichoutfit=' + which;
		} else
		{	GM_get(GetDomain() + 
			'/inv_equip.php?action=customoutfit&which=2&outfitname=' +
			backup, function(response)
			{	var which = $('input[name=swap]').val();
				parent.frames[2].location = 'http://' + GetDomain() +
					'/inv_equip.php?action=outfit&which=2&whichoutfit=' + which;
			});
		}
		return false;
	});
	$(span)
		.append(button1)
		.append(hidden);
	
	// Revert to backup
	if (outfitNumber == 0)
	{	GM_get(GetDomain() + "/account_manageoutfits.php", function(response)
		{
			var swap = $('input[name=swap]');
			var val; var index2; var backup = GetPref('backup');
			var index = response.indexOf(' value="' + backup + '"');
			if (index != -1) index = response.indexOf('name=delete',index) + 11;
			if (index != -1) index2 = response.indexOf('>',index);
			if (index != -1 && index2 != -1)
			{	val = '-' + response.substring(index,index2);
				swap.attr('value',val);
			} else
			{	swap.prev()
					.attr('disabled','disabled')
					.val('Backup Outfit Unavailable');
			}
		});
	} return span;
}


// -----------------------------------------------------------------------------
// ADDINVCHECK: Extra links for items, independently of where they're displayed.
// -----------------------------------------------------------------------------
function AddInvCheck(img)
{	// Special thanks to CMeister for the item database and much of this code
	if (img != undefined && img.getAttribute("onclick").indexOf("desc") != -1)
	{	img.addEventListener('contextmenu', function(event)
		{	if (this.getAttribute("done")) return;
			GetItemDB(); if (itemDB == null) return;
			item = DescToItem(this.getAttribute("onclick"));
			var add = "<br><span class='tiny' id='span" + item['itemid'] + "'></span>";
			this.parentNode.nextSibling.innerHTML += add;
			var invpage = item['invpage'];
			if (item['itemid'] == 518) invpage = 1; // Mmm, hacky

			GM_xmlhttpRequest({method: 'GET',
				url: 'http://' + GetDomain() + '/inventory.php?which='+invpage,
				item: item,
				onload:function(details) {
					var quant = HasItem(item['name'],details.responseText);
					var itemid = item['itemid'];
					var addText = "";

					if (itemid == 1605)
					{	var reagents = HasItem("scrumptious reagent", details.responseText);
						var solutions = HasItem("scrumdiddlyumptious solution", details.responseText);
						addText = "(" + reagents + " reagent"; if (reagents != 1) addText += "s";
						addText += ", " + quant + " catalyst"; if (quant != 1) addText += "s";
						addText += " and " + solutions + " scrummie"; if (solutions != 1) addText += "s";
						addText += " in inventory)";
					}
					else if (itemid == 1549)
					{	var noodles = HasItem("dry noodles", details.responseText);
						addText = "(" + noodles + " noodle"; if (noodles != 1) addText += "s";
						addText += " and " + quant + " MSG"; if (quant != 1) addText += "s";
						addText += " in inventory)";
					}
					else addText = '('+quant+' in inventory)';
					
					document.getElementById('span'+item['itemid']).innerHTML += addText;
				}
			}); this.setAttribute("done","done"); event.stopPropagation(); event.preventDefault();
		}, false);
}	}


// ----------------------------------------------------------
// ADDTOPLINK: Much easier for a function to do all the work.
// ----------------------------------------------------------
function AddTopLink(putWhere, target, href, html, space)
{
	if (href == "") return;
	var a = document.createElement('a');
	if (target != 0) a.setAttribute('target', target);
	a.setAttribute('href', href);
	a.innerHTML = html;
	
	putWhere.appendChild(a);
	if (space) putWhere.appendChild(document.createTextNode(" "));
}


// -----------------------------------------------------------------------------
// ADDLINKS: Extra links, etc. for items, independently of where they are.
// -----------------------------------------------------------------------------
function AddLinks(descId, theItem, formWhere, path)
{
	// Special thanks to CMeister for the item database and much of this code
	var daitm = DescToItem(descId);
	if(!daitm) return '';
	var itemNum = daitm['itemid'];
	AddInvCheck(theItem.firstChild.firstChild);

	doWhat = 0; //addWhere = theItem.childNodes[1];
	addWhere = $(theItem).children().eq(1);

	switch(parseInt(itemNum))
	{
		case 518: case 344: case 2639:
		case 1658: case 1659: case 1660:
			doWhat = 'skill'; break;
		
		case 1605: case 687: case 744: case 2595: 
		case 14: case 15: case 16: case 1261:
		case 341: case 340: case 343:
		case 1512: case 1513: case 1514: case 1515:
		case 196: case 1290: case 3368:
			doWhat = 'use'; break;

		case 634: case 21: case 59: case 33: case 20: case 22: case 71:
		case 1465: case 1466: case 1467: case 1468: case 1469: case 1470:
		case 1471: case 1472: case 1473: case 1474: case 1475: case 1476:
		case 1477: case 1478: case 1479: case 1480: case 1481: case 1482:
		case 1483: case 1484: case 2302:
			doWhat = 'equip'; break;
		
		case 1916: case 486:
			doWhat = 'equipacc'; break;
		
		case 1650: case 69: case 829: case 1274: case 2660: case 1963:
		case 2258: case 1794: case 678: case 146: case 440: case 438:
		case 2344: case 2345: case 2346: case 2950: case 2655:
		case 2964: case 2965: case 2963: case 3353: case 1622:
			doWhat = 'oneuse'; break;

		case 1445: case 1446: case 1447: case 1448: case 1449: case 55:
			doWhat = 'cook'; break;

		case 247:
			doWhat = 'cocktail'; break;
		
		case 1438: case 1439: case 1440: case 1441:
		case 1442: case 1443: case 1444:
			doWhat = 'malus'; break;
		
		case 74: case 75: case 76:
			itemNum = 74; doWhat = 'oneuse'; break;
		
		case 727: // Hedge
			addWhere.append(AppendLink('[maze]', 'hedgepuzzle.php')); break;
		case 2267: // Mega Gem
			addWhere.append(AppendLink('[equip]', 'inv_equip.php?pwd='+
				GetPwd() + '&which=2&action=equip&whichitem=2267&slot=2')); break;
		case 2052: // Blackbird
			addWhere.append(AppendLink('[fly]', 'inv_familiar.php?pwd=' +
				GetPwd() + '&whichitem=2052&which=3')); break;
		case 2050: case 2051:
			addWhere.append(AppendLink('[bird]',
			'craft.php?mode=combine&action=craft&a=2050&b=2051&pwd=' +
			GetPwd() + '&quantity=1')); GoGoGadgetPlunger(); break;
		case 1549: // MSG
			addWhere.append(AppendLink('[bam!]', 'guild.php?place=wok')); break;
		case 23: // gum
			if (document.referrer.indexOf('sewer') != -1 && path == "/store.php")
				parent.frames[2].location = 'http://' + GetDomain() + '/sewer.php';
			else addWhere.append(AppendLink('[sewer]', 'sewer.php')); break;
		case 42: // permit
			if (document.referrer.indexOf('hermit') != -1 && path == "/store.php")
				parent.frames[2].location = 'http://' + GetDomain() + '/hermit.php';
			else addWhere.append(AppendLink('[hermit]', 'hermit.php')); break;
		case 1003: // soda
			addWhere
				.append(AppendLink('[mix]', 'craft.php?mode=cocktail'))
				.append(AppendLink('[still]', 'guild.php?place=still')); break;
		case 40: // casino
			if (document.referrer.indexOf('casino') != -1 && path == "/store.php")
				parent.frames[2].location = 'http://' + GetDomain() + '/casino.php';
			else addWhere.append(AppendLink('[casino]', 'casino.php')); break;
		case 236: // cocktail
			if (document.referrer.indexOf('craft') != -1 && path == "/store.php")
				parent.frames[2].location = 'http://' + GetDomain() + '/craft.php?mode=cocktail';
			else doWhat = 'cocktail'; break;
		case 157: // E-Z
			if (document.referrer.indexOf('craft') != -1 && path == "/store.php")
				parent.frames[2].location = 'http://' + GetDomain() + '/craft.php?mode=cook';
			else doWhat = 'cook'; break;
		case 530: // spray paint
			addWhere.append(AppendLink('[the wall]', 'town_grafwall.php')); break;
		case 24: // Clover
			addWhere.append(AppendLink('[disassemble]', 'multiuse.php?pwd=' +
			GetPwd() + '&action=useitem&quantity=1&whichitem=24')); break;
		case 140: // Planks
			addWhere.append(AppendLink('[boat]', 'inv_use.php?pwd=' +
			GetPwd() + '&which=3&whichitem=146')); break;
		case 47: // Roll
			addWhere
				.append(AppendLink('[casino]','casino.php'))
				.append(AppendLink('[rock+roll]',
			'craft.php?mode=combine&action=craft&a=47&b=30&pwd=' +
			GetPwd() + '&quantity=1')); GoGoGadgetPlunger(); break;
		case 52: // Strings
			addWhere.append(AppendLink('[twang]',
			'craft.php?mode=combine&action=craft&a=52&b=30&pwd=' +
			GetPwd() + '&quantity=1')); GoGoGadgetPlunger(); break;
		case 135: case 136: // Rims, Tires
			addWhere.append(AppendLink('[wheels]',
			'craft.php?mode=combine&action=craft&a=135&b=136&pwd=' +
			GetPwd() + '&quantity=1')); GoGoGadgetPlunger(); break;
		case 2044: // MacGuffin
			addWhere.append(AppendLink('[read]',"diary.php?textversion=1")); break;
		case 485: // Talisman
			addWhere.append(AppendLink('[man, o nam]',
			'craft.php?mode=combine&action=craft&a=485&b=485&pwd=' +
			GetPwd() + '&quantity=1')); GoGoGadgetPlunger(); break;
		case 2338: // Pudding
			addWhere.append(AppendLink('[eat]','inv_eat.php?pwd=' +
				GetPwd() + '&which=1&whichitem='+itemNum)); break;
		case 2064: // Forged documents
			addWhere.append(AppendLink('[shore]','shore.php')); break;
	}

	if (doWhat == 'equip')
		addWhere.append(AppendLink('[equip]', 'inv_equip.php?pwd='+
			GetPwd() + '&which=2&action=equip&whichitem=' + itemNum));
	else if (doWhat == 'equipacc')
		addWhere.append(AppendLink('[equip]', 'inv_equip.php?pwd='+
			GetPwd() + '&which=2&action=equip&whichitem=' + itemNum + "&slot=3"));
	else if (doWhat == 'oneuse')
	{	addWhere.append(AppendLink('[use]','inv_use.php?pwd=' +
			GetPwd() + '&which=1&whichitem='+itemNum));
	} else if (doWhat == 'use')
	{	if (formWhere != null) AppendUseBox(itemNum, 0, 0, formWhere.get(0));
		else addWhere.append(AppendLink('[use]', 'multiuse.php?pwd=' +
			GetPwd() + '&action=useitem&quantity=1&whichitem='+itemNum));
	} else if (doWhat == 'skill')
	{	if (formWhere != null) AppendUseBox(itemNum, 1, 1, formWhere.get(0));
		else addWhere.append(AppendLink('[use]', 'skills.php?pwd=' +
			GetPwd() + '&action=useitem&quantity=1&whichitem='+itemNum));
	} else if (doWhat == 'malus')
	{	addWhere.append(AppendLink('[malus]', 'guild.php?place=malus'));
	} else if (doWhat != 0)
		addWhere.append(AppendLink('['+doWhat+']',doWhat+'.php'));
	
	return doWhat;
}


// -------------------------------------------------
// RIGHTCLICKMP: Fill up with standard restoratives.
// -------------------------------------------------
function RightClickMP(event)
{	var json = GetData("mplist");
	if (json != undefined && json != "")
	{	var num = 0; var quant = 0; var list = eval('('+json+')');
			 if (list['518'])  num = "518";
		else if (list['344'])  num = "344";
		else if (list['2639']) num = "2639";
		else if (list['1658']) num = "1658";
		else if (list['1659']) num = "1659";
		else if (list['1660']) num = "1660";
		if (num > 0)
		{	quant = FindMaxQuantity(parseInt(num), list[num], 0, GetPref("safemax"));
			var url = GetDomain()+'/skills.php?action=useitem&whichitem='+num+"&itemquantity="+quant+'&pwd='+GetPwd();
			GM_get(url, function(result)
				{	document.location.reload(); });
	}	} event.stopPropagation(); event.preventDefault(); return false;
}

// -------------------------------------------------
// RIGHTCLICKHP: Heal up with spells.
// -------------------------------------------------
function RightClickHP(event)
{	var json = GetData("hplist");
	if (json != undefined && json != "")
	{
		var num = 0; var quant = 0; var list = eval('('+json+')');
		var order; var heal = GetData("maxHP") - GetData("currentHP");
		
		if(heal < 20) order = ['3009','5007','1007','1010','5011','3012'];
		else if(heal < 35) order = ['1010','5011','3012','3009','5007','1007'];
		else if(heal < 45) order = ['5011','1010','3012','3009','5007','1007'];
		else order = ['3012','5011','1010','3009','5007','1007'];
		
		for(i=0; i<6; i++) if(list[order[i]]) { num = order[i]; break; }
		if (num > 0)
		{		var url = GetDomain()+'/skills.php?action=Skillz&whichskill='+num+"&quantity="+1+'&pwd='+GetPwd();
			GM_get(url, function(result)
				{	document.location.reload(); });
	}	} event.stopPropagation(); event.preventDefault(); return false;
}



// ----------------------------------------------------------------------------
// PARSESELECTQUANTITY: Figure out how many of a given restorative are present.
// ----------------------------------------------------------------------------
function ParseSelectQuantity(selectItem, endToken)
{	var index = selectItem.selectedIndex;
	var howMany = 1;
	if (selectItem.options[index].textContent.indexOf("(") != -1)
	{	howMany = selectItem.options[index].textContent;
		if (howMany.charAt(0) == '(') return 999999;
		howMany = howMany.split("(")[1];
		howMany = howMany.split(endToken)[0];
	} return parseInt(howMany);
}


// -----------------------------------------------------------------------------
// MAKEMAXBUTTON: Wrap a "max" button around a text box.
// -----------------------------------------------------------------------------
function MakeMaxButton(textField, funktion)
{
	var img = document.createElement('img');
	var table = document.createElement('table');
	var tr = document.createElement('tr');
	var td1 = document.createElement('td');
	var td2 = document.createElement('td');
	var stizzyle = 'border: 1px solid black; border-left: 0px; padding: 0px;';
				
	$(img).attr('src', 'data:image/gif;base64,R0lGODlhCQAQAPAAMf%2F%2F%2FwAAACwA' + 'AAAACQAQAAACGgSCaGvB7d6KM1HJLHa3nZxg2%2FRwo2RmJFAAADs%3D')

	.click(funktion)
	
	.mousedown(function()
	{	$(this).parent().attr('style',
		"background-color:#999999; " + stizzyle);
	})
	
	.mouseup(function()
	{	$(this).parent().attr('style', "background-color:#ffffff; " + stizzyle);
	});

	// I am a horrible, horrible hack. If anyone knows how to make it
	// impossible to drag the max image into the text box, I'm all ears.
	$(textField)
		.attr('style','border: none;')
		.before(table)
		.mouseover(function()
	{	if (this.value.length > 5) this.value = "1"; });
	
	$(table)
		.attr('style', 'display: inline; vertical-align: bottom; ' +
			'border-spacing: 0px; padding: 0;')
		.append(tr);
	$(tr)
		.append(td1)
		.append(td2);
	$(td1)
		.attr('style', 'border: 1px solid black; padding: 1px;')
		.append(textField);
	$(td2)
		.attr('style', stizzyle)
		.append(img);
}


// ----------------------------------------------------------------------------
// SKILLUSELIMIT: Don't feel like putting a description here, so I'm not gonna.
// ----------------------------------------------------------------------------
function SkillUseLimit(skillNum)
{	var limit = 999999; var min = 0; var max = 0;
	var safeLevel = GetPref('safemax');
	switch(parseInt(skillNum))
	{	case 16: case 17: case 30012: limit = 1; break;
		case 3006: case 4006: case 5014: limit = 5; break;
		case 3009: min=10; max=30; break;
		case 1007: min=10; max=20; break;
		case 1010: min=30; max=40; break;
		case 5011: min=40; max=40; break;
		case 5007: min=20; max=20; break;
	} if (max != 0)
	{	var hp = GetData("maxHP") - GetData("currentHP");
		switch(safeLevel)
		{ 	case 0: limit = parseInt(0.5+hp/((min+max)/2.0)); break;
			case 1: limit = parseInt(0.5+hp/(((max*2)+min)/3.0)); break;
			case 2: limit = parseInt(0.5+hp/max); break;
	}	} return limit;
}


// ---------------------------------------------
// ONFOCUS: Make text input boxes clear on focus
// ---------------------------------------------
function AddAutoClear(box, setting)
{	if (setting == 2)
	{	$(box)
			.attr('onFocus', 'this.select();')
			.attr('onClick', 'this.select();')
			.attr('OnDblClick', 'this.select();');
	} else if (setting == 1)
	{	$(box)
			.attr('onFocus', 'if(this.value==1) this.value="";')
			.attr('onClick', 'if(this.value==1) this.value="";')
			.attr('onBlur',  'if(this.value=="") this.value=1;');
}	}

var autoclear = GetPref('autoclear');
if (autoclear > 0)
{	$('input[value=1]').each(function(i)
	{	AddAutoClear(this, autoclear);
	});
}


// -----------------------------------------------------------
// GOGOGADGETPLUNGER: Convert meat-paste links to The Plunger.
// -----------------------------------------------------------
function GoGoGadgetPlunger()
{	GM_get(GetDomain() + "/knoll.php",function(response)
	{	if (response != "")
		{	$('a[href*="craft.php?mode=combine"]').each(function()
			{	href = this.getAttribute('href');
				href = href.replace('&a=','&item1=');
				href = href.replace('&b=','&item2=');
				href = href.replace('action=craft','action=combine');
				this.setAttribute("href", href.replace(
					"craft.php?mode=combine", "knoll.php?place=paster"));
			});
	}	});
}


// -----------------------------------------
// FIGHT: Add stuffy-stuff to dropped items.
// -----------------------------------------
if (thePath == "/fight.php" || thePath == "/choice.php" || thePath == "/shore.php" || thePath == "/adventure.php"
	|| thePath == "/craft.php" || thePath == "/knoll.php")
{	if (thePath == "/fight.php")
	{	if(document.body.innerHTML.indexOf("WINWINW") == -1) return; }
	$('img').each(function()
	{	var onclick = this.getAttribute("onclick");
		if(onclick == undefined) return true;
		if(onclick.indexOf("desc") != -1)
		{	AddLinks(onclick, this.parentNode.parentNode, null, thePath);
	}	});
}
if (thePath == "/mallstore.php")
{	var img = document.images[0];
	var onclick = img.getAttribute("onclick");
	if (onclick != undefined && onclick.indexOf("desc") != -1)
		AddLinks(onclick, img.parentNode.parentNode, img.parentNode.parentNode.parentNode.parentNode.parentNode, thePath);
	
	for (i=1,len=document.images.length; i<len; i++)
	{	img = document.images[i];
		onclick = img.getAttribute("onclick");
		if (onclick != undefined && onclick.indexOf("desc") != -1)	
			AddInvCheck(img);
	}
}


// -------------------------------------
// BEERPONG: Auto-choose pirate insults.
// -------------------------------------
if (thePath == "/beerpong.php")
{
	val = 0;
	html = $('img[src*=beerpong]').parent().parent().html();
	if(html)
	{	if(html.indexOf('ll flay') != -1) val = 1;
		else if(html.indexOf('craven') != -1) val = 2;
		else if(html.indexOf('pestilent') != -1) val = 3;
		else if(html.indexOf('run red') != -1) val = 4;
		else if(html.indexOf('ned goat') != -1) val = 5;
		else if(html.indexOf('tle girl') != -1) val = 6;
		else if(html.indexOf('some worm') != -1) val = 7;
		else if(html.indexOf('ngle man') != -1) val = 8;

		sel = $('select[name=response]');
		sel.children().each(function()
		{	if($(this).val() > 8) $(this).attr('disabled','disabled');
		});
		if(val > 0)
		{	opt = sel.find('option[value='+val+']');
			if(opt.length > 0) opt.attr('selected','selected');
			else val = 0;
		}
		if(val == 0) sel.prepend($(document.createElement('option'))
			.attr('selected','selected').attr('value','0')
			.html(' '));
}	}

// -----------------------------------------------
// MAIN: Look for updates and post link if needed.
// -----------------------------------------------
if (thePath == "/main.php")
{	var lastUpdated = parseInt(GM_getValue('MrScriptLastUpdate', 0));
	var currentHours = parseInt(new Date().getTime()/3600000);
	GetItemDB();
		
	// If over 12 hours, check for updates
	if ((currentHours - lastUpdated) > 8)
	{
	GM_get("noblesse-oblige.org/lukifer/scripts/MrScript.version.json",
		function(txt)
		{	var json = eval('('+txt+')');
			if(!json.version) return false;
			var vnum = json.version.replace(/\./g, "");
			if(!vnum) return;
			if(parseInt(vnum) <= VERSION)
			{	GM_setValue('MrScriptLastUpdate',
					parseInt(new Date().getTime()/3600000)); return;
			}
			// If we're still here, then we need an update link.
			var html =
'<div style="font-size:14px;text-decoration:none;text-align:center;">' +
'Mr. Script v' + json.version + ' is available!<br /><br />' +
'<a href="' + json.url1 + '" target="_blank">';
			if(json.url2 && json.url2.length > 0)
			html +=
'Uncompressed</a>&nbsp;&nbsp;&nbsp;&nbsp;<b>OR</b>' +
'&nbsp;&nbsp;&nbsp;&nbsp;<a href="' + json.url2 + 
'" target="_blank">Minified</a>&nbsp;&nbsp;<span style="font-size:10px;">(Recommended)</span><br />';
			else html += 'Update</a><br />';
			html += (json.desc ?
			'<p style="margin:0 auto; text-align:left; font-size:10px;">'+ 
			json.desc+'</p>' : '<br />') + '</div>';

			$('table:first').before(html);
		});
	
		// Update item database
		if (itemDB.version != undefined) UpdateItemDB(itemDB.version);
	}
}

// ---------------------------------------------------------
// MAIN.HTML: Resize top pane a bit and store password hash.
// ---------------------------------------------------------
if (thePath == "/main.html")
{	window.setTimeout("f=document.getElementsByTagName('frameset')[1]; f.setAttribute('rows','53,*');",50);
/*	var frames = document.getElementsByTagName('frameset')
	for (var i=0, len=frames.length; i<len; i++)
	{	if (frames[i].getAttribute('id') == 'menuset')
		{	frames[i].rows = "53,*";
			break;
	}	} */
}
if (thePath == "/main_c.html" || thePath == "/main.html")
{	FindHash();
	window.setTimeout("if (frames[0].location == 'about:blank') frames[0].location='topmenu.php';",1500);
}


// ------------------------------------------------
// LOGGEDOUT: Clear password hash, just to be safe.
// ------------------------------------------------
else if (thePath == "/loggedout.php")
{	SetPwd(0);}


// --------------------------------------------------------
// BLACKBIRDSTUFF: GM_get callbacks that do blackbird mojo.
// --------------------------------------------------------
function BlackBirdStuff()
{
	this.innerHTML = '[flap, flap, flap]';

	// Fire callback to find current familiar
	GM_get(GetDomain() + '/familiar.php', function(txt)
	{	var curfam = txt.match(/fam\([0-9]{1,3}\)/)
			.toString().match(/[0-9]{1,3}/).toString();
		SetData('curfam', curfam);

		// 2nd callback to equip blackbird
		GM_get(GetDomain() + '/familiar.php?action=newfam&newfam=59&pwd='+
			GetPwd(), function(txt2)
		{	//Now fire another callback to use the map
			GM_get(GetDomain() + '/inv_use.php?pwd=' + GetPwd() +
				'&which=3&whichitem=2054', function(txt3)
			{	// Redirect main pane to store
				parent.frames[2].location = 'http://' + GetDomain() +
					'/store.php?whichstore=l';
				//...and another callback to put your familiar back
				var curfam = GetData('curfam');
				if(curfam > 0) 
				GM_get(GetDomain() + '/familiar.php?action=newfam&newfam=' + 
					curfam + '&pwd=' + GetPwd(), function(txt4)
				{
	});	});	});	});
}


// ------------------------------------------
// UNEQUIPUPDATE: Callback to unequip inline.
// ------------------------------------------
function UnequipUpdate(event)
{	var url = this.href;
	if (url.indexOf("http://") != -1) url = url.substring(7,url.length);
	GM_get(url);
	var asdf = $(this.parentNode).html(' ');
	asdf.prev().children('select').val(0);
	asdf.prev().prev().html(' ');
	event.stopPropagation(); event.preventDefault(); return false;
}


// -------------------------------------------------------------------
// EQUIPUPDATE: This is silly, but the alternatives were even sillier.
// -------------------------------------------------------------------
function EquipUpdate(txt, itm)
{	var equipped = '';
	if(itm == 8) equipped = txt.indexOf(" equips an item:");
	else
	{	equipped = txt.indexOf("You equip");
		if(equipped == -1) equipped = txt.indexOf("Item equipped:");
	}
	var zel = document.getElementsByTagName('select')[itm];
	var giftd = zel.parentNode.previousSibling;

	if (equipped != -1)
	{	var zoik = txt.match(/http\:\/\/images.k[^\'\"]+gif/).toString();
		// Man, this is SO the stupid way to do this.
		if(itm == 8) zoik = txt.split(zoik)[1]
			.match(/http\:\/\/images.k[^\'\"]+gif/).toString();
		var dscnum = txt.match(/descitem\([0-9]{7,10}\)/);

		// New image
		giftd.innerHTML = '<img src="'+zoik+
			'" class="hand" onclick="descitem('+dscnum+');" />';

		// Change power and add unequip
		var oontd = zel.parentNode.nextSibling;
		var jqtd = $(oontd);
		
		// Strip out power and unequip links
		jqtd.children('font,a').remove();
		
		var pwr = "";
		if (itm < 5)
		{
			pwr = txt.split(zoik)[2].match(/\(Power[^\)]+\)/).toString();

			if (itm == 2)
			{	var oh = document.getElementsByTagName('select')[3];
				if (pwr.indexOf("1h") != -1)
				{	if(jqtd.children('font:contains(1h)'))
						top.frames[2].location.reload(); // Dammit.
				} else
				{	zel.setAttribute('hands','2');
					if (oh.firstChild.value != 0)
					{	oh.appendChild(document.createElement('option'));
						oh.firstChild.value = 0;
					} oh.selectedIndex = 0;
					oh.parentNode.previousSibling.innerHTML = "";
					oh.parentNode.nextSibling.innerHTML = "";
					oh.setAttribute('disabled','disabled');
			}	}
		}

		var unq = ["hat","shirt","weapon","offhand","pants",
					"acc1","acc2","acc3","familiarequip"];

		var uneqlnk = document.createElement('a');
		uneqlnk.innerHTML = '<font size="1">[unequip]</font>';
		uneqlnk.addEventListener("click", UnequipUpdate, true);
		uneqlnk.setAttribute('href', 'inv_equip.php?pwd='+GetPwd()+
			'&which=2&action=unequip&type='+unq[itm]);

		//if(pwr != '')
		pwr += ''; //pwr = '&nbsp;' + pwr;
		var sigh = document.createElement('font');
		sigh.setAttribute('size','1');
		//sigh.innerHTML = "&nbsp;"+pwr;//+'&nbsp;';
		sigh.innerHTML = pwr + ' ';

		jqtd.append(sigh)
			.append(uneqlnk);
	} else
	{	zel.setAttribute('value',zel.getAttribute('previtem'));
		var zoik = zel.getAttribute('previmg')
		if (zoik != 0) giftd.firstChild.setAttribute('src',zoik);
		else giftd.removeChild(giftd.firstChild);
}	}


// -----------------------------------------------
// INVENTORY: Add shortcuts when equipping outfits
// -----------------------------------------------
if (thePath == "/inventory.php")
{
	var firstTable = document.getElementsByTagName('table')[0];

	var gearpage = 0; // Man, this is annoying.
	var searchString = document.location.search;
	if (searchString.indexOf("which=2") != -1) gearpage = 1;

	// Eat/drink page
	else if (searchString.indexOf("which=1") != -1)
	{	var lastfood = GetData('lastfood');
		var lastbooze = GetData('lastbooze');
		if(lastfood)
		{	SetData('lastfood', 0);
			if($('a[href="'+lastfood.split('m/')[1]+'"]').length>0)
			$('table tr:eq(1) td:first').append('<center><a href="'+ lastfood +
				'" target="mainpane" class="tiny">'+
				'[eat another]</a><br /><br /></center>');
		} else if(lastbooze)
		{	SetData('lastbooze', 0);
			if($('a[href="'+lastbooze.split('m/')[1]+'"]').length>0)
			$('table tr:eq(1) td:first').append('<center><input ' +
				'id="boozeconfirm" type="checkbox" style="position:relative;' +
				'top:4px;" /> <a href="' + lastbooze + '" target="mainpane" ' +
				'class="tiny" onclick="return document.getElementById' +
				'(\'boozeconfirm\').checked;">[drink another]' +
				'</a><br /><br /></center>');
		}
		
		if(GetPref('eatagain'))
		{	$('a[href*=inv_ea]') //.html('[om nom nom]')
			.click(function()
			{	SetData('lastfood', this.href); 	});
			$('a[href*=inv_boo]') //.html('[slurrrrp]')
				.click(function()
			{	SetData('lastbooze', this.href); });
		}
	}
	
	// Misc: Blackbird
	else if (searchString.indexOf("action=message") != -1)
	{	var fimg = $('img:first');
		var src = fimg.attr('src');
		if(src.indexOf('blackbird1') != -1)
		{	var fly = document.createElement('a');
			fly.innerHTML = '[fly, fly, fly]';
			fly.setAttribute('href', 'javascript:void(0);');
			$(fly).click(BlackBirdStuff);
			fimg.after(fly)
				.after(document.createElement('br'));
		}
		else if(src.indexOf('scroll1.gif') != -1)
		{	var clov = $('b:lt(5):contains(clover)');
			if(clov.length > 0)
			{	var quant = clov.text().match(/^[0-9]*/);
				if(!quant) quant = 1;
				clov.append(AppendLink('[disassemble]','multiuse.php?pwd='+
				GetPwd()+'&action=useitem&quantity='+quant+'&whichitem=24'));
		}	}
	}

	// Equipment page only
	if (gearpage == 1)
	{
		var backup = GetPref('backup');
		var quickequip = GetPref("quickequip");
		var lnks = document.links;
		var unlink, famLock;
		var didQElink = false;
		var selecty = document.getElementsByTagName('select')[0];
		
		if (backup != '')
		{	for (var i=0, len=lnks.length; i<len; i++)
			{	var lnk = lnks[i];

				if (/familiar\.php/.test(lnk.href))
				{	famLock = lnk; continue; }
				
				if (lnk.text == "[unequip all]"
				 || lnk.text == "Manage your Custom Outfits")
				{
					if(!didQElink)
					{	qelnk = document.createElement('a');
						qelnk.setAttribute('href','javascript:void(0);');
						qelnk.setAttribute('style', 'color:white;' +
							'font-size:10px;');
						qelnk.innerHTML = (quickequip == "1" ?
							"Dis" : "En") + "able Quick-Equip";
						qelnk.addEventListener('click', function(event)
						{	SetPref('quickequip',
								this.innerHTML.charAt(0) == 'E' ? 1 : 0);
							document.location = 'inventory.php?which=2';
						}, false);
						qediv = document.createElement('div');
						qediv.setAttribute('style', 
							'float:right;padding:0 7px;margin-top:3px;');
						qediv.appendChild(qelnk);
						$(lnk).parents('center').parents('tr').prev()
						.children('td:first')
						.prepend('<div style="float:left;width:110px;">'+
							'&nbsp;</div>')
						.prepend(qediv);
						didQElink = true;
					}

					var yetAnotherVariable = 1;
					if (lnk.text != "Manage your Custom Outfits")
						unlink = lnk;
					else
					{	yetAnotherVariable = 0;
						unlink = selecty.parentNode.previousSibling;
						unlink.firstChild.appendChild(
							document.createElement('tr'));
						unlink.firstChild.lastChild.appendChild(
							document.createElement('td'));
						unlink = unlink.firstChild.lastChild.lastChild;
						unlink.setAttribute('align','center');
						unlink.setAttribute('colspan','3');
						unlink.appendChild(document.createElement('font'));
						unlink = unlink.firstChild;
						unlink.setAttribute('size','1');
						unlink.appendChild(document.createTextNode(' '));
						unlink = unlink.lastChild;
					}
					if (yetAnotherVariable == 1)
					{	var newlink = document.createElement('a');
						newlink.innerHTML = "[backup]";
						newlink.href = "#";
						//newlink.addEventListener('contextmenu',function(event)
						//{	alert('pow!');}, false);
						newlink.addEventListener('click',function(event)
						{	this.innerHTML = "[backing up...]";
							GM_get(GetDomain() + '/inv_equip.php?action=customoutfit&which=2&outfitname=' + GetPref('backup'),
							function(response)
							{	for (var i=0, len=document.links.length; i<len; i++)
								{	if (document.links[i].text.indexOf("...") != -1)
									{	if (response.indexOf("custom outfits") == -1)
											document.links[i].innerHTML = "[done]";
										else document.links[i].innerHTML = "[too many outfits]";
										break;
							}	}	}); event.stopPropagation(); event.preventDefault();
						}, false);
						unlink.parentNode.insertBefore(newlink,unlink);
						unlink.parentNode.insertBefore(document.createTextNode(" - "),unlink);
					}

					// Save contents of outfit menu
					var nunewlink; var opty;
					for (var i=1, len=selecty.options.length; i<len; i++)
					{	opty = selecty.options[i];
						if (opty.text == backup)
						{	nunewlink = document.createElement('a');
							nunewlink.innerHTML = "[revert to " + backup.toLowerCase() + "]";
							nunewlink.href = "inv_equip.php?action=outfit&which=2&whichoutfit=" + opty.value;
							nunewlink.addEventListener('contextmenu',function(event)
							{	alert('powee!');}, false);
					}	}

					if (nunewlink) 
						unlink.parentNode.insertBefore(nunewlink,unlink);
					if (yetAnotherVariable == 1) unlink.parentNode.insertBefore(
						document.createTextNode(" - "),unlink);
					break;
		}	}	}

if(quickequip > 0)
{
		var shelfToNum =
		{"Hats:":0,"Shirts:":1,"Melee Weapons:":2,"Ranged Weapons:":2,"Mysticality Weapons:":2,
		"Weapons:":2,"Off-Hand Items:":3,"Pants:":4,"Accessories:":5,"Familiar Equipment:":8};
		
		numToEquipType =
		{0:"Hat:",1:"Shirt:",2:"Weapon:",3:"Off-Hand:",4:"Pants:",
		5:"Accessory 1:",6:"Accessory 2:",7:"Accessory 3:",8:"Familiar:"};

		equipTypeToNum =
		{"Hat:":0,"Shirt:":1,"Weapon:":2,"Off-Hand:":3,"Pants:":4,
		"Accessory_1:":5,"Accessory_2:":6,"Accessory_3:":7,"Familiar:":8};
		
		shelfNumToLink = 
		{0:"Hats",1:"Shirts",2:"Weapons",3:"Off-Hand",4:"Pants",
		5:"Accessories",6:"Accessories",7:"Accessories",8:"Familiar"};

		var equips = []; var pics = []; var selects = []; var curgear = [];
		var curgearnum = []; var hands = 1;
		GetItemDB();

		// First pass: Get currently equipped items		
		var gearList = selecty.parentNode.previousSibling.firstChild;
		len = gearList.childNodes.length;
		for (var i=0, len=gearList.childNodes.length; i<len; i++)
		{	var tr = gearList.childNodes[i];

			if (tr.childNodes.length < 2) break;
			//if (tr.childNodes[0].innerHTML.length == 0) continue;

			var shelfText = tr.childNodes[0].textContent.replace(/[\s]/, '_');
			
			var shelfNum = equipTypeToNum[shelfText];
			//var shelfNum = i;
			
			// Store item number and name of currently equipped item.
			if (tr.childNodes[1].firstChild
			&& tr.childNodes[1].firstChild.tagName == 'IMG')
			{	if (shelfNum == 2 && tr.childNodes[2]
					.textContent.indexOf("1h") == -1) hands = 2;
				equips[shelfNum] = tr.childNodes[2];

				var pic = tr.childNodes[1].firstChild;
				if (pic != undefined)
				{	pics[shelfNum] = pic.parentNode.innerHTML;
					var piclic = pic.getAttribute('onclick');
					if (piclic != undefined)
					{	var itm = DescToItem(piclic);
						if(itm)
						{	curgear[shelfNum] = itm['name'];
							curgearnum[shelfNum] = itm['itemid'];
			}	}	}	}

			// Item slot is empty
			else
			{	equips[shelfNum] = (tr.childNodes.length > 2 ?
					tr.childNodes[2] : tr.childNodes[1]);
			}

			// Create select menus
			var newsel = document.createElement('select');
			newsel.setAttribute('style',"width:250px;");
			newsel.setAttribute('name', shelfNum);
			if (shelfNum == 3)
			{	if(hands == 2) newsel.setAttribute('disabled','disabled');
			}
			if (curgearnum[shelfNum] > 0) 
			{	newsel.appendChild(document.createElement('option'));
			}
			selects[shelfNum] = newsel;
		}

		// Second pass: Create new table and rows.
		var nuTabl = $(document.createElement('table'));
		var len = 9;
		for (var i=0; i<len; i++)
		{
			var extra = (i==8 && famLock ? '<a href="' + famLock.href + '">' +
			'<img class="hand" src="'+ famLock.firstChild.src + 
			'" style="height:20px;width:20px;margin-right:15px;" /></a>' : '');
				
			nuTabl.append('<tr align="right"><td height="30">' + extra +
			'<a class="nounder" href="#' + shelfNumToLink[i] + '">' + 
			numToEquipType[i] + '</a></td><td>' +
			(pics[i] != undefined ? pics[i] : '&nbsp;') +
			'</td><td> </td><td align="left"> </td></tr>');

			if(curgear[i] == undefined)
			{	curgear[i] = "";
				curgearnum[i] = 0;
			}

			// Create selects for blank rows
			if(selects[i] == undefined)
			{	var newsel = document.createElement('select');
				newsel.setAttribute('style',"width:250px;");
				newsel.setAttribute('name', i);
				//if (curgearnum[i] != 0) 
				newsel.appendChild(document.createElement('option'));
				selects[i] = newsel;
				equips[i] = document.createElement('td');
			}
		}

		// Attach new gear table and links to the DOM
		$(gearList.parentNode)
			.before(nuTabl.get(0))
			.before(unlink.parentNode)
			.before(document.createElement('br'))
			.attr('style','display:none;');

		// Iterate through links
		var len = lnks.length;
		var lensub = len-1;
		var theSel, itemText;
		for (var i=0; i<len; i++)
		{	var lnk = lnks[i];

			// Switch to new shelf, and add anchor
			if (lnk.href.substr(0,4) == 'java')
			{	shelf = shelfToNum[lnk.text];
				continue;
			}

			// Add equippable item to drop-down of current shelf.
			else if (lnk.text == "[equip]" || lnk.text == "[offhand]")
			{	itemText = lnk.parentNode.parentNode.firstChild.innerHTML;

				// Three iterations for accessories.
				var limit = 1; if (shelf == 5) limit = 3;
				for (var j=0; j<limit; j++)
				{	var zshelf; if (lnk.text == "[offhand]") zshelf = 3;
					else zshelf = shelf+j;
					theSel = selects[zshelf];
					if (theSel == undefined) continue;

					// Create the select menu option
					var opt = document.createElement("option");
					opt.setAttribute("value",lnk.href.split("item=")[1]);
					if(lnk.text == "[offhand]")
					{	opt.setAttribute('dualwield', 1);
					}
					opt.innerHTML = itemText;

					// Add the currently worn item to the menu, if necessary
					if (!theSel.getAttribute("gearfound"))
					{	var curText = curgear[zshelf].toLowerCase();
						var tstText = itemText.toLowerCase();
						if (tstText == curText) selects[zshelf].setAttribute('gearfound','gearfound');
						else if (tstText > curText)
						/*|| lnks[i+1] == undefined || lnks[i+1].href.indexOf(":t") != -1)*/
						{	var opt2 = document.createElement("option");
							opt2.setAttribute("value",curgearnum[zshelf]);
							opt2.innerHTML = curgear[zshelf];
							theSel.appendChild(opt2);
							theSel.setAttribute('gearfound','gearfound');
						}
					}
					theSel.appendChild(opt);
				}
			}
		}

		gearList = nuTabl.get(0).firstChild;
		
		var unq = ["hat","shirt","weapon","offhand","pants",
					"acc1","acc2","acc3","familiarequip"];

		// Add the select menus to the DOM and select the currently worn item
		for (var i=0; i<9; i++)
		{
			var row = gearList.childNodes[i];
			var eqnum = i;
			var tempsel = selects[i]; var nuus = [];
			var action = "equip";
			
			// Add currently equipped item if not found in equip links
			if(!tempsel.getAttribute('gearfound') && curgearnum[i] > 0)
			{	var newopt = document.createElement('option');
				newopt.innerHTML = curgear[i];
				newopt.setAttribute("value", curgearnum[i]);
				tempsel.appendChild(newopt);
				//tempsel.setAttribute('gearfound');
			}
			
			for (var j=0, len2=tempsel.childNodes.length; j<len2; j++)
			{	if (tempsel.childNodes[j].value == curgearnum[i])
				{	tempsel.selectedIndex = j;	break;
			}	}

			// Attach event handler that does the work
			tempsel.addEventListener('change',function(event)
			{	if (this.value == 0) return;
				var loading = 
'data:image/gif;base64,R0lGODlhEgASAJECAMDAwNvb2%2F%2F%2F%2FwAAACH%2FC05FVFNDQVBFMi4wAwEAAAAh%2BQQFCgACACwAAAAAEgASAAACMpSPqQmw39o7IYjo6qpacpt8iKhoITiiG0qWnNGepjCv7u3WMfxqO0%2FrqVa1CdCIRBQAACH5BAUKAAIALAcAAQAIAAYAAAIOVCKZd2osAFhISmcnngUAIfkEBQoAAgAsCwADAAYACAAAAg5UInmnm4ZeAuBROq%2BtBQAh%2BQQFCgACACwLAAcABgAIAAACD5QTJojH2gQAak5jKdaiAAAh%2BQQFCgACACwHAAsACAAGAAACDpQdcZgKIFp4Lzq6RF0FACH5BAUKAAIALAMACwAIAAYAAAIOFCCZd2osQlhISmcnngUAIfkEBQoAAgAsAQAHAAYACAAAAg4UIHmnm4ZeCuFROq%2BtBQAh%2BQQFCgACACwBAAMABgAIAAACD5QBJojH2kQIak5jKdaiAAA7';

				this.setAttribute('previtem',this.value);
				var imgtd = this.parentNode.previousSibling;

				$(imgtd.firstChild).attr('style','display:none;')
				.before('<img src="'+loading+'" width="30" height="30" />');

				if(this.childNodes[this.selectedIndex]
					.getAttribute('dualwield')) action = "dualwield";

				if (imgtd.childNodes.length > 0)
					this.setAttribute('previmg',imgtd.firstChild.src);
				else this.setAttribute('previmg',0);

				var ztype = parseInt(this.getAttribute('name'));
				var url = /*'http://'+*/GetDomain()+"/inv_equip.php?pwd="+
				GetPwd()+"&which=2&action="+action+"&whichitem="+this.value;
				if (ztype == 5) url += "&slot=1";
				else if (ztype == 6) url += "&slot=2";
				else if (ztype == 7) url += "&slot=3";
				
			// I forget why I had to do this, but I'm sure there was a reason.
				switch(ztype)
				{	case 0: GM_get(url, function(t){EquipUpdate(t,0);}); break;
					case 1: GM_get(url, function(t){EquipUpdate(t,1);}); break;
					case 2: GM_get(url, function(t){EquipUpdate(t,2);}); break;
					case 3: GM_get(url, function(t){EquipUpdate(t,3);}); break;
					case 4: GM_get(url, function(t){EquipUpdate(t,4);}); break;
					case 5: GM_get(url, function(t){EquipUpdate(t,5);}); break;
					case 6: GM_get(url, function(t){EquipUpdate(t,6);}); break;
					case 7: GM_get(url, function(t){EquipUpdate(t,7);}); break;
					case 8: GM_get(url, function(t){EquipUpdate(t,8);}); break;
				}
			}, false);

			gearList.childNodes[i].childNodes[2].appendChild(tempsel);
			
			// Add power and unequip links
			var pow = '';
			var descTD = $(row.childNodes[3]);
			pow = equips[i].innerHTML.match(/\(Pow.+\)/);
			if(pow != null) descTD.append('<font size="1"> '+ pow+ '</font> ');
			else descTD.append(' ');
			
			if(row.childNodes[1].firstChild.tagName == 'IMG')
			{	var un = document.createElement('a');
				un.innerHTML = '<font size="1">[unequip]</font>';
				un.setAttribute('href', 'inv_equip.php?pwd='+GetPwd()+
				'&which=2&action=unequip&type='+unq[i]);
				un.addEventListener('click', UnequipUpdate, false);
				descTD.append(un);
			}
		}
} // quickequip
	} // equippage

	if (GetPref('shortlinks') > 1 && firstTable.rows[0].textContent == "Results:")
	{	var resultsText = firstTable.rows[1].textContent;
		if (resultsText.indexOf("tumbling rocks") != -1 && 
			document.referrer.indexOf('bathole.php') != -1)
			parent.frames[2].location =
				'http://' + GetDomain() + '/bathole.php';
		else if (resultsText.indexOf("cheap ratchet") != -1 && 
			document.referrer.indexOf('pyramid.php') != -1)
			parent.frames[2].location =
				'http://' + GetDomain() + '/pyramid.php';
		else if (resultsText.indexOf("duck talk") != -1)
		{	bText = document.getElementsByTagName('b')[1];
			if (bText.textContent == "quantum egg")
			{	bText.parentNode.appendChild(AppendLink('[rowboat]',
				'craft.php?mode=combine&action=craft&a=652&b=609&pwd=' + GetPwd() + '&quantity=1'));
				GoGoGadgetPlunger();
		}	}

		else if (resultsText.indexOf("You equip an item") != -1)
		{	var bText = document.getElementsByTagName('b')[1];
			//var item = resultsText.substring(14);
			var item = bText.textContent;

			if (item == "continuum transfunctioner")
				bText.parentNode.appendChild(AppendLink('[8-bit]', 'adventure.php?snarfblat=73'));
			else if (item == "huge mirror shard")
				bText.parentNode.appendChild(AppendLink('[chamber]', 'lair6.php?place=1'));
			else if (item == "makeshift SCUBA gear")
				bText.parentNode.appendChild(AppendLink('[odor]', 'lair2.php?action=odor'));
			else if (item == "snorkel")
				bText.parentNode.appendChild(AppendLink('[map]', 'inv_use.php?pwd='+
				GetPwd() + '&which=3&whichitem=26'));
			else if (item == "pool cue")
				bText.parentNode.appendChild(AppendLink('[chalk]', 'inv_use.php?pwd='+
				GetPwd() + '&which=3&whichitem=1794'));
			else if (item == "Talisman o' Nam")
               bText.parentNode.appendChild(AppendLink('[palindome]', 'adventure.php?snarfblat=119'));
			else if (item == "worm-riding hooks")
               bText.parentNode.appendChild(AppendLink('[drum]', 'inv_use.php?pwd='+
               GetPwd() + '&which=2&whichitem=2328'));
			else if (item.indexOf("spectacles") != -1 && document.referrer.indexOf('manor3') != -1)
				parent.frames[2].location = 'http://' + GetDomain() + '/manor3.php';
		}
		else if (resultsText.indexOf("Outfit:") != -1)
		{
			var outfit = resultsText.split(": ")[1];
			var equipText = firstTable.rows[1].cells[0]
				.firstChild.firstChild.firstChild.firstChild;
			equipText.setAttribute('valign', 'baseline');

			if (outfit.indexOf("Harem Girl") != -1)
			{	equipText.appendChild(AppendLink('[perfume]',
					'inv_use.php?pwd=' + GetPwd() + '&which=3&whichitem=307'));
				equipText.appendChild(AppendLink('[knob]', 'knob.php'));
			}
			else if (outfit.indexOf("Swashbuckling") != -1)
			{	if (document.referrer.indexOf('council') == -1)
					equipText.appendChild(AppendLink('[council]', 'council.php'));
				equipText.appendChild(AppendLink('[island]', 'island.php'));
			}
			else if (outfit.indexOf("Filthy Hippy") != -1)
			{	if (document.referrer.indexOf('store.php') != -1)
					parent.frames[2].location = 'http://' + GetDomain() + '/store.php?whichstore=h';
				else equipText.appendChild(AppendLink('[fruit]', 'store.php?whichstore=h'));
			}
			else if (outfit.indexOf("Mining Gear") != -1)
				equipText.appendChild(AppendLink('[mine]', 'mining.php?mine=1'));
			else if (outfit.indexOf("Elite Guard") != -1)
			{	if (document.referrer.indexOf('store.php') != -1)
					parent.frames[2].location = 'http://' + GetDomain() + '/store.php?whichstore=g';
				else equipText.appendChild(AppendLink('[lab]', 'store.php?whichstore=g'));
			}
			else if (outfit.indexOf("Bugbear") != -1)
			{	if (document.referrer.indexOf('store.php') != -1)
					parent.frames[2].location = 'http://' + GetDomain() + '/store.php?whichstore=b';
				else equipText.appendChild(AppendLink('[bakery]', 'store.php?whichstore=b'));
			}
			else if (outfit.indexOf("eXtreme") != -1)
				equipText.appendChild(AppendLink('[trapz0r]', 'trapper.php'));
			else if (outfit.indexOf("Cloaca-Cola") != -1)
				equipText.appendChild(AppendLink('[battlefield]', 'adventure.php?snarfblat=85'));
			else if (outfit.indexOf("Dyspepsi-Cola") != -1)
				equipText.appendChild(AppendLink('[battlefield]', 'adventure.php?snarfblat=85'));
			else if (outfit.indexOf("Frat Warrior") != -1 || outfit.indexOf("War Hippy") != -1)
				equipText.appendChild(AppendLink('[island]', 'island.php'));
	}	}
}
		

// -----------------------------------
// GALAKTIK: Add use boxes when buying
// -----------------------------------
else if (thePath == "/galaktik.php")
{
	row = $('table:first tr:eq(1):contains("You acquire")');
	if(row.length == 1)
	{	var num = 1;
		txt = row.text();
		if (txt.indexOf("an item:") == -1)
			num = $('b:eq(1)').text().split(" ")[0];
		var docG = DescToItem($('img:first')
			.get(0).getAttribute('onclick'))['itemid'];

		if (GetPref('docuse') == 1 && docG < 233)
		{	var sanitycheck = FindMaxQuantity(docG, num, 0, 0) + 1;
			if (num > sanitycheck) num = sanitycheck;
			parent.frames[2].location = 'http://' + GetDomain() +
			'/multiuse.php?action=useitem&quantity=' + num +
			'&pwd=' + GetPwd() + '&whichitem=' + docG;
		} else
		{	AppendUseBox(docG, 0, 1, row.find('td center').get(0));
			if (num > 1) NumberLink($('b:eq(1)').get(0));
		}
	}

	var howMany = $('input[name=howmany]');
	var check = $(document.createElement('input'))
		.attr("type","checkbox")
		.attr("name","usecheckbox")
		.attr("style","height:12px;width:12px;");
	if (GetPref('docuse') == 1) check.attr("checked",true);
	check.change(function()
	{	var box = $('input[name=usecheckbox]');
		if (box.attr('checked')) SetPref('docuse',1);
		else SetPref('docuse',0);
	});
	var checkSpan = $(document.createElement('span'))
		.attr("class","small")
		.append(document.createElement('br'))
		.append(document.createElement('br'))
		.append(check)
		.append(document.createTextNode("Auto-Use Unguents And Ointments"));
	howMany.after(checkSpan);
}


// ---------------------------------------------
// STORE: Add use boxes and links as appropriate
// ---------------------------------------------
else if (thePath == "/store.php")
{	var firstTable = $('table:first tbody');
	var whichstore; var noform = 1;
	
	var insput = $('input[name=whichstore]');	
	if (insput.length > 0)
	{	whichstore = insput.attr('value'); noform = 0;
	} else whichstore = document.location.search
		.match(/whichstore\=([a-z0-9])/)[1];

	// Refresh hash
	var inphash = $("input[name=phash]");
	if(inphash.length>0) SetPwd(inphash.val());

	// Quantity checking
	$('img').each(function()
	{	onclick = this.getAttribute('onclick');
		if (onclick != undefined && onclick.indexOf("desc") != -1)	
			AddInvCheck(this);
	});

	// You can thank Mr. Mag for this one
	$("img[src*=otherimages]:first").attr('id','proprietor').get(0)
	.addEventListener('contextmenu', function(evt)
	{	GM_get(GetDomain()+'/inv_equip.php?pwd='+GetPwd()+
			'&which=2&action=equip&whichitem=1792',
		function(txt)
		{	var pimg = document.getElementById('proprietor');
			pimg.removeAttribute('id');
			pimg.parentNode.nextSibling.innerHTML +=
			'<br /><div class="tiny">' +
			(txt.indexOf('You equip') != -1 ?
			'Travoltan Trousers Equipped' :
			'Travoltan Trousers Could Not Be Equipped') + '</span>';
		}); evt.stopPropagation(); evt.preventDefault();
	}, true);

	if (GetPref('shortlinks') > 1 && firstTable != undefined && 
		firstTable.children('tr:first').text() == "Market Results:" &&
		firstTable.children('tr:eq(1)').text().indexOf("You acquire") != -1)
	{	var descId = $('img:first').get(0).getAttribute('onclick');

		var doWhat = '';
		var acquireString = firstTable.children('tr:eq(1)').text();
		var acquireText = firstTable.find('tr:eq(1) td:first *:first');
		bText = $('b:eq(1)').attr('valign','baseline');

		switch(whichstore)
		{	case 'b':
				bText.parent().append(AppendLink('[cook]', '/craft.php?mode=cook')); break;
			case 'j':
				bText.parent().append(AppendLink('[ply]', 'craft.php?mode=jewelry')); 
				break;
			case 's':
				if (document.referrer.indexOf('craft') != -1)
					parent.frames[2].location = 'http://' + GetDomain() + '/craft.php?mode=smith';
				bText.parent().append(AppendLink('[smith]', 'craft.php?mode=smith')); 
				break;
			case 'h':
				bText.parent()
					.append(AppendLink('[cook]', 'craft.php?mode=cook'))
					.append(AppendLink('[mix]', 'craft.php?mode=cocktail'))
					.append(AppendLink('[still]', 'guild.php?place=still')); 
					break;
		}

		if (descId != undefined)
		{	var whut = AddLinks(descId, bText.parent().parent().get(0), acquireText, thePath);
			if ((whut == 'skill' || whut == 'use') && firstTable.children('tr:eq(1)').text().indexOf("an item:") == -1)
				NumberLink(bText.get(0));
		}
	}

	if (GetPref('shortlinks') > 1)
	{
		if (whichstore == 'g') // Stupid Lab Key *sigh*
		{	if (document.body.textContent == "")
			{	GM_get(GetDomain()+'/knob2.php',function(knob2)
				{	if (knob2.indexOf('locked') != -1) document.firstChild.innerHTML = knob2;
				else {
			var style = $(document.createElement('style'))
				.attr('type', 'text/css')
				.html("body {font-family: Arial, Helvetica, sans-serif; background-color: white; color: black;} " +
				"td {font-family: Arial, Helvetica, sans-serif;} input.button {border: 2px black solid; " +
				"font-family: Arial, Helvetica, sans-serif; font-size: 10pt; font-weight: bold; background-color: #FFFFFF;}");
			//document.firstChild.firstChild.appendChild(style);
			$('head').append(style);

			var tabl = $(document.createElement('table'))
				.attr('width','95%')
				.attr('style','font-family: Arial, Helvetica, sans-serif')
				.attr('cellspacing','0')
				.attr('cellpadding','0')
				.append(document.createElement('tbody'));
			tabl.children('tbody')
				.append(document.createElement('tr'))
				.append(document.createElement('tr'));
			var td = $(document.createElement('td'))
				.attr('bgcolor','blue')
				.attr('align','center')
				.attr('style','color: white;')
				.html('<b>Knob Goblin Laboratory</b>');
			//td.firstChild.innerHTML = "Knob Goblin Laboratory";
			tabl.find('tbody tr:first').append(td);
			var td = $(document.createElement('td'))
				.attr('style','border: 1px solid blue; padding: 5px;')
				.attr('align','center')
				.append('<p><img src="http://images.kingdomofloathing.com' 
				+ '/otherimages/shopgoblin.gif" align="middle">'
				+ 'How did <i>you</i> get here? This store is '
				+ 'for guards only!<br>')
			//td.firstChild.innerHTML = ';
			td.children('p').append(
				AppendOutfitSwap(5, "Get In Gear, Soldier!",0));
			tabl.find('tbody tr:eq(1)').append(td);
			var centre = $(document.createElement('center'))
				.append(tabl);
			$('body').append(centre);
			}});}
			else
			{	$('p:first').append(
					AppendOutfitSwap(0, "Return To Civilian Life", 0));
		}	}
		else if (whichstore == 'h')
		{	if (noform == 1)
				swap = AppendOutfitSwap(2, "Like, Get Groovy, Man", 0);
			else swap = AppendOutfitSwap(0, "Whoa, Clear Your Head, Man", 0);
			$('p:first').append(swap);
		} else if (whichstore == 'b')
		{	if (noform == 1) swap = AppendOutfitSwap(1,
				"Wave Your Hand And Say \"But I Am A Bugbear.\"", 0);
			else swap = AppendOutfitSwap(0,
				"Sneak Away Before The Bugbear Catches On", 0);
			$('p:first').append(swap);
		}
	}
}


// ---------------------------------
// CASINO: Add link for buying pass.
// ---------------------------------
else if (thePath == "/casino.php")
{	//var firstTable = document.getElementsByTagName('table')[0];
	if (GetPref('shortlinks') > 1)
	{	if($('table:first tr:eq(1)').text().indexOf("Casino Pass") != -1)
			$('p:first').html(AppendBuyBox(40, 'm', 'Buy Casino Pass', 1));
}	}

// -------------------------------------
// CRAFT: Buttons for buying ovens, etc.
// -------------------------------------
else if (thePath == "/craft.php")
{
	var mode = document.location.search.match(/mode=[a-z]+/);
	if(mode) mode = mode.toString().split('=')[1];
	switch(mode)
	{
		case 'combine':
			break;

		case 'cook':
			var mlink = $('a[href$="store.php?whichstore=m"]');
			if (GetPref('shortlinks') > 1 && mlink.length > 0)
			{	mlink.parent().before('<span id="buyspan"></span>');
				GM_get(GetDomain() + '/heydeze.php', function(txt)
				{	if(txt != '') store = 'y';
					else store = 'm';
					$('#buyspan').before(
						AppendBuyBox(157, store, 'Buy Oven', 1));
				});
			} break;

		case 'cocktail':
			var mlink = $('a[href$="store.php?whichstore=m"]');
			if (GetPref('shortlinks') > 1 && mlink.length > 0)
			{	mlink.parent().before('<span id="buyspan"></span>');
				GM_get(GetDomain() + '/heydeze.php', function(txt)
				{	if(txt != '') store = 'y';
					else store = 'm';
					$('#buyspan').before(
						AppendBuyBox(236, store, 'Buy Cocktailcrafting Kit', 1));
				});
			} break;

		case 'smith':
			var mlink = $('a[href$="store.php?whichstore=s"]');
			if (GetPref('shortlinks') > 1 && mlink.length > 0)
			{	mlink.parent().before('<span id="buyspan"></span>');
				GM_get(GetDomain() + '/heydeze.php', function(txt)
				{	if(txt != '') store = 'y';
					else store = 's';
					$('#buyspan').before(
						AppendBuyBox(338, store, 'Buy Hammer', 1));
				});
			}
			
			// Needs layout fix
			box = $('form[name=pulverize] input[name=qty]');
			if(box.length > 0)
			{	smash = $('select[name=smashitem]');
				smash.attr('style', 'vertical-align:top;');
				MakeMaxButton(box.get(0), function(event)
				{	box.val(ParseSelectQuantity(smash.get(0), " "));
				});
				var parTabl = box.parent().parent().parent().parent();
				parTabl.attr('style', parTabl.attr('style') + 
					' vertical-align:middle;');
			}
		
			$('b').each(function()
			{	zis = $(this);
				txt = zis.text();
				if (txt.indexOf("powder") != -1)
				{	$zis.parent().append(AppendLink('[malus]',
						'guild.php?place=malus'));
				}
				else if (txt.indexOf("nugget") != -1)
				{	zis.parent().append(AppendLink('[malus]',
						'guild.php?place=malus'));
					if (txt.indexOf("twink") == -1)
						zis.parent().append(AppendLink('[cook]', 
						'/craft.php?mode=cook'));
				}			
			});
			break;
	}
}


// -------------------------------
// SEWER: Add form for buying gum.
// -------------------------------
else if (thePath == "/sewer.php")
{	tr = $('table:first tr:first:contains(Results)');
	if (GetPref('shortlinks') > 1 && 
		tr.length > 0)
	{	if (tr.next().text().indexOf("extending") != -1)
		{	$('p:first').get(0).innerHTML +=
				'<br><br>' + AppendBuyBox(23, 'm', 'Buy Gum', 0);
		} else
		{	$('b:contains(worthless)').parent()
				.append(AppendLink('[hermit]', 'hermit.php'));
		}
}	}


// ------------------------------------
// HERMIT: Add form for buying permits.
// ------------------------------------
else if (thePath == "/hermit.php")
{	if (GetPref('shortlinks') > 1)
	{	var p = $('p:first');
		var txt = p.text();
		if (txt.indexOf("not allowed") != -1)
			p.append('<br><br>' + AppendBuyBox(42, 'm', 'Buy Permits', 0));
		else if (txt.indexOf("disappointed") != -1)
			p.append('<br><br><center><a href="sewer.php">Visit Sewer</a></center>');
		
		tr = $('table:first tr:contains(Results)');
		if (tr.next().text().indexOf("You acquire") != -1)
		{	var descId = $('img:first').get(0).getAttribute('onclick');
			var bText = $('b:eq(1)').attr('valign','baseline');
			if (bText.text().indexOf("ten-leaf clovers") != -1)
			{	var num = parseInt(bText.text().split(" ten-leaf")[0]);
				bText.parent().append(AppendLink('[disassemble]', 'multiuse.php?pwd=' +
				GetPwd() + '&action=useitem&quantity=' + num + '&whichitem=24'));
			}
			else AddLinks(descId, bText.parent().parent().get(0), p, thePath);
		}
}	}


// ------------------------------
// COMBINE: Auto-make meat paste.
// ------------------------------
else if (thePath == "/craft.php" && document.location.search != "")
{	var txt = document.body.textContent;
	if (txt.indexOf("have any meat paste") != -1 && txt.indexOf("You acquire") == -1)
	{	var quant = document.location.search.substr(
			document.location.search.lastIndexOf("ty=")+3);
		SetData('urlstorage',document.location.search);
		GM_get(GetDomain()+"/craft.php?mode=combine&action=makepaste&quantity="+quant,
		function(result)
		{	if (result.indexOf("enough Meat") == -1)
			{	var url = GetData('urlstorage'); SetData('urlstorage',0);
				GM_get(GetDomain()+"/craft.php"+url,function(result2)
				{	document.body.innerHTML = result2;
				});
			}
		});
}	}


// ---------------------------------
// MOUNTAINS: Always-visible hermit.
// ---------------------------------
else if (thePath == "/mountains.php")
{	if (GetPref('zonespoil') == 1)
	{	$("img[src*=valley2]").attr('title','ML: 75-87');
		$("img[src*=bigbarrel]").attr('title','ML: 15/25/35');
	}
	img = $('img:last');
	if(img.attr('src').indexOf("mount4") != -1)
	{
		img.attr('border', 0).attr('src','http://images.kingdomofloathing.com/'+
			'otherimages/mountains/hermitage.gif');
		var a = document.createElement('a');
		$(a).attr('href','hermit.php')
			.insertBefore(img)
			.append(img);
	}
}
else if (thePath == "/barrel.php")
{	$('img').each(function()
	{	var onclick = this.getAttribute("onclick");
		if(onclick == undefined) return true;
		if(onclick.indexOf("desc") != -1)
		{	AddLinks(onclick, this.parentNode.parentNode, null, thePath);
	}	});
}


// -----------------------------------------------
// COUNCIL: Add shortcut links for current quests.
// -----------------------------------------------
else if (thePath == "/council.php")
{	if (GetPref('shortlinks') > 1)
	{
		$('p').each(function()
		{	var p = $(this);
			var txt = p.text();

			if (txt.indexOf("Toot") != -1)
				p.append(AppendLink('[toot]', 'mtnoob.php?action=toot'));
			else if (txt.indexOf("larva") != -1 && txt.indexOf("Thanks") == -1)
				p.append(AppendLink('[woods]', 'woods.php'));
			else if (txt.indexOf("Typical Tavern") != -1)
				p.append(AppendLink('[tavern]', 'rats.php'));
			else if (txt.indexOf("Boss Bat") != -1)
				p.append(AppendLink('[bat hole]', 'bathole.php'));
			else if (txt.indexOf("Guild") != -1)
				p.append(AppendLink('[guild]', 'guild.php'));
			else if (txt.indexOf("Goblin King") != -1 &&
				txt.indexOf("slaying") == -1)
			{	var derr = AppendLink('[disguise]', "inv_equip.php" + 
					"?action=outfit&which=2&whichoutfit=4");
				p.appendChild(derr);
				if (GetPref('backup') != "")
				{	$(derr).children('*:last')
						.attr('href', 'javascript:void(0);').click(function()
					//bink.addEventListener('click',function(event)
					{	GM_get(GetDomain() + '/inv_equip.php' + 
							'?action=customoutfit&which=2&outfitname=' + 
						GetPref('backup'), function(response)
						{	parent.frames[2].location = 'http://' + GetDomain() 
						+  "/inv_equip.php?action=outfit&which=2&whichoutfit=4";
						}); return false;
						//event.stopPropagation(); event.preventDefault();
					});
				}
				p.append(AppendLink('[perfume]', 'inv_use.php?pwd=' +
					GetPwd() + '&which=3&whichitem=307'));
				p.append(AppendLink('[knob]', 'knob.php'));
			}
			else if (txt.indexOf("Sinister") != -1)
				p.append(AppendLink('[cave]', 'cave.php'));
			else if (txt.indexOf("Deep Fat") != -1)
				p.append(AppendLink('[copse]', 'friars.php'));
			else if (txt.indexOf("Cyrpt") != -1)
				p.append(AppendLink('[cyrpt]', 'cyrpt.php'));
			else if (txt.indexOf("L337") != -1)
				p.append(AppendLink('[trapz0r]', 'trapper.php'));
			else if (txt.indexOf("Chasm") != -1)
				p.append(AppendLink('[mountains]', 'mountains.php'));
			if (txt.indexOf("invaded!") != -1 || txt.indexOf("pirates") != -1)
			{	var derr = AppendLink('[swashbuckle]', "inv_equip.php" +
					"?action=outfit&which=2&whichoutfit=9");
				p.append(derr);
				if (GetPref('backup') != "")
				{	$(derr).children('*:last').attr('href', '#')
					.click(function(event)
					{	GM_get(GetDomain() + '/inv_equip.php' +
							'?action=customoutfit&which=2&outfitname=' + 
						GetPref('backup'), function(response)
						{	parent.frames[2].location = 'http://'+GetDomain()+
						"/inv_equip.php?action=outfit&which=2&whichoutfit=9";
						}); return false;
						//event.stopPropagation(); event.preventDefault();
					});
				} p.append(AppendLink('[island]', 'island.php'));
			}
			else if (txt.indexOf("garbage") != -1
				&& txt.indexOf("Thanks") == -1)
			{	if (txt.indexOf("sky") != -1)
				{	p.append(AppendLink('[plant bean]', 'inv_use.php?pwd=' + 
						GetPwd() + "&which=3&whichitem=186"));
					top.frames[0].location.reload();
				} else p.append(AppendLink('[beanstalk]', 'beanstalk.php'));
			}
			else if (txt.indexOf("her Lair") != -1)
				p.append(AppendLink('[lair]', 'lair.php'));			
			else if (txt.indexOf("Black Forest") != -1)
				p.append(AppendLink('[forest]', 'adventure.php?snarfblat=111'));
			else if (txt.indexOf("war") != -1 && txt.indexOf("Island") != -1)
				p.append(AppendLink('[island]', 'island.php'));			
		});
	
		$('b').each(function()
		{	var b = $(this);
			var txt = b.text();
		
			if (txt.indexOf("leaflet") != -1)
				b.append(AppendLink('[read]', 'leaflet.php'));
			else if (txt.indexOf("dragonbone") != -1)
			{	b.append(AppendLink('[make belt]', 'craft.php?mode=combine&action=craft&a=676&b=192&pwd=' +
					GetPwd() + '&quantity=1'));
				GoGoGadgetPlunger();
		}	});
	}
	
	$('img').each(function()
	{	var onclick = this.getAttribute('onclick');
		if (onclick != undefined && onclick.indexOf("desc") != -1)
			AddLinks(onclick, this.parentNode.parentNode, null, thePath);
	});
}


// ----------------------------------------------------
// QUESTLOG: Add MORE shorcut links for current quests!
// ----------------------------------------------------
else if (thePath == "/questlog.php")
{	// If this ever breaks, the following line will probably be why:
	if (document.links[0].href.indexOf("?which=1") == -1
		&& GetPref('shortlinks') > 1)
	{
		$('b').each(function()
		{	var b = $(this);
			var txt = b.text();

			if (txt.indexOf("Toot") != -1)
				b.append(AppendLink('[toot]', 'mtnoob.php?action=toot'));
			else if (txt.indexOf("Larva") != -1 || txt.indexOf("White Citadel") != -1)
				b.append(AppendLink('[woods]', 'woods.php'));
			else if (txt.indexOf("Smell a Rat") != -1)
				b.append(AppendLink('[tavern]', 'rats.php'));
			else if (txt.indexOf("Smell a Bat") != -1)
				b.append(AppendLink('[bat hole]', 'bathole.php'));
			else if (txt.indexOf("Wouldn't Be King") != -1 && txt.indexOf("slaying") == -1)
			{	var derr = AppendLink('[disguise]', "inv_equip.php?action=outfit&which=2&whichoutfit=4");
				b.append(derr);
				if (GetPref('backup') != "")
				{	
					$(derr).children('*:last')
					.attr('href', 'javascript:void(0);').click(function()
					{	GM_get(GetDomain() + '/inv_equip.php?action=customoutfit&which=2&outfitname=' + 
						GetPref('backup'),function(response)
						{	parent.frames[2].location = 'http://'+GetDomain() + 
						"/inv_equip.php?action=outfit&which=2&whichoutfit=4";
						}); return false;
						//event.stopPropagation(); event.preventDefault();
					});
				}
				b.append(AppendLink('[perfume]', 'inv_use.php?pwd=' +
					GetPwd() + '&which=3&whichitem=307'));
				b.append(AppendLink('[knob]', 'knob.php'));
			}
			else if (txt.indexOf("By Friar") != -1)
				b.append(AppendLink('[copse]', 'friars.php'));
			else if (txt.indexOf("Cyrpt") != -1)
				b.append(AppendLink('[cyrpt]', 'cyrpt.php'));
			else if (txt.indexOf("Trapper's") != -1)
				b.append(AppendLink('[trapz0r]', 'trapper.php'));
			else if (txt.indexOf(" LOL") != -1)
			{	b.append(AppendLink('[mountains]', 'mountains.php'));
				var derr = AppendLink('[swashbuckle]', "inv_equip.php?action=outfit&which=2&whichoutfit=9");
				b.append(derr);
				if (GetPref('backup') != "")
				{	$(derr).children('*:last')
					.attr('href', 'javascript:void(0);')
					.click(function(event)
					{	GM_get(GetDomain() + '/inv_equip.php' +
							'?action=customoutfit&which=2&outfitname=' + 
						GetPref('backup'), function(response)
						{	parent.frames[2].location = 'http://'+GetDomain() + 
						"/inv_equip.php?action=outfit&which=2&whichoutfit=9";
						}); return false;
						//event.stopPropagation(); event.preventDefault();
					});
				} b.append(AppendLink('[island]', 'island.php'));
			}
			else if (txt.indexOf("Garbage") != -1)
				b.append(AppendLink('[beanstalk]', 'beanstalk.php'));
			else if (txt.indexOf("Final Ultimate") != -1)
			{	b.html("The Ultimate Showdown Of Ultimate Destiny");
				b.append(AppendLink('[lair]', 'lair.php'));
			}	
			else if (txt.indexOf("Made of Meat") != -1)
			{	b.append(AppendLink('[untinker]',
					'town_right.php?place=untinker'));
				b.append(AppendLink('[plains]', 'plains.php'));
			}
			else if (txt.indexOf("Driven Crazy") != -1
					|| txt.indexOf("Wizard of Ego") != -1)
				b.append(AppendLink('[plains]', 'plains.php'));
			else if (txt.indexOf("Pyramid") != -1)
				b.append(AppendLink('[beach]', 'beach.php'));
			else if (txt.indexOf("Never Odd") != -1)
			{	b.append(AppendLink("[o 'nam]", 'inv_equip.php?pwd='+GetPwd()+
					"&which=2&slot=3&whichitem=486"));
				b.append(AppendLink('[palindome]', 
					'adventure.php?adventure=119'));
			} else if (txt.indexOf("Worship") != -1)
				b.append(AppendLink('[hidden city]', 'hiddencity.php'));
		});
	}
}


// ---------------------------------------------------
// DUNGEON: Count and display skeleton keys if needed.
// ---------------------------------------------------
else if (thePath == "/dungeons.php")
{	if (GetPref('zonespoil') == 1)
	{	$('img[src*=ddoom]').attr('title','ML: 36-45');
	}
}

// ----------------------------------------
// CHARPANE: Find HP, MP, do effects stuff.
// ----------------------------------------
else if (thePath == "/charpane.php")
{	var centerThing = document.getElementsByTagName('center');
	var imgs = document.getElementsByTagName('img');
	if (imgs.length == 0 || imgs == null) return;
	var compactMode = imgs[0].getAttribute('height') < 60;
	var bText = document.getElementsByTagName('b');
	var curHP, maxHP, curMP, maxMP, level, str, advcount, effLink;
	var oldcount = parseInt(GetData('advcount'));
	var effectsDB = {'5e788a':166,'173a9c':165,'15f811':295,'087638':189,
	'801f28':193,'9a12b9':301,'cb5404':58,'c69907':297,'a3c871':190,
	'9574fa':191,'9a6852':192,'d33505':3,'3e2eed':221,'cf4844':144,
	'a4a570':142,'61c56f':141,'ec5873':143,'94e112':140,'454d46':139,
	'ec7f2f':275,'91635b':331,'79289e':292};

	for (var i=1, len=centerThing.length; i<len; i++)
	{	var temp = centerThing[i];
		if (temp.firstChild.nodeName == 'B' || temp.firstChild.nodeName == 'A')
		{	centerThing = temp; break;
	}	}

	// Compact Mode
	if (compactMode)
	{	var mp=0;
		for (var i=4, len=bText.length; i<len; i++)
		{	str = bText[i].textContent;
			var spl = str.split('/');
			if(spl.length > 1)
			{	if (mp == 0)
				{	curHP = parseInt(spl[0]);
					maxHP = parseInt(spl[1]); mp++;
					bText[i].parentNode.previousSibling
						.addEventListener('contextmenu', RightClickHP,true);
				}else
				{	curMP = parseInt(spl[0]);
					maxMP = parseInt(spl[1]);
					bText[i].parentNode.previousSibling
						.addEventListener('contextmenu',RightClickMP,true);
					break;
		}	}	}
		advcount = parseInt($('a:contains(Adv):first').parent().next().text());


		// Retrieve stats and calculate level
		var a = $("td:contains('Mus:'):first").next().text();
		if(a != parseInt(a)) a = a.match(/\(([0-9]+)\)/)[1];
		var b = $("td:contains('Mys:'):first").next().text();
		if(b != parseInt(b)) b = b.match(/\(([0-9]+)\)/)[1];
		var c = $("td:contains('Mox:'):first").next().text();
		if(c != parseInt(c)) c = c.match(/\(([0-9]+)\)/)[1];
		level = (parseInt(Math.sqrt((Math.max(a,Math.max(b,c)))-4)))+1;
		
		SetData("currentHP", curHP); SetData("maxHP", maxHP);
		SetData("currentMP", curMP); SetData("maxMP", maxMP);
		SetData("level", level);
	}
	// Full Mode
	else
	{	var spans = document.getElementsByTagName('span');
		str = spans[0].textContent;
		var ind = str.indexOf("/");
		curHP = parseInt(str.substring(0, ind-1));
		maxHP = parseInt(str.substring(ind+2));
		str = spans[1].textContent;
		ind = str.indexOf("/");
		curMP = parseInt(str.substring(0, ind-1));
		maxMP = parseInt(str.substring(ind+2));
		advcount = parseInt($('img:gt(3)[src$=ass.gif]').parent().text());
		
		// Retrieve stats and calculate level
		var statblock = $("td:contains('Muscle:'):first")
			.parent().parent().get(0).childNodes;
		var a = statblock[0].childNodes[1].textContent;
		if(a != parseInt(a)) a = a.match(/\(([0-9]+)\)/)[1];
		var b = statblock[1].childNodes[1].textContent;
		if(b != parseInt(b)) b = b.match(/\(([0-9]+)\)/)[1];
		var c = statblock[2].childNodes[1].textContent;
		if(c != parseInt(c)) c = c.match(/\(([0-9]+)\)/)[1];
		level = (parseInt(Math.sqrt((Math.max(a,Math.max(b,c)))-4)))+1;
		
		SetData("currentHP", curHP); SetData("maxHP", maxHP);
		SetData("currentMP", curMP); SetData("maxMP", maxMP);
		SetData("level", level);

/* To get to level x, you must get (x − 1)2 + 4 of your main stat
level = (parseInt(Math.sqrt(stat-4)))+1; */

		// Change image link for costumes
		img = imgs[0];
		if (GetPref('backup'))
		{	img.parentNode.parentNode.nextSibling
				.setAttribute('id','outfitbkup');
			img.addEventListener('contextmenu',function(event)
			{	GM_get(GetDomain() + '/inv_equip.php?action=customoutfit&which=2&outfitname=' + 
				GetPref('backup'),function(response)
				{	var msg; if (response.indexOf("custom outfits") == -1) msg = "Outfit Backed Up";
					else msg = "Too Many Outfits";
					document.getElementById('outfitbkup').innerHTML +=
					"<span class='tiny'><center>"+msg+"</center></span>";
				}); event.stopPropagation(); event.preventDefault();
			}, true);
		}

		// Add SGEEA to Effects right-click
		/*
		for (i=4, len=bText.length; i<len; i++)
		{	if (bText[i].textContent.indexOf("Effects") != -1)
			{	bText[i].setAttribute("oncontextmenu",
				"top.mainpane.location.href='http://" + GetDomain() + "/uneffect.php'; return false;"); break;
		}	}
		*/
		var bEff = $('b:gt(4):contains(Effects)');
		if(bEff.length>0) bEff.get(0).setAttribute("oncontextmenu",
			"top.mainpane.location.href='http://" + GetDomain() + 
			"/uneffect.php'; return false;");
	}
	
	var hoboEffects = '';
	
	// Re-hydrate (0)
	var temphydr = parseInt(GetData('hydrate'));
	if(temphydr)
	{	if(advcount > oldcount)
		{	temphydr+=(advcount-oldcount);
			SetData('hydrate', temphydr);
		}
		if(advcount < temphydr) SetData('hydrate', false);
		else if(advcount == temphydr)
		{	if(compactMode) $('a[href=adventure.php?snarfblat=123]')
				.after(':<br /><a href="adventure.php?snarfblat=122' +
				'" style="color:red;" target="mainpane">Oasis</a>');
			else $('a[href=adventure.php?snarfblat=123]')
				.after('<br /><br /><a href="adventure.php?snarfblat=122" '+
			'target="mainpane" style="color:red;">Re-Ultrahydrate</a><br />')
				.parent().parent().attr('align','center');
	}	}
	SetData('advcount', advcount);
			
	// Poison and other un-effecty things
	SetData("phial",0);
	for (i=0,len=imgs.length; i<len; i++)
	{	img = imgs[i]; imgClick = img.getAttribute('onclick');
		var imgSrc = img.src.substr(img.src.lastIndexOf('/')+1);
		if (imgSrc == 'mp.gif')
			img.addEventListener('contextmenu', RightClickMP, false);
		else if (imgSrc == 'hp.gif')
			img.addEventListener('contextmenu', RightClickHP, false);
		if (imgClick == null || imgClick.substr(0,4) != "eff(") continue;
		var effName = img.parentNode.nextSibling.firstChild.innerHTML;
		
		
		if (imgSrc == 'poison.gif')
		{	img.parentNode.parentNode.setAttribute('name','poison');
			img.addEventListener('contextmenu', function(event)
			{	document.getElementsByName('poison')[0].childNodes[1].innerHTML = "<i><span style='font-size:10px;'>Un-un-unpoisoning...</span></i>";
				GM_get(GetDomain()+'/store.php?howmany=1&buying=Yep.&whichstore=m&whichitem=829&phash='+GetPwd(),
				function(result)
				{	if (result.indexOf('acquire') != -1)
						GM_get(GetDomain()+'/inv_use.php?which=1&whichitem=829&pwd='+GetPwd(),function(event)
						{	top.frames[1].location.reload(); });
				}); event.stopPropagation(); event.preventDefault();
			}, false);
		}
		else if (img.getAttribute('oncontextmenu') == null)
		{	// Bah, I'm not using strings that long. Six characters will do.
			var hydr = false;

			var effNum = effectsDB[imgClick.substr(5,6)];
			if (effNum == undefined) continue;
			switch (effNum)
			{	case 275: // hydrated
					var hydtxt = img.parentNode.nextSibling.textContent;
					if(/\(1\)/.test(hydtxt))
						SetData('hydrate', advcount-1);
					else if(/\(5\)/.test(hydtxt))
					{	if(compactMode) $('a[href=adventure.php?snarfblat=122]')
						.after(':<br /><a href="adventure.php?' +
						'snarfblat=123" target="mainpane">' +
						'Desert</a>');
						else $('a[href=adventure.php?snarfblat=122]')
						.after('<br /><br /><a href="adventure.php?' +
						'snarfblat=123" target="mainpane">' +
						'The Arid, Extra-Dry Desert</a><br />')
						.parent().parent().attr('align','center');
					} break;
				case 221: // chalk
					var func = "top.mainpane.location.href = 'http://";
					func += GetDomain() + "/inv_use.php?which=3&whichitem=1794&pwd="+GetPwd()+"'; return false;";
					img.setAttribute('oncontextmenu', func); break;
				//case 139: case 140: case 141: case 142: case 143: case 144:
				//	if(/\(1\)/.test(img.parentNode.nextSibling.textContent))
				//		SetData('snowcone', advcount-1);
					break;
				
				
				case 123: case 456: 
					hoboEffects += effNum + ',';
					break;
					
				case 189: case 190: case 191: case 192: case 193: SetData("phial", effNum);
				default:
					if (effName == undefined) effName = "";
					var func = "if (confirm('Uneffect "+effName+"?')) top.mainpane.location.href = 'http://";
					func += GetDomain() + "/uneffect.php?using=Yep.&whicheffect="+effNum+"&pwd="+GetPwd()+"';return false;";
					img.setAttribute('oncontextmenu', func); break;
		}	}
	}
	
	SetData('hoboeffects', hoboEffects);
	
	
	GetData('hoboeffects');
}


// -----------------------------------------------------------------
// SKILLPAGE: Autofill the proper "maxed-out" number in the use box.
// -----------------------------------------------------------------
if (thePath == "/skills.php")
{	var miniSkills = document.location.search.indexOf("tiny=1") != -1;
	var inputStuff = document.getElementsByTagName("input");
	var noDisable = GetPref('nodisable');

	// Remove stupid "The " from menu
	if (miniSkills)
	{	var sel = document.getElementsByTagName("select")[0];
		var json = "{";
		for (var i=0, len=sel.childNodes.length; i<len; i++)
		{	var s = sel.childNodes[i];
			s.setAttribute('style','max-width:180px;');
			var temp = s.value;
			// Store healing spells
			if (temp == 3012 || temp == 1010 || temp == 5011
			 || temp == 1007 || temp == 5007 || temp == 3009)
				json += ('"'+temp+'":1,');
			if (noDisable > 0 && sel.childNodes[i].getAttribute('disabled') != null)
			{	switch(parseInt(temp))
				{	case 3: case 16: case 17: case 4006: case 5014: case 3006: 
						break;
					default: sel.childNodes[i].removeAttribute('disabled'); 
						break;
			}	}
			if (temp < 6004 || sel.childNodes[i].tagName == "OPTGROUP") 
				continue;
			if (temp == 6004 || temp == 6006 || temp == 6007 || temp == 6008 
				|| temp == 6011 || temp == 6014 || temp == 6015)
				sel.childNodes[i].innerHTML = 
					sel.childNodes[i].innerHTML.substr(4);
		}
		if (json == '{') json = ''; else json += '}';
		SetData("hplist", json);
	}

	// Store list of restoratives we care about
	var vich = document.getElementsByName("whichitem");
	if (vich[0] != undefined)
	{	var json = "{"; var opt = vich[0].childNodes;
		for (i=0, len=opt.length; i<len; i++)
		{	var optval = opt[i].value; var temp;
			switch (parseInt(optval))
			{	case 344: case 1559: case 518: case 1658: case 1659: case 1660: case 2639:
					if (opt[i].innerHTML.indexOf('(') == -1) temp = 1;
					else
					{	temp = opt[i].innerHTML.split('(')[1];
						temp = temp.split(')')[0];
					} json += "\""+optval+"\":"+temp+","; break;
				default: break;
		}	}
		if (json == '{') json = ""; else json += "}"; 
		SetData("mplist",json);
	}

	for (var i=0, len=inputStuff.length; i<len; i++)
	{	var temp = inputStuff[i];
	
		// Attach maximum skills event handler
		if (temp.value == "1" && temp.name == "quantity")
		{	temp.addEventListener('keydown', function(event)
			{	if (event.which == 77 || event.which == 88 || event.which == 72) // 'm', 'x', 'h'
				{	var selectItem = document.getElementsByName('whichskill')[0];
					var cost = ParseSelectQuantity(selectItem, " ");
					var limit = SkillUseLimit(selectItem.options[selectItem.selectedIndex].value);
					var val = parseInt(GetData("currentMP") / cost);
					if (event.which == 72) val = parseInt(val/2); // half
					if (val > limit) this.value = limit;
					else this.value = val;
					event.stopPropagation(); event.preventDefault();
				} else if (ENABLE_QS_REFRESH == 1 && event.which == 82) self.location.reload();
			}, true);

			if (!miniSkills && temp.getAttribute('id') != 'skilltimes')
			{	MakeMaxButton(temp, function(event)
				{	var selectItem = document.getElementsByName('whichskill')[0];
					var box = document.getElementsByName('quantity')[0];
					var cost = ParseSelectQuantity(selectItem, " ");
					var limit = SkillUseLimit(selectItem.options[selectItem.selectedIndex].value);
					var val = parseInt(GetData("currentMP") / cost);
					if (val > limit) box.value = limit;
					else box.value = val;
				});
		}	}

		// Attach, um, other maximum skills event handler
		if (temp.value == "1" && temp.name == "bufftimes")
		{	var padding = document.createElement('div');
			padding.setAttribute('style','padding-top: 4px');
			temp.parentNode.insertBefore(padding, temp);
			temp.addEventListener('keydown', function(event)
			{	if (event.which == 77 || event.which == 88) // 'm', 'x'
				{	var selectItem = document.getElementsByName('whichskill')[1];
					var cost = ParseSelectQuantity(selectItem, " ");
					this.value = parseInt(GetData("currentMP") / cost);
					event.stopPropagation(); event.preventDefault();
			}	}, true);

			MakeMaxButton(temp, function(event)
			{	var selectItem = document.getElementsByName('whichskill')[1];
				var box = document.getElementsByName('bufftimes')[0];
				var cost = ParseSelectQuantity(selectItem, " ");
				box.value = parseInt(GetData("currentMP") / cost);
			});
		}

		// Attach maximum items event handler
		if (temp.value == "1" && temp.name == "itemquantity")
		{	temp.addEventListener('keyup', function(event)
			{	if (event.which == 77 || event.which == 88 || event.which == 72) // 77 = 'm', 88 = 'x', 72 = 'h'
				{	var selectItem = document.getElementsByName('whichitem')[0];
					var quant = ParseSelectQuantity(selectItem, ")");
					var index = selectItem.selectedIndex;
					var val = FindMaxQuantity(selectItem.options[index].value, quant, 0, GetPref('safemax'));
					if (event.which == 72) val = parseInt(val/2); // half
					this.value = val;
					event.stopPropagation(); event.preventDefault();
				} else if (ENABLE_QS_REFRESH == 1 && event.which == 82) self.location.reload();
			}, false);

			if (!miniSkills)
			{	MakeMaxButton(temp, function(event)
				{	var selectItem = document.getElementsByName('whichitem')[0];
					var index = selectItem.selectedIndex;
					var box = document.getElementsByName('itemquantity')[0];
					var quant = ParseSelectQuantity(selectItem, ")");
					box.value = FindMaxQuantity(selectItem.options[index].value, quant, 0, GetPref('safemax'));
				});
			}
			break;
		}
	}
}




// -----------------------------------------------------------------
// MULITUSE: Autofill the proper "maxed-out" number in the use box.
// -----------------------------------------------------------------
else if (thePath == "/multiuse.php")
{	var inputStuff = document.getElementsByTagName("input");
	for (var i=0, len=inputStuff.length; i<len; i++)
	{	var temp = inputStuff[i];
		if (temp.name == "quantity")
		{	temp.addEventListener('keydown', function(event)
			{	if (event.which == 77 || event.which == 88) // 'm', 'x'
				{	this.value = "";
					//event.stopPropagation(); event.preventDefault();
				}
			}, true);

			temp.addEventListener('keyup', function(event)
			{	if (event.which == 77 || event.which == 88) // 77 = 'm', 'x'
				{	var selectItem = document.getElementsByName("whichitem")[0];
					var quant = ParseSelectQuantity(selectItem, ")");
					var index = selectItem.selectedIndex;
					this.value = FindMaxQuantity(selectItem.options[index].value, quant, 1, GetPref('safemax'));
				} event.stopPropagation(); event.preventDefault();
			}, false);
			
			MakeMaxButton(temp, function(event)
			{	var box = document.getElementsByName('quantity')[0];
				var selectItem = document.getElementsByName('whichitem')[0];
				var quant = ParseSelectQuantity(selectItem, ")");
				var index = selectItem.selectedIndex;
				box.value = FindMaxQuantity(selectItem.options[index].value, quant, 1, GetPref('safemax'));
			});
			break;
		}
	}
}


// -------------------------
// MR. KLAW: Mr. Vanity Klaw
// -------------------------
else if (thePath == "/clan_rumpus.php")
{	if (document.location.search == "?action=click&spot=3&furni=3" && GetPref('klaw') == 1)
	{	var tr = $('table:first tr:first:contains(Results)');
		if (tr.length > 0)
		{	txt = tr.next().text();
			if (txt.indexOf("wisp of smoke") == -1 &&
				txt.indexOf("broken down") == -1 &&
				txt.indexOf("claw slowly descends") != -1)
			window.setTimeout('self.location = "http://' + GetDomain() +
				'/clan_rumpus.php?action=click&spot=3&furni=3";',500);
		}
	}
}


// -------------------------------------------------
// MANOR: If manor is not present, redirect to town.
// -------------------------------------------------
else if (thePath == "/manor.php")
{	if (document.body.textContent.length == 0)
		parent.frames[2].location = 'http://' + GetDomain() + '/town_right.php';
	else if (GetPref('zonespoil') == 1)
	{
		$('img').each(function()
		{	img = $(this);
			src = img.attr('src');
			if (src.indexOf("sm1.gif") != -1)
				img.attr('title','ML: 105-115');
			else if (src.indexOf("sm4.gif") != -1)
				img.attr('title','ML: 20');
			else if (src.indexOf("sm3.gif") != -1)
				img.attr('title','ML: 8-9');
			else if (src.indexOf("sm6.gif") != -1)
				img.attr('title','ML: 13-14');
			else if (src.indexOf("sm7.gif") != -1)
				img.attr('title','ML: 49-57');
			else if (src.indexOf("sm9.gif") != -1)
				img.attr('title','ML: 1');
		});
}	}
else if (thePath == "/manor3.php")
{
	$('select:first').change(function()
	{	var wineDB = {'2275':'278847834','2271':'163456429','2276':'147519269',
					'2273':'905945394','2272':'289748376','2274':'625138517'};
		var wine = this.childNodes[this.selectedIndex].value;
		if (wine > 0) GM_get(GetDomain() +
			"/desc_item.php?whichitem=" + wineDB[wine],
		function(txt)
		{	var num = txt.charAt(txt.indexOf("/glyph") + 6);
			// I know, I know, I should learn regexps.
			//GM_log(num, txt.match(/\/glyph[0-9]/), txt);

			var glyph = $('#daglyph');
			if(glyph.length == 0)
			{	$('select:first').parent().parent().append(
					$(document.createElement('img')).attr('id', 'daglyph'));
				glyph = $('#daglyph');
			}
			glyph.attr('src',
				'http://images.kingdomofloathing.com/' +
				'otherimages/manor/glyph'+num+'.gif');
		});
	});
	
	$('img[src*=lar2a]')
		.attr('title','Click to Equip Spectacles')
		.attr('border','0')
		.wrap('<a target="mainpane" href="inv_equip.php?pwd=' +
			GetPwd() + '&which=2&action=equip&whichitem=1916&slot=3"></a>');
}

else if (thePath == "/palinshelves.php")
{	for (i=0,len=document.images.length; i<len; i++)
	{	var img = document.images[i];
		var onclick = img.getAttribute("onclick");
		if (onclick != undefined && onclick.indexOf("desc") != -1)
			AddLinks(onclick, img.parentNode.parentNode, null, thePath);
	} var sels = document.getElementsByTagName('select');
	if (sels.length > 0)
	{	sels[0].value = 2259; sels[1].value = 2260;
		sels[2].value = 493; sels[3].value = 2261;	
}	}


// --------------------------------------------
// PYRAMID: Display ratchets and other goodies.
// --------------------------------------------
else if (thePath == "/pyramid.php")
{
	var ratch = document.createElement('a');
	ratch.innerHTML = '<font size="2">[use a ratchet]</font>'; 
	ratch.setAttribute('href',
		'inv_use.php?pwd=' + GetPwd() + '&which=3&whichitem=2540');
	var check = document.createElement('a');
	check.innerHTML = '<font size="2">[check inventory]</font>';
	check.setAttribute('href', '#');
	check.addEventListener('click', function(evt)
	{	this.innerHTML = '<font size="2">[checking...]</font>';
		GM_get(GetDomain()+'/inventory.php?which=3', function(response)
	{	var html = "You have ";
		var ratch = HasItem("tomb ratchet", response);
		if (response.indexOf("ancient bronze token") != -1)
			html = "an ancient bronze token";
		else if (response.indexOf("ancient bomb") != -1)
			html = "an ancient bomb";
		if (ratch > 0)
		{	if (html != "") html += " and ";
			html += ratch + " <a href='inv_use.php?pwd=";
			html += GetPwd() + "&which=3&whichitem=2540'>tomb ratchet";
			if (ratch > 1) html += "s"; html += "</a>";
		}
		if(html == "You have ") html = "Nothing special in inventory. (Sorry.)";
		if (document.location.pathname == "/pyramid.php")
		{	$('#pyr_inv').html('<br />'+html);
		}
	});}, false);

	var pyr = document.createElement('div');
	pyr.setAttribute('id', 'pyr_inv');
	pyr.setAttribute('style','text-align:center;');
	pyr.appendChild(ratch);
	pyr.appendChild(document.createTextNode(' - '));
	pyr.appendChild(check);
	var t = document.getElementsByTagName('table');
	t[t.length-2].parentNode.appendChild(pyr);

	if (GetPref('zonespoil') == 1)
	{	var msg = null; $('img').each(function()
		{	var ml = null; var src = this.getAttribute('src');
			if (src.indexOf("mid2") != -1) msg = 'ML: 162-176';
			else if (src.indexOf("mid3b") != -1) msg = 'ML: 162-180';
			else if (src.indexOf("mid4_5") != -1) msg = 'Keep Going...';
			else if (src.indexOf("mid4_2") != -1) msg = 'Keep Going...';
			else if (src.indexOf("mid4_4") != -1) msg = 'Phase 1: Token';
			else if (src.indexOf("mid4_3") != -1) msg = 'Phase 2: ???';
			else if (src.indexOf("mid4_1.") != -1) msg = 'Phase 3: Profit!';
			if(msg) this.setAttribute('title', msg);
		});
	}
}
else if (thePath == "/beach.php" && GetPref('zonespoil') == 1)
{	$('img').each(function()
	{	var ml = null; var src = this.getAttribute('src');
		if (src.indexOf("newbeach9") != -1) ml = '20-25';
		else if (src.indexOf("desert.gif") != -1) ml = '134-142';
		else if (src.indexOf("oasis") != -1) ml = '132-137';
		if(ml) this.setAttribute('title','ML: '+ml);
});	}


// -------------------
// LAIR: More linkies.
// -------------------
else if (thePath == "/lair1.php" && document.location.search == "?action=gates")
{	for (var i=0; i<3; i++)
	{	var p = document.getElementsByTagName('p')[i];
		var ptxt = p.textContent;
		if (ptxt.indexOf("Suc Rose") != -1) p.appendChild(AppendLink('[sugar rush]',
			'inv_use.php?pwd='+GetPwd()+'&which=3&whichitem=540'));
		else if (ptxt.indexOf("Machismo") != -1) p.appendChild(AppendLink('[meleegra]',
			'inv_use.php?pwd='+GetPwd()+'&which=3&whichitem=1158'));
		else if (ptxt.indexOf("Hidden") != -1) p.appendChild(AppendLink('[dod potion - object]','multiuse.php'));
	}
} else if (thePath == "/lair6.php")
{	var tabl = document.getElementsByTagName('table');
	img = document.images;
	if (tabl[1].innerHTML.indexOf("fying seri") != -1)
	{	tabl[1].parentNode.innerHTML +=
		"<br><a href='inv_equip.php?pwd="+GetPwd()+
		"&which=2&action=equip&whichitem=726'>Equip Shard</a>";
	}
	if (img.length == 2 && img[1].src.indexOf("gash.gif") != -1)
	{	var zif = img[1].parentNode.parentNode;
		zif.setAttribute('align','center');
		zif.innerHTML += "<br><br><a class='tiny' href='storage.php'>Hagnk's</a>";
}	}


// -------------------------------------------------
// FAMILIAR: Blackbird singing in the dead of night.
// -------------------------------------------------
else if (thePath == "/familiar.php")
{
	if($('img:first').attr('src').indexOf('blackbird2') != -1 ||
		$('input[value=59]').length > 0)
	{
		var fly = document.createElement('a');
		fly.innerHTML = '[fly, fly, fly]';
		fly.setAttribute('href', 'javascript:void(0);'); 
		$(fly).click(BlackBirdStuff);
		var p = document.createElement('p');
		p.setAttribute('style', 'font-weight:bold;');
		p.appendChild(document.createTextNode('Blackbird: '));
		p.appendChild(fly);
		$('form:first').parent('center').prepend(p);
	}
}


// -------------------------
// OCEAN: Lat/Long spoilers.
// -------------------------
else if (thePath == '/ocean.php')
{	$("input[name=lat]").parents("table:first").before(
	'<select onchange="var spl=this.value.split(\',\'); document.getElementsByName(\'lon\')[0].value = spl[0]; document.getElementsByName(\'lat\')[0].value = spl[1];">'+
	'<option> </option>'+
	'<option value="12,84">Muscle</option>'+
	'<option value="23,66">Mysticality</option>'+
	'<option value="22,62">Moxie</option>'+
	'</select>');
}


// ------------------------------
// CAMPGROUND: Telescope spoilers
// ------------------------------
else if (thePath == '/campground.php')
{
	var resultsBar = $('td:first:contains("Results")');
	if(GetPref("telescope") && resultsBar.length > 0
		&& resultsBar.parent().next().text()
		.indexOf('eyepiece of the telescope') != -1)
	{	resultsBar.parent().next().find('p').each(function(t)
		{	var txt = this.textContent;
			var snarf = false;
			if(txt.indexOf("carving of") != -1)
			{	var gate = txt.split("carving of ")[1];
				if(gate.indexOf("an armchair") != -1) 
					snarf = ['pygmy pygment','pigment',
					'hiddencity.php','hidden city'];
				else if(gate.indexOf("cowardly-l") != -1) 
					snarf = ['wussiness potion','potion5',
					'friars.php','deep fat friars'];
				else if(gate.indexOf("banana peel") != -1) 
					snarf = ['gremlin juice','potion6',
					'bigisland.php?place=junkyard','island'];
				else if(gate.indexOf("coiled viper") != -1) 
					snarf = ['adder bladder','bladder',
					'adventure.php?snarfblat=111','black forest'];
				else if(gate.indexOf("a rose") != -1) 
					snarf = ['Angry Farmer candy','rcandy',
					'adventure.php?snarfblat=82','castle in the sky'];
				else if(gate.indexOf("glum teenager") != -1) 
					snarf = ['thin black candle','bcandle',
					'adventure.php?snarfblat=82','castle in the sky'];
				else if(gate.indexOf("hedgehog") != -1) 
					snarf = ['super-spiky hair gel','balm',
					'adventure.php?snarfblat=81','fantasy airship'];
				else if(gate.indexOf("a raven") != -1) 
					snarf = ['Black No. 2','blackdye',
					'adventure.php?snarfblat=111','black forest'];
				else if(gate.indexOf("smiling man") != -1) 
					snarf = ['Mick\'s IcyVapoHotness Rub','balm',
					'adventure.php?snarfblat=82','castle in the sky'];
			} else if(txt.indexOf("baseball bat") != -1)
				snarf = ['baseball','baseball',
				'adventure.php?snarfblat=31','guano junction'];
			else if(txt.indexOf("made of Meat") != -1)
				snarf = ['meat vortex','vortex',
				'adventure.php?snarfblat=80','valley'];
			else if(txt.indexOf("amber waves") != -1)
				snarf = ['bronzed locust','locust1',
				'beach.php','beach'];
			else if(txt.indexOf("slimy eyestalk") != -1)
				snarf = ['fancy bath salts','potion4',
				'adventure.php?snarfblat=107','bathroom'];
			else if(txt.indexOf("flaming katana") != -1)
				snarf = ['frigid ninja star','ninjastars',
				'adventure.php?snarfblat=62','ninja snowmen lair'];
			else if(txt.indexOf("translucent wing") != -1)
				snarf = ['spider web','web',
				'adventure.php?snarfblat=112','sleazy back alley'];
			else if(txt.indexOf("looking tophat") != -1)
				snarf = ['sonar-in-a-biscuit','biscuit',
				'adventure.php?snarfblat=31','guano junction'];
			else if(txt.indexOf("of albumen") != -1)
				snarf = ['black pepper','blpepper',
				'adventure.php?snarfblat=111','black forest'];
			else if(txt.indexOf("white ear") != -1)
				snarf = ['pygmy blowgun','tinyblowgun',
				'hiddencity.php','hidden city'];
			else if(txt.indexOf("cowboy hat") != -1)
				snarf = ['chaos butterfly','butterfly',
				'adventure.php?snarfblat=82','castle in the sky'];
			else if(txt.indexOf("periscope") != -1)
				snarf = ['photoprotoneutron torpedo','torpedo',
				'adventure.php?snarfblat=81','fantasy airship'];
			else if(txt.indexOf("strange shadow") != -1)
				snarf = ['inkwell','inkwell',
				'adventure.php?snarfblat=104','haunted library'];
			else if(txt.indexOf("moonlight reflecting") != -1)
				snarf = ['can of hair spray','spraycan',
				'store.php?whichstore=m','demon market'];
			else if(txt.indexOf("wooden frame") != -1)
				snarf = ['disease','disease',
				'adventure.php?snarfblat=','zone'];
			else if(txt.indexOf("long coattails") != -1)
				snarf = ['knob goblin firecracker','firecrack',
				'adventure.php?snarfblat=114','knob outskirts'];
			else if(txt.indexOf("steam shooting") != -1)
				snarf = ['powdered organs','scpowder',
				'pyramid.php','pyramid'];
			else if(txt.indexOf("wooden frame") != -1)
				snarf = ['leftovers of indeterminate origin','leftovers',
				'adventure.php?snarfblat=102','haunted kitchen'];
			else if(txt.indexOf("bass guitar") != -1)
				snarf = ['mariachi G-string','string',
				'adventure.php?snarfblat=45','south of the border'];
			else if(txt.indexOf("North Pole") != -1)
				snarf = ['NG','ng',
				'adventure.php?snarfblat=80','valley'];
			else if(txt.indexOf("writing desk") != -1)
				snarf = ['plot hole','hole',
				'adventure.php?snarfblat=82','castle in the sky'];
			else if(txt.indexOf("cuticle") != -1)
				snarf = ['razor-sharp can lid','canlind',
				'adventure.php?snarfblat=113','haunted pantry'];
			else if(txt.indexOf("formidable stinger") != -1)
				snarf = ['tropical orchid','troporchid','shore.php','shore'];
			else if(txt.indexOf("pair of horns") != -1)
				snarf = ['barbed-wire fence','fence','shore.php','shore'];
			else if(txt.indexOf("wooden beam") != -1)
				snarf = ['stick of dynamite','dynamite','shore.php','shore'];
			
			if(snarf)
			{	var html =
'<div style="width:180px; font-size:12px; margin-left:10px; vertical-align:top; text-align:right; float:right;"><img style="float:right; margin:0 0 2px 5px;" src="http://images.kingdomofloathing.com/itemimages/'+snarf[1]+'.gif"/>' + '<b class="combatitem">' + snarf[0] + '</b><br/><a class="small" href="'+snarf[2]+'" target="mainpane">[' + snarf[3] + ']</a>';
				$(this).before(html+'</div>')
					.after('<div style="clear:both;"></div>');
			}
		});
		
		GM_get(GetDomain() + '/inventory.php?which=3', function(txt)
		{	$('b[class=combatitem]').each(function()
			{	if(txt.indexOf('>'+this.innerHTML) != -1)
					this.setAttribute('style','color:green;');
				else this.setAttribute('style','color:red;');
		});	});
}	}


// --------------------------------------------
// BASEMENT: Im in ur base, spoilin ur puzzlez.
// --------------------------------------------
else if (thePath == "/basement.php")
{	var bq = document.getElementsByTagName('blockquote')[0];
	var ins = document.getElementsByTagName('input');
	
	// Phial link
	for (var i=0, len=ins.length; i<len; i++)
	{	if (ins[i].type != 'submit') continue;
		var phial = 0; var temp = ins[i].value;
		var curphial = GetData("phial");
		if (temp.indexOf("Drunk's Drink") != -1) phial = 1638;
		else if (temp.indexOf("Pwn the Cone") != -1) phial = 1640;
		else if (temp.indexOf("Hold your nose") != -1) phial = 1641;
		else if (temp.indexOf("Typewriter,") != -1) phial = 1637;
		else if (temp.indexOf("Vamps") != -1) phial = 1639;
		if (phial > 0 && phial != (curphial+1448)) // In the biz, we call this this the Phial Phudge Phactor.
		{	var bq = document.getElementsByTagName('blockquote')[0];
			var aa = document.createElement('a');
			var phnames = {"1637":"Hot","1638":"Cold","1639":"Spooky","1640":"Stench","1641":"Sleaze"};
			aa.innerHTML = "Use " + phnames[phial] + " Phial"; aa.setAttribute('href','#');
			aa.setAttribute('id','usephial'); if (curphial > 0)
			aa.setAttribute('curphial',"/uneffect.php?using=Yep.&pwd=" + GetPwd() + "&whicheffect=" + curphial);
			aa.setAttribute('phial',"/inv_use.php?pwd=" + GetPwd() + "&which=3&whichitem=" + phial);
			aa.addEventListener('click',function(event)
			{	this.innerHTML = "Using Phial...";
				if (this.getAttribute('curphial'))
				GM_get(GetDomain() + this.getAttribute('curphial'),function(details)
				{	var ph = document.getElementById('usephial');
					if (details.indexOf("Effect removed.") != -1)
					GM_get(GetDomain() + ph.getAttribute('phial'),function(details2)
					{	var ph = document.getElementById('usephial'); ph.innerHTML = "";
						top.frames[1].location.reload();
				});	});
				else GM_get(GetDomain() + this.getAttribute('phial'),function(details)
				{	var ph = document.getElementById('usephial'); ph.innerHTML = "";
					top.frames[1].location.reload();
				}); event.stopPropagation(); event.preventDefault();
			}, false);
			var cr = document.createElement('center');
			bq.appendChild(cr); cr.appendChild(aa);
	}	}
	
	// OMGSPOILERS
	var lvl; var str = ""; var trs = document.getElementsByTagName('tr');
	for (var j=0; j<trs.length; j++)
	{	lvl = document.getElementsByTagName('tr')[j].textContent;
		if (lvl.charAt(0) == "F") break;
	}
	lvl = lvl.substring(lvl.indexOf("Level ")+6, lvl.length);
	var bim = document.images[document.images.length-1];
	var bimg = bim.getAttribute('src');
	bimg = bimg.substring(bimg.lastIndexOf("/")+1, bimg.length);

	switch(bimg)
	{	case "earbeast.gif":
			//str = "Monster Level: " + parseInt(Math.pow(lvl,1.4));
			break;
		case "document.gif": lvl = 4.5*Math.pow(lvl,1.4)+8;
			str = "Hot & Spooky: " + parseInt(lvl*.95) + " to " + parseInt(lvl*1.05) + " Damage";
			break;
		case "coldmarg.gif": lvl = 4.5*Math.pow(lvl,1.4)+8;
			str = "Cold & Sleaze: " + parseInt(lvl*.95) + " to " + parseInt(lvl*1.05) + " Damage";
			break;
		case "fratbong.gif": lvl = 4.5*Math.pow(lvl,1.4)+8;
			str = "Sleaze & Stench: " + parseInt(lvl*.95) + " to " + parseInt(lvl*1.05) + " Damage";
			break;
		case "onnastick.gif": lvl = 4.5*Math.pow(lvl,1.4)+8;
			str = "Stench & Hot: " + parseInt(lvl*.95) + " to " + parseInt(lvl*1.05) + " Damage";
			break;
		case "snowballbat.gif": lvl = 4.5*Math.pow(lvl,1.4)+8;
			str = "Spooky & Cold: " + parseInt(lvl*.95) + " to " + parseInt(lvl*1.05) + " Damage";
			break;
		case "sorority.gif": case "bigbaby.gif":
		case "pooltable.gif": case "goblinaxe.gif": lvl = Math.pow(lvl,1.4);
			str = "Moxie Needed: " + parseInt(lvl*.94) + " to " + parseInt(lvl*1.06);
			break;
		case "mops.gif": case "voodoo.gif": case "darkshards.gif": lvl = Math.pow(lvl,1.4);
			str = "Mysticality Needed: " + parseInt(lvl*.94) + " to " + parseInt(lvl*1.06);
			break;
		case "typewriters.gif": case "bigstatue.gif": case "bigmallet.gif": lvl = Math.pow(lvl,1.4);
			str = "Muscle Needed: " + parseInt(lvl*.94) + " to " + parseInt(lvl*1.06);
			break;
		case "haiku11.gif": lvl = Math.pow(lvl,1.4) * 1.67;
			str = "HP Needed: " + parseInt(lvl*.94) + " to " + parseInt(lvl*1.06);
			break;
		case "powderbox.gif": lvl = Math.pow(lvl,1.4) * 1.67;
			str = "MP Needed: " + parseInt(lvl*.94) + " to " + parseInt(lvl*1.06);
			break;
	}
	if (str != "") bim.parentNode.innerHTML += "<br><span class='small'><b>"+str+"</b></span>";
}


// -------------------------------------
// OTHER ZONES: Display ML on mouseover.
// -------------------------------------
else if (thePath == "/manor2.php" && GetPref('zonespoil') == 1)
{	$('img').each(function()
	{	var ml = null; var src = this.getAttribute('src');
		if (src.indexOf("sm2_1") != -1) ml = '147-173';
		else if (src.indexOf("sm2_7") != -1) ml = '76-100';
		else if (src.indexOf("sm2_5") != -1) ml = '110';
		if(ml) this.setAttribute('title','ML: '+ml);
});	}
else if (thePath == "/bathole.php" && GetPref('zonespoil') == 1)
{	$('img').each(function()
	{	var ml = null; var src = this.getAttribute('src');
		if (src.indexOf("batrat") != -1) ml = '23-25';
		else if (src.indexOf("batentry") != -1) ml = '11-16';
		else if (src.indexOf("junction") != -1) ml = '14-18';
		else if (src.indexOf("batbean") != -1) ml = '22';
		else if (src.indexOf("batboss") != -1) ml = '37';
		else if (src.indexOf("batrock") != -1)
			this.parentNode.href = "inv_use.php?pwd=" + GetPwd() + "&which=3&whichitem=563";
		if(ml) this.setAttribute('title','ML: '+ml);
});	}
else if (thePath == "/plains.php" && GetPref('zonespoil') == 1)
{	$('img').each(function()
	{	var ml = null; var src = this.getAttribute('src');
		if (src.indexOf("knob1") != -1) ml = '1-2';
		else if (src.indexOf("funhouse") != -1) ml = '14-20';
		else if (src.indexOf("knoll1") != -1) ml = '10-13';
		else if (src.indexOf("cemetary") != -1) ml = '18-20 / 53-59';
		else if (src.indexOf("palindome") != -1) ml = '116-135';
		else if (src.indexOf("garbagegrounds") != -1)
		{	$(this).wrap('<a href="inv_use.php?pwd=' + GetPwd() + 
				'&which=3&whichitem=186" border="0"></a>');
		} if(ml) this.setAttribute('title','ML: '+ml);
});	}
else if (thePath == "/knob.php" && GetPref('zonespoil') == 1)
{	$('img').each(function()
	{	var ml = null; var src = this.getAttribute('src');
		if (src.indexOf("knob3") != -1) ml = '1-2';
		else if (src.indexOf("knob4") != -1) ml = '20-22';
		else if (src.indexOf("knob6") != -1) ml = '24-32';
		else if (src.indexOf("knob7") != -1) ml = '26-32';
		else if (src.indexOf("knob9") != -1) ml = '57';
		if(ml) this.setAttribute('title','ML: '+ml);
});	}
else if (thePath == "/knob2.php" && GetPref('zonespoil') == 1)
{	$('img').each(function()
	{	var ml = null; var src = this.getAttribute('src');
		if (src.indexOf("knob22") != -1) ml = '40-45';
		else if (src.indexOf("knob23") != -1) ml = '50-56';
		else if (src.indexOf("knob26") != -1) ml = '60-66';
		else if (src.indexOf("knob29") != -1) ml = '70-76';
		else if (src.indexOf("shaft2") != -1) ml = '30';
		if(ml) this.setAttribute('title','ML: '+ml);
});	}
else if (thePath == "/cyrpt.php" && GetPref('zonespoil') == 1)
{	$('img').each(function()
	{	var ml = null; var src = this.getAttribute('src');
		if (src.indexOf("cyrpt4d") != -1) ml = '53-59 / 79';
		else if (src.indexOf("cyrpt6d") != -1) ml = '57-58 / 77';
		else if (src.indexOf("cyrpt7d") != -1) ml = '54-58 / 77';
		else if (src.indexOf("cyrpt9d") != -1) ml = '54 / 79';
		else if (src.indexOf("cyrpt2") != -1) ml = '91';
		if(ml) this.setAttribute('title','ML: '+ml);
});	}
else if (thePath == "/woods.php" && GetPref('zonespoil') == 1)
{	$('img').each(function()
	{	var ml = null; var src = this.getAttribute('src');
		if (src.indexOf("8bitdoor") != -1) ml = '20-25';
		else if (src.indexOf("kforest") != -1) ml = '123-133';
		else if (src.indexOf("hiddencity") != -1) ml = '?';
		else if (src.indexOf("forest") != -1) ml = '5';
		else if (src.indexOf("barrow") != -1) ml = '56-65';
		else if (src.indexOf("pen.") != -1) ml = '13-20';
		else if (src.indexOf("grove") != -1) ml = '34-36';
		else if (src.indexOf("tavern") != -1) ml = '10';
		if(ml) this.setAttribute('title','ML: '+ml);
});	}
else if (thePath == "/island.php" && GetPref('zonespoil') == 1)
{	$('img').each(function()
	{	var ml = null; var src = this.getAttribute('src');
		if (src.indexOf("island4") != -1) ml = '39-41';
		else if (src.indexOf("island6") != -1) ml = '39-41';
		else if (src.indexOf("cove") != -1) ml = '61-69';
		if(ml) this.setAttribute('title','ML: '+ml);
});	}
else if (thePath == "/cove.php" && GetPref('zonespoil') == 1)
{	$('img').each(function()
	{	var ml = null; var src = this.getAttribute('src');
		if (src.indexOf("cove3_2x1") != -1) ml = '80-83';
		else if (src.indexOf("cove3_3x1b") != -1) ml = '100';
		else if (src.indexOf("cove3_3x3b") != -1) ml = '120';
		else if (src.indexOf("cove3_5x2b") != -1) ml = '140';
		if(ml) this.setAttribute('title','ML: '+ml);
});	}
else if (thePath == "/friars.php" && GetPref('zonespoil') == 1)
{	$('img').each(function()
	{	var ml = null; var src = this.getAttribute('src');
		if (src.indexOf("neck") != -1) ml = '40-52';
		else if (src.indexOf("heart") != -1) ml = '42-50';
		else if (src.indexOf("elbow") != -1) ml = '44-48';
		if(ml) this.setAttribute('title','ML: '+ml);
});	}
else if (thePath == "/beanstalk.php" && GetPref('zonespoil') == 1)
{	$('img').each(function()
	{	var ml = null; var src = this.getAttribute('src');
		if (src.indexOf("hole") != -1) ml = '151-169';
		else if (src.indexOf("castle") != -1) ml = '125-146';
		else if (src.indexOf("airship") != -1) ml = '91-120';
		if(ml) this.setAttribute('title','ML: '+ml);
});	}
else if (thePath == "/fernruin.php" && GetPref('zonespoil') == 1)
{	$('img[src*=ruins_5]').attr('title','ML: 16-24');
}
else if (thePath == "/lair3.php" && GetPref('zonespoil') == 1)
{	var hedge = $('img[src*=hedgemaze.gif]');
	if(hedge.length>0)
	{	hedge.attr('title','ML: 186');
		$('img[src*=castletoptower.gif]')
			.before(AppendLink('[hedge puzzle]', 'hedgepuzzle.php'))
			.before('<br /><br />')
			.parent().attr('style','text-align:center;');
}	}
else if (thePath == "/mclargehuge.php" && GetPref('zonespoil') == 1)
{	$('img').each(function()
	{	var ml = null; var src = this.getAttribute('src');
		if (src.indexOf("omright") != -1) ml = '53-57';
		else if (src.indexOf("ommid") != -1) ml = '68';
		else if (src.indexOf("rightmid") != -1) ml = '71-76';
		else if (src.indexOf("leftmid") != -1) ml = '70-90';
		else if (src.indexOf("top") != -1) ml = '105 (?)';
		if(ml) this.setAttribute('title','ML: '+ml);
});	}
else if (thePath == "/canadia.php" && GetPref('zonespoil') == 1)
{	$('img').each(function()
	{	var ml = null; var src = this.getAttribute('src');
		if (src.indexOf("olcamp") != -1) ml = '1';
		else if (src.indexOf("lcamp") != -1) ml = '35-40';
		if(ml) this.setAttribute('title','ML: '+ml);
});	}
else if (thePath == "/bigisland.php" && GetPref('zonespoil') == 1)
{	$('img').each(function()
	{	var ml = null; var src = this.getAttribute('src');
		// Note to wiki peoples: more spoilers, plz
		if (src.indexOf("nunnery1") != -1) ml = '168';
		else if (src.indexOf("bmim24") != -1) ml = '330-375';
		else if (src.indexOf("bmim23") != -1) ml = '330-375';
		if(ml) this.setAttribute('title','ML: '+ml);
});	}


// -------------------------
// MTNOOB: Open letter! Yay!
// -------------------------
else if (thePath == "/mtnoob.php"
	&& document.location.search.indexOf("toot") != -1)
{	$('b:contains(Ralph)').append(
		AppendLink('[read]', 'inv_use.php?pwd='+
		GetPwd() + '&which=3&whichitem=1155'));
}
else if (thePath == "/showplayer.php" && 
	(document.location.search == "?who=53596" || document.location.search == "?who=73736"))
{	var img = document.getElementsByTagName('img'); for (var i=50, len=img.length; i<len; i++)
	{	var temp = img[i]; if (temp.width == 100 && temp.title.indexOf("Tiny") != -1)
		{	var nu = document.createElement('img'); nu.title = "Worst. Trophy. Ever.";
			nu.src = "http://images.kingdomofloathing.com/otherimages/trophy/not_wearing_any_pants.gif";
			temp.parentNode.insertBefore(nu,temp.nextSibling); break; 
}	}	}


// ---------------------------------------------------
// DESC_ITEM: Add use boxes/links to item descriptions
// ---------------------------------------------------
else if (thePath == "/desc_item.php" || thePath == "/desc_effect.php")
{	var b = $('b:first');
	b.wrap('<a href="http://kol.coldfront.net/thekolwiki/index.php/'+
	'Special:Search?search='+b.text().replace(/\s/g, '+')+'&go=Go" '+
	'target="_blank"></a>');
}


// --------------------------------------------------------------
// DEFAULTS: Pay no attention to the function behind the curtain.
// --------------------------------------------------------------
function Defaults(revert)
{
	if (revert == 0)
	{	if (GetPref('splitinv') == undefined)	SetPref('splitinv', 1);
		if (GetPref('splitquest') == undefined)	SetPref('splitquest', 1);
		if (GetPref('splitmsg') == undefined)	SetPref('splitmsg', 0);
		if (GetPref('outfitmenu') == undefined)	SetPref('outfitmenu', 1);
		if (GetPref('shortlinks') == undefined) SetPref('shortlinks', 3);
		if (GetPref('autoclear') == undefined)	SetPref('autoclear', 1);
		if (GetPref('toprow') == undefined) 	SetPref('toprow', 1);
		if (GetPref('safemax') == undefined) 	SetPref('safemax', 1);
		if (GetPref('moveqs') == undefined) 	SetPref('moveqs', 2);
		if (GetPref('logout') == undefined) 	SetPref('logout', 1);
		if (GetPref('zonespoil') == undefined) 	SetPref('zonespoil', 1);
		if (GetPref('klaw') == undefined) 		SetPref('klaw', 1);
		if (GetPref('quickequip') == undefined)	SetPref('quickequip', 0);
		if (GetPref('nodisable') == undefined)	SetPref('nodisable', 0);
		if (GetPref('docuse') == undefined) 	SetPref('docuse', 0);
		if (GetPref('swordguy') == undefined) 	SetPref('swordguy', 'skills.php');
		if (GetPref('backup') == undefined) 	SetPref('backup', 'Backup');
		if (GetPref('telescope') == undefined) 	SetPref('telescope', 1);
		if (GetPref('eatagain') == undefined) 	SetPref('eatagain', 1);
	
		if (GetPref('menu1link0') == undefined) SetPref('menu1link0', 'market;town_market.php');
		if (GetPref('menu1link1') == undefined) SetPref('menu1link1', 'hermit;hermit.php');
		if (GetPref('menu1link2') == undefined) SetPref('menu1link2', 'untinker;town_right.php?place=untinker');
		if (GetPref('menu1link3') == undefined) SetPref('menu1link3', 'mystic;mystic.php');
		if (GetPref('menu1link4') == undefined) SetPref('menu1link4', 'hunter;bhh.php');
		if (GetPref('menu1link5') == undefined) SetPref('menu1link5', 'guildstore');
		if (GetPref('menu1link6') == undefined) SetPref('menu1link6', 'demon;store.php?whichstore=m');
		if (GetPref('menu1link7') == undefined) SetPref('menu1link7', 'doc;galaktik.php');
		if (GetPref('menu1link8') == undefined) SetPref('menu1link8', 'lab;store.php?whichstore=g');
		if (GetPref('menu1link9') == undefined) SetPref('menu1link9', 'fruit;store.php?whichstore=h');
	
		if (GetPref('menu2link0') == undefined) SetPref('menu2link0', 'buy;searchmall.php');
		if (GetPref('menu2link1') == undefined) SetPref('menu2link1', 'trade;makeoffer.php');
		if (GetPref('menu2link2') == undefined) SetPref('menu2link2', 'sell;managestore.php');
		if (GetPref('menu2link3') == undefined) SetPref('menu2link3', 'collection;managecollection.php');
		if (GetPref('menu2link4') == undefined) SetPref('menu2link4', 'closet;closet.php');
		if (GetPref('menu2link5') == undefined) SetPref('menu2link5', 'hagnk\'s;storage.php');
		if (GetPref('menu2link6') == undefined) SetPref('menu2link6', 'attack;pvp.php');
		if (GetPref('menu2link7') == undefined) SetPref('menu2link7', 'wiki;http://www.thekolwiki.net');
		if (GetPref('menu2link8') == undefined) SetPref('menu2link8', 'calendar;http://noblesse-oblige.org/calendar');
		if (GetPref('menu2link9') == undefined) SetPref('menu2link9', ';');
	}
	else if (revert==1) // I'm definitely going to hell.
	{	SetPref('menu1link0', 'market;town_market.php');
		SetPref('menu1link1', 'hermit;hermit.php');
		SetPref('menu1link2', 'untinker;town_right.php?place=untinker');
		SetPref('menu1link3', 'mystic;mystic.php');
		SetPref('menu1link4', 'hunter;bhh.php');
		SetPref('menu1link5', 'guildstore');
		SetPref('menu1link6', 'demon;store.php?whichstore=m');
		SetPref('menu1link7', 'doc;galaktik.php');
		SetPref('menu1link8', 'lab;store.php?whichstore=g');
		SetPref('menu1link9', 'fruit;store.php?whichstore=h');
	} else if (revert==2)
	{	SetPref('menu2link0', 'buy;searchmall.php');
		SetPref('menu2link1', 'trade;makeoffer.php');
		SetPref('menu2link2', 'sell;managestore.php');
		SetPref('menu2link3', 'collection;managecollection.php');
		SetPref('menu2link4', 'closet;closet.php');
		SetPref('menu2link5', 'hagnk\'s;storage.php');
		SetPref('menu2link6', 'attack;pvp.php');
		SetPref('menu2link7', 'wiki;http://www.thekolwiki.net');
		SetPref('menu2link8', 'calendar;http://noblesse-oblige.org/calendar');
		SetPref('menu2link9', ';');
}	}


// --------------------------------------------
// TOPMENU: Add some new links to the top pane.
// --------------------------------------------
if (thePath == "/topmenu.php")
{
	// Test if quickskills is present. TODO: Find a cleaner way to do this.
	var quickSkills = 0, moveqs = 0;
	if ($('center:first').html().indexOf("javascript:skillsoff();") != -1)
	{	quickSkills = 1; moveqs = GetPref('moveqs');
	}

	// Set defaults if needed
	Defaults(0);

	var toprow1 = 0, toprow2, toprow3, front;
	var shorttop = 0, haveLair = 0, weBuildHere;
	if (GetPref('shortlinks') % 2 > 0)
	{	shorttop = 1;
		toprow1 = document.createElement('span');
		toprow2 = document.createElement('span');
		var front = GetPref('toprow');	
	}

	// Find all links and attach event handlers
	$('a').each(function(ind)
	{	var a = $(this);
		var txt = a.text();
		
		// prefs
		var splitinv = GetPref('splitinv');
		var splitquest = GetPref('splitquest');
		var splitmsg = GetPref('splitmsg');
		var logoutconf = GetPref('logout');

		// Map / Skills links
		if (ind == 0 && quickSkills == 1 && moveqs > 0)
			a.parent().attr('style','display:none;');
		

		// Yes I know this link only applies to a handful of people. I'm doing it anyway.
		if (txt == "devster panel") a.html("devster");

		// Lair
		if (txt == "lair") haveLair = 1;

		// Confirm logout
		if (txt == "log out" && logoutconf == 1)
		{	a.after('<a href="javascript:void(0);" onclick="this.' +
'previousSibling.innerHTML=\'logout\'; this.innerHTML=\'\';"></a>');
			a.replaceWith('<a target="_top" href="logout.php" ' +
'onclick="if(this.innerHTML!=\'sure?\') { this.blur(); ' +
'this.innerHTML=\'sure?\'; this.nextSibling.' +
'innerHTML=\' (nope)\'; return false; }">log out</a>');
		}

		if (txt == "plains")
		{	a.after(' <a href="manor.php" target="mainpane">manor</a>');

			if (parseInt(GetData('level')) > 9)
				a.after(' <a href="beanstalk.php" target="mainpane">stalk</a>');

			// This is as good a place as any; get span for adding links later.
			weBuildHere = a.parent().get(0);
			weBuildHere.parentNode.setAttribute('nowrap','nowrap');
		}

		// Remove last row, which will be manually re-added.
		if (shorttop)
		{	if (txt == "documentation" || txt == "report bug"
			||  txt == "store" ||  txt == "donate" ||  txt == "forums")
			{	a.html("");
				a.get(0).nextSibling.textContent = "";
			} if(txt.indexOf("radio") != -1) a.html("");
		}

		// Inventory
		if (txt == "inventory" && splitinv == 1)
		{	a.html('ory').attr('href','inventory.php?which=3')
				.before('<a href="inventory.php?which=1" '+
					'target="mainpane">inv</a>')
				.before('<a href="inventory.php?which=2" ' +
					'target="mainpane">ent</a>');
		}

		// Quests
		if (txt == "quests" && splitquest == 1)
		{	a.html('sts').attr('href','questlog.php?which=4')
				.before('<a href="questlog.php?which=1" '+
					'target="mainpane">que</a>');
		}

		// Messages
		if (txt == "messages" && splitmsg > 0)
		{	switch (splitmsg)
			{	case 2: a.attr('href','messages.php?box=Outbox'); break;
				case 3: a.attr('href','messages.php?box=Saved'); break;
				case 4: a.attr('href','messages.php?box=PvP'); break;
				default: a.attr('href','sendmessage.php');
			}
			a.html('ages').before('<a href="messages.php" ' +
				'target="mainpane">mess</a>');
		}

		// Ass-metric link. Surround it in a named span for easy hiding.
		if (moveqs > 0 && txt == "Asymmetric Publications, LLC")
		{	a.parent().wrapAll('<span name="assy" id="menus"></span>');
		}
	});
	
	// Attach skills link to Sword and Martini Guy
	var swordGuy = $('img:first[src*=smallleft]');
	var swordGuyURL = GetPref('swordguy');
	if (swordGuyURL != '' && swordGuy.length > 0)
	{	var guy = document.createElement('a');
		if (swordGuyURL.indexOf("http://") != -1)  
			guy.setAttribute('target','_blank');
		else guy.setAttribute('target','mainpane');
		guy.setAttribute('href', swordGuyURL);
		swordGuy.attr('border',0);
		swordGuy.wrap(guy);
		
		swordGuy.get(0).addEventListener('contextmenu', function(event)
		{	var nuhref = prompt('Where would you like this link to point?', 
				GetPref('swordguy'));
			var ln = this.parentNode;
			if(nuhref)
			{	SetPref('swordguy', nuhref);
				swordGuy = nuhref;
			}
			ln.setAttribute('href', nuhref);
			if (nuhref.indexOf("http://") != -1)  
				ln.setAttribute('target','_blank');
			else ln.setAttribute('target','mainpane');
			event.preventDefault(); event.stopPropagation();
			return false;
		}, false);

		swordGuy = swordGuy.parent().get(0); // For use later
	}
	
	// Add rows of links
	if (shorttop)
	{	var a;
	
		toprow1.setAttribute("name","toprow1");
		if (front != 1) toprow1.setAttribute("style","display: none;");

		for (var j=0; j<10; j++)
		{	var zoiks = GetPref('menu1link'+j); var tarjay = 'mainpane';
			var zplit = zoiks.split(';');
			if (zplit[0] == "guildstore")
			{	AddTopLink(toprow1, 'mainpane', 'fnord', '', 1);
				AddTopLink(toprow1, 'mainpane', 'smeg', '', 1);
				GM_get(GetDomain()+'/store.php?whichstore=2', function(t)
				{	if(t.length>10 && t.indexOf('Only Pastamancers') == -1)
						$('a[href=fnord]')
						.attr('href', 'store.php?whichstore=2')
						.html('gouda');
				});
				GM_get(GetDomain()+'/store.php?whichstore=3', function(t)
				{	if(t.length>10 && t.indexOf('Only Seal C') == -1)
						$('a[href=smeg]')
						.attr('href', 'store.php?whichstore=3')
						.html('smack');
				})
				
			} else if (zoiks != "")
			{	if (zoiks.indexOf("http://") != -1) tarjay = '_blank';
				AddTopLink(toprow1, tarjay, zplit[1], zplit[0], 1);
			} else break;
		}

		toprow1.appendChild(document.createElement('br'));
		var poop = document.createElement('span'); poop.innerHTML = "&nbsp;";
		toprow1.appendChild(poop);
		AddTopLink(toprow1, 'mainpane', 'multiuse.php', 'multi-use', 1);
	AddTopLink(toprow1, 'mainpane', 'craft.php?mode=combine', 'combine', 1);
	AddTopLink(toprow1, 'mainpane', 'sellstuff.php', 'sell', 1);
	AddTopLink(toprow1, 'mainpane', 'craft.php?mode=cook', 'cook', 1);
	AddTopLink(toprow1, 'mainpane', 'craft.php?mode=cocktail', 'mix', 1);
	AddTopLink(toprow1, 'mainpane', 'craft.php?mode=smith', 'smith', 1);
	AddTopLink(toprow1, 'mainpane', 'council.php', 'council', 1);
	AddTopLink(toprow1, 'mainpane', 'guild.php', 'guild', 1);
		if (haveLair == 1 && GetData('level') == 11)
			AddTopLink(toprow1, 'mainpane', 'lair2.php?action=door', 'door', 1);
		a = document.createElement('a'); a.innerHTML = "more"; a.setAttribute('href','#');
		a.addEventListener('click', function(event)
		{	var tr1 = document.getElementsByName("toprow1")[0];
			var tr2 = document.getElementsByName("toprow2")[0];
			tr1.style.display = "none"; tr2.style.display = "inline";
			SetPref('toprow', 2);
		}, true); toprow1.appendChild(a);
						
		toprow2.setAttribute("name","toprow2");
		if (front != 2) toprow2.setAttribute("style","display: none;");

		for (var j=0; j<10; j++)
		{	var zoiks = GetPref('menu2link'+j); var tarjay = 'mainpane';
			if (zoiks != "")
			{	if (zoiks.indexOf("http://") != -1 || zoiks.indexOf("searchplayer") != -1) tarjay = '_blank';
				AddTopLink(toprow2, tarjay, zoiks.split(';')[1], zoiks.split(';')[0], 1);
			} else break;
		}

		toprow2.appendChild(document.createElement('br'));
		AddTopLink(toprow2, 'mainpane', 'doc.php?topic=home', 'documentation', 1);
		AddTopLink(toprow2, 'mainpane', 'adminmail.php', 'report bug', 1);
		AddTopLink(toprow2, '_blank', 'http://store.asymmetric.net', 'store', 1);
		AddTopLink(toprow2, '_blank', 'donatepopup.php', 'donate', 1);
		AddTopLink(toprow2, '_blank', 'http://forums.kingdomofloathing.com', 'forums', 1);
		AddTopLink(toprow2, '_blank', 'radio.php', 'radio', 1);
		a = document.createElement('a'); a.innerHTML = "more"; a.setAttribute('href','#');
		a.addEventListener('click', function(event)
		{	var tr2 = document.getElementsByName("toprow2")[0];
			var tr1 = document.getElementsByName("toprow1")[0];
			tr2.style.display = "none"; tr1.style.display = "inline";
			SetPref('toprow', 1);
		}, true); toprow2.appendChild(a);
	
		// Actually add the stuffy-stuff to the span we grabbed earlier
		weBuildHere.appendChild(toprow1);
		weBuildHere.appendChild(toprow2);
		
		GoGoGadgetPlunger();
	}

	// Move Quick-Skills
	if (moveqs > 0)
	{	weBuildHere.setAttribute('id','menus2');
		var assy = document.getElementsByName('assy')[0];
		var iframe = document.getElementsByName('skillpane')[0];
		iframe.removeAttribute('style');
		assy.setAttribute('style','display: none;');
		if (moveqs == 1)
		{	var tr = document.getElementsByTagName('tr')[0];
			tr.insertBefore(assy.parentNode, swordGuy.parentNode);
		} assy.parentNode.appendChild(iframe.parentNode);
		iframe.parentNode.parentNode.setAttribute('style', 'padding-top: 2px;');
//		iframe.parentNode.parentNode.setAttribute('style', 'padding-top: 4px; width: 300px;');
		//iframe.setAttribute('width', 300);
		// I'm open to suggestions on a better way to do this. EDIT: this, maybe?
		document.location = document.links[1];
		//iframe.contentWindow.setTimeout('self.location = "skills.php?tiny=1";',200);
	}
}


// ------------------------------------------------
// ADDTOPOPTION: Add a menu option in compact mode.
// ------------------------------------------------
function AddTopOption(name, url, select, putBefore)
{	var option = document.createElement('option');
	option.innerHTML = name; option.value = url;
	if (putBefore == 0) select.appendChild(option);
	else select.insertBefore(option, putBefore);
}


// --------------------------------------------
// COMPACTMENU: Add options to menus and stuff.
// --------------------------------------------
if (thePath == "/compactmenu.php")
{
	var selectItem, links, oonTD, linkTD;
	var quickSkills = 0, moveqs = 0;

	// Set defaults if needed
	Defaults(0);
	
	moveqs = GetPref('moveqs');
	links = document.getElementsByTagName('a');
	for (var i=0, len=links.length; i<len; i++)
	{	var temp = links[i];
		
		if (temp.text.indexOf("menu") != -1)
		{	quickSkills = 1;
			if (moveqs > 0)
			{	temp.innerHTML = "";
				linkTD = temp.parentNode;
		}	}
		
		if (temp.innerHTML.indexOf("20") != -1)
		{	if (moveqs > 0 && quickSkills > 0)
			{	oonTD = temp.parentNode;
				temp.innerHTML = '';
		
				var iframe = document.getElementsByName('skillpane')[0];
				var menuspan = document.getElementsByName('menus')[0];
				linkTD.nextSibling.childNodes[1].setAttribute('id','menus2');
				linkTD.nextSibling.setAttribute('style','width:100%;');
				oonTD.appendChild(iframe.parentNode);
				if (moveqs == 1) // Left
					linkTD.parentNode.insertBefore(oonTD, linkTD.nextSibling);
				else // Right
					oonTD.parentNode.insertBefore(linkTD, oonTD);
								
				// Remove Moons label. Sneakily.
				temp = document.getElementsByTagName('b')[0];
				if (temp.innerHTML.indexOf('Moons') != -1)
				{	var umspan = document.createElement('span');
					temp.parentNode.setAttribute('style','display:none;');
					umspan.setAttribute('id','menus');
					temp.parentNode.appendChild(umspan);
					umspan.appendChild(temp);
				}
				iframe.contentWindow.setTimeout('self.location = "skills.php?tiny=1";',50);
		}	}
	}
	
	// Camera One!
	if (GetPref('shortlinks') % 2 > 0 || GetPref('splitinv') == 1)
	{	selectItem = document.getElementsByTagName('select')[0];
		//selectItem.setAttribute('style','font-size: 9pt;');
		selectItem.parentNode.parentNode.setAttribute('nowrap','nowrap');
		for (var i=0; i<selectItem.options.length; i++)
		{	if (GetPref('splitinv') == 1 && selectItem.options[i].innerHTML == "Inventory")
			{	selectItem.options[i].innerHTML = "Consumables";
				selectItem.options[i].value = "inventory.php?which=1";
				AddTopOption("Equipment", "inventory.php?which=2", selectItem, selectItem.options[i+1]);
				AddTopOption("Miscellaneous", "inventory.php?which=3", selectItem, selectItem.options[i+2]);
				if (GetPref('shortlinks') % 2 == 0) break;
			}
			if (selectItem.options[i].innerHTML == "Account Menu")
			{	AddTopOption("-", "nothing", selectItem, selectItem.options[i+1]);
				AddTopOption("Multi-Use", "multiuse.php", selectItem, selectItem.options[i+2]);
				AddTopOption("Combine", "craft.php?mode=combine", selectItem, selectItem.options[i+3]);
				AddTopOption("Sell Items", "sellstuff.php", selectItem, selectItem.options[i+4]);
				AddTopOption("Cook Food", "craft.php?mode=cook", selectItem, selectItem.options[i+5]);
				AddTopOption("Mix Drinks", "craft.php?mode=cocktail", selectItem, selectItem.options[i+6]);
				AddTopOption("Smith/Smash", "craft.php?mode=smith", selectItem, selectItem.options[i+7]);
				AddTopOption("Closet", "closet.php", selectItem, selectItem.options[i+8]);
				AddTopOption("-", "nothing", selectItem, selectItem.options[i+9]);
				GM_get(GetDomain() + "/knoll.php",function(response)
				{	if (response == "") return;
					var s = document.getElementsByTagName('select')[0];
					for (var i=0; i<s.options.length; i++)
					{	if (s.options[i].value == "craft.php?mode=combine")
						{	s.options[i].value = "knoll.php?place=paster"; break;
				}	}	});
			}
			if (GetPref('logout') == 1 && selectItem.options[i].innerHTML == "Log Out")
			{	selectItem.options[i].value = "logout";
				selectItem.setAttribute('onchange', 'if (document.navform1.loc.value!="logout") goloc(); ' +
					'else if (confirm("Log out?")) parent.frames[2].location = "logout.php"; ' +
					'else this.selectedIndex=0;');
			}
	}	}	

	// Camera Two!
	if (GetPref('shortlinks') % 2 > 0)
	{	selectItem = document.getElementsByTagName('select')[1];
		selectItem.parentNode.parentNode.setAttribute('nowrap','nowrap');
		for (var i=0, len = selectItem.options.length; i<len; i++)
		{	if (selectItem.options[i].innerHTML.indexOf("Nearby Plains") != -1)
			{	AddTopOption("The Beanstalk", "beanstalk.php", selectItem, selectItem.options[i+1]);
				AddTopOption("Spookyraven Manor", "manor.php", selectItem, selectItem.options[i+2]);
				break;
		}	}

		AddTopOption("-", "nothing", selectItem, 0);
		AddTopOption("Council of Loathing", "council.php", selectItem, 0);
		AddTopOption("Class Guild", "guild.php", selectItem, 0);
		AddTopOption("Market Square", "town_market.php", selectItem, 0);
		AddTopOption("Hermitage", "hermit.php", selectItem, 0);
		AddTopOption("Untinker", "town_right.php?place=untinker", selectItem, 0);
		AddTopOption("Mystic Crackpot", "mystic.php", selectItem, 0);
		AddTopOption("Bounty Hunter", "town_wrong.php?place=bountyhunter", selectItem, 0);
		AddTopOption("Gouda's Grocery", "store.php?whichstore=2", selectItem, 0);
		AddTopOption("Smacketeria", "store.php?whichstore=3", selectItem, 0);
		AddTopOption("Demon Market", "store.php?whichstore=m", selectItem, 0);
		AddTopOption("Doc Galaktik", "galaktik.php", selectItem, 0);
		AddTopOption("Laboratory", "store.php?whichstore=g", selectItem, 0);
		AddTopOption("Hippy Store", "store.php?whichstore=h", selectItem, 0);
	}
}


// -----------------------------------
// MAKEOPTION: Does what it says. Yup.
// -----------------------------------
function MakeOption(text, num, pref, opt1, opt2)
{
	var table = document.createElement('table');
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	var prefVal = GetPref(pref);
	var select;
	
	if (num == -2) td.innerHTML = "<input style='font-size:11px;width:70px;' name=" + pref + 
	"tag maxlength=16 type=text class=text value=" + text + ">";
	else td.innerHTML = "<span style='font-size:12px;padding-right:3px;'>" + text + "</span>";
	if (num == -1) td.setAttribute('width','50%');
	else if (num == -2) td.setAttribute('width','30%');
	else td.setAttribute('width','65%');
	td.setAttribute('align','right');
	tr.appendChild(td);
	
	td = document.createElement('td');
	if (num < 0) // Man, am I sneaky.
	{	select = document.createElement('input');
		select.setAttribute('type','text');
		select.setAttribute('class','text');
		select.setAttribute('maxlength','256');
		if (num == -2)
		{	var preflink = prefVal.split(';')[1];
			if (preflink != undefined) select.setAttribute('value', preflink);
			else select.setAttribute('value', '');
		} else select.setAttribute('value', prefVal);
	} else
	{	select = document.createElement('select');
		for (var i=0; i<num; i++)
		{	var option = document.createElement('option');
			if (i == prefVal) option.setAttribute('selected',1);
			option.value = i; select.appendChild(option);
			if (i == 0 && opt1 != 0) option.innerHTML = opt1;
			if (i == 1 && opt2 != 0) option.innerHTML = opt2;
	}	}
	select.setAttribute('style','width:95%;font-size:11px;');
	select.setAttribute('name',pref);
	if (num > -2) select.addEventListener('change', function(event)
	{	if (this.selectedIndex != undefined)
			 SetPref(this.name, this.selectedIndex);
		else SetPref(this.name, this.value);
		switch(this.name)
		{	case 'shortlinks': case 'splitinv':
			case 'moveqs': case 'swordguy':
			case 'logout': case 'splitquest':
			case 'splitmsg':
				top.frames[0].location.reload(); break;
		} }, true);
	td.appendChild(select);
	tr.appendChild(td);
	table.setAttribute('width','280');
	table.setAttribute('align','center');
	table.appendChild(tr);

	return table;
}


// -------------------------------------
// ACCOUNT: Preference-Type Thing-Thing.
// -------------------------------------
if (thePath == "/account.php")
{	Defaults(0);
	var tables = document.getElementsByTagName('table');
	for (var i=0; i < tables.length; i++)
	{	if (tables[i].rows[0].textContent == "Interface Options")
		{	var choice, select;
			var bigSpan = document.createElement('span');
			var prefSpan = document.createElement('span');
			bigSpan.setAttribute('id','scriptpref');
			bigSpan.setAttribute('style','display: none');
			bigSpan.appendChild(document.createElement('hr'));

			var spanSpan = document.createElement('span');
			var clicky1 = 'javascript:getObj("scriptpref1").setAttribute("style","");' +
			'javascript:getObj("scriptpref2").setAttribute("style","display:none;");' +
			'javascript:getObj("scriptpref3").setAttribute("style","display:none;");';
			var clicky2 = 'javascript:getObj("scriptpref1").setAttribute("style","display:none;");' +
			'javascript:getObj("scriptpref2").setAttribute("style","");' +
			'javascript:getObj("scriptpref3").setAttribute("style","display:none;");';
			var clicky3 = 'javascript:getObj("scriptpref1").setAttribute("style","display:none;");' +
			'javascript:getObj("scriptpref2").setAttribute("style","display:none;");' +
			'javascript:getObj("scriptpref3").setAttribute("style","");';
			var clicky4 = 'javascript:getObj("scriptpref1").setAttribute("style","display:none;");' +
			'javascript:getObj("scriptpref2").setAttribute("style","display:none;");' +
			'javascript:getObj("scriptpref3").setAttribute("style","display:none;");';
			spanSpan.innerHTML = "Toggles: <a href='" + clicky1 +
			"'>[tweak]</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Customize Links: " +
			"<a href='" + clicky2 + "'>[one]</a> - <a href='" + clicky3 + "'>[two]</a>";
			spanSpan.setAttribute('style','font-size:12px;text-align:center;');
			bigSpan.appendChild(spanSpan);
			bigSpan.appendChild(document.createElement('hr'));

			prefSpan.setAttribute('id','scriptpref1');
			bigSpan.appendChild(prefSpan);

			choice = MakeOption("Clicking Number Boxes: ", 3, 'autoclear', "Does Zilch", "Clears");
			select = choice.firstChild.cells[1].firstChild;
			select.options[2].innerHTML = "Highlights";
			prefSpan.appendChild(choice);

			choice = MakeOption("Max HP/MP Calculation: ", 3, 'safemax', "Average", "Safe");
			select = choice.firstChild.cells[1].firstChild;
			select.options[2].innerHTML = "Really Safe";
			prefSpan.appendChild(choice);

			choice = MakeOption("Extra Shortcut Links: ", 4, 'shortlinks', "Off", "Top Only");
			select = choice.firstChild.cells[1].firstChild;
			select.options[2].innerHTML = "Main Only";
			select.options[3].innerHTML = "On";
			prefSpan.appendChild(choice);

			choice = MakeOption("Omnipresent Quick-Skills: ", 3, 'moveqs', "Off", "On (Left)");
			select = choice.firstChild.cells[1].firstChild;
			select.options[2].innerHTML = "On (Right)";
			prefSpan.appendChild(choice);

			prefSpan.appendChild(MakeOption("Quick-Equip: ", 2, 'quickequip', "Off", "On"));
			prefSpan.appendChild(MakeOption("Split Inventory Link: ", 2, 'splitinv', "Off", "On"));
			prefSpan.appendChild(MakeOption("Split Quest Link: ", 2, 'splitquest', "Off", "On"));
			choice = MakeOption("Split Messages Link: ", 5, 'splitmsg', "Off", "New Message");
			select = choice.firstChild.cells[1].firstChild;
			select.options[2].innerHTML = "Outbox";
			select.options[3].innerHTML = "Saved";
			select.options[4].innerHTML = "PvP";
			prefSpan.appendChild(choice);
			
			prefSpan.appendChild(MakeOption("Monster Level Spoiler: ", 2, 'zonespoil', "Off", "On"));
			prefSpan.appendChild(MakeOption("Never Grey Out Skills: ", 2, 'nodisable', "Off", "On"));
			prefSpan.appendChild(MakeOption("1-Klick Klaw: ", 2, 'klaw', "Off", "On"));
			prefSpan.appendChild(MakeOption("Logout Confirmation: ", 2, 'logout', "Off", "On"));
			prefSpan.appendChild(MakeOption("Telescope Spoilers: ", 2, 'telescope', "Off", "On"));
			prefSpan.appendChild(MakeOption("Eat/Drink Again: ", 2, 'eatagain', "Off", "On"));
			prefSpan.appendChild(MakeOption("Sword-Guy Link: ", -1, 'swordguy', 0, 0));
			prefSpan.appendChild(MakeOption("Backup Outfit Name: ", -1, 'backup', 0, 0));

			var menu1Span = document.createElement('span');
			var menu2Span = document.createElement('span');
			menu1Span.setAttribute('id','scriptpref2');
			menu1Span.setAttribute('style','display: none');
			menu2Span.setAttribute('id','scriptpref3');
			menu2Span.setAttribute('style','display: none');
			
			// Customized Links, Take 1
			for (var j=0; j<10; j++)
			{	var menutxt = GetPref('menu1link'+j);
				if (menutxt != undefined) menutxt = menutxt.split(';')[0];
				else menutxt = "";
				menu1Span.appendChild(MakeOption(menutxt, -2, 'menu1link'+j), 0, 0);
			}
			select = document.createElement('a');
			select.innerHTML = 'Restore Defaults'; select.href = '#';
			select.setAttribute('class','tiny');
			select.addEventListener('click',function(event)
			{	event.stopPropagation(); event.preventDefault();
				if (confirm("Restore default menu options? (Just double-checking.)") == false) return;
				Defaults(1);
				for (var i=0; i<10; i++)
				{	var tag = document.getElementsByName('menu1link'+i+'tag')[0];
					var link = document.getElementsByName('menu1link'+i)[0];
					tag.value = GetPref('menu1link'+i).split(';')[0];
					if (tag.value == "undefined") tag.value = "";
					link.value = GetPref('menu1link'+i).split(';')[1];
					if (link.value == "undefined") link.value = "";
				} top.frames[0].location.reload();
			}, true);
			choice = document.createElement('input');
			choice.type = 'submit'; choice.setAttribute('class','button');
			choice.value = 'Apply'; choice.href = '#';
			choice.addEventListener('click',function(event)
			{	event.stopPropagation(); event.preventDefault();
				for (var i=0; i<10; i++)
				{	var tag = document.getElementsByName('menu1link'+i+'tag')[0].value;
					var link = document.getElementsByName('menu1link'+i)[0].value;
					if (tag != undefined && link != undefined && tag != "")
						SetPref('menu1link'+i,tag+';'+link);
					else SetPref('menu1link'+i,';');
				} top.frames[0].location.reload();
			}, true);
			menu1Span.appendChild(document.createElement('center'));
			menu1Span.lastChild.appendChild(select);
			menu1Span.lastChild.appendChild(document.createElement('br'));
			menu1Span.lastChild.appendChild(document.createElement('br'));
			menu1Span.lastChild.appendChild(choice);
			
			// Customized Links, Take 2
			for (var j=0; j<10; j++)
			{	var menutxt = GetPref('menu2link'+j);
				if (menutxt != undefined) menutxt = menutxt.split(';')[0];
				else menutxt = "";
				menu2Span.appendChild(MakeOption(menutxt, -2, 'menu2link'+j), 0, 0);
			}
			select = document.createElement('a');
			select.innerHTML = 'Restore Defaults'; select.href = '#';
			select.setAttribute('class','tiny');
			select.addEventListener('click',function(event)
			{	event.stopPropagation(); event.preventDefault();
				if (confirm("Restore default menu options? (Just double-checking.)") == false) return;
				Defaults(2);
				for (var i=0; i<10; i++)
				{	var tag = document.getElementsByName('menu2link'+i+'tag')[0];
					var link = document.getElementsByName('menu2link'+i)[0];
					tag.value = GetPref('menu2link'+i).split(';')[0];
					if (tag.value == "undefined") tag.value = "";
					link.value = GetPref('menu2link'+i).split(';')[1];
					if (link.value == "undefined") link.value = "";
				} top.frames[0].location.reload();
			}, true);
			choice = document.createElement('input');
			choice.type = 'submit'; choice.setAttribute('class','button');
			choice.value = 'Apply'; choice.href = '#';
			choice.addEventListener('click',function(event)
			{	for (var i=0; i<10; i++)
				{	var tag = document.getElementsByName('menu2link'+i+'tag')[0].value;
					var link = document.getElementsByName('menu2link'+i)[0].value;
					if (tag != undefined && link != undefined && tag != "")
						SetPref('menu2link'+i,tag+';'+link);
					else SetPref('menu2link'+i,';');
				} top.frames[0].location.reload(); event.stopPropagation(); event.preventDefault();
			}, true);
			menu2Span.appendChild(document.createElement('center'));
			menu2Span.lastChild.appendChild(select);
			menu2Span.lastChild.appendChild(document.createElement('br'));
			menu2Span.lastChild.appendChild(document.createElement('br'));
			menu2Span.lastChild.appendChild(choice);

			// Put it all together (-ish.)
			bigSpan.appendChild(menu1Span);
			bigSpan.appendChild(menu2Span);
			bigSpan.appendChild(document.createElement('hr'));
			
			var ul = document.createElement('a');
			var ulspan = document.createElement('div');
			ul.setAttribute('href','#');
			ul.innerHTML = "Check For Update";
			ul.addEventListener('click',function(event)
			{	GM_get("noblesse-oblige.org/lukifer/scripts/MrScript.version.txt", function(txt)
				{	var uspan = document.getElementsByName('updatespan')[0];
					var txtsplit = txt.split(',');
					var versionNumber = txtsplit[0].replace('.','').replace('.','');
					if (parseInt(versionNumber,10) <= VERSION)
					{	uspan.innerHTML = "<br>No Update Available.";
						GM_setValue('MrScriptLastUpdate', parseInt(new Date().getTime()/3600000)); return;
					} else
					{	uspan.innerHTML = "<br>Version " + txtsplit[0] + " Available: <a target='_blank' href='" +
							txtsplit[1] + "'>Update</a>";
				}	}); event.stopPropagation(); event.preventDefault();
			}, true);
			var ul2 = document.createElement('a');
			ul2.setAttribute('href','javascript:void(0);');
			ul2.innerHTML = "Update Item DB";
			ul2.addEventListener('click',function(event)
			{	if (confirm("Are you sure? You should only perform this action if Mr. Script is not functioning properly."))
				{	UpdateItemDB(0); alert("Database will attempt to update. Please contact Lukifer if the problem persists.");
			}	}, true);
			var ul3 = document.createElement('a');
			ul3.setAttribute('target', '_blank');
			ul3.setAttribute('href','https://www.paypal.com/cgi-bin/webscr?'+
'cmd=_donations&business=lukifer%40mail%2ecom&item_name=Mr%2e%20Script&page_style=PayPal&no_shipping=1&cn=Comments&tax=0&currency_code=USD&lc=US&bn=PP%2dDonationsBF&charset=UTF%2d8');
			ul3.innerHTML = 'Say Thanks With Money!';
			var ul4 = document.createElement('a');
			ul4.setAttribute('href','javascript:void(0);');
			ul4.innerHTML = "Renew Password Hash";
			ul4.setAttribute('id','hashrenew');
			ul4.addEventListener('click',function(event)
			{	this.innerHTML = 'Working...';
				GM_get(GetDomain() + '/store.php?whichstore=m', function(txt)
				{	var nupwd = txt.match(/phash\svalue\=\"([a-z0-9]+)\"/)[1];
					if(nupwd) { $("#hashrenew").html('Done'); SetPwd(nupwd); }
					else $("#hashrenew").html('Fail!');
			});	}, true);
			ulspan.setAttribute('class','tiny');
			ulspan.setAttribute('name','updatespan');
			var centre = document.createElement('center');
			centre.appendChild(ulspan);
			ulspan.appendChild(ul);
			ulspan.appendChild(document.createTextNode(' - '));
			ulspan.appendChild(ul2);
			ulspan.appendChild(document.createTextNode(' - '));
			ulspan.appendChild(ul4);
			ulspan.appendChild(document.createElement('br'));
			ulspan.appendChild(document.createElement('br'));
			ulspan.appendChild(document.createTextNode('Like Mr. Script? '));
			ulspan.appendChild(ul3);
			bigSpan.appendChild(centre);

			var prefLink = document.createElement('a');
			with(prefLink)
			{	innerHTML = "Mr. Script's Choicetastic Optionarium";
				setAttribute('href','javascript:toggle("scriptpref");');
				setAttribute('onclick','if (document.getElementById("scriptpref").getAttribute("style").indexOf("none") != -1)' +
					' window.setTimeout("self.location.hash=\'opt\';",50)');
			}
			var prefAnchor = document.createElement('a');
			prefAnchor.setAttribute('name','opt'); prefAnchor.innerHTML = " ";
			var pDiddy = document.createElement('p');
			with(pDiddy)
			{	appendChild(prefAnchor);
				appendChild(prefLink);
				appendChild(bigSpan);
			}
			
			// Look at all these children. Tables get *around*, man.
			var addHere = tables[i].rows[1].firstChild.firstChild.firstChild.firstChild.firstChild.firstChild;
			addHere.appendChild(pDiddy); break;
}	}	}


// -----------------------------------------------------------
// HAGNK'S/MANAGESTORE/STASH: Support autoclear for added rows
// -----------------------------------------------------------
else if (thePath == "/managestore.php" || thePath == "/clan_stash.php" ||
	thePath == "/storage.php" || thePath == "/sendmessage.php")
{
	$('a[href^=javascript]').each(function()
	{
		link = $(this);
		if(link.attr('href').indexOf('add') == -1) return true;

		// A mouseout event is the easy way out, since I couldn't find a way
		// to trigger the event AFTER the extra row was added. Meh.
		link.mouseout(function()
		{	var autoclear = GetPref('autoclear');
			if (autoclear == 0) return;
			$('input[value=1][type=text]').each(function()
			{	if(this.getAttribute('onclick') == null)
					AddAutoClear(this, autoclear);
			});
		});
	});
}

// --------------------------------------
// MAINT: Refresh until rollover is over.
// --------------------------------------
else if (thePath == "/maint.php")
{	window.setTimeout('self.location = "http://www.kingdomofloathing.com";',30000);}