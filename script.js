const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 100);
const CANVAS_HEIGHT = (canvas.height = 126);

const playerImage = new Image();
playerImage.src = "./Assets/Monkey.png";
const spriteWidth = 100;
const spriteHeight = 126;
let frameX = 0;
let frameY = 0;
const scale = 1;
let position = 0;

const breath = [
  {
    name: "Monkey0.png",
    frame: { x: 0, y: 0, w: 100, h: 126 },
  },
  {
    name: "Monkey1.png",
    frame: { x: 100, y: 0, w: 100, h: 126 },
  },
  {
    name: "Monkey2.png",
    frame: { x: 200, y: 0, w: 100, h: 126 },
  },
  {
    name: "Monkey3.png",
    frame: { x: 300, y: 0, w: 100, h: 126 },
  },
  {
    name: "Monkey4.png",
    frame: { x: 400, y: 0, w: 100, h: 126 },
  },
  {
    name: "Monkey5.png",
    frame: { x: 0, y: 126, w: 100, h: 126 },
  },
  {
    name: "Monkey6.png",
    frame: { x: 100, y: 126, w: 100, h: 126 },
  },
  {
    name: "Monkey7.png",
    frame: { x: 200, y: 126, w: 100, h: 126 },
  },
  {
    name: "Monkey8.png",
    frame: { x: 300, y: 126, w: 100, h: 126 },
  },
  {
    name: "Monkey9.png",
    frame: { x: 400, y: 126, w: 100, h: 126 },
  },
  {
    name: "Monkey10.png",
    frame: { x: 0, y: 252, w: 100, h: 126 },
  },
  {
    name: "Monkey11.png",
    frame: { x: 100, y: 252, w: 100, h: 126 },
  },
  {
    name: "Monkey12.png",
    frame: { x: 200, y: 252, w: 100, h: 126 },
  },
  {
    name: "Monkey13.png",
    frame: { x: 300, y: 252, w: 100, h: 126 },
  },
  {
    name: "Monkey14.png",
    frame: { x: 400, y: 252, w: 100, h: 126 },
  },
  {
    name: "Monkey15.png",
    frame: { x: 0, y: 378, w: 100, h: 126 },
  },
  {
    name: "Monkey16.png",
    frame: { x: 100, y: 378, w: 100, h: 126 },
  },
  {
    name: "Monkey17.png",
    frame: { x: 200, y: 378, w: 100, h: 126 },
  },
  {
    name: "Monkey18.png",
    frame: { x: 300, y: 378, w: 100, h: 126 },
  },
  {
    name: "Monkey19.png",
    frame: { x: 400, y: 378, w: 100, h: 126 },
  },
  {
    name: "Monkey20.png",
    frame: { x: 0, y: 504, w: 100, h: 126 },
  },
  {
    name: "Monkey21.png",
    frame: { x: 100, y: 504, w: 100, h: 126 },
  },
  {
    name: "Monkey22.png",
    frame: { x: 200, y: 504, w: 100, h: 126 },
  },
  {
    name: "Monkey23.png",
    frame: { x: 300, y: 504, w: 100, h: 126 },
  },
];

numberOfFrames = 0;
framesPerSecond = 0;
let timerText = document.getElementById("breathTimer");

function Animate() {
  setTimeout(function () {
    requestAnimationFrame(Animate);
  }, (1000 / numberOfFrames) * framesPerSecond);
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  frameX = breath[position].frame.x;
  frameY = breath[position].frame.y;
  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth * scale,
    spriteHeight * scale
  );
  position++;
  if (position <= 11) {
    numberOfFrames = 4;
    framesPerSecond = document.getElementById("breathIn").value;
    timerText.innerHTML = "BREATH IN";
  }
  if (position >= 12 && position < 14) {
    numberOfFrames = 1;
    framesPerSecond = document.getElementById("holdBreath").value;
    timerText.innerHTML = "HOLD";
  }
  if (position >= 15) {
    numberOfFrames = 12;
    framesPerSecond = document.getElementById("breathOut").value;
    timerText.innerHTML = "BREATH OUT";
  }
  if (position === 24) {
    position = 0;
  }
}
Animate();

requestAnimationFrame(Animate);
