let windowWidth = $(window).width();
const handleTouchMove = function (ev) {
    ev.preventDefault();
}
const headerScroll = function (e) {
    if ($(document).scrollTop() > $('#header').innerHeight()) {
        $('#header').addClass('is-scroll');
    } else {
        $('#header').removeClass('is-scroll');
    }
    $(window).scroll(function (e) {
        if ($(document).scrollTop() > $('#header').innerHeight()) {
            $('#header').addClass('is-scroll');
        } else {
            $('#header').removeClass('is-scroll');
        }
    });
}
const slideApi = function () {
    new Swiper('#slide-api', {
        speed: 1000,
        spaceBetween: 12,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            375: {
                slidesPerView: 2,
            },
            600: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            },
            1281: {
                slidesPerView: 6,
            }
        }
    });
}

$(function () {
    headerScroll();
    slideApi();
});