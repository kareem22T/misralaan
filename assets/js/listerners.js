var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
    },
});


$(".show_aside, .hide-content").on("click", function (e) {
    e.preventDefault()
    if ($("aside").is(":visible")) {
        $("aside, .hide-content").addClass("animate__slideOutRight").fadeOut()
        $("aside, .hide-content").removeClass("animate__slideInRight")
        // $(".body_wrapper").removeClass("margin_right")
    }
    else {
        $("aside, .hide-content").addClass("animate__slideInRight").fadeIn()
        $("aside, .hide-content").removeClass("animate__slideOutRight")
        // $(".body_wrapper").addClass("margin_right")
    }
})