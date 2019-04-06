// Mongoose Schema for a Job Listing
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;
mongoose.Promise = global.Promise;
const moment = require('moment'),
    slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

var postSchema = new mongoose.Schema({

    _id: {
        key: String
    },

    location: {
        type: String,
        trim: true,
        required: true
    },
    company: {
        type: String,
        trim: true,
        required: true
    },

    areaofwork: {
        type: String,
        trim: true,
    },

    company_description: {
        type: String,
        trim: true,
    },

    // slug: String, 
    position: {
        type: String,
        required: true,
        trim: true,
    },

    jobtype: {
        type: String,
    },

    twitter: {
        type: String,
        trim: true,
    },
    facebook: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },

    paid: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        slug: ["position"]
    },
    date: {
        type: Date,
        default: Date.now
    },


    tags: [String]
}, {
    timestamps: {
        date: 'Submit Date'
    }
});

//Indexes to allow search functionality 
postSchema.index({
    location: 'text',
    position: 'text'
});

var post = mongoose.model('post', postSchema);
module.exports = post;