'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined'){
      return;
    }
    const ctx = canvas.getContext('2d');
    
    //ctx.fillRect(x, y, width, width);
    ctx.fillRect(150, 150, 50, 50);
    ctx.strokeRect(50, 50, 50, 50);
  }

  draw();
}