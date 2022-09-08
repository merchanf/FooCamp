function picasYfijas() {
  let numeroAleatorio = Math.floor(Math.random() * (9999 - 1000)) + 1000;
  console.log(numeroAleatorio);
  numeroAleatorio = numeroAleatorio.toString();
  //picas
  //fijas
  return numeroAleatorio;
}

function encontrarFijas(numeroAleatorio, num) {
  let fijas = 0;
  for (let i = 0; i < numeroAleatorio.length; i++) {
    if (num[i] === numeroAleatorio[i]) {
      fijas++;
    }
  }
  return fijas;
}

console.log(encontrarFijas(numeroAleatorio, "num"));
