'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined'){
      return;
    }
    const ctx = canvas.getContext('2d');

    const img = document.createElement('img');
    img.src = 'img/sprite.png';

    img.addEventListener('load', () => {
      // ctx.drawImage(img, 0, 0);
      ctx.drawImage(
        img,
        //sx, sy, sw, sh,
        70 * 2, 70, 70, 70,
        //dx, dy, dw, dh
        0, 0, 70, 70

        );

    });
    
  }

  draw();
}