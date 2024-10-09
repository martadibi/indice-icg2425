function setup() {
  createCanvas(400, 400);
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

  


}
