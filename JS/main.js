
/*Big-Topic*/
"use strict";
let slideshow = document.querySelector(".slideshow");
let slides = document.querySelectorAll(".slideshow .slide");
let bars = document.querySelectorAll(".bars .bar");
let dots = document.querySelectorAll(".nav-dots .dot ");
let slideTitles = document.querySelectorAll(".slide-title");
let easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";
let easeOutCubic = "cubic-bezier(0.215, 0.61, 0.355, 1)";
let staggeredSlideIn = (element, delay) => {
    return element.animate([
        { transform: "scaleY(0)", transformOrigin: "top" },
        { transform: "scaleY(1)", transformOrigin: "top" }
    ], {
        duration: 800,
        easing: easeInOutQuart,
        fill: "forwards",
        delay: 80 * delay
    });
};
let staggeredSlideOut = (element, delay) => {
    return element.animate([
        { transform: "scaleY(1)", transformOrigin: "top" },
        { transformOrigin: "bottom", offset: 0.001 },
        { transform: "scaleY(0)", transformOrigin: "bottom" }
    ], {
        duration: 800,
        easing: easeInOutQuart,
        fill: "forwards",
        delay: 80 * delay
    });
};
let fadeIn = (element) => {
    return element.animate([
        { opacity: 0, transform: "translateY(100%)" },
        { opacity: 1, transform: "translateY(0)" }
    ], {
        duration: 800,
        easing: easeOutCubic,
        fill: "forwards",
        delay: 350
    });
};
let fadeOut = (element) => {
    return element.animate([
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0, transform: "translateY(-100%)" }
    ], {
        duration: 600,
        easing: easeOutCubic,
        fill: "forwards"
    });
};
let pageTransition = (activeIndex) => {
    slideTitles.forEach(slideTitle => fadeOut(slideTitle));
    Promise.all(Array.from(bars).map((bar, i) => staggeredSlideIn(bar, i).finished)).then(() => {
        setActiveIndex(activeIndex);
        bars.forEach((bar, i) => {
            staggeredSlideOut(bar, i);
        });
        slideTitles.forEach(slideTitle => fadeIn(slideTitle));
    });
};
let setActiveIndex = (activeIndex) => {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[activeIndex].classList.add("active");
    slideshow.style.setProperty("--active-index", `${activeIndex}`);
    slides.forEach(slide => (slide.style.zIndex = `-1`));
    slides[activeIndex].style.zIndex = `0`;
};
// dots
dots[0].classList.add("active");
dots.forEach((dot, activeIndex) => {
    dot.addEventListener("click", () => {
        let currentActiveIndex = slideshow.style.getPropertyValue("--active-index");
        if (Number(currentActiveIndex) !== activeIndex) {
            pageTransition(activeIndex);
        }
    });
});



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

/* Now trending */
let j = 0
const btnRight = document.querySelector('.btn-right')
const btnLeft = document.querySelector('.btn-left')
const nowOne = document.querySelectorAll('.one') 
btnRight.addEventListener("click", function () {
    if (j < nowOne.length) {
        addOnes(j)
        if ( j >= 5) {
            j = j - 5
            removeOnes(j)
            // j = j + 6
        }
    }
    j++
});


btnLeft.addEventListener("click", function () {
    if (j < nowOne.length) {
        if ( nowOne.classList('removeOne') ) {
            removeOnes(j)
        }
    }
    j++
});

function addOnes(j) {
    return nowOne[j].classList.add('removeOne');
}

function removeOnes(j) {
    return nowOne[j].classList.remove('removeOne');
}

