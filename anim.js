// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hey chismosos, es para Ivon >:v", time: 2 },
  { text: "No cierto :3", time:5 },
  { text: "Ahora si, empieza...", time: 10 },
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
  { text: "Pero nunca tú, no me faltes tú", time: 112 },
  { text: "Y puedo ser un ciego y caminar descalzo", time: 117 },
  { text: "Y un millón de brazas, lastimen mis pasos", time: 121 },
  { text: "Pero nunca tú, no me faltes tú, mi amor", time: 126 },
  { text: "Hola mi amor", time: 129 },
  { text: "Espero te guste este pequeño detalle", time: 133 },
  { text: "Tal vez no sea original", time: 137 },
  { text: "Pero lo hice especialmente para ti", time: 141 },
  { text: "Muchos tendran peluches o flores pero eso que :v", time: 145 },
  { text: "Tu tendras tus flores digitales, esas nadie te las quita", time: 149 },
  { text: "Ventajas de tener un novio programador :3 ", time: 153 },
  { text: "Perdon por no poder estar presente :(", time: 157 },
  { text: "Pero aun asi te mando muchos besos y abrazos 🥰", time: 161 },
  { text: "Pronto estare por alla y te ire a ver", time: 165 },
  { text: "Te amo mi niña hermosa, nunca lo olvides", time: 169 },
  { text: "TE AMOOOOOOOO", time: 171 },
  { text: "😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍", time: 13 },

 
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