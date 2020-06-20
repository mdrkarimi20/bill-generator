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
        let val_price = parseInt($(this).find('#price').text());
        $(this).find('#total').text(val_quantity * val_price);

        $("#my-cart-table td").each(function(i) {
            calculateColumn(i);
        });

        function calculateColumn(index) {
            let total = 0;
            $("#my-cart-table tr").each(function() {
                let value = parseInt($('#total', this).eq(index).text());
                if (!isNaN(value)) {
                    total += value;
                    $('#my-cart-grand-total').text(total);
                }
            });
        }
    });
});

$("body").on("click", "#remove", function() {
    $(this).parents("tr").remove();
});

// $("#takfif").on


// https://www.studentstutorial.com/jquery/jquery-calculate-discount
// $(document).on("change keyup blur", "#chDiscount", function() {
//     var main = $('#cBalance').val();
//     var disc = $('#chDiscount').val();
//     var dec = (disc / 100).toFixed(2); //its convert 10 into 0.10
//     var mult = main * dec; // gives the value for subtract from main value
//     var discont = main - mult;
//     $('#result').val(discont);
// });