var path = require('path');

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/landing.html"));
    });

    app.get("/schools", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/schools.html"));
    });

    app.get("/become-a-volunteer", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/become-a-volunteer.html"));
    });

    app.get("/register-new-volunteer", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/new-volunteer-form.html"));
    });

    app.get("/listings", function(req, res) {
        res.redirect("/api/listings");
    });

};
