//food emojis
var food = [
  ["🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒"],
  ["🍑", "🍍", "🥝", "🍅", "🍆", "🥑", "🥦", "🥒", "🌶", "🌽", "🥕"],
  ["🥔", "🍠", "🥐", "🍞", "🥖", "🥨", "🥞", "🧀", "🍖", "🍗", "🥩"],
  ["🥓", "🍔", "🍟", "🍕", "🌭", "🌮", "🌯", "🥗", "🥘", "🥫", "🍝"],
  ["🍜", "🍲", "🍛", "🍣", "🍱", "🍤", "🍙", "🍚", "🍘", "🍥", "🍢"],
  ["🍡", "🍧", "🍨", "🍦", "🍰", "🎂", "🍮", "🍭", "🍬", "🍫", "🍿"],
  ["🍩", "🍪", "🌰", "🥜", "🍯", "🥛", "🍼", "☕", "🍵", "🥤", "🍶"],
  ["🍺", "🍻", "🥂", "🍷", "🥃", "🍸", "🍹", "🍾", "🍶", "🍴", "🍽"],
  ["🥄", "🍴", "🍔", "🍟", "🍕", "🥪", "🥙", "🍳", "🥘", "🍲", "🥗"],
];

//                          0      1     2      3   4
let articulosPrincipales = [a, "🍎", "🍓", "🍉"];

let matrizArticulos = [
  ["🍗", "🥦", "🍒", "🍈"], //lunes
  ["🍌", "", "", "🌽"], //martes
  ["", "", "", "🍆"], //miercoles
];

//          fila columna
//     matriz []    []
let encontramos = false;
let elementoABuscar = "🍖";
for (
  let contadorfilas = 0;
  contadorfilas < matrizArticulos.length;
  contadorfilas++
) {
  let fila = matrizArticulos[contadorfilas];
  for (
    let contadorColumnas = 0;
    contadorColumnas < fila.length;
    contadorColumnas++
  ) {
    let elemento = fila[contadorColumnas];
    if (elemento === elementoABuscar) {
      encontramos = true;
    }
  }
}

if (encontramos === true) {
  console.log("si esta");
} else {
  console.log("no esta");
}
