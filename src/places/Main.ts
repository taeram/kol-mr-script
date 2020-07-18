import $ from 'jquery';
import {Util} from "../Util";

export class Place_Main {
    static init() {
        // Add a link to the tutorial of we're just ascended.
        $('tr:contains("Noob."):eq(1)').append(Util.createLink('[Toot]', 'tutorial.php?action=toot'));

        // Add a link to respond to trade offers.
        $('tr:contains("responded to a trade offer"):eq(1)').append(Util.createLink('[trade]', 'makeoffer.php'));

        // Add a link to read clan announcements.
        $('tr:contains("new announcement"):eq(1)').append(Util.createLink('[go read it]', 'clan_hall.php'));
    }
}
