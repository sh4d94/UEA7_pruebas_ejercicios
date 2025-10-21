let texto = '{"cuerpo": ["hectomorfo ", "mesomorfo ", "endomorfo "], "posicion":["parado", "sentado", "acostado"]}';
let texto2 = '{"extremidades":["brazo", "pierna", "mano"], "tamano": ["largo", "mediano", "corto"]}';
let texto3 = '{"PC": "Tak-E", "estado": "muerto"}';

const namu  = JSON.parse( texto );
const namu2 = JSON.parse( texto2 );
const namu3 = JSON.parse( texto3 );

document.getElementById( "tostada" ).innerHTML = "cuerpo " +namu.cuerpo[1] + "" + namu.posicion[1] + "";
document.getElementById( "tortilla" ).innerHTML = "<br> extremidad: " + namu2.extremidades[0] + " " + namu2.tamano[0];
document.getElementById( "tamal" ).innerHTML = "<br> PC de: " + namu3.PC + "." + " <br> Estado: " + namu3.estado;