const mongoose = require('mongoose');

const { Schema } = mongoose;

const RestaurantSchema = new Schema(
  {
    name: { type: String, required: true },
    contactNumber: { type: String, required: true },
    ownerPhoneNumber: { type: String, required: true },
    ownerName: { type: String, required: true },
    ownerEmail: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Restaurant', RestaurantSchema);
