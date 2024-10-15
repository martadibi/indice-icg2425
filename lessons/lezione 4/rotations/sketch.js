let angle=5; //variabile globale
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER); //disegna il rettangolo rispetto al suo centro invece dell'angolo in alto a sinistra
  angleMode(DEGREES); //altrimenti di default angoli in radianti

}

function draw() {
  background(220);

  push ();
  rotate (angle*0.1); //moltiplicpo per un valore per cambiare velocità
  strokeWeight(1);
  fill("orange");
  //translate(100,100); //come una matrice di traslazione (x,y)
  rect (50,50,100,50); // --> 50+100, 50+100
  fill ("purple");
  rect (0,0,200,30);
  pop ();

  strokeWeight(5);
  point (50,50);
  point (0,0); //punto rispetto a cui è avvenuta la traslazione
  

  //ROTAZIONE
  push();
  translate(200,200); //nuovo anchor point che coincide con il centro del cerchio
  rotate (angle);
  //circle (200,200,100); // poiché viene disegnato anch'esso a partire dal nuovo acnhor point devo cambiare coordinate
  circle (0,0,100) //cerchio con nuove coordinate
  line (0,-50,0,50) //x,y del primo estremo; x,y del secondo estremo del segmento
  pop();

  rect (50,50,100,50); //poiché è fuori dal push-pop non subisce la rotazione
  angle=angle + 2 
}
