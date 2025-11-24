// Créame que yo hice todo el código. Me recordaba un poco a Python, por alguna razón, así que fue un poquito fácil de hacer:(
// Me tardé en hacer la tarea, precisamente, porque estaba investigando cómo hacer todo el dibujo:(
// Lo único que sí hice con IA fue la función que hace que no se encimen, porque no me salía lo que veía en foros o tutoriales:(
// No suelo usarla para hacer código y me siento mal por hacerlo, pero resultó bien, por eso lo dejé, perdóneme TuT

// Tamaño base de cada pixel grande usado para dibujar en estilo pixel-art.
let p = 12;
// Tamaño aproximado del eslaim en pixeles (o sea, ancho x alto)
let slimeSizePx = 8 * p;
let fantasmaSizePx = 8 * p;
// Arreglo donde se guardan los datos de cada eslaim (posición, color, cara, todo eso xd).
let slimes = [];
// Arreglo donde se guardan los datos de cada fantasma (posición, tamaño, opacidad, todo eso xd).
let ghosts = [];

function setup() {
  // Crea un canvas que ocupa toda la ventana del navegador.
  createCanvas(windowWidth, windowHeight);
  // No use noStroke() porque me gusta más con borde xd
  strokeWeight(2);

  // Crear 20 slimes con posiciones que no se encimen
  // (por favor, que funcione, porque no confío en ChatGPT y ya llevo horas aquí TuT)
  for (let i = 0; i < 20; i++) {
    let newX, newY;
    let safe = false;


    // Intentar generar coordenadas hasta que no se encime con otro eslaim (dios plan)
    while (!safe) {
      newX = random(50, width - slimeSizePx - 50);
      newY = random(50, height - slimeSizePx - 50);
      newX = random(50, width - fantasmaSizePx - 50);
      newY = random(50, height - fantasmaSizePx - 50);

      // Si no choca con ninguno, se coloca el eslaim claroquesi
      if (!isOverlapping(newX, newY)) {
        safe = true;
      }
    }

    // Guardar eslaim (ojalá)
    slimes.push({
      x: newX,
      y: newY,
      color: color(random(50, 255), random(50, 255), random(50, 255)),
      face: floor(random(3))
    });

    ghosts.push({
      x: newX,
      y: newY,
    });

  }
}

function draw() {
  // Fondo.
  background("#b4b4b4ff");

  // Dibujar cada eslaim guardado en el arreglo
  for (let s of slimes) {
    drawSlime(s.x, s.y, s.color, s.face);
  }
  for (let g of ghosts) {
    drawGhost(g.x, g.y);
  }
}

// FUNCIÓN IMPORTANTE PARA REVISAR ENCIMES (ya sirve, ya no le muevas)
function isOverlapping(x, y) {
  for (let s of slimes) {
    // Si la distancia entre sus centros es menor al tamaño del eslaim => se enciman, por tanto no se hace
    if (dist(x, y, s.x, s.y) < slimeSizePx * 0.9) {
      return true;
    }
  }
  return false;

  for (let g of ghosts) {
    // Si la distancia entre sus centros es menor al tamaño del eslaim => se enciman, por tanto no se hace
    if (dist(x, y, s.x, s.y) < slimeSizePx * 0.9) {
      return true;
    }
  }
  return false;
}

// Dibuja un eslaim individual en una posición, con un color y un tipo de cara
function drawSlime(ox, oy, c, faceType) {
  // Color del cuerpo del eslaim
  fill(c);
  
  // Cuerpo base (dos rectángulos que forman la tipo gota)
  rect(ox + 1*p, oy + 3*p, 6*p, 5*p); // Primitivo
  rect(ox + 2*p, oy + 2*p, 4*p, 1*p); // Primitivo

  // Sombra inferior para dar volumen (ya me creo pro xddd)
  fill(lerpColor(c, color(0), 0.3));
  rect(ox + 2*p, oy + 7*p, 4*p, 1*p); // Primitivo

  // CARAS DIFERENTES
  if (faceType === 0) {
    // Una feli'
    fill(0);
    rect(ox + 3*p, oy + 4*p, 1*p, 2*p); // Primitivo
    rect(ox + 5*p, oy + 4*p, 1*p, 2*p); // Primitivo

    fill(255);
    rect(ox + 3*p, oy + 4*p, 1*p, 1*p); // Primitivo
    rect(ox + 5*p, oy + 4*p, 1*p, 1*p); // Primitivo

    fill("#203020");
    rect(ox + 4*p, oy + 6*p, 1*p, 1*p); // Primitivo

  } else if (faceType === 1) {
    // Una sorprendida (:0, o intento de JAJA)
    fill(0);
    rect(ox + 3*p, oy + 4*p, 1*p, 1*p); // Primitivo
    rect(ox + 5*p, oy + 4*p, 1*p, 1*p); // Primitivo

    fill(0);
    rect(ox + 4*p, oy + 6*p, 2*p, 2*p); // Primitivo

  } else if (faceType === 2) {
    // Mimida (dormida xd) (parece más como un robot XD... nimodo)
    fill(0);
    rect(ox + 3*p, oy + 5*p, 2*p, 1*p); // Primitivo
    rect(ox + 5*p, oy + 5*p, 2*p, 1*p); // Primitivo

    fill("#203020");
  }
}

function drawGhost(ox, oy) {
  fill(255, 255, 255, 0.4);
  ellipse(ox, oy, 80, 90); // Primitivo

  fill(0);
  ellipse(ox - 15, oy - 10, 15); // Primitivo
  ellipse(ox + 15, oy - 10, 15); // Primitivo

  fill(0);
  arc(ox, oy + 15, 40, 30, 0, PI); // Primitivo
}