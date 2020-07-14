import $ from 'jquery';

export class Place_Mall {
    static at() {
        $('center table tr td center table:first').prepend(
            '<tr>' +
            '<td>' +
            '<center>' +
            '<a href=managestore.php>Manage your Store</a><br /><br />' +
            '</center>' +
            '</td>' +
            '</tr>'
        );
    }
}
