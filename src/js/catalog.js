import noUiSlider from 'nouislider';

//catalog filters
function closeFilters() {
    $('.catalog-filters').addClass('--closing');
    setTimeout(() => {
        $('.catalog-filters').removeClass('--open');
        $('.catalog-filters').removeClass('--closing');
        $('body').removeClass('mobile-menu-opened')
    }, 250)
}

$('.open-filters').on('click', function (e) {
    e.preventDefault();
    $('.catalog-filters').addClass('--open');
    $('body').addClass('mobile-menu-opened')
})
$('.catalog-filters .close-btn').on('click', closeFilters)
$('.catalog-filters__bg').on('click', closeFilters);

//catalog filter slider
let priceSlider = document.getElementById('price-slider');

noUiSlider.create(priceSlider, {
    start: [100, 20000],
    connect: true,
    step: 100,
    range: {
        'min': 100,
        'max': 20000
    }
})
priceSlider.noUiSlider.on('slide', function (val) {
    $('#price-range-start').val(val[0])
    $('#price-range-end').val(val[1])
})
priceSlider.noUiSlider.on('set', function (val) {
    $('#price-range-start').val(val[0])
    $('#price-range-end').val(val[1])
})
priceSlider.noUiSlider.set([5000, 10000])
$('#price-range-start').on('change', function (e) {
    priceSlider.noUiSlider.set([
        +$(this).inputmask('unmaskedvalue'),
        +$('#price-range-end').inputmask('unmaskedvalue')
    ])
})

$('#price-range-end').on('change', function (e) {
    priceSlider.noUiSlider.set([
        +$('#price-range-start').inputmask('unmaskedvalue'),
        +$(this).inputmask('unmaskedvalue')
    ])
})