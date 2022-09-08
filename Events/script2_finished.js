const divs = document.querySelectorAll('div');

document.addEventListener('click', function (event) {
  if (event.target.matches('DIV')) {
    console.log(event.target.id);
  }
});

const purple = document.createElement('div');
purple.id = 'purple';
purple.style.background = 'purple';
purple.style.width = '350px';
purple.style.height = '50px';
document.body.appendChild(purple);

const pink = document.createElement('div');
pink.id = 'pink';
pink.style.background = 'pink';
pink.style.width = '350px';
pink.style.height = '50px';
document.body.appendChild(pink);

const black = document.createElement('div');
black.id = 'black';
black.style.background = 'black';
black.style.width = '350px';
black.style.height = '50px';
document.body.appendChild(black);
