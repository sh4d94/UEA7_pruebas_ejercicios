

// cuando se presionen las teclas de la primera línea del teclado 
// q, w, e, r, t, y, u, i, o, p
// aparecerán alertas con mensajes suicidas.
// las alertas aparecerán en una posición aleatoria dentro del canvas

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Nada en draw
}

// Aparición de frases suicidas con formato (súper simple) de alertas
// al presionar las teclas de la primera línea del teclado 
// q, w, e, r, t, y, u, i, o, p
function keyPressed() {
  let message = "";
  const messageSize = 200;
  const alertSize = 200;
  const cx = random(alertSize / 8, width - alertSize / 2);
  const cy = random(alertSize / 8, height - alertSize / 2);

  let alertColor;
  if (key === 'q') alertColor = color(255, 255, 255), message = "No puedo más";
  else if (key === 'w') alertColor = color(255, 255, 255), message = "Todo es inútil";
  else if (key === 'e') alertColor = color(255, 255, 255), message = "Quiero desaparecer";
  else if (key === 'r') alertColor = color(255, 255, 255), message = "Estoy cansado de luchar";
  else if (key === 't') alertColor = color(255, 255, 255), message = "Nada tiene sentido";
  else if (key === 'y') alertColor = color(255, 255, 255), message = "No encuentro mi lugar";
  else if (key === 'u') alertColor = color(255, 255, 255), message = "Siento que no\npertenezco aquí";
  else if (key === 'i') alertColor = color(255, 255, 255), message = "Estoy agotado";
  else if (key === 'o') alertColor = color(255, 255, 255), message = "No veo un futuro para mí";
  else if (key === 'p') alertColor = color(255, 255, 255), message = "Solo quiero paz";
  // Si no es una de las teclas especificadas, no hacer nada
  else return;

  // Alerta con mensaje
  // La alerta en posición aleatoria
  fill(alertColor);
  // Se colocan las constantes para la posición y tamaño de la alerta
  rect(cx, cy, alertSize, alertSize);
  fill(21, 0, 255);
  rect(cx, cy - 20, 200, 50);
  // Formato del texto del mensaje
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(message, cx + messageSize / 2, cy + messageSize / 2);
}