// Smooth scrolling for navigation links

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });
});



// Navbar background change on scroll

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(0,0,0,0.9)";
        navbar.style.transition = "0.4s";

    } else {

        navbar.style.background = "rgba(0,0,0,0.6)";

    }

});




// 3D Mouse Tilt Effect for Portfolio Cards

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 12;
        const rotateY = (x - centerX) / 12;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "rotateX(0) rotateY(0) scale(1)";

    });

});




// Hero Parallax Effect

const hero = document.querySelector(".hero");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    hero.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;

});




// Button Click Animation

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.style.transform = "scale(0.95)";

        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);

    });

});



// Reveal animation on scroll

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

});

document.querySelectorAll(".card, .price-card").forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s ease";

    observer.observe(el);

});
document.querySelectorAll(".card img").forEach(img => {

img.addEventListener("click", () => {

window.open(img.src, "_blank");

});

});
document.getElementById("portfolioBtn").addEventListener("click", function(){

document.getElementById("portfolio").scrollIntoView({
behavior:"smooth"
});

});
document.querySelectorAll(".card img").forEach(function(img){

img.addEventListener("click", function(){

window.open(this.src, "_blank");

});

});
const images = document.querySelectorAll(".portfolio-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display = "flex";
lightboxImg.src = img.src;

});

});

closeBtn.addEventListener("click", () => {

lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

if(e.target !== lightboxImg){

lightbox.style.display = "none";

}

});