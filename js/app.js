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

$("#discount").on("change keyup blur", function() {
    let sum = parseInt($('#sum').val());
    let service = parseInt($('#service').val());
    let dis = parseInt($('#takhfif').val());
    let discount = {
        dis1: "mammad33",
        dis2: 66666
    };
    for (let key in discount) {
        Object.values(discount);
        let discount_val = $("#discount").val();
        console.log($("#discount").val())
        if (discount_val == discount.dis1) {
            $("#discount").css('background-color', '#caffff');
            $(".shape").css('display', 'none');
            $(".correct").css('display', 'block');
            $("#my-cart-grand-total").val(parseInt(sum + service - dis));
        } else if (discount_val == discount.dis2) {
            $("#discount").css('background-color', '#caffff');
            $(".shape").css('display', 'none');
            $(".correct").css('display', 'block')
            $("#my-cart-grand-total").val(parseInt(sum + service - dis));
        } else {
            $("#discount").removeAttr('placeholder');
            $(".shape").css('display', 'block');
            $(".correct").css('display', 'none');
            $("#discount").attr("placeholder", "wrong code");
            $("#discount").css('background-color', 'rgba(231, 76, 60, 0.18)');
            $("#my-cart-grand-total").val(parseInt(sum + service));
        }
    }
});

$("body").on("click", "#remove", function() {
    $(this).parents("tr").remove();
    $(this).find(".Gradient").remove();
});