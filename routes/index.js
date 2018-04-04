var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

var posts = require('../models/posts');


var siteController = require ('../controllers/siteController');
require('../models/posts');

var post = require('../models/posts');

/* GET home page. */
router.get('/', function(req, res, next) {
  var query = post.find({}).sort({"created_at": -1});
  query.limit(100);
  query.exec(function(err, listings){
    if (err) return handleError(err);
    return res.render('index', { data: listings });
  })
});




router.get('/:slug', siteController.jobInfo);

router.get('/', siteController.getJobs);

module.exports = router;
