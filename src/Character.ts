import {Util} from "./Util";

export class Character {
    static init() {
        // Retrieve the character info.
        Util.GM_get('api.php?what=status&for=MrScript', function (response) {
            let character = JSON.parse(response);
            GM_setValue('character', character);
        });
    }

    static getHash() {
        let character = GM_getValue('character');
        return character.pwd;
    }

    static get(key: string) {
        let character = GM_getValue('character');
        return character[key];
    }
}