console.log(document.querySelectorAll(".color-icon").length)
setInterval(function () {
    for (let i = 0; document.querySelectorAll(".color-icon").length; i++) {
        document.querySelectorAll(".color-icon")[i].classList.toggle('color-icon-item')

    }

}, 1000)


$(document).ready(function () {
    var num = 50; //number of pixels before modifying styles

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });



    /************* */
    $('#toggle').click(function () {
        $('.navbar-menu').slideToggle();
    })

    $('#find').click(function () {
        $('.navbar-form').slideToggle();
    })

    $('.title_container').click(function () {
        $('.title_content-list').slideToggle();
    })

    $('.call-now').click(function () {
        $('.call-now--form').slideToggle();
    })
    /************************** */

    $("#filter-b-city").change(function () {
        let filter_city_val = $("#filter-b-city option:selected").val();
        let filter_purpose_val = $("#filter-b-purpose option:selected").val();
        console.log(filter_city_val);
        console.log(filter_purpose_val);
        $(".fp-item").hide();
        if (filter_city_val === 'All') {
            if (filter_purpose_val === 'All') {
                $(".fp-item").show();
            } else {
                $(".fp-item").filter(`[data-purpose = '${filter_purpose_val}']`).show();
            }
        } else if (filter_purpose_val === 'All') {
            if (filter_city_val === 'All') {
                $(".fp-item").show();
            } else {
                $(".fp-item").filter(`[data-location = '${filter_city_val}']`).show();
            }
        } else {
            $(".fp-item").filter(`[data-location='${filter_city_val}'][data-purpose='${filter_purpose_val}']`).show();

            console.log($(".fp-item").filter(`[data-location='${filter_city_val}'][data-purpose='${filter_purpose_val}']`));
        }
    });

    $("#filter-b-purpose").change(function () {
        let filter_city_val = $("#filter-b-city option:selected").val();
        let filter_purpose_val = $("#filter-b-purpose option:selected").val();
        console.log(filter_city_val);
        console.log(filter_purpose_val);
        $(".fp-item").hide();
        if (filter_city_val === 'All') {
            if (filter_purpose_val === 'All') {
                $(".fp-item").show();
            } else {
                $(".fp-item").filter(`[data-purpose = '${filter_purpose_val}']`).show();
            }
        } else if (filter_purpose_val === 'All') {
            if (filter_city_val === 'All') {
                $(".fp-item").show();
            } else {
                $(".fp-item").filter(`[data-location = '${filter_city_val}']`).show();
            }
        } else {
            $(".fp-item").filter(`[data-location='${filter_city_val}'][data-purpose='${filter_purpose_val}']`).show();

            console.log($(".fp-item").filter(`[data-location='${filter_city_val}'][data-purpose='${filter_purpose_val}']`));
        }
    });
})
