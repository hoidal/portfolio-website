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
        nextSection.style.paddingTop = "8rem";
    } else {
        navBar.classList.remove("fixed-nav");
        nextSection.style.paddingTop = "4rem";
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
    if(pageYOffset < (aboutMeTop - 300)) {
        navAbout.className = "";
        navHome.className = "current";
    } else if((pageYOffset >= aboutMeTop - 300) && (pageYOffset <= workTop - 300)) {
        navAbout.className = "current";
        navHome.className = "";
        navWork.className = "";
    } else if((pageYOffset >= workTop - 300) && (pageYOffset <= photographyTop - 300)) {
        navWork.className = "current";
        navAbout.className = "";
        navPhotography.className = "";
    } else if((pageYOffset >= photographyTop) - 300 && (pageYOffset <= contactTop - 300)) {
        navPhotography.className = "current";
        navWork.className = "";
        navContact.className = "";
    } else if((pageYOffset >= contactTop -300)) {
        navContact.className = "current";
        navPhotography.className = "";
    }
}


