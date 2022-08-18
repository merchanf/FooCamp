let articulosPrincipales = ["🍖", "🍎", "🍓", "🍉"];
/*
let articulosSustitutos = ["🍗",  "",    "🍒", "🍈"];
let articulosSustitutos2 = ["🥔", "🍠", "🥐", "🍞",];
let articulosSustitutos3 = ["",    "",   "🍕", "",];
*/
let articulosSustitutos = [
  ["🍗", "", "🍒", "🍈"], // lunes
  ["🥔", "🍠", "🥐", "🍞"], // martes
  ["", "", "🍕", ""], //miercoles
];

// buscar un articulo.
let articuloABuscar = "🍉";
let encontrado = false;
for (let i = 0; i < articulosSustitutos.length; i++) {
  let sublista = articulosSustitutos[i];
  for (let j = 0; j < sublista.length; j++) {
    if (articulosSustitutos[i][j] === articuloABuscar) {
      encontrado = true;
    }
  }
}
if (encontrado === true) {
  console.log("lo encontramos!");
} else {
  console.log("no lo encontramos!");
}
