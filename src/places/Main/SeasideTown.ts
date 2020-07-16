import $ from 'jquery';
import {Util} from "../../Util";
import {Areas} from "../../Areas"

export class Place_SeasideTown {

    static wrongSideOfTheTracks() {
        // @TODO - Under what circumstances does the url contain "artist"?
        if (document.location.search.indexOf("artist") != -1) {
            $('p').each(function () {
                let p = $(this);
                let txt = p.text();

                // @TODO - When does this paragraph tag appear?
                if (txt.indexOf('Knob Goblin') !== -1) {
                    p.append(Util.createLink('[Knob outskirts (1)]', Util.getSnarfblatUrl(Areas.Outskirts_of_Cobbs_Knob)));
                }

                // @TODO - When does this paragraph tag appear?
                if (txt.indexOf('Haunted Pantry') !== -1) {
                    p.append(Util.createLink('[Pantry (1)]', Util.getSnarfblatUrl((Areas.Haunted_Pantry))));
                }

                // @TODO - When does this paragraph tag appear?
                if (txt.indexOf('Back Alley') !== -1) {
                    p.append(Util.createLink('[Alley (1)]', Util.getSnarfblatUrl((Areas.Sleazy_Back_Alley))));
                }
            });
        }
    }

}
