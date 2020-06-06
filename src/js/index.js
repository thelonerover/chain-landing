import "normalize.css";
import "owl.carousel/dist/assets/owl.carousel.css"
import "../scss/main.scss";

import "owl.carousel/dist/owl.carousel.js"

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        dots: true,
        dotClass: ["owl-dot owl-dot_outlined"],
        responsive : {
            260: {
                items: 1,
                dots: false,
            },

            368: {
                items: 2
            },

            767: {
                items: 4
            },

            1200: {
                items: 6
            }
        }
    });
});