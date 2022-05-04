const express = require('express'),
    router = express.Router();

const validation = require('../../../middleware/validations');
const userController = require('../../controller/user');

router.post('/register-user', userController.register);
router.post('/login', validation.validateLogin, userController.login);

module.exports = router;