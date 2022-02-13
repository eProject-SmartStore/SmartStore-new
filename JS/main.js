/*Big-Topic*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

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
/*Trending-Items*/
let index = 0;
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNumber = document.querySelectorAll('.products')
console.log(rightbtn)
console.log(leftbtn)
console.log(imgNumber)
rightbtn.addEventListener("click", function () {
    index = index + 1
    if(index>imgNumber.length-1){
        index=0
    }
    document.querySelector(".slider-product-one-content-items-container").style.right = index *100+"%"
})

leftbtn.addEventListener("click", function () {
    index = index - 1
    if(index<=0){
        index = imgNumber.length-1
    }
    document.querySelector(".slider-product-one-content-items-container").style.right = index *100+"%"
})
