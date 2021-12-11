const express = require('express');
const { register, login } = require('../controller/auth');


const router = express.Router();

// router.put('/resetpassword/:resettoken', resetPassword);
router.post('/register', register)
router.post('/login', login)
module.exports = router;