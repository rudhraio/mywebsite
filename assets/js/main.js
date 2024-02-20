const HomeSection = document.getElementById("home-section");
const AboutMeSection = document.getElementById("about-me-section");
const SkillsSection = document.getElementById("skills-section");
const ProjectsSection = document.getElementById("projects-section");
const BlogsSection = document.getElementById("blogs-section");
const ContactMeSection = document.getElementById("contact-me-section");


// For menu toggle
document.addEventListener('DOMContentLoaded', function () {
    // Get the dropdown element
    var dropdown = document.querySelector('.dropdown');

    // Get the dropdown menu
    var MenuIcon = document.querySelector('#menu-icon');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    // Toggle the dropdown menu
    dropdown.addEventListener('click', function () {
        if (MenuIcon.src.includes("close.svg")) {
            MenuIcon.src = MenuIcon.src.replace("close", "menu");
        } else {
            MenuIcon.src = MenuIcon.src.replace("menu", "close");
        }
        dropdownMenu.classList.toggle("hidden");
    });

    // Close the dropdown menu when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target) && !dropdownMenu.contains(event.target)) {
            if (MenuIcon.src.includes("close.svg")) {
                MenuIcon.src = MenuIcon.src.replace("close", "menu");
                dropdownMenu.classList.toggle("hidden");
            }
        } else if (!dropdown.contains(event.target) && dropdownMenu.contains(event.target)) {
            setTimeout(() => {
                MenuIcon.src = MenuIcon.src.replace("close", "menu");
                dropdownMenu.classList.toggle("hidden");
            }, (200))
        }
    });
});

async function _renderPage() {
    var hash = window.location.hash.substring(1);

    console.log(hash);
    HomeSection.style.display = 'none';
    AboutMeSection.style.display = 'none';
    SkillsSection.style.display = 'none';
    ProjectsSection.style.display = 'none';
    BlogsSection.style.display = 'none';
    ContactMeSection.style.display = 'none';

    if (hash.includes("home")) {
        HomeSection.style.display = 'flex';
    } else if (hash.includes("about-me")) {
        AboutMeSection.style.display = 'flex';
    } else if (hash.includes("skills")) {
        SkillsSection.style.display = 'flex';
    } else if (hash.includes("projects")) {
        ProjectsSection.style.display = 'flex';
    } else if (hash.includes("blogs")) {
        BlogsSection.style.display = 'flex';
    } else if (hash.includes("contact-me")) {
        ContactMeSection.style.display = 'flex';
    } else {
        hash = "/home"
        HomeSection.style.display = 'flex';
    }
    _activeMenuItem(`menu-item-${hash.replace("/", "")}`);
}

window.addEventListener("hashchange", _renderPage);

_renderPage();

function _routeTo(url) {
    window.location.hash = url;
    _activeMenuItem(`menu-item-${url.replace("/", "")}`);
}

function _activeMenuItem(id) {
    try {
        document.querySelectorAll(".menu-item").forEach((item) => {
            item.classList.remove("font-bold", "border-b-2", "border-b-black");
        });
        document.querySelector("#" + id).classList.add("font-bold", "border-b-2", "border-b-black");
    } catch (err) {

    }
}