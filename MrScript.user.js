// ==UserScript==
// @name            Mr. Script Redux
// @namespace       https://github.com/taeram/kol-mr-script
// @description     Kingdom of Loathing Helper
// @version         1.82
// @author          Lukifer
// @contributor     Ohayou
// @contributor     Hellion
// @contributor     Tard
// @contributor     JiK4eva
// @contributor     BeingEaten
// @contributor     Picklish
// @contributor     CharonTheHand
// @contributor     Taeram
// @include         https://*kingdomofloathing.com/*
// @require         https://ajax.googleapis.com/ajax/libs/jquery/3.5.0/jquery.min.js
// @updateURL       https://raw.githubusercontent.com/taeram/kol-mr-script/master/MrScript.user.js
// @downloadURL     https://raw.githubusercontent.com/taeram/kol-mr-script/master/MrScript.user.js
// @grant           GM_addStyle
// @grant           GM_deleteValue
// @grant           GM_getValue
// @grant           GM_log
// @grant           GM_setValue
// @grant           GM_xmlhttpRequest
// @unwrap
// ==/UserScript==
!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=jQuery},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);class o{static createLink(e,t){let n=document.createElement("font");r()(n).addClass("mrfont").attr("size",1).html(" "+e);let a=document.createElement("a");r()(a).addClass("mrlink").attr("href",t).attr("target","mainpane").append(n);let o=document.createElement("span");return r()(o).addClass("mrspan").append(" ").append(a),o}static GM_get(e,t,n){GM_xmlhttpRequest({method:"GET",url:"https://"+location.host+"/"+e,headers:{Referer:"http://"+location.host+"/game.php"},onerror:function(e){"function"==typeof n?n(e):(GM_log("GM_get Error: "+e),GM_log("status="+e.status),GM_log("statusText="+e.statusText),GM_log("readyState="+e.readyState),GM_log("responseHead="+e.responseHeaders),GM_log("responseText="+e.responseText))},onload:function(e){"function"==typeof t&&t(e.responseText)}})}static getSnarfblatUrl(e){return"adventure.php?snarfblat="+e}static getPlaceUrl(e){return"place.php?whichplace="+e}static getInvUseUrl(e){return"inv_use.php?pwd="+i.getHash()+"&which=3&whichitem="+e}}class i{static init(){o.GM_get("api.php?what=status&for=MrScript",(function(e){let t=JSON.parse(e);GM_setValue("character",t)}))}static getHash(){return GM_getValue("character").pwd}static get(e){return GM_getValue("character")[e]}}let c=location.pathname.replace(/\/|\.(php|html)$/gi,"").toLowerCase();if("place"===c){let e=location.search.match(/whichplace=([0-9a-zA-Z_\-]*)/);e&&e.length>1&&(c=e[1])}"adminmail"===c?class{static init(){$("body").prepend("<div><center><font size=4 color='blue'><p>You currently have Greasemonkey/Tampermonkey enabled and at least 1 script active.</p><p>Before reporting a bug, please make sure that you can reproduce the issue with Greasemonkey disabled.</p></font><center><a id='H_MRS_BR1' href=#'>[click to continue]</a><br /><br /></center></div>"),$("table:first").attr("style","display:none"),$("#H_MRS_BR1").click((function(){$("table:first").attr("style","display:inline")}))}}.init():"maint"===c?class{static init(){window.setTimeout((function(){window.location.reload()}),6e4)}}.init():"main"===c?(i.init(),class{static init(){r()('tr:contains("Noob."):eq(1)').append(o.createLink("[Toot]","tutorial.php?action=toot")),r()('tr:contains("responded to a trade offer"):eq(1)').append(o.createLink("[trade]","makeoffer.php")),r()('tr:contains("new announcement"):eq(1)').append(o.createLink("[go read it]","clan_hall.php"))}}.init()):"town_wrong"===c&&class{static wrongSideOfTheTracks(){-1!=document.location.search.indexOf("artist")&&r()("p").each((function(){let e=r()(this),t=e.text();-1!=t.indexOf("Knob Goblin")&&e.append(o.createLink("[Knob outskirts (1)]",o.getSnarfblatUrl(114))),-1!=t.indexOf("Haunted Pantry")&&e.append(o.createLink("[Pantry (1)]",o.getSnarfblatUrl(113))),-1!=t.indexOf("Back Alley")&&e.append(o.createLink("[Alley (1)]",o.getSnarfblatUrl(112)))}))}}.wrongSideOfTheTracks(),GM_addStyle("@-moz-keyframes nodeInserted { from { clip: rect(1px,auto,auto,auto) } to { clip: rect(0px,auto,auto,auto) } }"),GM_addStyle("center > center > table > tbody > tr > td > b { animation-duration: 0.001s;animation-name: nodeInserted;}")}]);