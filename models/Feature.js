const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const featureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  qty: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  itemId: {
    type: ObjectId,
    ref: 'Item'
  }
})

module.exports = mongoose.model('Feature', featureSchema)