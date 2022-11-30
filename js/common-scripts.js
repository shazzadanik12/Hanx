! function (e) {
    e(function () {
        e(".menu").click(function () {
                e("body").addClass("navShown"), e(".mobile-nav").fadeIn()
            }), e(".close-btn").click(function () {
                e("body").removeClass("navShown"), e(".mobile-nav").fadeOut()
            }), e(".has-sub-nav").mouseenter(function () {
                e("body").addClass("subnav-shown"), e(".dropdown-wrap").show()
            }), e(".has-sub-nav").mouseleave(function () {
                e("body").removeClass("subnav-shown"), e(".dropdown-wrap").hide()
            }), e(".cart").click(function () {
                e("body").addClass("cartShown")
            }), e(".cart-back").click(function () {
                e("body").removeClass("cartShown")
            }),
            e(window).width() < 769 && e(".sponsor-item-wrap").marquee({
                duration: 5e3,
                gap: 5,
                delayBeforeStart: 0,
                direction: "left",
                duplicated: !0
            }),
            e(".product-item-wrap").length && (e(".product-item-wrap").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: !0,
                autoplay: !0,
                arrows: !1,
                dots: !1,
                responsive: [{
                    breakpoint: 768,
                    settings: "unslick"
            }]
            }), e(window).on("resize", function () {
                e(".product-item-wrap").slick("resize")
            })), e(".slide-into-wrap-item").length && (e(".slide-into-wrap-item").slick({
                autoplay: !0,
                autoplaySpeed: 1500,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: !0,
                arrows: !1,
                dots: !1,
                responsive: [{
                    breakpoint: 768,
                    settings: "unslick"
            }]
            }), e(window).on("resize", function () {
                e(".slide-into-wrap-item").slick("resize")
            })), e(".review-item-wrap").slick({
                autoplay: !1,
                autoplaySpeed: 1500,
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: !0,
                arrows: !1,
                dots: !1,
                responsive: [{
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
            }, {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
            }, {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
            }]
            })





        if ($("select.styled-select").length) {
            $("select.styled-select").selectric({

            });
        }



        $(".shop-accordion-item").each(function () {
            var $this = $(this);
            $this.find(" > h6").on("click touch", function () {
                $(".shop-accordion-item").removeClass("accordion-active")
                $(".shop-accordion-content").slideUp();
                if ($this.find(".shop-accordion-content:visible").length) {
                    $(".shop-accordion-item").removeClass("accordion-active")
                    $(".shop-accordion-content").slideUp();
                } else {
                    $this.addClass("accordion-active")
                    $(".shop-accordion-content").slideUp();
                    $this.find(" > .shop-accordion-content").slideDown();
                }
            })
        })


        if ($('.shop-item-wrap').length) {
            $('.shop-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: true,
                autoplay: false,
                autoplaySpeed: 2000,
                infinite: true,
                dots: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.shop-item-wrap').slick('resize');
            });
        }



        $('.tab-triger ul li').click(function () {
            $('.tab-triger ul li').removeClass('tab-active');
            $(this).addClass('tab-active');
            $('.tab-item').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });




    })
}(jQuery);
var mac = 0;

function increaseCount(e, o) {
    var s = o.previousElementSibling,
        i = parseInt(s.value, 10);
    i = isNaN(i) ? 0 : i, i++, s.value = i
}

function decreaseCount(e, o) {
    var s = o.nextElementSibling,
        i = parseInt(s.value, 10);
    i > 1 && (i = isNaN(i) ? 0 : i, i--, s.value = i)
}
1 == (mac = navigator.userAgent.indexOf("Mac") > 0 ? 1 : 0) ? $("body").addClass("mac-os") : $("body").addClass("win-os");
