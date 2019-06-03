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

exports.getLocations = (req, res) => {
    res.render('locations');
}

exports.locationsLondon = (req, res) => {
    async.parallel({
        data: function (callback) {
            post.find({
                $and: [{
                    $or: [{
                        location: /London/
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
                .limit(15)
                .exec(callback)

        },
        paid: function (callback) {
            post.find({
                $and: [{
                    $or: [{
                        location: /London/
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
        res.render('locationJobs', {
            data: listings.data,
            paid: listings.paid,
            location: "London"
        });
    });
};

exports.locationsAmsterdam = (req, res) => {
    async.parallel({
        data: function (callback) {
            post.find({
                $and: [{
                    $or: [{
                        location: /Amsterdam/
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
                .limit(15)
                .exec(callback)

        },
        paid: function (callback) {
            post.find({
                $and: [{
                    $or: [{
                        location: /Amsterdam/
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
        res.render('locationJobs', {
            data: listings.data,
            paid: listings.paid,
            location: "Amsterdam"
        });
    });
};
exports.locationsBerlin = (req, res) => {
    async.parallel({
        data: function (callback) {
            post.find({
                $and: [{
                    $or: [{
                        location: /Berlin/
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
                .limit(15)
                .exec(callback)

        },
        paid: function (callback) {
            post.find({
                $and: [{
                    $or: [{
                        location: /Berlin/
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
        res.render('locationJobs', {
            data: listings.data,
            paid: listings.paid,
            location: "Berlin"
        });
    });
};

exports.locationsBarcelona = (req, res) => {
    async.parallel({
        data: function (callback) {
            post.find({
                $and: [{
                    $or: [{
                        location: /Barcelona/
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
                .limit(15)
                .exec(callback)

        },
        paid: function (callback) {
            post.find({
                $and: [{
                    $or: [{
                        location: /Barcelona/
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
        res.render('locationJobs', {
            data: listings.data,
            paid: listings.paid,
            location: "Barcelona"
        });
    });
};

exports.locationsSanFrancisco = (req, res) => {
    async.parallel({
        data: function (callback) {
            post.find({
                $and: [{
                    $or: [{
                        location: /San Francisco/
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
                .limit(15)
                .exec(callback)

        },
        paid: function (callback) {
            post.find({
                $and: [{
                    $or: [{
                        location: /San Francisco/
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
        res.render('locationJobs', {
            data: listings.data,
            paid: listings.paid,
            location: "San Francisco"
        });
    });
};

exports.locationsNewYork = (req, res) => {
    async.parallel({
        data: function (callback) {
            post.find({
                $and: [{
                    $or: [{
                        location: /New York/
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
                .limit(15)
                .exec(callback)

        },
        paid: function (callback) {
            post.find({
                $and: [{
                    $or: [{
                        location: /New York/
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
        res.render('locationJobs', {
            data: listings.data,
            paid: listings.paid,
            location: "New York"
        });
    });
};

exports.locationsIndia = (req, res) => {
    async.parallel({
        data: function (callback) {
            post.find({
                $and: [{
                    $or: [{
                        location: /India/
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
                .limit(15)
                .exec(callback)

        },
        paid: function (callback) {
            post.find({
                $and: [{
                    $or: [{
                        location: /India/
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
        res.render('locationJobs', {
            data: listings.data,
            paid: listings.paid,
            location: "India"
        });
    });
};