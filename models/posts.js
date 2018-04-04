// Mongoose Schema for a Job Listing
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const moment = require('moment'),
  slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

var postSchema = new mongoose.Schema({

  logo: {
    data: Buffer,
    contentType: String
  },
  location: {
    type: String,
    trim: true,
    required: true
  },
  // slug: String, 
  position: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },

  type: {
    type: String,
  },
  slug: {
    type: String,
    slug: ["position"]
  },

  tags: [String]
}, {
  timestamps: {
    createdAt: 'created_at'
  }

});

//Indexes to allow search functionality 
postSchema.index({
  location: 'text',
  position: 'text'
});

var post = mongoose.model('post', postSchema);
module.exports = post;