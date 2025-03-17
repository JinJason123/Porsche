const canvas = document.getElementById("sceneCanvas");
const ctx = canvas.getContext("2d");

const bgRadios = document.getElementsByName("background");
const charPosSlider = document.getElementById("charPos");
const item1Checkbox = document.getElementById("item1");
const item2Checkbox = document.getElementById("item2");
const item3Checkbox = document.getElementById("item3");

let bgImage = new Image();
bgImage.src = "back1.jpg"; 
let charImage = new Image();
charImage.src = "porsche.jpg"; 
let item1Image = new Image();
item1Image.src = "plane.png"; 
let item2Image = new Image();
item2Image.src = "logo.png"; 
let item3Image = new Image();
item3Image.src = "flag.png"; 

bgImage.onload = drawScene;
charImage.onload = drawScene;
item1Image.onload = drawScene;
item2Image.onload = drawScene;
item3Image.onload = drawScene;

function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    if (bgImage.complete) {
        ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
    }

    let charX = parseInt(charPosSlider.value);
    if (charImage.complete) {
        ctx.drawImage(charImage, charX, 200, 300, 100);
    }
    if (item1Checkbox.checked && item1Image.complete) {
        ctx.drawImage(item1Image, 150, -50, 300, 250); 
    }
    if (item2Checkbox.checked && item2Image.complete) {
        ctx.drawImage(item2Image, -50, 0, 200, 100); 
    }
    if (item3Checkbox.checked && item3Image.complete) {
        ctx.drawImage(item3Image, 0, 150, 100, 100); 
    }
}

for (const radio of bgRadios) {
    radio.addEventListener("change", function () {
        bgImage.src = this.value;
    });
}

function playSound(num) {
    let soundFile = "";

    if (num === 1) {
        soundFile = "coldstart.mp3"; 
    } else if (num === 2) {
        soundFile = "launch.mp3"; 
    } else if (num === 3) {
        soundFile = "rev.mp3"; 
    }

    if (soundFile) {
        const sound = new Audio(soundFile);
        sound.play();
    }
}

charPosSlider.addEventListener("input", drawScene);
item1Checkbox.addEventListener("change", drawScene);
item2Checkbox.addEventListener("change", drawScene);
item3Checkbox.addEventListener("change", drawScene);
