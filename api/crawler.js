var osmosis = require('osmosis');

osmosis
    .get('https://hitmarkerjobs.com/jobs?sectorQ=web-development')
    .find('#loadMore')
    .set({
        'position': 'div > div.flex-auto.ml2.ml3-ns > a',
        'location': 'div > div.flex-auto.ml2.ml3-ns > div:nth-child(3) > a:nth-child(1)',
        'company': 'div > div.flex-auto.ml2.ml3-ns > div:nth-child(2) > a',
        'jobtype': 'div:nth-child(1) > div > div.flex-auto.ml2.ml3-ns > div:nth-child(3) > a.inherit.hover-alpha.fwn > span',
        'link': 'div:nth-child(1) > div > div.flex-auto.ml2.ml3-ns > a@href'
    })
    .follow('div:nth-child(1) > div > div.flex-auto.ml2.ml3-ns > a@href')
    .set({
        'description': 'body > main > div > div > div.flex-auto.mx1 > div.bg-white.mt2 > div',

    })
    .data(function (listing) {
        // do something with listing data
        console.log(listing);
    })