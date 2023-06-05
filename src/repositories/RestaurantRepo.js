const RestaurantModel = require('../models/Restaurant');

class RestaurantRepo {
  static async save(data) {
    return RestaurantModel.create(data);
  }

  static async findAll() {
    return RestaurantModel.find({}).exec();
  }

  static async findAllWithPagination(skip, limit) {
    return RestaurantModel.find().skip(skip).limit(limit).exec();
  }

  static async findById(restaurantId) {
    return RestaurantModel.findById(restaurantId).exec();
  }

  static async findByEmail(email) {
    return RestaurantModel.findOne({ email }).exec();
  }

  static async deleteByEmail(email) {
    return RestaurantModel.deleteOne({ email }).exec();
  }

  static async deleteById(id) {
    return RestaurantModel.deleteOne({ _id: id }).exec();
  }

  static async updateById(restaurantId, data) {
    return RestaurantModel.findOneAndUpdate({ _id: restaurantId }, data, { new: true });
  }
}

module.exports = RestaurantRepo;
