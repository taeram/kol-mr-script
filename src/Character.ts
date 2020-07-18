import {Util} from "./Util";
import $ from "jquery";

export class Character {
    static init() {
        // Expand the size of the "Current Quest" section in the sidebar.
        $('#nudges').parent().css({
            height: '200px'
        })
    }

    static getCharacter() {
        // Retrieve the character info.
        Util.GM_get('api.php?what=status&for=MrScript', function (response) {
            let character = JSON.parse(response);
            GM_setValue('character', character);
        });
    }

    /**
     * Get the "password" hash.
     */
    static getHash() {
        let character = GM_getValue('character');
        return character.pwd;
    }

    /**
     * Get a value.
     *
     * @param key The key.
     */
    static get(key: string) {
        let character = GM_getValue('character');
        return character[key];
    }
}
