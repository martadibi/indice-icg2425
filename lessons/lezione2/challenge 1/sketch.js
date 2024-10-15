function setup() {
  createCanvas(1000, 400);
}

function draw() {
  background("lightblue");


  //nuvola
  let d_grande=100
  let d_piccolo=60
  let yCircle=100
  let xCircleBig=150;
  let yCircleBig=90;
  let xCircleSmall=100

 


  fill ("white");
  strokeWeight (0);
  circle (xCircleSmall,yCircle,d_piccolo);
  circle (xCircleBig,yCircleBig,d_grande);
  circle (2*xCircleSmall,yCircle,d_piccolo);

  for (let i=0; i<3; i=i+1){
    circle (xCircleSmall+d_grande*2*i,yCircle+d_grande*i,d_piccolo);
    circle (xCircleBig+2*d_grande*i,yCircleBig+d_grande*i,d_grande);
    circle (2*xCircleSmall+2*d_grande*i,yCircle+d_grande*i,d_piccolo);
    circle (xCircleBig+6*d_grande*i,yCircleBig+3*i*d_grande-2*d_grande,d_grande);


  }
  

  

  


}
