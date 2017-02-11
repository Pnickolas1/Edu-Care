var db = require('../models');

// ROUTES
module.exports = function(app) {

    // ====== Volunteer Routes ====== //

    // POST route to create new volunteer
    app.post("/api/volunteer", ensureAuthenticated, function(req, res) {
        db.Volunteer.create({
            volunteer_first_name: req.body.volunteer_first_name,
            volunteer_last_name: req.body.volunteer_last_name,
            preferred_city: req.body.preferred_city,
            bio: req.body.bio,
            UserId: req.user.id
        }).then(function(dbPost) {
            res.redirect("/api/volunteer/" + req.user.id);
        });
    });

    // ====== Listing Routes ====== //

    // GET route to show all listings
    // Aisha: can this be cleaned up?
    app.get("/api/listings", function(req, res) {
        var findListings;
        var queryCategory = req.query.cat;
        var querySpecialty = req.query.spec;
        if (queryCategory) {
            findListings = db.Listing.findAll({
                include: [{
                    model: db.Volunteer
                }],
                where: {
                    category: queryCategory
                }
            });
        } else if (querySpecialty) {
            findListings = db.Listing.findAll({
                include: [{
                    model: db.Volunteer
                }],
                where: {
                    specialty: querySpecialty
                }
            });
        } else {
            findListings = db.Listing.findAll({
                include: [{
                    model: db.Volunteer
                }]
            });
        }
        findListings.then(function(dbRes) {
            res.render("listings", { listings: dbRes });
        });
    });

    // GET route to show all listings specialties
    app.get("/api/specialties", function(req, res) {
        var findCategories = db.Listing.findAll({
            attributes: ['specialty']
        });
        findCategories.then(function(dbRes) {
            res.send(dbRes);
        });

    });

    // GET route to show volunteer info and listings
    app.get("/api/volunteer/:id", ensureAuthenticated, function(req, res) {
        var listingPromise = db.Listing.findAll({
            where: {
                VolunteerId: req.params.id
            },
            include: [{
                model: db.Volunteer
            }]
        });
        var volunteerPromise = db.Volunteer.findOne({
            where: {
                volunteerId: req.params.id
            }
        });

        Promise.all([listingPromise, volunteerPromise])
            .then(function(results) {
                var listingResult = results[0];
                var volunteerResult = results[1];
                res.render("volunteer", { listings: listingResult, volunteer: volunteerResult });
            });
    });

    //POST route to create new listing
    app.post("/api/volunteer/listing", ensureAuthenticated, function(req, res) {
        db.Listing.create({
            category: req.body.category,
            specialty: req.body.specialty,
        }).then(function(dbPost) {
            res.redirect("/api/all");
        });
    });

    // PUT routes for updating a listing
    // Archive
    app.put("/api/volunteer/listing/archive/:id", function(req, res) {
        db.Listing.update({ isActive: 0 }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbRes) {
            res.redirect("/");
            // app.get("/api/volunteer/listing/archive/:id", function(req, res) {
            //     db.Listing.findOne({
            //         where: {
            //             id: req.params.id
            //         },
            //         include: [{
            //             model: db.Volunteer
            //         }]
            //     }).then(function(dbPost) {
            //         res.redirect("api/volunteer/" + dbPost.Volunteer.id);
            //     });
            // });
        });
    });


    // Activate 
    app.put("/api/volunteer/listing/activate/:id", function(req, res) {
        db.Listing.update({ isActive: 1 }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbPost) {
            res.redirect("/");
            // app.get("/api/volunteer/listing/archive/:id", function(req, res) {
            //     db.Listing.findOne({
            //         where: {
            //             id: req.params.id
            //         },
            //         include: [{
            //             model: db.Volunteer
            //         }]
            //     }).then(function(dbPost) {
            //         res.redirect("api/volunteer/" + dbPost.Volunteer.id);
            //     });
            // });
        });
    });

    function ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated())
            return next();
        else
            res.redirect('/signin');
    }
};
