// 1. Mobile Menu Toggle Logic
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
     
    navMenu.classList.toggle('show');
});

 
function showAlert() {
    alert("Welcome To My Brand .");
}