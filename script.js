const hamburger = document.getElementById("hamburger");
const list = document.getElementsByClassName("lists");

hamburger.addEventListener("click", () => {
    for (let i = 0; i < list.length; i++){
    list[i].classList.toggle('active');
    }
});