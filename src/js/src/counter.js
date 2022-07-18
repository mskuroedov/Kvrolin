(function ($) {
    $.fn.initCounter = function () {
        $(this).append(`
            <input type="text">
            <button class="add">
                <svg width="20" height="20" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 11V15H11V11H15V9H11V5H9V9H5V11H9Z" fill="currentColor"/>
                </svg>
            </button>
            <button class="sub">
                <svg width="20" height="20" viewBox="0 0 20 20">
                    <rect x="5" y="9" width="10" height="2" fill="currentColor"/>
                </svg>
            </button>
        `)

        let value = 1,
            suffix = '';
        if (!!$(this).data('value')) value = $(this).data('value')
        if (!!$(this).data('suffix')) suffix = $(this).data('suffix')

        const $counterRoot = $(this),
            $counterInput = $(this).find('input')[0],
            $plusBtn = $counterRoot.find('.add')[0],
            $subBtn = $counterRoot.find('.sub')[0];


        $($counterInput).on('change', function (e) {
            $(this).val(`${value} ${suffix}`);
        })
        $($plusBtn).on('click', function (e) {
            value++
            $($counterInput).trigger('change')
        })
        $($subBtn).on('click', function (e) {
            if (value <= 1) return;
            value--
            $($counterInput).trigger('change')
        })
        $($counterInput).val(value).trigger('change')

        this.getValue = function () {
            return value;
        }

        return this;
    };
}(jQuery));