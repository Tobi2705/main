const mongoose = require('mongoose');

var posts = require('../models/posts');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://Tobi:270582@ds223009.mlab.com:23009/sportjobs";

exports.getJobs = (req, res) => {

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    db.collection("posts").find(data).toArray(function (err, result) {
        if (err) throw err;
      res.render('index', {
        data: data
      });
    });
  });
};

exports.jobInfo = (req, res) => {
  const jobSlug = req.params.slug;
  var query = posts.findOne({
    slug: jobSlug
  })
  query.exec(function (err, job) {
    if (err) return handleError(err);
    return res.render('jobInfo', {
      data: [job]
    });
  })
};
