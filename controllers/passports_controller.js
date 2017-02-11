var db = require('../models');
// Require dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('connect-flash');

var User = db.User;

// Passport Routes
module.exports = function(app) {

    // This is the function for registering a new user
    app.post('/register', function(req, res) {
        User.register(req.body.username, req.body.password, function(err, account) {
            if (err) {
                console.log(err);
                return res.send(err);
            }

            res.redirect("/signin");
        });
    });

    // This is the function for authenticating a user
    app.post('/login',
        passport.authenticate('local', {
            // This handles failures
            failureRedirect: '/signin',
            failureFlash: false // This needs further looking into...
        }),
        function(req, res) {
            // If this function gets called, authentication was successful.
            // `req.user` contains the authenticated user.
            res.redirect("/volunteer/");
        }
    );

    // This is the function for logging a user out
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};
