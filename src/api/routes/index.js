const express = require('express'),
    router = express.Router();

router.use('/health', (req,res)=>{
    res.send('OK');
});
router.use('/auth', require('./auth/auth'));

module.exports = router;