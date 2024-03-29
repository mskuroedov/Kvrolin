$(window).on('scroll', function (e) {
    if (window.pageYOffset > 50) {
        $('.header').addClass('--highlighten')
    } else {
        $('.header').removeClass('--highlighten')
    }
});
/*
 * Header mobile search
 */
let mobileSearchBlock = $('.header__mobile-search'),
    mobileSearchInput = $('.header__mobile-search input');

$('#header-search-icon').on('click', function (e) {
    e.preventDefault();
    if (mobileSearchBlock.is(':visible')) {
        mobileSearchBlock.hide();
    } else {
        mobileSearchBlock.show();
        mobileSearchInput.focus();
    }
})
$(window).on('resize', function (e) {
    if (window.innerWidth > 1023 && mobileSearchBlock.is(':visible')) {
        mobileSearchBlock.hide();
    }
})

/*
 * Header mobile menu
 */
function closeMobileMenu() {
    $('.mobile__menu').addClass('--closing');
    setTimeout(() => {
        $('.mobile__menu').removeClass('--open');
        $('.mobile__menu').removeClass('--closing');
        $('body').removeClass('mobile-menu-opened')
        $('#main-menu').show();
        $('#catalog-menu').hide();
    }, 250)
}

$('.header .menu-btn').on('click', function (e) {
    e.preventDefault();
    $('.mobile__menu').addClass('--open');
    $('body').addClass('mobile-menu-opened')
})
$('.mobile__menu .close-btn').on('click', closeMobileMenu)
$('.mobile__menu nav a:not(.catalog-link)').on('click', closeMobileMenu)
$('.mobile__menu__bg').on('click', closeMobileMenu);

//catalog navigation
$('.mobile__menu nav a.catalog-link').on('click', function () {
    $('#main-menu').hide();
    $('#catalog-menu').show();
})
$('.mobile__menu .back-btn').on('click', function () {
    $('#main-menu').show();
    $('#catalog-menu').hide();
})


