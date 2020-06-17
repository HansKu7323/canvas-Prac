'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined'){
      return;
    }
    const ctx = canvas.getContext('2d');

    const img = document.createElement('img');
    img.src = 'img/logo.png'

    img.addEventListener('load', () => {
      // ctx.drawImage(img, 100, 100);
      // ctx.drawImage(img, 10, 10, 80, 80);
      // const pattern = ctx.createPattern(img, 'repeat');
      // repeat-x, repeat-y, no-repeat
      const pattern = ctx.createPattern(img, 'repeat-x');
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    });
    
  }

  draw();
}