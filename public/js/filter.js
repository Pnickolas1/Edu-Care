$(document).ready(function() {
    $(document).on('click', '#category-header', function(event) {
        var numChecked = $("input:checked").length;
        if (numChecked === 0) {
            $('.collection-item').toggle('slow');
        }
    });
    $(document).on('click', 'input[type="checkbox"]', function(event) {
        var category = $(this).data('category');
        var categoryItemClass = '.item-' + category;
        $(categoryItemClass).toggle();
    });
});
