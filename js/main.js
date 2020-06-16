'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined'){
      return;
    }
    const ctx = canvas.getContext('2d');
    
    // ctx.createLinearGradient(x0, y0, x1, y1);
    const g = ctx.createLinearGradient(0, 0, canvas.width, 0);//漸變

    g.addColorStop(0, '#f00');//起点の色
    g.addColorStop(0.3, '#0f0');//間の色
    g.addColorStop(1, '#00f');//終点の色

    ctx.fillStyle = g;

    //ctx.fillRect(0, 0, 600, 240);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  draw();
}