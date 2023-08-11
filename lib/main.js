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
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3, // Show only 3 slides at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        variableWidth: true,
        dots: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});