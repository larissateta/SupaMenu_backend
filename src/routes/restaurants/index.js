const router = require('express').Router();

router.use('/', require('./post.restaurant'));
router.use('/', require('./get.restaurant[id]'));
router.use('/', require('./get.restaus'))

module.exports = router