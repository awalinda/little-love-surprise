
const pages = document.querySelectorAll(".page");

const startButton = document.getElementById("startButton");
const boopButton = document.getElementById("boopButton");
const roseButton = document.getElementById("roseButton");
const finalButton = document.getElementById("finalButton");

const cat = document.getElementById("cat");
const rose = document.getElementById("rose");
const catMessage = document.getElementById("catMessage");

const backgroundHearts = document.getElementById("backgroundHearts");
const sparkles = document.getElementById("sparkles");
const toast = document.getElementById("toast");

let toastTimeout;
let heartInterval;

// Switch between pages
function showPage(pageId) {
    pages.forEach((page) => {
        page.classList.toggle("active", page.id === pageId);
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (pageId === "page3") {
        celebrateHearts(18);
    }
}

// Small toast messages
function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 2200);
}

// Start the surprise
startButton.addEventListener("click", () => {
    showPage("page2");
    showToast("surprise! you found it, handsome boy ♡");
    celebrateHearts(10);
});

// Boop the cat
const catMessages = [
    "hey! i'm blushing! 🙈",
    "that tickles! hehe ♡",
    "meow! you're kinda cute too.",
    "okay, one more boop. just one!",
    "my handsome boy is here! ♡",
    "sending you a tiny kitty hug 🐾"
];

let catMessageIndex = 0;

function boopCat() {
    cat.classList.remove("blushing");

    // Restart the animation
    void cat.offsetWidth;

    cat.classList.add("blushing");

    catMessage.textContent =
        catMessages[catMessageIndex % catMessages.length];

    catMessageIndex++;

    celebrateHearts(4);

    setTimeout(() => {
        cat.classList.remove("blushing");
    }, 650);
}

boopButton.addEventListener("click", boopCat);
cat.addEventListener("click", boopCat);

// Clicking the rose
function giveRose() {
    showPage("page3");
    showToast("a little rose, just for you 🌹");
    celebrateHearts(24);
}

roseButton.addEventListener("click", giveRose);
rose.addEventListener("click", giveRose);

// Final button: a little extra surprise
const finalMessages = [
    "you are kinda cute, you know that? ♡",
    "sending you a tiny hug! 🫂",
    "okay, that's enough cuteness for today!",
    "just checking... still handsome? yes.",
    "one tiny smile for my favorite boy ♡",
    "psst... Ayin thinks you're special."
];

let finalMessageIndex = 0;

finalButton.addEventListener("click", () => {
    const message =
        finalMessages[finalMessageIndex % finalMessages.length];

    finalMessageIndex++;

    showToast(message);
    celebrateHearts(28);

    // Small playful button reaction
    finalButton.textContent = "hehe, one more? ♡";

    setTimeout(() => {
        finalButton.textContent = "one more time? 💗";
    }, 1800);
});

// Floating hearts
function celebrateHearts(amount = 12) {
    const heartTypes = ["♡", "♥", "💕", "💗", "✦"];
    const heartColors = [
        "#ef91b5",
        "#e96e91",
        "#f5b3ce",
        "#f4a6ad",
        "#dca8e8"
    ];

    for (let i = 0; i < amount; i++) {
        setTimeout(() => {
            const heart = document.createElement("span");

            heart.className = "background-heart";
            heart.textContent =
                heartTypes[Math.floor(Math.random() * heartTypes.length)];

            heart.style.left = `${Math.random() * 100}%`;
            heart.style.fontSize = `${12 + Math.random() * 20}px`;
            heart.style.color =
                heartColors[Math.floor(Math.random() * heartColors.length)];

            const duration = 3 + Math.random() * 3;
            heart.style.animationDuration = `${duration}s`;

            backgroundHearts.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, duration * 1000 + 100);
        }, i * 70);
    }
}

// Decorative sparkles
function createSparkles() {
    const sparkleSymbols = ["✦", "✧", "·", "♡"];

    for (let i = 0; i < 18; i++) {
        const sparkle = document.createElement("span");

        sparkle.className = "sparkle";
        sparkle.textContent =
            sparkleSymbols[Math.floor(Math.random() * sparkleSymbols.length)];

        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.fontSize = `${10 + Math.random() * 12}px`;
        sparkle.style.animationDelay = `${Math.random() * 3}s`;
        sparkle.style.animationDuration = `${2 + Math.random() * 3}s`;

        sparkles.appendChild(sparkle);
    }
}

createSparkles();

// A few subtle hearts on the opening page
heartInterval = setInterval(() => {
    const activePage = document.querySelector(".page.active");

    if (activePage && activePage.id === "page1") {
        if (Math.random() > 0.5) {
            celebrateHearts(1);
        }
    }
}, 1800);
