const express = require('express');
const ClientService = require('../../services/ClientService');
const JWTService = require('../../services/JWTService');
const RestaurantService = require("../../services/RestaurantService")

const router = express.Router();
const jwt = JWTService.verifyToken;

router.get('/', jwt, async (req, res, next) => {
    try {
        const restaurants = await RestaurantService.getAllRestaurants()

        return res.status(200).json({ restaurants });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
  }
);

module.exports = router;
