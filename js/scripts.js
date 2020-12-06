$(function () {
    $('.table-toggle').on('click', function () {
        $(this).toggleClass('active');
        $(this).parents('tr').next().toggleClass('open');
    })

})