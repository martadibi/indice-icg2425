function setup() {
  createCanvas(400, 400);
}

let numero=0
function draw() {
  background("black");
  frameRate (0);

  let xRectBig=0, yRectBig=0
  let wRectBig=100
  let xRectSmall=wRectBig/4, yRectSmall=wRectBig/4
  let wRectSmall=wRectBig/2
  
  for (let i=0;i<4;i=i+1){

    let randomNumber = Math.floor(Math.random() * 11); //numero casuale tra 0 e 10 

    if (randomNumber%2===0){
      fill("orange");
      rect (xRectBig,yRectBig,wRectBig);
      fill("yellow")
      rect (xRectSmall,yRectSmall,wRectSmall)
    } 

    rect ((xRectBig*i),yRectBig,wRectBig);
    rect (xRectSmall+(wRectBig+10)*i,yRectSmall,wRectSmall);

    //scelta numero INTERO casuale tra 0 e 1
    let min = 0;
    let max = 1;
    let numero_singolo= Math.floor(Math.random() * (max - min + 1)) + min; 
    //numero singolo: numero random per disegnare il singolo quadrotto con i colori giusti

    rect (xRectSmall,yRectSmall,wRectSmall); //primo rettangolo piccolo
    strokeWeight(0);
    
 
  }

  
}
