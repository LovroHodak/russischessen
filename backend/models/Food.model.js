const mongoose = require("mongoose");

const optionsSchema = mongoose.Schema({
    firstOption: String,
    secondOption: String,
    thirdOption: String,
    fourthOption: String,
    fifthOption: String
})

const foodSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  options: [optionsSchema]
});

const Food = mongoose.model('food', foodSchema)
module.exports = Food
