window.onload = function() {
    var slide = document.getElementById("slide"),
        swipeTab = document.getElementsByClassName("swipe-tab");

    for (let i = 0; i < swipeTab.length; i++) {
        swipeTab[i].onclick = function() {
            for (var j = 0; j < swipeTab.length; j++) {
                swipeTab[j].classList.remove("on");
            }
            this.classList.add("on");
        }
    }

    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination',
        autoplay: 5000,
    })
}