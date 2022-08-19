const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "Monkey.png";
const spriteWidth = 100;
const spriteHeight = 126;
let frameX = 0;
let frameY = 0;
const scale = 2;
let position = 0

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


function Animate() {
  setTimeout(function() {
    requestAnimationFrame(Animate);
  }, (1000/numberOfFrames) * framesPerSecond)
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
if (position < 12) {
  numberOfFrames = 12
  framesPerSecond = 5
} if (position >= 12 && position < 14) {
  numberOfFrames = 2
framesPerSecond = 4
} if (position >= 14) {
  numberOfFrames = 10
  framesPerSecond = 8
} if (position === 24) {
  position = 0
}
}
Animate()

requestAnimationFrame(Animate);