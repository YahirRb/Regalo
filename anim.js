// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Que me falte el aire para respirar", time: 13.5 },
  { text: "O que me falta el alma si la quiere Dios", time: 17 },
  { text: "Que me falte un año para envejecer", time: 21 },
  { text: "Pero que nunca me faltes tú mi amor", time: 25 },
  { text: "Y que me falte el agua, que me falte el viento", time: 29.5 },
  { text: "Que me falte todo, lo que aún no tengo", time: 33.5 },
  { text: "Pero nunca tú, no me faltes tú", time: 37 },
  { text: "Y puedo ser un ciego y caminar descalzo", time: 43 },
  { text: "Y un millón de brazas, lastimen mis pasos", time: 47 },
  { text: "Pero nunca tú, no me faltes tú", time: 51 },
  { text: "Como quisiera pedirle a la madrugada", time: 57 },
  { text: "Que mañana será triste y que no te vayas", time: 61 },
  { text: "Que hay un lugar en la vida de este hombre bueno", time: 65 },
  { text: "Y tan solo tú has podido llenar en pleno", time: 69 },
  { text: "Como quisiera vestirme de valentía", time: 73 },
  { text: "Y que no fuera en mi rostro tan evidente", time: 77 },
  { text: "Y no confesarle a diario a mi confidente", time: 81 },
  { text: "Que te quiero más a ti que a mi propia vida", time: 85 },
  { text: "Que me falte el aire para respirar", time: 88 },
  { text: "O que me falta el alma si la quiere Dios", time: 91 },
  { text: "Que me falte un año para envejecer", time: 96 },
  { text: "Pero que nunca me faltes tú mi amor", time:  100},
  { text: "Y que me falte el agua, que me falte el viento", time: 104 },
  { text: "Que me falte todo, lo que aún no tengo", time: 107 },
  { text: "Pero nunca tú, no me faltes tú", time: 111 },
  { text: "Y puedo ser un ciego y caminar descalzo", time: 115 },
  { text: "Y un millón de brazas, lastimen mis pasos", time: 119 },
  { text: "Pero nunca tú, no me faltes tú, mi amor", time: 123 },
  { text: "Que me falte el aire para respirar", time: 127 },
  { text: "O que me falta el alma si la quiere Dios", time: 131 },
  { text: "Que me falte un año para envejecer", time: 135 },
  { text: "Pero que nunca me faltes tú mi amor", time: 139 },
  { text: "Y que me falte el agua, que me falte el viento", time: 143 },
  { text: "Que me falte todo, lo que aún no tengo", time: 13 },
  { text: "Pero nunca tú, no me faltes tú", time: 13 },
  { text: "Y puedo ser un ciego y caminar descalzo", time: 13 },
  { text: "Y un millón de brazas, lastimen mis pasos", time: 13 },
  { text: "Pero nunca tú, no me faltes tú", time: 13 },
  { text: "Como quisiera con mi canto deslumbrarte", time: 13 },
  { text: "Y esta canción los oidos acostumbrarte", time: 13 },
  { text: "Y hablar con Dios frente a frente para quererte", time: 13 },
  { text: "Por todas mis noches buenas para quererte", time: 13 },
  { text: "Renacería por ti, todas mis mañanas", time: 13 },
  { text: "Por ti todas mis angustias se olvidarían", time: 13 },
  { text: "Y gastaría contigo aquellas monedas", time: 13 },
  { text: "Que desde niño he guardado en una alcancía", time: 13 },
  { text: "Y seré tus ojos, mi mejor canción", time: 13 },
  { text: "Y haré por tus pasos diario una oración", time: 13 },
  { text: "Para que te sientas siempre mi mujer", time: 13 },
  { text: "Y sientas mi amor corriendo por tu piel", time: 13 },
  { text: "Y que me falte el agua, que me falte el viento", time: 13 },
  { text: "Que me falte todo, lo que aún no tengo", time: 13 },
  { text: "Pero nunca tú, no me faltes tú", time: 13 },
  { text: "Y puedo ser un ciego y caminar descalzo", time: 13 },
  { text: "Y un millón de brazas, lastimen mis pasos", time: 13 },
  { text: "Pero nunca tú, no me faltes tú, mi amor", time: 13 }, 


  
 
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);