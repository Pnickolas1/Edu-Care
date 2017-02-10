$(document).ready(function() {
    $(document).on('click', '#cat-search-button', function(event) {
        var checkedBoxes = $('input[type="checkbox"]:checked');
        var categories = Array.prototype.map.call(checkedBoxes, function(obj) {
            return $(obj).data('category');
        });
        var queryStringComponents = categories.map(function(cat) {
            return '&cat=' + cat;
        });
        var queryString = queryStringComponents.join('');
        window.location.search += queryString;
    });
    $.ajax({
            method: 'GET',
            url: '/api/specialties',
        })
        .done(function(data) {
            var categoryData = {};
            data.forEach(function(element) {
                categoryData[element.specialty] = null;
            });
            $('input.autocomplete').autocomplete({
                data: categoryData,
                limit: 10, // The max amount of results that can be shown at once. Default: Infinity.
            });
            $(document).on('click', '#specialty-search-button', function(event) {
                var searchTerm = $('#autocomplete-input').val();
                window.location.search = 'spec=' + searchTerm;
            });
        });

});
