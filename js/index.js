const toggle = document.getElementsByClassName("toggle")[0];
const navLinkContainer = document.getElementsByClassName("nav-link-container")[0];
toggle.addEventListener('click',()=>{
    navLinkContainer.classList.toggle('active');
})