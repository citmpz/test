let Parser = require('rss-parser');
let parser = new Parser();

let moment = require('moment');

(async () => {
    let today = moment().format('YYYY-MM-DD') + 'T00:00:00.000Z';
    let daybeforeyesterday = moment().add(-2, 'days').format('YYYY-MM-DD') + 'T00:00:00.000Z';

    let feed = await parser.parseURL('https://cyber.gc.ca/webservice/en/rss/alerts');

    feed.items.forEach(item => {
        if (moment(item.isoDate).isBetween(daybeforeyesterday, today)) {
            console.log(item.title + ':' + item.link + ':' + item.pubDate);
        }
    });
})();