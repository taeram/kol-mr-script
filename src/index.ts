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
// @updateURL       https://raw.github.com/taeram/user-scripts/master/a-dark-room.user.js
// @downloadURL     https://raw.github.com/taeram/user-scripts/master/a-dark-room.user.js
// @grant           GM_addStyle
// @grant           GM_deleteValue
// @grant           GM_getValue
// @grant           GM_log
// @grant           GM_setValue
// @grant           GM_xmlhttpRequest
// @unwrap
// ==/UserScript==

import {Place_Maint} from "./places/Maintenance";
import {Place_Main} from "./places/Main";
import {Place_ReportBug} from "./places/ReportBug"

// What page are we on?
let placeId = location.pathname.replace(/\/|\.(php|html)$/gi, "").toLowerCase();
let match = location.search.match(/whichplace=([0-9a-zA-Z_\-]*)/);
if (match && match.length > 1) {
    placeId = match[1];
}

if (placeId === 'adminmail') {
    Place_ReportBug.at();
} else if (placeId === 'maint') {
    Place_Maint.at();
} else if (placeId === 'main') {
    Place_Main.at();
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
