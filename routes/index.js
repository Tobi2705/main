var express = require('express');
var router = express.Router();
var async = require('async');
var _ = require('lodash');
var axios = require('axios');
const mongoose = require('mongoose');
var posts = require('../models/posts');
var post = require('../models/posts');
var ApiListing = require('../models/api');
require('../models/posts');






var siteController = require('../controllers/siteController');

var locationController = require('../controllers/locationController');



const webdevelopment = ['WebDevelopment', 'Applications Development', 'Software Engineering', 'Software Engineer', 'Computer Vision', 'Client Platform', 'iOS Developer'];
const MachineLearning = ['MachineLearning', 'Machine Learning Engineering'];
const ProductManagement = ['ProductManagement', 'Product Engineering'];
const Marketing = ['Marketing'];
const PeopleOperations = ['People Operations'];
const BusinessDevelopment = ['Content Partnerships', 'BusinessDevelopment']
const no = ['No', 'false']
const yes = ['Yes']

router.get('/locations', locationController.getLocations);
router.get('/locations/london', locationController.locationsLondon);
router.get('/locations/amsterdam', locationController.locationsAmsterdam);
router.get('/locations/berlin', locationController.locationsBerlin);

router.post('/addjob', siteController.addjob);
router.get('/form', siteController.form);
//get all vr jobs to the landing page
router.get('/', function (req, res, next) {
  async.parallel({
    apidata: function (callback) {
      ApiListing.find({
        // $and: [{
        //     $or: [{
        //       tags: 'VirtualReality'
        //     }]
        //   },
        //   {
        //     $or: [{
        //       paid: 'No'
        //     }]
        //   }
        // ]
      })
        .sort({
          "date": -1
        })
        .limit(10)
        .exec(callback)
    },
    data: function (callback) {
      post.find({})
        .sort({
          "date": -1
        })
        .limit(5)
        .exec(callback)
    },
    data_vr: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: 'VirtualReality'
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
        .limit(6)
        .exec(callback)
    },
    paid_vr: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: 'VirtualReality'
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
    data_ds: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: 'DataScience'
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
        .limit(6)
        .exec(callback)
    },
    paid_ds: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: 'DataScience'
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
    data_web: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: webdevelopment
          }]
        },
          // {
          //   $or: [{
          //     position: 'Software Engineering'
          //   }]
          // }
        ]
      })
        .sort({
          "date": -1
        })
        .limit(6)
        .exec(callback)
    },
    paid_web: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: webdevelopment
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
    data_ml: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: MachineLearning
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
        .limit(10)
        .exec(callback)
    },
    paid_ml: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: MachineLearning
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
    data_pm: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: ProductManagement
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
        .limit(6)
        .exec(callback)
    },
    paid_pm: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: ProductManagement
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
    data_des: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: 'Design'
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
        .limit(6)
        .exec(callback)
    },
    paid_des: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: 'Design'
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
    data_mar: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: Marketing
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
        .limit(6)
        .exec(callback)
    },
    paid_mar: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: Marketing
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
    data_sal: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: 'Sales'
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
        .limit(6)
        .exec(callback)
    },
    paid_sal: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: 'Sales'
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
    data_po: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: 'PeopleOperations'
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
        .limit(6)
        .exec(callback)
    },
    paid_po: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: 'PeopleOperations'
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
    data_bs: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: BusinessDevelopment
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
        .limit(6)
        .exec(callback)
    },
    paid_bs: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: BusinessDevelopment
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
    console.log(listings.data);
    if (err) {
      return next(err);
    } // Error in API usage.
    // Successful, so render.

    res.render('index', {
      apidata: listings.apidata,
      data: listings.data,
      data_vr: listings.data_vr,
      paid_vr: listings.paid_vr,
      data_ds: listings.data_ds,
      paid_ds: listings.paid_ds,
      data_web: listings.data_web,
      paid_web: listings.paid_web,
      data_ml: listings.data_ml,
      paid_ml: listings.paid_ml,
      data_pm: listings.data_pm,
      paid_pm: listings.paid_pm,
      data_des: listings.data_des,
      paid_des: listings.paid_des,
      data_mar: listings.data_mar,
      paid_mar: listings.paid_mar,
      data_sal: listings.data_sal,
      paid_sal: listings.paid_sal,
      data_po: listings.data_po,
      paid_po: listings.paid_po,
      data_bs: listings.data_bs,
      paid_bs: listings.paid_bs

    });
  });
});
router.get('/sportsjobs-virtual-reality-jobs', function (req, res, next) {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: 'VirtualReality'
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
            tags: 'VirtualReality'
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
    // res.send({ data: listings.data, paid: listings.paid  });
    res.render('index2', {
      data: listings.data,
      paid: listings.paid
    });
  });
});
router.get('/sportsjobs-machine-learning-jobs', function (req, res, next) {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: 'MachineLearning'
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
            tags: 'MachineLearning'
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
    res.render('index2', {
      data: listings.data,
      paid: listings.paid
    });
  });
});
router.get('/sportsjobs-data-science-jobs', function (req, res, next) {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: 'DataScience'
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
            tags: 'DataScience'
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
    res.render('index2', {
      data: listings.data,
      paid: listings.paid
    });
  });
});
router.get('/sportsjobs-web-development-jobs', function (req, res, next) {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: {
              $in: webdevelopment
            }
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
            tags: webdevelopment
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
    res.render('index2', {
      data: listings.data,
      paid: listings.paid
    });
  });
});
router.get('/sportsjobs-product-management-jobs', function (req, res, next) {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: {
              $in: ProductManagement
            }
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
            tags: ProductManagement
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
    res.render('index2', {

      data: listings.data,
      paid: listings.paid
    });

  });
});
router.get('/sportsjobs-design-jobs', function (req, res, next) {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: 'Design'
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
            tags: 'Design'
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
    res.render('index2', {
      data: listings.data,
      paid: listings.paid
    });
  });
});
router.get('/sportsjobs-business-development-jobs', function (req, res, next) {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: BusinessDevelopment
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
            tags: BusinessDevelopment
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
    res.render('index2', {
      data: listings.data,
      paid: listings.paid
    });
  });
});
router.get('/sportsjobs-sales-jobs', function (req, res, next) {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: 'Sales'
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
            tags: 'Sales'
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
    res.render('index2', {
      data: listings.data,
      paid: listings.paid
    });
  });
});
router.get('/sportsjobs-marketing-jobs', function (req, res, next) {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: Marketing
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
            tags: Marketing
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
    res.render('index2', {
      data: listings.data,
      paid: listings.paid
    });
  });
});
router.get('/sportsjobs-people-operations-jobs', function (req, res, next) {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            tags: PeopleOperations
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
            tags: PeopleOperations
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
    res.render('index2', {
      data: listings.data,
      paid: listings.paid
    });
  });
});
router.get('/sportsjobs-remote-jobs', function (req, res, next) {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            location: {
              $regex: /Remote/
            }
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
            location: {
              $regex: /Remote/
            }
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

    res.render('index2', {
      data: listings.data,
      paid: listings.paid
    });
  });
});
router.get('/sports-companies', function (req, res, next) {
  async.parallel({
    hudldata: function (callback) {
      post.aggregate(
        [{
          $group: {
            _id: '$company',
            total_listings: {
              $sum: 1
            },
            descr: {
              $addToSet: "$companydescription"
            },
            uniqueTags: {
              $addToSet: "$tags"
            },
            link: {
              $addToSet: "$link"
            },
            twitter: {
              $addToSet: "$twitter"
            },
          }
        }]
      )
        .exec(callback)

    },
    hudljobs: function (callback) {
      post.find({
        company: {
          $in: ['Hudl']
        }
      }).
        select('tags')
        .exec(callback)

    },
    kinexondata: function (callback) {
      post.find({
        company: {
          $in: ['Kinexon']
        }
      })
        .exec(callback)
    },
    secondspectrumdata: function (callback) {
      post.find({
        company: {
          $in: ['Second Spectrum']
        }
      })
        .exec(callback)
    },
    beyondsportsdata: function (callback) {
      post.find({
        company: {
          $in: ['Beyond Sports']
        }
      })
        .exec(callback)
    },
    companiesdata: function (callback) {
      post.find({})
        .exec(callback)
    },

    company: function (callback) {
      post.distinct('posts')
        .exec(callback)
    },

  }, function (err, listings) {
    if (err) {
      return next(err);
    } // Error in API usage.
    // Successful, so render.
    console.log(listings.hudldata)

    res.render('companiesPage', {
      company: listings.company,
      beyondsportsdatacount: listings.beyondsportsdata.length,
      hudldata: listings.hudldata,
      hudljobs: listings.hudljobs,
      hudldatacount: listings.hudldata.length,
      kinexondata: listings,
      kinexondatacount: listings.kinexondata.length,
      secondspectrumdata: listings,
      secondspectrumdatacount: listings.kinexondata.length
    });
  });
});
router.get('/sportsjobs-internships', function (req, res, next) {
  async.parallel({
    data: function (callback) {
      post.find({
        $and: [{
          $or: [{
            jobtype: 'Internship'
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
            jobtype: 'Internship'
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
    res.render('internship', {
      data: listings.data,
      paid: listings.paid
    });
  });
});
router.get('/hire', siteController.hire);

router.get('/success', siteController.success);
router.get('/canceled', siteController.canceled);
router.get('/admin', siteController.admin);
router.get('/jobs-in-fantasy-sports', siteController.fantasySports)
router.get('/jobs-in-football', siteController.jobsinSoccer)
router.get('/jobs-in-eSports', siteController.eSports);
router.get('/sports-hardware-jobs', siteController.sportsHardware);
router.get('/tv-and-streaming-jobs', siteController.tvandstreaming);
router.get('/jobs-at-sportsagencies', siteController.sportsAgency);
router.get('/jobs-at-bicycle-companies', siteController.bicycleCompanies);
router.get('/sports-analytics-jobs', siteController.sportsAnalytics);
router.get('/jobs-at-skateboard-companies', siteController.skateboardCompanies);
router.get('/jobs-at-sports-communities', siteController.sportsCommunities);
router.get('/jobs-at-fitness-software-companies', siteController.fitnessSoftware);
router.get('/sportsjobs-collections', siteController.jobsbyIndustry);
router.get('/:slug', siteController.jobInfo);
router.get('/sports-companies/:_id', siteController.companiesInfo);
// router.get('/company/:_id', siteController.companyInfo);
router.get('/', siteController.getJobs);



module.exports = router;