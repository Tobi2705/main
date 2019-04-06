// Mongoose Schema for a Job Listing
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;
mongoose.Promise = global.Promise;
const moment = require('moment'),
    slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

var ApiListingSchema = new mongoose.Schema({

    _id: {
        type: Schema.ObjectId,
        auto: true
    },
    // logo: {
    //     data: Buffer,
    //     contentType: String
    // },
    position: {
        type: String,


    },
    description: {
        type: String,


    },
    jobtype: {
        type: String,
    },
    tags: {
        type: String,
    },
    jobtype: {
        type: String,
    },
    company: {
        type: String,
        trim: true

    },
    location: {
        type: String,
        trim: true
    },

    areaofwork: {
        type: String,
        trim: true,
    },
    companydescription: {
        type: String,
        trim: true,
    },

    // slug: String, 
    position: {
        type: String,
        required: true,
        trim: true,
    },

    // jobtype: {
    //     type: String,
    // },


    // // twitter: {
    // //     type: String,
    // //     trim: true,
    // // },
    // // facebook: {
    // //     type: String,
    // //     trim: true,
    // // },
    // //     description: {
    // //         type: String,
    // //         required: true
    // //     },
    // //     link: {
    // //         type: String,
    // //         required: true
    // //     },

    companylink: {
        type: String,

    },

    // paid: {
    //     type: String,
    //     required: true
    // },

    slug: {
        type: String,
        slug: ["position"]
    },
    date: {
        type: Date,
        default: Date.now
    },
});

//     tags: [String]
// }, {
//     timestamps: {
//         date: 'Submit Date'
//     }
// });

// //Indexes to allow search functionality 
// postSchema.index({
//     location: 'text',
//     position: 'text'
// });

var ApiListing = mongoose.model('ApiListing', ApiListingSchema);
module.exports = ApiListing;