function countdown() {
    var seconds = document.getElementById("seconds").value;
    //globle variable

    function tick() {
        seconds = seconds - 1;      //minus seconds by 1 every time the code is ran
        timer.innerHTML = seconds;  //timer inside the html will display seconds
        var time = setTimeout(tick, 1000);  //will not start function until after
                                            //a set amount of time
        if (seconds == -1) {
            alert ("Times up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

var slideIndex = 1;
showSlides(slideIndex);

//next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}