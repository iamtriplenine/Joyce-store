document.getElementById('slider').style.scrollBehavior = "smooth";

const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("side-menu");
const overlay = document.getElementById("overlay");

menuBtn.onclick = () => {
    menuBtn.classList.toggle("active");
    sideMenu.classList.toggle("open");
    overlay.classList.toggle("show");
};



overlay.onclick = () => {
    menuBtn.classList.remove("active");
    sideMenu.classList.remove("open");
    overlay.classList.remove("show");
};




const yearElement = document.getElementById("year");
yearElement.textContent = new Date().getFullYear();
