import $ from 'jquery';
import {Util} from "../../Util";

export class Place_SeasideTown {

    static wrongSideOfTheTracks() {
        if (document.location.search.indexOf("artist") != -1) {
            $('p').each(function () {
                let p = $(this);
                let txt = p.text();

                if (txt.indexOf('Knob Goblin') != -1) {
                    p.append(Util.createLink('[Knob outskirts (1)]', Util.getSnarfblatUrl(114)));
                }

                if (txt.indexOf('Haunted Pantry') != -1) {
                    p.append(Util.createLink('[Pantry (1)]', Util.getSnarfblatUrl((113))));
                }

                if (txt.indexOf('Back Alley') != -1) {
                    p.append(Util.createLink('[Alley (1)]', Util.getSnarfblatUrl((112))));
                }
            });
        }
    }

}
