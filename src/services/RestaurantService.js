const RestaurantRepo = require('../repositories/RestaurantRepo');

class RestaurantService {
  static async create(data) {
    return RestaurantRepo.save(data);
  }

  static async getRestaurantById(restaurantId) {
    return RestaurantRepo.findRestaurantById(restaurantId);
  }

  static async getRestaurantByName(restaurantName) {
    return RestaurantRepo.findRestaurantByName(restaurantName);
  }

  static async updateRestaurantById(restaurantId, data) {
    return RestaurantRepo.updateOneById(restaurantId, data);
  }

  static async deleteRestaurantById(restaurantId) {
    return RestaurantRepo.deleteRestaurantById(restaurantId);
  }
}

module.exports = RestaurantService;
