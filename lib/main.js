'use strict';

document.addEventListener('DOMContentLoaded', function () {
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    $navbarBurgers.forEach(function (el) {
        el.addEventListener('click', function () {

            var target = el.dataset.target;
            var $target = document.getElementById(target);

            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
    });
});

$(document).ready(function () {
    $(".slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth: true,
        infinite: true,
        draggable: true,
        dots: true,
        centerMode: true,
        prevArrow: $(".carousel-previous"),
        nextArrow: $(".carousel-next"),
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2, // Show 2 slides on medium screens
                slidesToScroll: 2,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1, // Show 1 slide on small screens
                slidesToScroll: 1
            }
        }]
    });
});