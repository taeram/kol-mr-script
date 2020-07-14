import $ from "jquery";

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

}
