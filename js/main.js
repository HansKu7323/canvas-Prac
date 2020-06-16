'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined'){
      return;
    }
    const ctx = canvas.getContext('2d');

    // ctx.arc(x, y, r, start, end);
    // ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    // ctx.arc(100, 100, 50, 0, 300/360* 2 * Math.PI);
    // ctx.arc(100, 100, 50, 0, Math.PI,);
    // ctx.arc(100, 100, 50, 0, 300/180 * Math.PI);
    ctx.moveTo(100, 100);
    // ctx.arc(100, 100, 50, 0, 300/180 * Math.PI, true);
    // ctx.arc(100, 100, 50, 0, 300/180 * Math.PI,);
    ctx.arc(100, 100, 50, 0, 90/180 * Math.PI,);
    
    // ctx.stroke();
    ctx.fill();
  }

  draw();
}