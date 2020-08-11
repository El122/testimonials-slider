let slide = document.getElementsByClassName("slide");
let slideNum = 0;

function nextSlide() {
    slide[slideNum].style.display = "none";
    if (slideNum == 0) {
        slideNum = 1;
        slide[slideNum].style.display = "flex";
    } else {
        slideNum = 0;
        slide[slideNum].style.display = "flex";
    }
}