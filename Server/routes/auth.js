const express = require('express')
const { body } = require("express-validator/check");
const User = require('../models/user');
const authController = require('../controllers/auth')
const isAuth = require('../middleware/isAuth')
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
    body('password').trim().isLength({min: 6}).withMessage('Please Enter a minimum 6 digit password.'),
    body('name').trim().not().isEmpty().withMessage('Please Enter a valid username.'),
],authController.signup );

router.post('/login', authController.login )

router.get('/status', isAuth, authController.getUserStatus)

router.patch('/status', isAuth,[body('status').trim().not().isEmpty(),] ,authController.editUserStatus)


module.exports = router;