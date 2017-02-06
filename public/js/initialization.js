$(document).ready(function() {
    $('select').material_select();
    $(".button-collapse").sideNav();
    $('ul.tabs').tabs();
    $('.collapsible').collapsible();
    $('input.autocomplete').autocomplete({
        data: {
            "Computer Science": null,
        },
        limit: 10, // The max amount of results that can be shown at once
    });
});
