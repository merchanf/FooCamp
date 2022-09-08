function obtenerPicas(intento, numeroAdivinar) {
  let picas = 0;
  for (let i = 0; i < intento.length; i++) {
    for (let j = 0; j < numeroAdivinar.length; j++) {
      if (intento[i] == numeroAdivinar[j] && i !== j) {
        picas++;
      }
    }
  }
  return picas;
}

function obtenerFijas(intento, numeroAdivinar) {
  let fijas = 0;
  for (let i = 0; i < intento.length; i++) {
    if (intento[i] == numeroAdivinar[i]) {
      fijas++;
    }
  }
  return fijas;
}

function picasyfijas() {
  let intento;
  let numeroAleatorio = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
  numeroAleatorio = numeroAleatorio.toString();
  while (intento !== numeroAleatorio) {
    intento = prompt("Ingrese un numero entre 1000 y 9999");

    const picas = obtenerPicas(intento, numeroAleatorio);
    const fijas = obtenerFijas(intento, numeroAleatorio);

    if (fijas === numeroAleatorio.length) {
      alert("Felicidades, adivinaste el numero");
    } else {
      alert(`${picas} picas y ${fijas} fijas`);
    }
  }
}

//------------------------------------------------------------------------------
// Minified code
//------------------------------------------------------------------------------
function obtenerPicas(c, d) {
  let e = 0;
  for (let a = 0; a < c.length; a++)
    for (let b = 0; b < d.length; b++) c[a] == d[b] && a !== b && e++;
  return e;
}
function obtenerFijas(b, d) {
  let c = 0;
  for (let a = 0; a < b.length; a++) b[a] == d[a] && c++;
  return c;
}
function picasyfijas() {
  let b,
    a = Math.floor(9e3 * Math.random() + 1e3);
  for (a = a.toString(); b !== a; ) {
    b = prompt("Ingrese un numero entre 1000 y 9999");
    let d = obtenerPicas(b, a),
      c = obtenerFijas(b, a);
    c === a.length
      ? alert("Felicidades, adivinaste el numero")
      : alert(`${d} picas y ${c} fijas`);
  }
}
