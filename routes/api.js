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
//         axios.get('https://api.lever.co/v0/postings/secondspectrum '),
//         // axios.get('https://api.lever.co/v0/postings/twitch'),
//         // axios.get('https://api.lever.co/v0/postings/freeletics'),
//     ])
//     .then(axios.spread((secondspectrum) => {
//         // var twitchdata = twitch.data;
//         var secondspectrumdata = secondspectrum.data;
//         // var freeleticsdata = freeletics.data;
//         // let data = _.unionWith(twitchdata, secondspectrumdata, freeleticsdata);
//         var newData = secondspectrumdata.map(function (data) {

//             var position = data.text,
//                 company = 'Second Spectrum',
//                 companydescription = data.descriptionPlain,
//                 location = data.categories.location,
//                 areaofwork = data.categories.team,
//                 jobtype = data.categories.commitment,
//                 link = data.applyUrl,
//                 tags = data.categories.team,
//                 companylink = data.hostedUrl,
//                 description = data.lists[0].text + data.lists[0].content


//             paid = 'false';
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
//         // post.create(newData, function (err) {
//         //     console.log('saved');
//         //     console.log(err)
//         // });
//     }))
//     .catch(error => {
//         console.log(error);
//     });
// module.exports = router;