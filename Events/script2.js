const divs = document.querySelectorAll('div');

document.addEventListener('click', function (event) {
  const target = event.target;
  console.log(target.tagName);
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
