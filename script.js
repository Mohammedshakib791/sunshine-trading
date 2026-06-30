// LOADER

window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

}, 1500);

});

// MOBILE MENU

const toggle = document.querySelector(".mobile-toggle");

const mobileMenu = document.querySelector(".mobile-menu");

if(toggle){

toggle.addEventListener("click", () => {

mobileMenu.classList.toggle("active");

});

}

// ANIMATED COUNTERS

const counters = document.querySelectorAll("[data-target]");

const counterObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

const counter = entry.target;

const target = +counter.dataset.target;

let count = 0;

const speed = target / 100;

const updateCounter = () => {

count += speed;

if(count < target){

counter.innerText = Math.floor(count);

requestAnimationFrame(updateCounter);

}else{

counter.innerText = target + "+";

}

};

updateCounter();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter => {

counterObserver.observe(counter);

});

// CONTACT FORM

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const inputs = form.querySelectorAll("input");

const textarea = form.querySelector("textarea");

const project = form.querySelector("select");

const name = inputs[0].value;
const phone = inputs[1].value;
const email = inputs[2].value;
const projectType = project.value;
const message = textarea.value;

const whatsappText =

`New Consultation Request

Name: ${name}

Phone: ${phone}

Email: ${email}

Project Type: ${projectType}

Requirement:
${message}`;

window.open(

`https://wa.me/916374277684?text=${encodeURIComponent(whatsappText)}`,

"_blank"

);

});

}

// SCROLL REVEAL

const revealElements = document.querySelectorAll(

".collection-card,.project-card,.why-card,.testimonial-card,.gallery-grid img,.stat-card"

);

const revealObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";

}

});

}, {

threshold: 0.1

});

revealElements.forEach(el => {

el.style.opacity = "0";

el.style.transform = "translateY(60px)";

el.style.transition = "all .8s ease";

revealObserver.observe(el);

});

// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(

this.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior: "smooth"

});

}

});

});

// CUSTOM CURSOR

const cursor = document.querySelector(".cursor");

if(cursor){

document.addEventListener("mousemove", e => {

cursor.style.left = e.clientX + "px";

cursor.style.top = e.clientY + "px";

});

}

// SIMPLE 3D VISUALIZER DEMO

const materialButtons = document.querySelectorAll("[data-material]");

const room = document.getElementById("threejs-room");

materialButtons.forEach(btn => {

btn.addEventListener("click", () => {

const type = btn.dataset.material;

if(type === "wood"){

room.style.background =
"linear-gradient(135deg,#d9c3a3,#a67c52)";

room.innerHTML =
"<h2>Wood Flooring Preview</h2>";

}

if(type === "marble"){

room.style.background =
"linear-gradient(135deg,#f1f1f1,#cfcfcf)";

room.innerHTML =
"<h2>Marble Flooring Preview</h2>";

}

if(type === "wallpaper"){

room.style.background =
"linear-gradient(135deg,#d6c2a1,#ffffff)";

room.innerHTML =
"<h2>Wallpaper Preview</h2>";

}

if(type === "fabric"){

room.style.background =
"linear-gradient(135deg,#8b7355,#d6c2a1)";

room.innerHTML =
"<h2>Fabric Preview</h2>";

}

});

});

// PARALLAX HERO

window.addEventListener("scroll", () => {

const hero = document.querySelector(".hero-video");

if(hero){

const scroll = window.pageYOffset;

hero.style.transform =
`translateY(${scroll * 0.3}px)`;

}

});

// ACTIVE NAVIGATION

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;

if(window.pageYOffset >= sectionTop - 200){

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(

link.getAttribute("href") === `#${current}`

){

link.classList.add("active");

}

});

});

// NEWSLETTER DEMO

const newsletterForm = document.querySelector(".newsletter form");

if(newsletterForm){

newsletterForm.addEventListener("submit", e => {

e.preventDefault();

alert("Thank you for subscribing!");

});

}

// FLOATING BUTTON ANIMATION

const floatingButtons = document.querySelectorAll(

".floating-whatsapp,.floating-call"

);

floatingButtons.forEach(btn => {

setInterval(() => {

btn.style.transform = "scale(1.1)";

setTimeout(() => {

btn.style.transform = "scale(1)";

}, 500);

}, 3000);

});

// END
