$(document).ready(function() {
    // Getting jQuery references to the form entries
    var firstName = $("#first_name");
    var lastName = $("#last_name");
    // var email = $("#email");
    var preferredCity = $("#preferred_city");
    // var category = $("#category");
    // var specialty = $("#specialty");
    var bio = $("#bio");


    // // Giving the category a default value if the user didn't select one
    // category.val("general");
    // Adding an event listener for when the form is submitted
    $('#new-volunteer-form').on("submit", function handleFormSubmit(event) {
        event.preventDefault();
        // Constructing a new volunteer listing object to hand to the database
        var newVolunteer = {
            volunteer_first_name: firstName.val().trim(),
            volunteer_last_name: lastName.val().trim(),
            // email: email.val().trim(),
            // password: password.val().trim(),
            preferred_city: preferredCity.val().trim(),
            // category: category.val(),
            // specialty: specialty.val().trim(),
            bio: bio.val()
        };

        // var newListing = {
        //     category: category.val(),
        //     specialty: specialty.val().trim(),
        // };
        submitForm(newVolunteer);
        // submitListing(newListing);
    });

    // Submits the form using post method
    function submitForm(Form) {
        $.post("/api/volunteer", Form, function() {
            window.location.href = "/volunteer";
        });
    }

    // // Submits the form using post method
    // function submitListing(Form) {
    //     $.post("/api/volunteer/listing", Form, function() {
    //         window.location.href = "/volunteer";
    //     });
    // }
});
