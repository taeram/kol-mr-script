import $ from "jquery";
import {Character} from "./Character";

export class Util {
    /**
     * Create a link and return the DOM reference.
     *
     * @param title The link title.
     * @param url The link url.
     */
    static createLink(title: string, url: string) {
        let font = document.createElement('font');
        $(font)
            .addClass('mrfont')
            .attr('size', 1)
            .html(' ' + title);

        let link = document.createElement('a');
        $(link)
            .addClass('mrlink')
            .attr('href', url)
            .attr('target', 'mainpane')
            .append(font);

        let finalSpan = document.createElement('span');
        $(finalSpan)
            .addClass('mrspan')
            .append(' ')
            .append(link);

        return finalSpan;
    }

    /**
     * Make a request to the KoL server.
     *
     * @param relativeUrl The relative URL.
     * @param callback The success callback function. Optional.
     * @param errCallback The error callback function. Optional.
     */
    static GM_get(relativeUrl: string, callback?, errCallback?) {
        GM_xmlhttpRequest({
            method: 'GET',
            url: 'https://' + location.host + '/' + relativeUrl,
            headers: {"Referer": "http://" + location.host + "/game.php"},
            onerror: function (error) {
                if (typeof errCallback == 'function') {
                    errCallback(error);
                } else {
                    GM_log("GM_get Error: " + error);
                    GM_log("status=" + error.status);
                    GM_log("statusText=" + error.statusText);
                    GM_log("readyState=" + error.readyState);
                    GM_log("responseHead=" + error.responseHeaders);
                    GM_log("responseText=" + error.responseText);
                }
            },
            onload: function (details) {
                if (typeof callback == 'function') {
                    callback(details.responseText);
                }
            }
        });
    }

    static getSnarfblatUrl(id) {
        return "adventure.php?snarfblat=" + id;
    }

    static getPlaceUrl(id) {
        return "place.php?whichplace=" + id;
    }

    static getInvUseUrl(id) {
        return "inv_use.php?pwd=" + Character.getHash() + "&which=3&whichitem=" + id;
    }
}
