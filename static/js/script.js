/*=========================================================
                EduPredict AI v2
            Premium JavaScript - Part 1
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializeTheme();

    initializeLoader();

    initializeInputs();

});


/*=========================================================
                    THEME TOGGLE
=========================================================*/

const themeButton = document.getElementById("themeToggle");

function initializeTheme() {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light-mode");

        updateThemeIcon(true);

    }

    if (themeButton) {

        themeButton.addEventListener("click", toggleTheme);

    }

}

function toggleTheme() {

    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    localStorage.setItem(

        "theme",

        isLight ? "light" : "dark"

    );

    updateThemeIcon(isLight);

}

function updateThemeIcon(isLight) {

    const icon = themeButton.querySelector("i");

    if (!icon) return;

    if (isLight) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    }

    else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

    }

}
/*=========================================================
                    PAGE LOADER
=========================================================*/

function initializeLoader() {

    const loader = document.querySelector(".loader");

    if (!loader) return;

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 800);

    });

}
/*=========================================================
                INPUT ANIMATION
=========================================================*/

function initializeInputs() {

    const inputs = document.querySelectorAll(

        "input, select"

    );

    inputs.forEach(input => {

        input.addEventListener("focus", () => {

            input.parentElement.classList.add(

                "active"

            );

        });

        input.addEventListener("blur", () => {

            input.parentElement.classList.remove(

                "active"

            );

        });

    });

}
/*=========================================================
                SMOOTH SCROLL
=========================================================*/

document.querySelectorAll('a[href^="#"]')

.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(

            this.getAttribute("href")

        ).scrollIntoView({

            behavior:"smooth"

        });

    });

});
/*=========================================================
                PAGE FADE EFFECT
=========================================================*/

window.addEventListener("pageshow", () => {

    document.body.style.opacity = "1";

});
/*=========================================================
                ANIMATED COUNTERS
=========================================================*/

function animateCounter(element, target, suffix = "") {

    let current = 0;

    const duration = 1800;

    const increment = target / (duration / 16);

    const updateCounter = () => {

        current += increment;

        if (current >= target) {

            element.textContent = target + suffix;
            return;

        }

        element.textContent = Math.floor(current) + suffix;

        requestAnimationFrame(updateCounter);

    };

    updateCounter();

}

window.addEventListener("load", () => {

    const statCards = document.querySelectorAll(".stat-card h3");

    if (statCards.length >= 3) {

        animateCounter(statCards[0], 98, "%");

        animateCounter(statCards[1], 8);

        statCards[2].textContent = "0.3s";

    }

});
/*=========================================================
            SCORE COUNT ANIMATION
=========================================================*/

function animateScore() {

    const scoreElement = document.querySelector(".score-value");

    if (!scoreElement) return;

    const finalScore = parseFloat(scoreElement.textContent);

    if (isNaN(finalScore)) return;

    let current = 0;

    const speed = finalScore / 70;

    scoreElement.textContent = "0";

    const timer = setInterval(() => {

        current += speed;

        if (current >= finalScore) {

            scoreElement.textContent = finalScore.toFixed(2);

            clearInterval(timer);

            return;

        }

        scoreElement.textContent = current.toFixed(1);

    },20);

}

window.addEventListener("load", animateScore);
/*=========================================================
                RIPPLE BUTTON
=========================================================*/

const predictButton = document.querySelector(".predict-btn");

if (predictButton) {

    predictButton.addEventListener("click", function(e){

        const circle = document.createElement("span");

        const diameter = Math.max(

            this.clientWidth,

            this.clientHeight

        );

        circle.style.width = diameter + "px";

        circle.style.height = diameter + "px";

        circle.style.position = "absolute";

        circle.style.borderRadius = "50%";

        circle.style.background =

            "rgba(255,255,255,.35)";

        circle.style.transform = "scale(0)";

        circle.style.animation =

            "ripple .6s linear";

        circle.style.left =

            (e.offsetX - diameter/2) + "px";

        circle.style.top =

            (e.offsetY - diameter/2) + "px";

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        },600);

    });

}
/*=========================================================
            AI LOADING BUTTON
=========================================================*/

const predictionForm = document.querySelector("form");

if (predictionForm && predictButton){

    predictionForm.addEventListener("submit",()=>{

        predictButton.disabled = true;

        predictButton.innerHTML =

        '<i class="fa-solid fa-spinner fa-spin"></i> AI is Predicting...';

    });

}
/*=========================================================
            RIPPLE ANIMATION CSS
=========================================================*/

const rippleStyle = document.createElement("style");

rippleStyle.innerHTML = `

@keyframes ripple{

from{

transform:scale(0);

opacity:1;

}

to{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(rippleStyle);
/*=========================================================
            GLASS CARD MOUSE GLOW
=========================================================*/

const glassCard = document.querySelector(".glass-card");

if (glassCard) {

    glassCard.addEventListener("mousemove", (e) => {

        const rect = glassCard.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        glassCard.style.setProperty("--x", `${x}px`);
        glassCard.style.setProperty("--y", `${y}px`);

    });

}
/*=========================================================
                3D TILT EFFECT
=========================================================*/

if (glassCard) {

    glassCard.addEventListener("mousemove", (e) => {

        const rect = glassCard.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 25;

        const rotateY = (x - centerX) / 25;

        glassCard.style.transform =

            `perspective(1200px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    glassCard.addEventListener("mouseleave", () => {

        glassCard.style.transform =

            "perspective(1200px) rotateX(0deg) rotateY(0deg)";

    });

}
/*=========================================================
            FLOATING PARTICLES
=========================================================*/

function createParticle() {

    const particle = document.createElement("span");

    particle.className = "particle";

    particle.style.left =

        Math.random() * window.innerWidth + "px";

    particle.style.animationDuration =

        (Math.random() * 6 + 6) + "s";

    particle.style.opacity =

        Math.random();

    particle.style.width =

        (Math.random() * 6 + 4) + "px";

    particle.style.height =

        particle.style.width;

    document.body.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    },12000);

}

setInterval(createParticle,350);
/*=========================================================
            CURSOR GLOW
=========================================================*/

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});
/*=========================================================
        CURSOR GLOW STYLE
=========================================================*/

const cursorStyle = document.createElement("style");

cursorStyle.innerHTML = `

.cursor-glow{

position:fixed;

width:280px;

height:280px;

border-radius:50%;

background:

radial-gradient(

rgba(59,130,246,.18),

transparent 70%

);

pointer-events:none;

transform:translate(-50%,-50%);

z-index:-1;

transition:left .08s linear,

top .08s linear;

filter:blur(40px);

}

`;

document.head.appendChild(cursorStyle);
/*=========================================================
        AURORA PARALLAX
=========================================================*/

const aurora = document.querySelector(".aurora");

document.addEventListener("mousemove",(e)=>{

    if(!aurora) return;

    const x = (e.clientX / window.innerWidth) * 20;

    const y = (e.clientY / window.innerHeight) * 20;

    aurora.style.transform =

        `translate(${x}px, ${y}px)`;

});
/*=========================================================
            SCROLL REVEAL ANIMATION
=========================================================*/

const revealElements = document.querySelectorAll(

    ".glass-card, .stat-card, .feature, .ai-card, .result-container"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{

    threshold:0.15

}

);

revealElements.forEach(element=>{

    element.classList.add("hidden");

    revealObserver.observe(element);

});
/*=========================================================
            REVEAL CSS
=========================================================*/

const revealStyle=document.createElement("style");

revealStyle.innerHTML=`

.hidden{

opacity:0;

transform:translateY(60px);

transition:all .8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

`;

document.head.appendChild(revealStyle);
/*=========================================================
            PERFORMANCE BADGE
=========================================================*/

const badge=document.querySelector(".performance-badge");

if(badge){

    badge.animate(

    [

        {

            transform:"scale(.6)",

            opacity:0

        },

        {

            transform:"scale(1.1)",

            opacity:1

        },

        {

            transform:"scale(1)"

        }

    ],

    {

        duration:1200,

        easing:"ease"

    }

    );

}
/*=========================================================
            STAR POP ANIMATION
=========================================================*/

const rating=document.querySelector(".rating");

if(rating){

    rating.animate(

    [

        {

            transform:"scale(.3)",

            opacity:0

        },

        {

            transform:"scale(1.25)",

            opacity:1

        },

        {

            transform:"scale(1)"

        }

    ],

    {

        duration:1400

    }

    );

}
/*=========================================================
        RESULT CARD ENTRANCE
=========================================================*/

const resultCard=document.querySelector(".result-container");

if(resultCard){

    resultCard.animate(

    [

        {

            transform:"translateY(100px)",

            opacity:0

        },

        {

            transform:"translateY(0)",

            opacity:1

        }

    ],

    {

        duration:1000,

        easing:"ease-out"

    }

    );

}
/*=========================================================
            SIMPLE CONFETTI
=========================================================*/

const score=document.querySelector(".score-value");

if(score){

    const marks=parseFloat(score.textContent);

    if(marks>=90){

        createConfetti();

    }

}

function createConfetti(){

    for(let i=0;i<120;i++){

        const confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.background=

        `hsl(${Math.random()*360},100%,60%)`;

        confetti.style.animationDuration=

        (Math.random()*3+2)+"s";

        confetti.style.animationDelay=

        Math.random()+"s";

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },6000);

    }

}
/*=========================================================
            CONFETTI STYLE
=========================================================*/

const confettiStyle=document.createElement("style");

confettiStyle.innerHTML=`

.confetti{

position:fixed;

width:10px;

height:18px;

top:-20px;

z-index:9999;

animation:fall linear forwards;

}

@keyframes fall{

0%{

transform:

translateY(-20px)

rotate(0deg);

}

100%{

transform:

translateY(120vh)

rotate(720deg);

}

}

`;

document.head.appendChild(confettiStyle);
/*=========================================================
                AI TYPING EFFECT
=========================================================*/

const heroTitle = document.querySelector(".left-panel h2");

if (heroTitle) {

    const text = heroTitle.textContent;

    heroTitle.textContent = "";

    let index = 0;

    function typeWriter() {

        if (index < text.length) {

            heroTitle.textContent += text.charAt(index);

            index++;

            setTimeout(typeWriter, 35);

        }

    }

    typeWriter();

}
/*=========================================================
                SCORE COLOR CHANGE
=========================================================*/

const scoreElement = document.querySelector(".score-value");

if (scoreElement) {

    const score = parseFloat(scoreElement.textContent);

    if (!isNaN(score)) {

        if (score >= 90) {

            scoreElement.style.color = "#22C55E";

        }

        else if (score >= 75) {

            scoreElement.style.color = "#38BDF8";

        }

        else if (score >= 60) {

            scoreElement.style.color = "#FACC15";

        }

        else {

            scoreElement.style.color = "#EF4444";

        }

    }

}
/*=========================================================
                LIVE STATS EFFECT
=========================================================*/

const statCards = document.querySelectorAll(".stat-card");

statCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.animate([

            {

                transform:"translateY(0px)"

            },

            {

                transform:"translateY(-12px)"

            },

            {

                transform:"translateY(-8px)"

            }

        ],

        {

            duration:400,

            easing:"ease"

        });

    });

});
/*=========================================================
                FLOATING LOGO
=========================================================*/

const logo = document.querySelector(".logo i");

if (logo) {

    let angle = 0;

    setInterval(() => {

        angle += 0.02;

        logo.style.transform =

            `translateY(${Math.sin(angle)*6}px)`;

    },20);

}
/*=========================================================
            AUTO FOCUS FIRST INPUT
=========================================================*/

window.addEventListener("load", () => {

    const firstInput = document.querySelector("select");

    if (firstInput) {

        firstInput.focus();

    }

});
/*=========================================================
            PERFORMANCE OPTIMIZATION
=========================================================*/

let resizeTimer;

window.addEventListener("resize", () => {

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {

        document.body.classList.add("resized");

    },250);

});
/*=========================================================
                FOOTER YEAR
=========================================================*/

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =

        `© ${new Date().getFullYear()} EduPredict AI |
        Built using <i class="fa-solid fa-brain"></i>
        Machine Learning & Flask`;

}
/*=========================================================
                CONSOLE MESSAGE
=========================================================*/

console.log(

"%c🚀 EduPredict AI Loaded Successfully",

"color:#38BDF8;font-size:18px;font-weight:bold;"

);

console.log(

"%cDesigned by Anuj Yadav",

"color:#A855F7;font-size:14px;"

);