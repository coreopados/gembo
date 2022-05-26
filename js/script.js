$(document).ready(function () {


    stickyFooter();
    hideNews();
    replaceTitle();

    let s = $(".articleContentWr p:first-of-type").text();
    $(".articleContentWr p:first-of-type").prepend("<span class='largeSymbol'>" + s[0] + "</span>");


    $("section").each(function(){
        if($("section").hasClass("mtp")) {
            $(".wrapper").css("backgroundColor", "#e8e8e8");
        }
    })


    $(".eventPopupCloseBtn").on("click", function () {
        $(this).parent().removeClass("active");
    });
    $("#small .fc-next-button.fc-button").on("click", function() {
        $("#large .fc-next-button.fc-button").click()
        mettingsTitleAddToPagin()
    })
    $("#small .fc-prev-button.fc-button").on("click", function() {
        $("#large .fc-prev-button.fc-button").click()
        mettingsTitleAddToPagin()
    })
    $(".meetingPagination .newsPageLeftBtn").on("click", function() {
        $("#small .fc-prev-button.fc-button").click()
        mettingsTitleAddToPagin()
    })
    $(".meetingPagination .newsPageRightBtn").on("click", function() {
        $("#small .fc-next-button.fc-button").click()
        mettingsTitleAddToPagin()
    })

    mettingsTitleAddToPagin();



    $(".showMoreNews").on("click", function () {
        $(this).fadeOut(300)
        $(".newsHelpingWrapper").children().slideDown(300)
    })

    // lastNewsSlider
    $(".lastNewsSlider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })

    // subdsribe validation
    $(".subscribeForm").on("submit", function (e) {
        let field = $(this).find("input.email");
        let checkbox = $(this).find("input.checkbox");
        console.log(checkbox.is(":checked"))
        if (!field.val()) {
            field.parent().addClass("error")
            e.preventDefault();
        }
        if (!checkbox.is(":checked")) {
            checkbox.parent().addClass("error")
            e.preventDefault();
        }

    }).on("change", "input", function () {
        $(this).parent().removeClass("error")
    })

    //mobile nav
    $(".showNavBtn").on("click", function () {
        if ($(this).hasClass("active")) {
            $(".navCell").removeClass("active")
            $(this).removeClass("active")
        } else {
            $(".navCell").addClass("active")
            $(this).addClass("active")
            $(".contactsRow.header, .showContactsBtn").removeClass("active")
        }
    })

    //mobile contacts
    $(".showContactsBtn").on("click", function () {
        if ($(this).hasClass("active")) {
            $(".contactsRow.header").removeClass("active")
            $(this).removeClass("active")
        } else {
            $(".contactsRow.header").addClass("active")
            $(this).addClass("active")
            $(".navCell, .showNavBtn").removeClass("active")
        }
    })

    //photos popup

    $(".photos").on("click", ".photosGridButton", function () {

        if ($(this).parent().data("type") === ("p")) {
            let a = $(this).parent().find("img").data("big");

            $("body").css("overflow", "hidden");
            $(".photosPopup").find("img").prop("src", a).fadeIn(1);
            $(".photosPopup").addClass("show");
        } else if ($(this).parent().data("type") === ("v")) {
            let b = $(this).parent().find("img").data("vid");

            $(".photosPopup").find("iframe").prop("src", b).fadeIn(1);
            $(".photosPopup").addClass("show");
        }

    });
    $(".photosPopupMask").on("click", function () {
        $("body").css("overflow", "auto");
        $(".photosPopup").removeClass("show");
        $(".photosPopup").find("img").prop("src", "").fadeOut(1);
        $(".photosPopup").find("iframe").prop("src", "").fadeOut(1);
    })

    // photos mobile slider
    $('.photosMobileSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true
    });
    $(".photosMobileNavItem").on("click", function () {

        $(this).addClass("active").siblings().removeClass("active")
        let slideIndex = $(this).index();
        $('.photosMobileSlider')[0].slick.slickGoTo(parseInt(slideIndex));


    });

    $('.photosMobileSlider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        try {
            let a = $(".photosMobileSlider iframe")[currentSlide].src;
            $(".photosMobileSlider").find("iframe")[currentSlide].src = a;
        } catch (err) {
            console.log("it is images slider")
        }

    });


    // photos tabs
    $(".photosMobileNav.active").children().each(function () {
        let copy = $(this).find(".photoHelpWr").clone()
        $('.photosMobileSlider').slick("slickAdd", copy)
    })

    $(".photosMobileTabsList").on("click", "li", function () {
        $(".photosMobileSlider").find("iframe").prop("src", "")
        $(this).addClass("active").siblings().removeClass("active")
        let a = $(this).prop("id");

        $(".photosMobileTabsContent").children().each(function () {
            if ($(this).data("for") === a) {
                $(this).addClass("active").siblings().removeClass("active")
            }
        })


        $(".photosMobileSlider .slick-track").children().each(function () {
            $('.photosMobileSlider').slick("slickRemove", 0);
        })


        $(".photosMobileNav.active").children().each(function (i) {
            let copy = $(this).find(".photoHelpWr").clone()
            $('.photosMobileSlider').slick("slickAdd", copy)
        })

    })

    $(".ourTeamSlider").slick({
        slidesToScroll: 1,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            }
        ]
    })

    $(".partnersSlider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    })

    $('.audienceScrollBtn').on('click', function(){
        let href = $(this).attr('href'), elem = $(document).find(href);
        if(elem.length > 0) {
            let posY = elem.eq(0).offset().top;
            $('html, body').animate({
                scrollTop: posY
            }, 1000);
        }
        return false;
    });

});

$(window).resize(function () {
    stickyFooter();
    hideNews();
    replaceTitle();
})

// sticky footer
function stickyFooter() {
    const footer = $(".footer").outerHeight()
    $(".wrapper").css("minHeight", $(window).outerHeight(true) - footer + "px");
}

function hideNews() {
    if ($(window).width() <= 600) {
        $(".newsHelpingWrapper").children().each(function () {
            if ($(this).index() === 0) {
                return
            } else {
                $(this).slideUp(1)
            }
        })
    } else {
        $(".newsHelpingWrapper").children().each(function () {
            $(this).slideDown(1)
        })
    }
}

function mettingsTitleAddToPagin() {
    let calendarTitle = $("#small").find(".fc-toolbar-title").text();
    $(".paginTitle").text(calendarTitle)
}

function replaceTitle() {
    if($(window).width() <= 480) {
        $(".articleTitle .articleTitleHead").prependTo(".articleForMobile");
        $(".articleAthor, .articleTitleDate").appendTo(".articleForMobile");
    } else {
        $(".articleTitleHead, .articleTitleDate").appendTo(".articleTitle");
        $(".articleAthor").prependTo(".articleTitle");
    }
}