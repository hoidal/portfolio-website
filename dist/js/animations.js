// Typewriter effect
const instance = new Typewriter("#typewriter", {
    strings: ["software engineer.", "Web desIgner.", "photographer.", "adventurer."],
    autoStart: true,
    loop: true
});

// scrolling parallax effect
const rellax = new Rellax(".rellax");

// scrolling fade/zoom in effect
AOS.init();

// Sticky and Current Nav Bar
window.onscroll = () => updateNavBar();
const navBar = document.querySelector(".main-nav");
const topOfNav = navBar.offsetTop;

const updateNavBar = () => {
    fixNav();
    showCurrentPage();
}
 

const fixNav = () => {
    if(window.pageYOffset >= topOfNav) {
        navBar.classList.add("fixed-nav") 
    } else {
        document.body.style.padding = 0;
        navBar.classList.remove("fixed-nav");
    }
}


