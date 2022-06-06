const router = require('express').Router()
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

router.post('/register', async (req, res)=> {
    const user = User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    try {

        const savedUser = await user.save()
        res.send(savedUser)
        
    } catch (error) {
        res.status(404).send(error)
        
    }
})

module.exports = router