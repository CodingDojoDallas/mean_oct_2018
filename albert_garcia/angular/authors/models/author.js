var mongoose = require('mongoose');

var AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3,"Product name is NOT less than 3 letters"],
    required: [true, "Name is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  img: {
    type: String,
    required: [true, "Img url is required"],
  },
}, {timestamps: true });

var Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;