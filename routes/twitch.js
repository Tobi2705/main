// var express = require('express');
// var router = express.Router();
// var async = require('async');
// var _ = require('lodash');
// const mongoose = require('mongoose');
// var post = require('../models/posts');
// require('../models/posts');
// const axios = require('axios');
// const helper = require('../helper')();

// axios.all([
//         axios.get('https://api.lever.co/v0/postings/twitch'),
//         // axios.get('https://api.lever.co/v0/postings/twitch'),
//         // axios.get('https://api.lever.co/v0/postings/freeletics'),
//     ])
//     .then(axios.spread((twitch) => {

//         // var twitchdata = twitch.data;
//         // var freeleticsdata = secondspectrum.data;
//         var twitchdata = twitch.data;
//         // let data = _.unionWith(twitchdata, secondspectrumdata, freeleticsdata);
//         var newData = twitchdata.map(function (data) {
//             // console.log(data);
//             // console.log(data.lists[0].text + data.lists[0].content);
//             var position = data.text,
//                 company = 'Twitch',
//                 companydescription = data.descriptionPlain,
//                 location = data.categories.location || 'Not Provided',
//                 areaofwork = data.categories.team,
//                 jobtype = data.categories.commitment || 'Not Provided',
//                 link = data.applyUrl,
//                 tags = data.categories.team,
//                 companylink = data.hostedUrl,
//                 // description = data.lists[0].text + data.lists[0].content,
//                 description = ((data.lists[0] || {}).text + (data.lists[0] || {}).content + (data.lists[1] || {}).text + (data.lists[1] || {}).content) + (data.lists[2] || {}).text + (data.lists[2] || {}).content + (data.lists[3] || {}).text + (data.lists[3] || {}).content || 'Not Provided',
//                 paid = 'false';
//             slug = data.text + 'at' + company
//             return ({
//                 position: position,
//                 company: company,
//                 tags: tags,
//                 jobtype: jobtype,
//                 companydescription: companydescription,
//                 location: location,
//                 areaofwork: areaofwork,
//                 link: link,
//                 companylink: companylink,
//                 description: description,
//                 paid: paid,
//             });
//         })
//         // console.log(newData);
//         post.create(newData, function (err) {
//             console.log('saved');
//             console.log(err)
//         });

//     }))
//     .catch(error => {
//         console.log(error);
//     });
// module.exports = router;