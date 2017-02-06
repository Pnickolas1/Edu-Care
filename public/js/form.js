// // first_name
// // last_name
// // email
// // location
// // category
// // specialty
// // bio

// // Getting jQuery references to the form entries
// var firstName = $("#first_name");
// var lastName = $("#last_name");
// var email = $("#email");
// var location = $("#location");
// var category = $("#category");
// var specialty = $("#specialty");
// var bio = $("#bio");


// // Giving the category a default value if the user didn't select one
// category.val("general");
// // Adding an event listener for when the form is submitted
// $('#volunteer-form-submit').on("submit", function handleFormSubmit(event) {
//     event.preventDefault();
//     // Constructing a new volunteer listing object to hand to the database
//     var newVolunteer = {
//         first_name: firstName.val().trim(),
//         last_name: lastName.val().trim(),
//         email: email.val().trim(),
//         location: location.val().trim(),
//         category: category.val(),
//         specialty: specialty.val().trim(),
//         bio: bio.val()
//     };
//     submitForm(newVolunteer);
// });

// // Submits the form using post method
// function submitForm(Form) {
//     $.post("/volunteer", Form, function() {
//         window.location.href = "/volunteer";
//     });
// }
