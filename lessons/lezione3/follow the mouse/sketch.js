let canvasXMax=400;
let canvasYMax=400;
function setup() {
  createCanvas(canvasXMax, canvasYMax);
  background(220);

}

function draw() {
  textSize (15);
  //concatenazione di stringhe di testo al valore di variabili  (le stringhe sono rosse e tra i doppi apici e le variabili sono blu e sono valori):
  let string_toprint="Mouse x="+mouseX + ",y="+mouseY;

  text (string_toprint,20,20);
  strokeWeight (5);
  //la linea ha come coordinate il punto di ogine (x e y) e poi le coordinate del mouse
  line (0,mouseX,canvasXMax, mouseY);

  //feedback tasto mouse sx 
  //se schiacciamo il mouse
  //P5 --> true, se il mouse schiacciato, atrimenti false
  if(mouseIsPressed==true){
    //posso anche scegliere quale dei due tasti
    //se viene schiacciato il tasto destro ricreo background
    if (mouseButton==RIGHT){
      background(220);
    }
    //coloriamo di giallo
    stroke("yellow");
  } else{
    //coloriamo di nero
    stroke("black");
  }

}
