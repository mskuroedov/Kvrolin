//product slider
$(document).ready(function () {

    let sync1 = $("#sync1");
    let sync2 = $("#sync2");
    let slidesPerPage = 4; //globaly define number of elements per page
    let syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        autoplay: false,
        nav: false,
        loop: false,
        responsive: {
            0: {
                dots: true
            },
            1023: {
                dots: false
            }
        },
        responsiveRefreshRate: 200,

    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            loop: false,
            smartSpeed: 200,
            slideSpeed: 500,
            responsive: {
                0: {
                    autoWidth: true,
                    margin: 10
                },
                800: {
                    autoWidth: true,
                    margin: 10
                },
                1200: {
                    autoWidth: true,
                    margin: 10
                }
            },
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        let current = el.item.index;

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        let onscreen = sync2.find('.owl-item.active').length - 1;
        let start = sync2.find('.owl-item.active').first().index();
        let end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start && window.innerWidth < 1200) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            let number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function (e) {

        e.preventDefault();
        let number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});

$('#interesting-products').owlCarousel({
    items:1,
    loop: false,
    dots: true,
    nav: false,
    margin: 30,
})
$('#buy-too-products').owlCarousel({
    items:1,
    loop: false,
    dots: true,
    nav: false,
    margin: 30,
})
$('#feedback-slider').owlCarousel({
    loop: false,
    margin: 30,
    responsive: {
        0: {
            items: 1,
            dots: true,
            nav: false,
        },
        1024: {
            items: 2,
            dots: true,
            nav: true,
        }
    },
    navText: ['<span></span>', '<span></span>']
})
$('#feedback-slider').append('<button class="button button--outline-secondary">Оставить отзыв</button>')