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

const navigationMobile = function (e) {
    if (windowWidth < 992) {
        $("#header .header-inner .header-inner_middle .header-navigation > ul > li > ul").each(function (index) {
            $(this).prev().attr({
                "href": "#subMenu" + index,
                "data-toggle": "collapse"
            });
            $(this).attr({
                "id": "subMenu" + index,
                "class": "collapse list-unstyled mb-0",
                "data-parent": "#hasMenu"
            });
        })

        /*
         * Call menu mobile
         */
        let body = $('body'),
            hamburgerIcon = $('#call-header_mobile');

        hamburgerIcon.click(function (e) {
            if (!body.hasClass('is-show_navigation')) {
                body.attr({
                    'class': 'is-show_navigation',
                    'style': 'overflow-y: hidden'
                });
                document.addEventListener('touchmove', handleTouchMove, {passive: false});
                $('#user-mobile').removeClass('active');
            } else {
                body.attr({
                    'class': '',
                    'style': ''
                });
                document.removeEventListener('touchmove', handleTouchMove);
            }
        });
    }
}

const callUserMobile = function () {
    $('#call-user_mobile, #header-overlay').click(function () {
        $(this).parent().toggleClass('active');
        $('body').attr({
            'class': '',
            'style': ''
        });
        document.removeEventListener('touchmove', handleTouchMove);
    });

    $(document).mouseup(function (e) {
        let elm = $('#user-mobile');
        elm.is(e.target) || 0 !== elm.has(e.target).length || (
            elm.removeClass('active')
        )
    })
}


const slideApi = function () {
    new Swiper('#slide-api', {
        speed: 1000,
        spaceBetween: 12,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 2.3,
            },
            600: {
                slidesPerView: 3.3,
            },
            991: {
                slidesPerView: 4.3,
            },
            1024: {
                slidesPerView: 5.3,
            },
            1281: {
                slidesPerView: 6,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            }
        }
    });
}


const viewPass = function () {
    let btnViewPass = $('.account-form_item .account-form_viewpass');
    btnViewPass.click(function (e) {
        e.stopPropagation();
        let input = $(this).parent().children('input');
        if (input.attr('type') === 'password') {
            input.attr('type', 'text');
            $(this).children('i').attr('class', 'fas fa-eye-slash');
        } else {
            input.attr('type', 'password');
            $(this).children('i').attr('class', 'fas fa-eye');
        }
    });
}


$(function () {
    navigationMobile();
    headerScroll();
    callUserMobile();
    slideApi();

    // Form
    viewPass();
});