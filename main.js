// Tweak stuff here
// Edit at you own risk :)
var num = 10; // number of sheets
function setup() {
  createCanvas(
    window.innerHeight * sqrt(2), //Width of the canvas (Currently set to A4 ratio)
    window.innerHeight //Height of the canvas
  );
  background(0);
}

function mousePressed() {
  background(0);
  var count = 0;
  var r = { p: createVector(0, 0), w: width, h: height };

  var target = createVector(mouseX, mouseY);
  mark(target.x, target.y);
  var splitted = rectDiv(r);
  while (count < num) {
    if (isInside(splitted[0], target)) {
      drawRect(splitted[1]);
      splitted = rectDiv(splitted[0]);
    } else {
      drawRect(splitted[0]);
      splitted = rectDiv(splitted[1]);
    }
    count++;
  }
}

function mark(x, y) {
  stroke(255, 0, 0);
  fill(255, 0, 0);
  circle(x, y, 3);
}

function rectDiv(r) {
  var p = r.p;
  var w = r.w;
  var h = r.h;
  if (w < h) {
    return [
      { p: p, w: w, h: h / 2 },
      { p: createVector(p.x, p.y + h / 2), w: w, h: h / 2 },
    ];
  } else {
    return [
      { p: p, w: w / 2, h: h },
      { p: createVector(p.x + w / 2, p.y), w: w / 2, h: h },
    ];
  }
}

function drawRect(r) {
  stroke(0, 255, 0);
  fill(50);
  rect(r.p.x, r.p.y, r.w, r.h);
}

function isInside(r, target) {
  var p1 = r.p;
  var p2 = createVector(r.p.x + r.w, r.p.y + r.h);
  return (
    p1.x < target.x && target.x <= p2.x && p1.y < target.y && target.y <= p2.y
  );
}
