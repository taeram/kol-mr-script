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

import {Character} from "./Character";
import {Pages} from "./Pages";
import {Place_Main} from "./places/Main";
import {Place_SeasideTown} from "./places/Main/SeasideTown";

// What page are we on?
let locationId = location.pathname.replace(/\/|\.(php|html)$/gi, "").toLowerCase();
if (locationId === "place") {
    let match = location.search.match(/whichplace=([0-9a-zA-Z_\-]*)/);
    if (match && match.length > 1) {
        locationId = match[1];
    }
}

switch (locationId) {
    case 'adminmail':
        Pages.reportBug();
        break;
    case 'main':
        Character.init();
        Place_Main.init();
        break;
    case 'maint':
        Pages.maintenance();
        break;
    case 'town_wrong':
        Place_SeasideTown.wrongSideOfTheTracks()
        break;
}

// Capture DomNodeInserts without having to use the deprecated DOMNodeInserted
// event, which is a huge performance drain:
//  * After the document is loaded, slap an invisible animation onto any
//    "interesting" new elements that arrive.
//  * Bind a handler to the animation-start event which then does whatever
//    needs doing with the new elements.
//  * In our case, the AJAX 'Results:' boxes are always starting with
//    <center><center> and are in a div named effdiv.
GM_addStyle('@-moz-keyframes nodeInserted { ' +
    'from { clip: rect(1px,auto,auto,auto) } to { clip: rect(0px,auto,auto,auto) } ' +
    '}');

// Specify what an "interesting" element is... any "Results:" block has this form.
GM_addStyle('center > center > table > tbody > tr > td > b { ' +
    'animation-duration: 0.001s;' +
    'animation-name: nodeInserted;' +
    '}');

// $(document).on('animationstart', ResultHandler);
