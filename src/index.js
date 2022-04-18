import "./scss/_base.scss";
import "./scss/_header.scss";
import "./scss/_categories.scss";
import "./scss/_carousal.scss";
import "./scss/_footer.scss";
import "./scss/_cart.scss";
import "./scss/_dropdown.scss";
import "./scss/_plp.scss";
import "./scss/_product.scss";
import "./scss/_registration.scss";


window.addEventListener('DOMContentLoaded', () => {
        if(document.getElementsByClassName('home-page-wrapper').length){
                var slidePosition = 1;
                SlideShow(slidePosition);
                
                // forward/Back controls
                var forward=document.getElementById("forward");
                        forward.addEventListener("click", plusSlides, false);
                        forward.parameter=1;

                var backward=document.getElementById("Back");
                        backward.addEventListener("click", plusSlides, false);
                        backward.parameter=-1;

                function plusSlides(evt) {
                        SlideShow(slidePosition += evt.currentTarget.parameter);
                }
                //  images controls
                var current=document.getElementById("dots-one"),
                currentTwo=document.getElementById("dots-two"),
                currentThree=document.getElementById("dots-three"),
                currentFour=document.getElementById("dots-four"),
                currentFive=document.getElementById("dots-five");
                        current.addEventListener ("click", currentSlide, false);
                        currentTwo.addEventListener ("click", currentSlide, false);
                        currentThree.addEventListener ("click", currentSlide, false);
                        currentFour.addEventListener ("click", currentSlide, false);
                        currentFive.addEventListener ("click", currentSlide, false);
                
                current.parameter=1;
                currentTwo.parameter=2;
                currentThree.parameter=3;
                currentFour.parameter=4;
                currentFive.parameter=5;

                function currentSlide(evt) {
                SlideShow(slidePosition = evt.currentTarget.parameter);
                }
                
                function SlideShow(n) {
                var i,
                slides = document.getElementsByClassName("Containers"),
                circles = document.getElementsByClassName("dots");

                if (n > slides.length) {slidePosition = 1}
                if (n < 1) {slidePosition = slides.length}
                for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
                }
                for (i = 0; i < circles.length; i++) {
                circles[i].className = circles[i].className.replace(" enable", "");
                }
                slides[slidePosition-1].style.display = "block";
                circles[slidePosition-1].className += " enable";
                } 

        }
        // AddToCart
        if(document.getElementsByClassName('cart-page-wrapper').length){
                document.getElementById('cart-value').innerHTML='1 items'
        }
        
    });

