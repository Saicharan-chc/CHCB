const express = require('express'),
    router = express.Router();

router.use('/auth', require('./auth/auth'));

module.exports = router;