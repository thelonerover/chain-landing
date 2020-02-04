import "normalize.css";
import "owl.carousel/dist/assets/owl.carousel.css"
import "../scss/main.scss";

import "owl.carousel/dist/owl.carousel.js"

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 6,
        dots: true,
        dotClass: ["owl-dot owl-dot_outlined"]
    });
});