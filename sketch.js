function setup() {
createCanvas(800, 800);
}

function draw() {
background("#37B6CD");

let cx = 400;
let cy = 400;

fill("#FDE0B0");
circle(cx, cy, 600); // rosto

// olhos
let olhoEsqX = cx - 100;
let olhoDirX = cx + 100;
let olhoY = cy - 100;

fill("#F7F7F7F3");
circle(olhoEsqX, olhoY, 60);
circle(olhoDirX, olhoY, 60);

// função pra desenhar pupila limitada
function desenhaPupila(ox, oy) {
let dx = mouseX - ox;
let dy = mouseY - oy;

let distancia = sqrt(dx * dx + dy * dy);

let limite = 15; // quanto a pupila pode se mover

if (distancia > limite) {
dx = (dx / distancia) * limite;
dy = (dy / distancia) * limite;
}

fill(0);
circle(ox + dx, oy + dy, 15);
}

desenhaPupila(olhoEsqX, olhoY);
desenhaPupila(olhoDirX, olhoY);

// nariz
fill("#E6ED8D");
triangle(cx, cy - 20, cx - 30, cy + 20, cx + 30, cy + 20);

// boca
line(cx - 50, cy + 50, cx + 50, cy + 20);

// sobrancelhas
line(cx - 120, cy - 140, cx - 60, cy - 140);
line(cx + 60, cy - 140, cx + 120, cy - 140);
}