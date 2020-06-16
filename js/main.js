'use strict';

{
  function draw() {
    const canvas = document.querySelector('canvas');
    if (typeof canvas.getContext === 'undefined'){
      return;
    }
    const ctx = canvas.getContext('2d');
    
    // ctx.createLinearGradient(x0, y0, x1, y1);
    // const g = ctx.createLinearGradient(0, 0, canvas.width, 0);//漸變
    // const g = ctx.createRadialGradient(
    //   x0, y0, r0,
    //   x1, y1, r1
    // );

    const g = ctx.createRadialGradient(
      canvas.width/2, canvas.height/2, 50,
      canvas.width/2+100, canvas.height/2+200, 500,
    );

    g.addColorStop(0, '#f00');//起点の色
    g.addColorStop(0.1, '#0f0');//間の色
    g.addColorStop(1, '#00f');//終点の色

    ctx.fillStyle = g;

    //ctx.fillRect(0, 0, 600, 240);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  draw();
}