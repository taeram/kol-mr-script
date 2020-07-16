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
     * GET a request from the KoL server.
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
                }
            },
            onload: function (details) {
                if (typeof callback == 'function') {
                    callback(details.responseText);
                }
            }
        });
    }

    /**
     * POST a request to the KoL server.
     *
     * @param relativeUrl The relative URL.
     * @param data The data query object.
     * @param callback The success callback function. Optional.
     * @param errCallback The error callback function. Optional.
     */
    static GM_post(relativeUrl: string, data, callback?, errCallback?) {
        GM_xmlhttpRequest({
            method: 'POST',
            url: 'https://' + location.host + '/' + relativeUrl,
            headers: {
                "Referer": "http://" + location.host + "/game.php",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: $.param(data),
            onerror: function (error) {
                if (typeof errCallback == 'function') {
                    errCallback(error);
                }
            },
            onload: function (details) {
                if (typeof callback == 'function') {
                    callback(details.responseText);
                }
            }
        });
    }

    /**
     * Get a snarfblat url.
     *
     * @param id The id. Should be one of Areas.<name>.s
     */
    static getSnarfblatUrl(id) {
        return "adventure.php?snarfblat=" + id;
    }

    /**
     * Get a place url.
     *
     * @param id The id.
     */
    static getPlaceUrl(id) {
        return "place.php?whichplace=" + id;
    }

    /**
     * Get an inventory use url.
     *
     * @param id The id.
     */
    static getInvUseUrl(id) {
        return "inv_use.php?pwd=" + Character.getHash() + "&which=3&whichitem=" + id;
    }
}
