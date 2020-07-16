export class Pages {
    private static inventoryTab = {
        Consumables: 1,
        Equipment: 2,
        Miscellaneous: 3
    };

    /**
     * If the site is in maintenance mode, refresh the page.
     */
    static maintenance() {
        window.setTimeout(function () {
            window.location.reload();
        }, 60000);
    }

    /**
     * Warn users before reporting a bug that they should disable this script.
     */
    static reportBug() {
        $('body').prepend(
            "<div><center>" +
            "<font size=4 color='blue'>" +
            "<p>You currently have Greasemonkey/Tampermonkey enabled and at least 1 script active.</p>" +
            "<p>Before reporting a bug, please make sure that you can reproduce the issue with Greasemonkey disabled.</p>" +
            "</font>" +
            "<center>" +
            "<a id='H_MRS_BR1' href=#'>[click to continue]</a><br /><br />" +
            "</center></div>"
        );
        $('table:first').attr('style', 'display:none');
        $('#H_MRS_BR1').click(function () {
            $('table:first').attr('style', 'display:inline');
        });
    }
}
