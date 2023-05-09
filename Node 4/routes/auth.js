const express = require('express')
const { body } = require("express-validator/check");
const User = require('../models/user');
const authController = require('../controllers/auth')

const router = express.Router();

router.put('/signup', [
    body('email').isEmail().withMessage('Please Enter a valid email').custom((value, {req})=>{
        return User.findOne({email:value}).then(userDoc=>{
            if(userDoc){
                return Promise.reject('Email Already Exists');
            }
        })
    })
    .normalizeEmail(),
    body('password').trim().isLength({min: 6}),
    body('name').trim().not().isEmpty()
],authController.signup );

router.post('/login', authController.login )

module.exports = router;