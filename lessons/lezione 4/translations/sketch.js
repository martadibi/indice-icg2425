function setup() {
  createCanvas(400, 400);
  rectMode(CENTER); //disegna il rettangolo rispetto al suo centro invece dell'angolo in alto a sinistra
}

function draw() {
  background(220);
  strokeWeight(1);
  fill("orange");
  //translate(100,100); //come una matrice di traslazione (x,y)
  translate(mouseX,mouseY);
  rect (50,50,100,50); // --> 50+100, 50+100
  fill ("purple");
  rect (0,0,200,30); 
  strokeWeight(5);
  point (50,50);
  point (0,0); //punto rispetto a cui è avvenuta la traslazione
  
}
