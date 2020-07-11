$('.minuse').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $span = $this.parent('div').parent('div').find('span');
    var value = parseInt($span.text());

    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }

    $span.text(value);

});

$('.pluss').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $span = $this.parent('div').parent('div').find('span');
    var value = parseInt($span.text());
    if (value < 100) {
        value = value + 1;
    } else {
        value = 100;
    }
    $span.text(value);
});

$('img').on('click', function(e) {
    $("#my-cart-table tr").each(function() {
        let val_quantity = parseInt($(this).find('#quantity').text());
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
                    $('#sum').text(total);
                    let sum = parseInt($('#sum').text());
                    let service = parseInt($('#service').text());
                    $("#my-cart-grand-total").text(parseInt(sum + service));
                }
            });
        }
    });
});

$("#discount").on("change keyup blur", function() {
    let sum = parseInt($('#sum').text());
    let service = parseInt($('#service').text());
    let dis = parseInt($('#takhfif').text());
    let discount = {
        dis1: "mammad33",
        dis2: 66666
    };
    for (let key in discount) {
        Object.values(discount);
        let discount_val = $("#discount").val();
        if (discount_val == discount.dis1) {
            $("#discount").css('background-color', '#caffff');
            $(".shape").css('display', 'none');
            $(".correct").css('display', 'block');
            $("#my-cart-grand-total").text(parseInt(sum + service - dis));
        } else if (discount_val == discount.dis2) {
            $("#discount").css('background-color', '#caffff');
            $(".shape").css('display', 'none');
            $(".correct").css('display', 'block')
            $("#my-cart-grand-total").text(parseInt(sum + service - dis));
        } else {
            $("#discount").removeAttr('placeholder');
            $(".shape").css('display', 'block');
            $(".correct").css('display', 'none');
            $("#discount").attr("placeholder", "wrong code");
            $("#discount").css('background-color', 'rgba(231, 76, 60, 0.18)');
            $("#my-cart-grand-total").text(parseInt(sum + service));
        }
    }
});