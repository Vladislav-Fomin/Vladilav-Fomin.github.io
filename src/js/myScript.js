"use strict"

//preloader
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

//navigation
$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();

    $('.section').each((i, el) => {

        if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
            $('nav a').each((i, el) => {
                if ($(el).hasClass('active')) {
                    $(el).removeClass('active');
                }
            });

            $('nav li:eq(' + i + ')').find('a').addClass('active');
        }
    });
});

$('a[href^="#"]').click(function () {
    let varHref = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(valHref).offset().top - 20 + "px"
    });
});

//lazy-loading
const imageObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '50px',
    });

document
    .querySelectorAll("img")
    .forEach((image) => imageObserver.observe(image));

//calculate
function calculate(){
    let price = parseInt($("#select1 option:selected").val()) + parseInt($("#select2 option:selected").val()) + parseInt($("#select3 option:selected").val());
    let days = parseInt($("#select1 option:selected").attr("days")) + parseInt($("#select2 option:selected").attr("days")) + parseInt($("#select3 option:selected").attr("days"));
    $(".days .digit").text(days);
    $(".price .digit").text(price);
 }
$("select").on("change", function(){
    calculate();
});
calculate();
               
//magnific-popup
$(document).ready(function () {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {   
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      
            }
    });
});

//spincrement
$(document).ready(function () {
    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.spincrement');
    elements.each((i, el) => {
        observer.observe(el);
    });
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                $('.spincrement').spincrement({
                    thousandSeparator: ",",
                    duration: 1200
                    });
                }
            });
        }
});

//slick-slider
$(function () {
    $('.case_slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        prevArrow: "<img src='img/iconmonstr-arrow-64.svg' class='prev' alt='1'>",
        nextArrow: "<img src='img/iconmonstr-arrow-63.svg' class='next' alt='2'>",
    });
});

$(function () {
    $('.rev_slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true
    });
});