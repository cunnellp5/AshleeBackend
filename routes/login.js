require('dotenv').config();
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
const User = require('../queries');
var jwt = require('jsonwebtoken');


router.post('/', function(req, res, next) {
  if (!req.body.password || !req.body.email) {
    res.send('Invalid Request')
  } else {
    User.getOneByEmail(req.body.email).then(function(user){
      if (!user) {
        res.send('User not found')
      } else {
        var isMatching = bcrypt.compareSync(req.body.password, user.password)
        if (isMatching) {
          delete user.password
          jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '1d' }, function(err, token) {
             res.send(token);
           });
        } else {
          res.send('Password does not match')
        }
      }
    })
  }
})


module.exports = router
