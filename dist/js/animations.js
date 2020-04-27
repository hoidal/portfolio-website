// Typewriter effect
const instance = new Typewriter("#typewriter", {
    strings: ["software devloper.", "Web desIgner.", "photographer.", "adventurer."],
    autoStart: true,
    loop: true
});

// scrolling parallax effect
const rellax = new Rellax(".rellax");

// scrolling fade/zoom in effect
AOS.init();

// Sticky and Current Nav Bar
window.onscroll = () => updateNavBar();

// Nav Bar Dispatch Function
const updateNavBar = () => {
    fixNav();
    showCurrentPage();
}
 
// Sticky Nav Bar
const navBar = document.querySelector(".main-nav");
const nextSection = document.querySelector("#home-a")
const topOfNav = navBar.offsetTop;
const fixNav = () => {
    if(window.pageYOffset >= topOfNav) {
        navBar.classList.add("fixed-nav");
    } else {
        navBar.classList.remove("fixed-nav");
    }
}

// Nav Bar Current Page Highlighting
// Nav List Items
const navHome = document.querySelector("#nav-home");
const navAbout = document.querySelector("#nav-about");
const navWork = document.querySelector("#nav-work");
const navPhotography = document.querySelector("#nav-photography");
const navContact = document.querySelector("#nav-contact");

//Sections
const aboutMe = document.querySelector("#home-a");
const aboutMeTop = aboutMe.offsetTop;
const workSection = document.querySelector("#home-d");
const workTop = workSection.offsetTop;
const photographySection = document.querySelector("#home-e")
const photographyTop = photographySection.offsetTop;
const contactSection = document.querySelector("#home-f");
const contactTop = contactSection.offsetTop;

const showCurrentPage = () => {
    const halfView = (document.documentElement.clientHeight / 2);
    if(pageYOffset < (aboutMeTop - halfView)) {
        navAbout.className = "";
        navWork.className = "";
        navPhotography.className = "";
        navContact.className = "";
        navHome.className = "current";
    } else if((pageYOffset >= aboutMeTop - halfView) && (pageYOffset <= workTop - halfView)) {
        navAbout.className = "current";
        navPhotography.className = "";
        navContact.className = "";
        navHome.className = "";
        navWork.className = "";
    } else if((pageYOffset >= workTop - halfView) && (pageYOffset <= photographyTop - halfView)) {
        navWork.className = "current";
        navAbout.className = "";
        navPhotography.className = "";
        navContact.className = "";
        navHome.className = "";
    } else if((pageYOffset >= photographyTop - halfView) && (pageYOffset <= contactTop - halfView)) {
        navPhotography.className = "current";
        navWork.className = "";
        navContact.className = "";
        navAbout.className = "";
        navHome.className = "";
    } else if((pageYOffset >=  contactTop - halfView)) {
        navContact.className = "current";
        navPhotography.className = "";
        navHome.className = "";
        navAbout.className = "";
        navWork.className = "";
    }
}


