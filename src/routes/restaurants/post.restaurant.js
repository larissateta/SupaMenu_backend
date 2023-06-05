const express = require('express');
const { check, validationResult } = require('express-validator');
const RestaurantService = require('../../services/RestaurantService');
const JWTService = require('../../services/JWTService');

const router = express.Router();
const jwt = JWTService.verifyToken;

router.post(
  '/add-new',
  jwt,
  [
    check('name', 'Name is required').exists(),
    check('contactNbr', 'Contact number is required').exists(),
    check('ownerNbr', 'Owner phone number is required').exists(),
    check('ownerName', 'Owner name is required').exists(),
    check('ownerEmail', 'Owner email is required').exists().isEmail(),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const restaurant = await RestaurantService.create(req.body);
      return res.status(200).json({ restaurant });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }
);

module.exports = router;
