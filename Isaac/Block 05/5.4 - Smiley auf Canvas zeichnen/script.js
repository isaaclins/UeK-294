const canvasElement = document.getElementById('canvas');
const ctx = canvasElement.getContext('2d');

// Draw circle (the face)
ctx.beginPath();
ctx.arc(190, 140, 100, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();

// Draw left eye
ctx.beginPath();
ctx.arc(140, 100, 13, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

// Draw right eye
ctx.beginPath();
ctx.arc(220, 100, 8, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

// Draw mouth
ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(180, 170, 50, 0, Math.PI);
ctx.stroke();