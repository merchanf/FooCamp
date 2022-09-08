// Referencia de eventos
// https://developer.mozilla.org/es/docs/Web/Events
// https://javascript.info/bubbling-and-capturing

const azul = document.querySelector('#azul');
const verde = document.querySelector('#verde');
const rojo = document.querySelector('#rojo');

azul.addEventListener('click', function (event) {
  console.log('click azul');
});

verde.addEventListener('click', function (event) {
  console.log('click verde');
});

rojo.addEventListener('click', function (event) {
  console.log('click rojo');
});

azul.addEventListener(
  'click',
  function (event) {
    console.log('click azul');
  },
  { capture: true }
);

verde.addEventListener(
  'click',
  function (event) {
    event.stopPropagation();
    console.log('click verde');
  },
  { capture: true }
);

rojo.addEventListener(
  'click',
  function (event) {
    console.log('click rojo');
  },
  { capture: true }
);

// Bubbling
