function countAllItems() {
    let count = 0
    let sum = 0
    $('.sum-val').each((i, item) => {
        sum += parseInt($(item).text())
    })
    $('.counter input').each((i, item) => {
        count += parseInt($(item).val())
    })

    $('#total-amount').text(count)
    $('#total-price').text(sum)
}

$('.counter').each((i, item) => {
    $(item).initCounter().on('change', function () {
        let count = parseInt($(this).find('input').val()),
            price = parseInt($(this).parent().parent().find('.price').text()),
            sumField = $(this).parent().parent().find('.sum-val')

        $(sumField).text(`${count * price} ₽`)
        countAllItems()
    });
})