import $ from 'jquery';
import {Util} from "../util";

export class Place_Main {
    static at() {
        $('tr:contains("Noob."):eq(1)').append(Util.createLink('[Toot]', 'tutorial.php?action=toot'));
        $('tr:contains("responded to a trade offer"):eq(1)').append(Util.createLink('[trade]', 'makeoffer.php'));
        $('tr:contains("new announcement"):eq(1)').append(Util.createLink('[go read it]', 'clan_hall.php'));
    }
}