function Draw() {
  const canvas = document.getElementById("canvas");

  if (!canvas.getContext) {
    return;
  }

  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#F9DC5C"
  ctx.fillRect(100,100,150,100);

  ctx.fillStyle = "rgb(0,0,255,0.5)"
  ctx.fillRect(200,150,-150,-100);

  ctx.fillStyle = "rgb(0,0,55,0.5)"
  ctx.fillRect(500,500,-150,-100);
}
Draw()
