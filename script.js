/* =====================================================
   PORTFOLIO JAVASCRIPT
===================================================== */


/* =====================================================
   TYPING EFFECT
===================================================== */

const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "Frontend Developer",
    "Pelajar RPL",
    "Creative Learner"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }
    }

    const speed = isDeleting ? 55 : 100;

    setTimeout(typeEffect, speed);
}

typeEffect();


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


/* Close menu when link clicked */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});


/* =====================================================
   NAVBAR SCROLL
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNav);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   THEME SWITCHER
===================================================== */

const themeBtn =
    document.getElementById("themeBtn");

const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeBtn.textContent = "🌙";

}


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");

    if (isLight) {

        themeBtn.textContent = "🌙";

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

    } else {

        themeBtn.textContent = "☀️";

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

    }

});


/* =====================================================
   BACK TO TOP
===================================================== */

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =====================================================
   3D EFFECT HERO CARD
===================================================== */

const profileCard =
    document.querySelector(".profile-card");

const heroVisual =
    document.querySelector(".hero-visual");


if (
    profileCard &&
    heroVisual &&
    window.innerWidth > 800
) {

    heroVisual.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                heroVisual.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateY =
                ((x - centerX) / centerX) * 5;

            const rotateX =
                ((centerY - y) / centerY) * 5;

            profileCard.style.transform =
                `perspective(1000px)
                 rotateY(${rotateY}deg)
                 rotateX(${rotateX}deg)`;

        }
    );


    heroVisual.addEventListener(
        "mouseleave",
        () => {

            profileCard.style.transform =
                `perspective(1000px)
                 rotateY(-5deg)
                 rotateX(3deg)`;

        }
    );

}


/* =====================================================
   PROJECT LINK DEMO
===================================================== */

const projectLinks =
    document.querySelectorAll(".project-link");


projectLinks.forEach(link => {

    link.addEventListener("click", (event) => {

        const href =
            link.getAttribute("href");

        if (href === "#") {

            event.preventDefault();

            alert(
                "Ganti link ini dengan URL project kamu."
            );

        }

    });

});


/* =====================================================
   SMOOTH ANCHOR
===================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    targetId === "#" ||
                    targetId === ""
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    const offset = 75;

                    const targetPosition =
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        offset;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });

                }

            }
        );

    });


/* =====================================================
   SKILL BAR ANIMATION
===================================================== */

const skillBars =
    document.querySelectorAll(".skill-bar div");


const skillObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const bar = entry.target;

                    const width =
                        bar.style.width;

                    bar.style.width = "0";

                    setTimeout(() => {

                        bar.style.transition =
                            "width 1.2s ease";

                        bar.style.width = width;

                    }, 100);

                    observer.unobserve(bar);

                }

            });

        },
        {
            threshold: 0.5
        }
    );


skillBars.forEach(bar => {

    skillObserver.observe(bar);

});


/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "%cPortfolio siap digunakan 🚀",
    "color:#7c5cff;font-size:18px;font-weight:bold;"
);

console.log(
    "%cJangan lupa ganti data pribadi, project, foto, CV, dan link sosial media.",
    "color:#00d4ff;font-size:12px;"
);

// ================= EFEK MENGETIK HERO =================
document.addEventListener("DOMContentLoaded", function () {
    const typingElement = document.getElementById("typing"); // Sesuai ID di HTML kamu
    
    if (!typingElement) return;

    const words = ["Junior Web Developer", "Siswa RPL", "Frontend Enthusiast"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Diam sebentar saat kata selesai diketik
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    typeEffect();
});