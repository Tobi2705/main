var sitemap = require('express-sitemap');

sitemap({
    map: {
        '/': ['get'],
        '/remote-jobs': ['get'],
        '/companies': ['get'],
        '/virtual-reality-jobs': ['get'],
        '/data-science-jobs': ['get'],
        '/web-development-jobs': ['get'],
        '/machine-learning-jobs': ['get'],
        '/product-management-jobs': ['get'],
        '/design-jobs': ['get'],
        '/marketing-jobs': ['get'],
        '/sales-jobs': ['get'],
        '/people-operations-jobs': ['get'],

        
    },
    route: {
        '/': {
            lastmod: '2018-05-07',
            changefreq: 'always',
            allow: true,
            priority: 1.0,
        },
        '/remote-jobs': {
            lastmod: '2018-05-07',
            changefreq: 'always',
            allow: true,
        },
        '/companies': {
            lastmod: '2018-05-07',
            changefreq: 'always',
            allow: true,
        },
        '/virtual-reality-jobs': {
            lastmod: '2018-05-07',
            changefreq: 'always',
            allow: true,
        },
        '/data-science-jobs': {
            lastmod: '2018-05-07',
            changefreq: 'always',
            allow: true,
        },
        '/web-development-jobs': {
            lastmod: '2018-05-07',
            changefreq: 'always',
            allow: true,
        },
        '/machine-learning-jobs': {
            lastmod: '2018-05-07',
            changefreq: 'always',
            allow: true,
        },
        '/product-management-jobs': {
            lastmod: '2018-05-07',
            changefreq: 'always',
            allow: true,
        },
        '/design-jobs': {
            lastmod: '2018-05-07',
            changefreq: 'always',
            allow: true,
        },
        '/marketing-jobs': {
            lastmod: '2018-05-07',
            changefreq: 'always',
            allow: true,
        },
        '/people-operations-jobs': {
            lastmod: '2018-05-07',
            changefreq: 'always',
            allow: true,
        },
    },
}).XMLtoFile();

module.exports = sitemap;