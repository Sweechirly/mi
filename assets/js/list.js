$(function() {
    $('.list ul li').on("touchend", function() {
        var index = $(this).index();
        var top = $('.list-wrap').eq(index).offset().top;
        $('body,html').stop().scrollTop(top);
        $('.list ul li').removeClass("active");
        $(this).addClass("active");
    })

    var oTop = $("header").offset().top;
    var sTop = 0;
    var tops = [];
    $('.list-wrap').each(function(key) {
        tops.push($(this).offset().top);
    })
    var last = $('.list-wrap').eq(0).height() + tops[$('.list-wrap').length - 1];
    tops.push(last);
    console.log(tops);
    $(window).scroll(function() {
        sTop = $(this).scrollTop();
        console.log(sTop);
        if (sTop > oTop) {
            $(".list").css({ "position": "fixed", "top": 0 });
            $("header").hide();
        } else {
            $(".list").css({ "position": "absolute", "top": "1.16rem" });
            $("header").show();
        }


        for (var i = 0; i < tops.length; i++) {
            if ((sTop > tops[i] && sTop < tops[i + 1])) {
                $('.list ul li').removeClass('active').eq(i + 1).addClass('active');
                break;
            }
        }
    });

})