"use strict";

var express = require('express');
var router = express.Router();
var User = require('../models').User;
var Post = require('../models').Post;
var Comment = require('../models').Comment;

router.post('/register', (req, res)=>{
    // Create a new user using req.body.username and req.body.password
    // then redirect to /login
    // YOUR CODE HERE
    User.create({username: req.body.username, password: req.body.password})
      .then((result)=>res.send(result.id))
      .catch(err=>console.log(err));
});

var passport = require('passport');
var LocalStrategy = require('passport-local');

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser((id, done)=>{
  // Find a user by id and call done(null, user)
  // YOUR CODE HERE
    User.findById(id)
    .then((user)=>{
        done(null, user);
    })
    .catch((err)=>done(err, null));
});

passport.use(new LocalStrategy((username, password, done)=>{
  // Find a user by username, if password matches call done(null, user)
  // otherwise call done(null, false)
  // YOUR CODE HERE
    User.findOne({
        where: {username: username}})
      .then(user=>{
          if(user.password === password) {
              return done(null, user);
          }
          return done(null, false);
      }
    )
    .catch(err=>console.log(err));
}));

router.use(passport.initialize());
router.use(passport.session());

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));

router.get('/:username', (req, res)=>{
    User.findOne({
        where: {username: req.params.username}
    })
  .then(user=>res.send(user.id))
  .catch(err=>console.log(err));
});

router.get('/logout', (req, res)=>{
    req.logout();
    res.redirect('/');
});

module.exports = router;
