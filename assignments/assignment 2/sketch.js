function setup() {
  createCanvas(400, 400);
  noLoop(); //così si aggiorna solo quando aggiorno la pagina
}

function draw() {
  background(220);
  
  //drawWorm (); //funzione che disegna la linea
  drawWorms (random (1,5), 50, random (2,5)); // funzione che disegna più linee; definisco che disegni un numero random di righe tra 1 e 5

  for (let i=0; i<5; i++){

    push (); //salva la posizione deglli assi a com'era prima delle trasformazioni, che viene ripristinata da pop
    translate (50*i,0);
    drawWorms (random (1,5), 50, random (2,5)); // funzione che disegna più linee; definisco che disegni un numero random di righe tra 1 e 5
    pop ();


  }

}


function drawWorm(side=50, points=7){ //definisco funzione che disegna glifo
  
  //let side = 50; //larghezza del lato del quadrato immaginario entro cui sta il glifo 

  beginShape();
    for (let p=0; p<points; p++){ //nvece di definire un vertice alla volta uso ciclo for
      let x = random(side); //valore random in funzione della variabile side
      let y = random (side);
      //vertex (x,y);
     
      curveVertex (x,y); //per fare linea curva --> funziona come curva di bezier quuindi metto point=7
    }
  endShape();
}

function drawWorms (numWorms = 3, side=50, points=4){ //definisco funzione che disegna più linee

  for (let n = 0; n < numWorms; n++){

    noFill();
    blendMode (BURN); //come si mescolano i colori se si sovrappongono
    stroke ("tomato");
    strokeWeight (5)
    drawWorm(side, points);
  }
}