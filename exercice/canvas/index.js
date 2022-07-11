function Drawline() {
  const canvas = document.getElementById("canvas1");

  if (!canvas.getContext) {
    return;
  }

  const ctx = canvas.getContext("2d");
  const x = 100,
    y = 100,
    width = 150,
    height = 100;

  ctx.fillStyle = "#F9DC5C";
  ctx.fillRect(x, y, width, height);

  ctx.fillStyle = "rgb(0,0,255,0.5)";
  ctx.fillRect(x + 100, y + 50, -width, -height);

  ctx.clearRect(100, 100, 100, 50);

  ctx.strokeStyle = "red";
  ctx.strokeRect(200, 300, 200, 100);

  ctx.strokeStyle = "green";
  ctx.strokeRect(300, 350, -200, -100);
}
Drawline();
function DrawCercle() {
  const canvas = document.getElementById("canvas2");

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.strokeStyle = "rgb(0,0,255,0.5)";
    ctx.lineWidth =5;

    const x = 20,
      y = 200,
      space = 10,
      radius = 30,
      arcCount = 6;

    for (let i = 0; i <= arcCount; i++) {
      ctx.beginPath();
      ctx.arc(
        x + i * (radius * 2 + space),
        y,
        radius,
        0,
        ((i + 1) * (2 * Math.PI)) / arcCount,
        false
      );
      ctx.stroke();
    }

    ctx.stroke();
  }
}
DrawCercle();
