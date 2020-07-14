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
!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=jQuery},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a);class o{static createLink(e,t){let n=document.createElement("font");r()(n).addClass("mrfont").attr("size",1).html(" "+e);let a=document.createElement("a");r()(a).addClass("mrlink").attr("href",t).attr("target","mainpane").append(n);let o=document.createElement("span");return r()(o).addClass("mrspan").append(" ").append(a),o}}let i=location.pathname.replace(/\/|\.(php|html)$/gi,"").toLowerCase(),c=location.search.match(/whichplace=([0-9a-zA-Z_\-]*)/);c&&c.length>1&&(i=c[1]),"adminmail"===i?class{static at(){$("body").prepend("<div><center><font size=4 color='blue'><p>You currently have Greasemonkey/Tampermonkey enabled and at least 1 script active.</p><p>Before reporting a bug, please make sure that you can reproduce the issue with Greasemonkey disabled.</p></font><center><a id='H_MRS_BR1' href=#'>[click to continue]</a><br /><br /></center></div>"),$("table:first").attr("style","display:none"),$("#H_MRS_BR1").click((function(){$("table:first").attr("style","display:inline")}))}}.at():"maint"===i?class{static at(){window.setTimeout((function(){window.location.reload()}),6e4)}}.at():"main"===i&&class{static at(){r()('tr:contains("Noob."):eq(1)').append(o.createLink("[Toot]","tutorial.php?action=toot")),r()('tr:contains("responded to a trade offer"):eq(1)').append(o.createLink("[trade]","makeoffer.php")),r()('tr:contains("new announcement"):eq(1)').append(o.createLink("[go read it]","clan_hall.php"))}}.at(),GM_addStyle("@-moz-keyframes nodeInserted { from { clip: rect(1px,auto,auto,auto) } to { clip: rect(0px,auto,auto,auto) } }"),GM_addStyle("center > center > table > tbody > tr > td > b { animation-duration: 0.001s;animation-name: nodeInserted;}")}]);