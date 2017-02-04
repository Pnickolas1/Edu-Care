var db = require('../models');

// ROUTES
module.exports = function(app) {

    // ====== Volunteer Routes ====== //

    // POST route to create new volunteer
    app.post("/api/volunteer", function(req, res) {
        db.Volunteer.create({
            volunteer_first_name: req.body.volunteer_first_name,
            volunteer_last_name: req.body.volunteer_last_name,
            category: req.body.category,
            preferred_city: req.body.preferred_city,
            email: req.body.email,
            bio: req.body.bio
        }).then(function(dbPost) {
            res.redirect("/api/all");
        });
    });

    // ====== Listing Routes ====== //

    // GET route to show all listings

    app.get("/api/all", function(req, res) {
        db.Listing.findAll({
            include: [{
                model: db.Volunteer,
                through: {
                    attributes: ['volunteer_first_name', 'email']
                }
            }]
        }).then(function(dbRes) {
            // res.render("index", { listings: dbRes });
            res.send(dbRes);
        });
    });

    //POST route to create new listing
    app.post("/api/volunteer/listing", function(req, res) {
        db.Listing.create({
            category: req.body.category,
            specialty: req.body.specialty
        }).then(function(dbPost) {
            res.redirect("/api/all");
        });
    });

    // PUT route for updating a listing
    app.put("/api/volunteer/listing/:id", function(req, res) {
        db.Listing.update({ listing: req.body }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbPost) {
            res.redirect("/api/all");
        });
    });

    // DELETE route for a listing
    app.delete("/api/volunteer/listing/:id", function(req, res) {
        db.Listing.destroy({
            where: {
                id: req.body.id
            }
        }).then(function(dbPost) {
            res.redirect("api/all");
        });
    });
};
