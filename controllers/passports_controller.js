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

    app.post('/register', function(req, res) {
        User.register(req.body.username, req.body.password, function(err, account) {
            if (err) {
                console.log(err);
                return res.send(err);
            }

            res.redirect("/signin");

        });
    });

    app.post('/login',
        passport.authenticate('local', { failureRedirect: '/signin',
                                         failureFlash: false }),
        function(req, res) {
            console.log('test this');
            // If this function gets called, authentication was successful.
            // `req.user` contains the authenticated user.
            res.redirect("/api/volunteer/" + req.user.id);
        }
        );

    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });
};
