$(document).ready(function () {
    $(".caret").click(function() {
        if ($(this).hasClass("active")) {
            $(this).children().toggleClass("active");
            $(".caret").removeClass("active");

        } else {
            $(".caret").children().removeClass("active");
            $(this).children().toggleClass("active");
            $(".caret").removeClass("active");
            $(this).addClass("active");
        }

    });
});
