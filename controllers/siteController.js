const mongoose = require('mongoose');
var posts = require('../models/posts');
var async = require('async');
var posts = require('../models/posts');
var post = require('../models/posts');
require('../models/posts');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://Tobi:270582@ds223009.mlab.com:23009/sportjobs";
const keySecret = "sk_test_ePJLtrTR2io0TGQ7W8QMGzz2";
const stripe = require("stripe")(keySecret);

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

exports.companiesInfo = (req, res) => {
  const company = req.params._id;
  var query = posts.findOne({
    company: company
  })
  query.exec(function (err, job) {
    console.log(job);
    if (err) return handleError(err);
    return res.render('companyInfo', {
      data: [job]
    });
  })
};

exports.addjob = async (req, res) => {
  console.log(req.body);
  const newJob = new post(req.body);
  await newJob.save();
  res.redirect('/success');
};

// exports.companyInfo = (req, res) => {
//   const jobCompany = req.params._id;
//   var query = posts.find({
//     company: jobCompany
//   })
//   query.exec(function (err, job) {
//     if (err) return handleError(err);
//     return res.render('companyInfo', {
//       data: [job]
//     });
//   })
//   res.send(req.params)

// };

exports.form = (req, res) => {
  res.render('form');
};

exports.hire = (req, res) => {
  res.render('hire');
};

exports.success = (req, res) => {
  res.render('success');
};

exports.admin = (req, res) => {
  res.render('admin');
};

exports.jobsbyIndustry = (req, res) => {
  res.render('jobsbyindustry');
};

exports.eSports = (req, res) => {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'eSports'
          }]
        },
        {
          $or: [{
            paid: false
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
    paid: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'eSports'
          }]
        },
        {
          $or: [{
            paid: true
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
  }, function (err, listings) {
    if (err) {
      return next(err);
    } // Error in API usage.
    // Successful, so render.
    res.render('eSports', {
      data: listings.data,
      paid: listings.paid
    });
  });
};

exports.tvandstreaming = (req, res) => {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'TVandStreaming'
          }]
        },
        {
          $or: [{
            paid: false
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
    paid: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'TVandStreaming'
          }]
        },
        {
          $or: [{
            paid: true
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
  }, function (err, listings) {
    if (err) {
      return next(err);
    } // Error in API usage.
    // Successful, so render.
    res.render('tvandstreaming', {
      data: listings.data,
      paid: listings.paid
    });
  });
};

exports.sportsHardware = (req, res) => {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'SportsHardware'
          }]
        },
        {
          $or: [{
            paid: false
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
    paid: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'SportsHardware'
          }]
        },
        {
          $or: [{
            paid: true
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
  }, function (err, listings) {
    if (err) {
      return next(err);
    } // Error in API usage.
    // Successful, so render.
    res.render('sportshardware', {
      data: listings.data,
      paid: listings.paid
    });
  });
};

exports.sportsAgency = (req, res) => {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'SportsAgency'
          }]
        },
        {
          $or: [{
            paid: false
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
    paid: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'SportsAgency'
          }]
        },
        {
          $or: [{
            paid: true
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
  }, function (err, listings) {
    if (err) {
      return next(err);
    } // Error in API usage.
    // Successful, so render.
    res.render('sportsagency', {
      data: listings.data,
      paid: listings.paid
    });
  });
};

exports.bicycleCompanies = (req, res) => {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'Bicycle'
          }]
        },
        {
          $or: [{
            paid: false
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
    paid: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'Bicycle'
          }]
        },
        {
          $or: [{
            paid: true
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
  }, function (err, listings) {
    if (err) {
      return next(err);
    } // Error in API usage.
    // Successful, so render.
    res.render('bicycle', {
      data: listings.data,
      paid: listings.paid
    });
  });
};

exports.sportsAnalytics = (req, res) => {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'SportsAnalytics'
          }]
        },
        {
          $or: [{
            paid: false
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
    paid: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'SportsAnalytics'
          }]
        },
        {
          $or: [{
            paid: true
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
  }, function (err, listings) {
    if (err) {
      return next(err);
    } // Error in API usage.
    // Successful, so render.
    res.render('sportsanalytics', {
      data: listings.data,
      paid: listings.paid
    });
  });
};

exports.skateboardCompanies = (req, res) => {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'Skateboard'
          }]
        },
        {
          $or: [{
            paid: false
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
    paid: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'Skateboard'
          }]
        },
        {
          $or: [{
            paid: true
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
  }, function (err, listings) {
    if (err) {
      return next(err);
    } // Error in API usage.
    // Successful, so render.
    res.render('skateboard', {
      data: listings.data,
      paid: listings.paid
    });
  });
};

exports.sportsCommunities = (req, res) => {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'CommunityPlatform'
          }]
        },
        {
          $or: [{
            paid: false
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
    paid: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'CommunityPlatform'
          }]
        },
        {
          $or: [{
            paid: true
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
  }, function (err, listings) {
    if (err) {
      return next(err);
    } // Error in API usage.
    // Successful, so render.
    res.render('communityplatforms', {
      data: listings.data,
      paid: listings.paid
    });
  });
};
exports.fitnessSoftware = (req, res) => {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'FitnessSoftware'
          }]
        },
        {
          $or: [{
            paid: false
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
    paid: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'FitnessSoftware'
          }]
        },
        {
          $or: [{
            paid: true
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
  }, function (err, listings) {
    if (err) {
      return next(err);
    } // Error in API usage.
    // Successful, so render.
    res.render('fitnesssoftware', {
      data: listings.data,
      paid: listings.paid
    });
  });
};

exports.fantasySports = (req, res) => {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'FantasySports'
          }]
        },
        {
          $or: [{
            paid: false
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
    paid: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'FantasySports'
          }]
        },
        {
          $or: [{
            paid: true
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
  }, function (err, listings) {
    if (err) {
      return next(err);
    } // Error in API usage.
    // Successful, so render.
    res.render('fantasysports', {
      data: listings.data,
      paid: listings.paid
    });
  });
};

exports.jobsinSoccer = (req, res) => {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'Soccer'
          }]
        },
        {
          $or: [{
            paid: false
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
    paid: function (callback) {
      post.find({
        $and: [{
          $or: [{
            areaofwork: 'Soccer'
          }]
        },
        {
          $or: [{
            paid: true
          }]
        }
        ]
      })
        .sort({
          "date": -1
        })
        .exec(callback)
    },
  }, function (err, listings) {
    if (err) {
      return next(err);
    } // Error in API usage.
    // Successful, so render.
    res.render('jobsinFootball', {
      data: listings.data,
      paid: listings.paid
    });
  });
};