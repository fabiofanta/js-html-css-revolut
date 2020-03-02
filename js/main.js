$(document).ready(function () {
    $(".menu-item").click(function() {
        if ($(".menu-item").hasClass("active")) {
            $(".menu-item").children().removeClass("active");
            $(".caret").removeClass("active");
            $(this).children().addClass("active");
            $(this).addClass("active");

        } else {
            $(this).children().addClass("active");
            $(this).addClass("active");
        }

    });
});
