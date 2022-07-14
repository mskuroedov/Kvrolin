$('#promo-slider-left').owlCarousel({
    dots: true,
    loop: false,
    items: 1,
    margin: 1,
    responsive: {
        0: {
            nav: false,
        },
        1024: {
            nav: true
        }
    },
    navText: ['<span></span>', '<span></span>']
})
$('#promo-slider-right').owlCarousel({
    dots: true,
    loop: false,
    items: 1,
    margin: 1,
    responsive: {
        0: {
            nav: false,
        },
        1024: {
            nav: true
        }
    },
    navText: ['<span></span>', '<span></span>']
})
$('#new-items-slider').owlCarousel({
    loop: false,
    items: 1,
    margin: 30,
    responsive: {
        0: {
            nav: false,
            dots: true,
        },
        1024: {
            nav: true,
            dots: false,
        }
    },
    navText: ['<span></span>', '<span></span>']
})
$('#hot-sales-slider').owlCarousel({
    loop: false,
    items: 1,
    margin: 30,
    responsive: {
        0: {
            nav: false,
            dots: true,
        },
        1024: {
            nav: true,
            dots: false,
        }
    },
    navText: ['<span></span>', '<span></span>']
})
$('#certificates-slider').owlCarousel({
    loop: false,
    responsive: {
        0: {
            items: 1,
            margin: 1,
            dots: true,
        },
        1024: {
            items: 4,
            margin: 30,
        }
    }
})
$('#feedback-slider').owlCarousel({
    loop: false,
    dots: true,
    nav: true,
    margin: 30,
    responsive: {
        0: {
            items: 1,
        },
        1024: {
            items: 2,
        }
    },
    navText: ['<span></span>', '<span></span>']
})
$('#news-slider').owlCarousel({
    loop: false,
    margin: 11,
    dots: true,
    responsive: {
        0: {
            autoWidth: true,
            slideBy: 1,

        },
        1024: {
            items: 3
        }
    },
})
$('#portfolio-slider').owlCarousel({
    loop: false,
    margin: 10,
    dots: true,
    navText: ['<span></span>', '<span></span>'],
    autoWidth: true,
    responsive: {
        1024: {
            nav: true
        }
    },
})