export class Place_ReportBug {
    static at() {
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
