let canvasXMax=400, canvasYMax=400;
let moonXpos=255;
let moonYpos=50;
let slider;
function setup() {
  createCanvas(canvasXMax, canvasYMax);
  slider = createSlider (0, 255, 0, 1)
  slider
}
function draw() {
  background("navy");
  //frequenza con cui si aggiorna
  frameRate(10);

  //moon
  colorMode(RGB);
  fill(255, 255, 0, 100);
  stroke(255, 255, 255, 100)
  strokeWeight(10); //large outline
  circle(moonXpos, 50, 100)
  //overlappin circle
  stroke("navy");
  fill("navy");
  circle(moonXpos+50, 50,100);
  moonXpos=moonXpos+1; //animazione della luna
  //condizionalmente la luna esce dai bordi
  if (moonXpos>canvasXMax){ //usciamo dal foglio
    moonXpos=0;
  }
  
  //METODO di aggiornamento 2
  //continua ad aggiungere 1 per ogni frame disegnato, è una variabile che continua ad incrementare; per resettarla devo schiacchiare tasto di aggiornamento
  moonXpos=frameCount % canvasXMax; //aggiungo operatore di modulo: definische che debba rimanere nei convini del canvas
  //il modulo aiuta a dlimitare dei confini, a definire un numero entro certi confini
 


  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  fill("green");
  let y = 300;
  rect(0, y, canvasXMax, y);
  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  let x_casa =0;
  let house_height = 100, house_width=100;
  for(let numero_case=0; numero_case<3; numero_case++){
    fill("white");
    rect(x_casa, y-house_height , house_width, house_height);
    fill("red");
    let roof_height=80;
    triangle(x_casa, y-house_height , x_casa+house_width, y-house_height, x_casa+(house_width/2), y-house_height-roof_height);
    x_casa += house_width+30;
  }

  //ROLLOVER --> agiamo se passiamo sopra
  //if ((mouseX>x_casa)&& //definisco condizione che le coordinate del mouse cadano dentro alle coord della casa; posso combinare diverse condizioni tramite operatori logici
  //(mouseX < x_casa + house_width) &&
  //(mouseY > left_corner) &&
  //(mouseY > left_corner+house_height)){ 
    //azione se la condizione è vera
  //  fill("navy");
  //  rect(x_casa, y-house_height , house_width, house_height);
  //} else {
  //  fill("white");
  //  rect(x_casa, y-house_height , house_width, house_height);
  //} 
  //BO NON FUNZIONA

  //disegno stelle random, generate casualmente 
  //uso costrutto for per fare ripetizioni
  let xStar=0; //definisco variabili posizione stelle
  let yStar=0;
  for (let numero_stelle = 0; numero_stelle<5; numero_stelle=numero_stelle+1){
    stroke (random (0,255)); //colore random in scala di grigi
    strokeWeight(random(0,50)); //dimensione random
    point (xStar,yStar);
    //attribuisco valori random alle variabili xStar e yStar
    xStar=random(0, canvasXMax);
    yStar=random(0, canvasYMax/2); //fratto 2 per evitare che vadano sulla metà inferiore ("prato")
  }
 

  //displays the x and y position of the mouse on the canvas
  stroke("white");
  strokeWeight(1);
  fill(255);//white text
  textSize(50)
  text(`X=${mouseX}, Y=${mouseY}`, 5, 50);
}
