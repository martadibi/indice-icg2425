let angle=5;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  //palla da basket
  //drawRotateBasketball (angle); //funzione
  drawBasketball (200,200,100);
  drawRotateBasketball (200,200,100,angle);

  angle +=0.07; //cosa vuol dire? --> velocità

}

function drawRotateBasketball (xCenter,yCenter,dBall,angle) {

  push ();
  //codice delle trasformazioni
  translate (xCenter,yCenter);
  rotate (angle);
  drawBasketball (0,0, dBall); //poiché ho sposatto l'anchor point centro drawBasketBall in (0,0)

  pop ();

}


// function idFunzione (<lista dei parametri>) {corpo della funzione} --> struttura funzione
function drawBasketball (xCenter,yCenter, dBall) { //definisco la funzione che disegni la palla (statica)
  fill ("orange");
  stroke ("black");
  strokeWeight (3);
  circle (xCenter,yCenter,dBall);
  line (xCenter-50,yCenter,xCenter+50,yCenter);
  line (xCenter-35,35+yCenter,xCenter+35,yCenter-35);

}
