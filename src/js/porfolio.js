$('.portfolio-item__images .owl-carousel').owlCarousel({
    dots: false,
    loop: true,
    nav: true,
    items: 1,
    margin: 1,
    navText: ['<span></span>', '<span></span>']
})

let mobileDisplayedItems = 4,
    maxItems = $('.portfolio-item').length

function mobilePortfolioAppearance() {
    if (window.innerWidth <= 1023 && mobileDisplayedItems !== maxItems) {
        $('.portfolio-item').hide()
        for (let i = 1; i <= mobileDisplayedItems; i++) {
            $('.portfolio-item').eq(i).show()
        }
        $('.show-more').show()
    } else {
        $('.portfolio-item').show()
        $('.show-more').hide()
    }
}

mobilePortfolioAppearance()
$(window).on('resize', mobilePortfolioAppearance);

$('.show-more').on('click', function () {
    mobileDisplayedItems += 4;
    for (let i = 0; i <= mobileDisplayedItems; i++) {
        $('.portfolio-item').eq(i).show()
        if (i === maxItems) {
            $(this).hide()
        }
    }
})