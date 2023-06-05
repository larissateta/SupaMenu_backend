const express = require('express');
const { check, validationResult } = require('express-validator');
const JWTService = require('../../services/JWTService');
const RestaurantService = require('../../services/RestaurantService');

const router = express.Router();
const jwt = JWTService.verifyToken;

router.get(
  '/:id',
  jwt,
  [
    check('id', 'Restaurant Id is Required').exists(),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;

    try {
        const restaurant = await RestaurantService.getRestaurantById(id);
        
        return res.status(200).json({ restaurant });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
  }
);

module.exports = router;
