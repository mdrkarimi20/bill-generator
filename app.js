$('.minuse').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }

    $input.val(value);

});

$('.pluss').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value < 100) {
        value = value + 1;
    } else {
        value = 100;
    }

    $input.val(value);
});

$('img').on('click', function(e) {
    $("#my-cart-table tr").each(function() {
        let val_quantity = $(this).find('#quantity').val();
        let val_price = parseInt($(this).find('#price').val());
        $(this).find('#total').val(val_quantity * val_price);

        $("#my-cart-table td").each(function(i) {
            calculateColumn(i);
        });

        function calculateColumn(index) {
            let total = 0;
            $("#my-cart-table tr").each(function() {
                let value = parseInt($('#total', this).eq(index).val());
                if (!isNaN(value)) {
                    total += value;
                    $('#sum').val(total);
                }
            });
        }
    });
});

$("body").on("click", "#remove", function() {
    $(this).parents("tr").remove();
});