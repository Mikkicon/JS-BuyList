console.log("Hi ");

$(document).ready(function () {
    var $list = $(".everything");
    var ONE_ROW_HTML = $(".product").html();
    var for_amount = $(".Zalishok").html();
    // console.log($list);
    function addItem(title){
        var $node = $(ONE_ROW_HTML);

        var $amount_right = $(for_amount);

        var $quantity_label = $node.find(".nomer");

        var $right_label = $amount_right.find(".amount");

        var quantity = 1;

        $node.find(".text1").text(title);
        $node.find(".plus").click(function () {
            $node.find(".minus").prop("disabled",false);
            quantity++;
            $quantity_label.text(quantity);
            // $right_label.text(quantity);
            $right_label.text(quantity);
        });

        $node.find(".minus").click(function () {
            if (quantity >1){
                $node.find(".minus").prop("disabled",false);
                quantity--;
                $quantity_label.text(quantity);
                $right_label.text(quantity);
            }
            if(quantity === 1){
                $node.find(".minus").prop("disabled",true);
            }

        });

        $node.find(".x").click(function () {
            $node.hide();
        });

        $node.find(".add").click(function () {
            $node.fadeOut(250,function () {
                $node.addClass("is-bought");
                $node.find();
                $node.fadeIn(250);

            })

        });
        $node.find(".un-add").click(function () {
            $node.fadeOut(250,function () {
                $node.removeClass("is-bought");
                $node.fadeIn(250);
            })
        });


        $node.find(".text1").click(function () {
            $node.find(".text1").hide();
            $node.find(".edit").show();
            $node.find(".edit").val(title);
        });


        $node.find(".edit").focusout(function () {
            $node.find(".text1").show();
            $node.find(".edit").hide();
            title =  $node.find(".edit").val();
            $node.find(".text1").text(title);
        });
        //
        // $node.find(".edit").keypress(function (e) {
        //     if ( e.which() === 13){
        //         alert("FJDSAGJVFDS");
        //         $node.find(".text1").show();
        //         $node.find(".edit").hide();
        //         title =  $node.find(".edit").val();
        //         $node.find(".text1").text(title);
        //     }
        // });

        $list.prepend($node);//prepend

    }
    addItem("Tomato");
    addItem("Potato");
    addItem("Carrot");
    var $new_input = $(".search");

    $(".button").click(function () {
        var new_name = $new_input.val();

        if (new_name.trim()) {
            addItem(new_name);
            $new_input.val("");
            $new_input.focus();
        }
    })




});

