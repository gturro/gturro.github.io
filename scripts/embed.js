const linkList = document.getElementById("nav-links");

const carousel = document.getElementById("front-end-carousel");

linkList.addEventListener('click', function(){
    carousel.classList.add("visible");
    carousel.classList.remove("hidden");
})