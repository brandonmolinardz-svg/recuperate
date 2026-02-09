const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let scale = 1;
let direction = 1;

function drawHeart(s) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.translate(140, 140);
  ctx.scale(s, s);

  ctx.beginPath();
  ctx.moveTo(0, -35);
  ctx.bezierCurveTo(-45, -70, -110, -5, 0, 70);
  ctx.bezierCurveTo(110, -5, 45, -70, 0, -35);
  ctx.fillStyle = "#f4a7b9"; // rosa suave
  ctx.fill();

  ctx.restore();
}

function animate() {
  scale += direction * 0.005;

  if (scale > 1.08) direction = -1;
  if (scale < 0.95) direction = 1;

  drawHeart(scale);
  requestAnimationFrame(animate);
}

animate();
