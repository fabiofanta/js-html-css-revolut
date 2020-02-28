$(document).ready(function () {
    $(".menu-item").click(function() {
        $(this).children().slideToggle();
    });
});
