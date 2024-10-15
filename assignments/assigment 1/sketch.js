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
  
  for (let i=0;i<14;i=i+1){

    let randomNumber = Math.floor(Math.random() * 11); //numero casuale tra 0 e 10 

    if (randomNumber%2===0){
      fill("orange");
      rect (xRectBig,yRectBig,wRectBig);
      fill("yellow")
      rect (xRectSmall,yRectSmall,wRectSmall)
    } else {
      fill("yellow");
      rect (xRectBig,yRectBig,wRectBig);
      fill("orange");
      rect (xRectSmall,yRectSmall,wRectSmall);
    }

    rect (xRectBig+wRectBig+10,yRectBig,wRectBig);
    rect (xRectSmall+wRectBig,yRectSmall,wRectSmall);

    //scelta numero INTERO casuale tra 0 e 1
    let min = 0;
    let max = 1;
    let numero_singolo= Math.floor(Math.random() * (max - min + 1)) + min; 
    //numero singolo: numero random per disegnare il singolo quadrotto con i colori giusti

  
    if (numero_singolo==0){ 
      fill ("yellow")
    } else {
      fill ("orange")
    }
    rect (xRectBig,yRectBig,wRectBig); //primo rettangolo grande
    strokeWeight(0);


    if (numero_singolo==0){ 
      fill ("orange")
    } else {
      fill ("yellow")
    }

    rect (xRectSmall,yRectSmall,wRectSmall); //primo rettangolo piccolo
    strokeWeight(0);
    
 






   


    //rect (xRectBig+wRectBig,yRectBig,wRectBig)
    //rect (xRectSmall+wRectBig*i,yRectSmall,wRectSmall)
    //rect (xRectSmall,yRectSmall+wRectBig*i,wRectSmall)
    //rect (xRectSmall+wRectBig*i,yRectSmall+wRectBig*i,wRectSmall) 
    //rect (xRectSmall+2*wRectBig*i+wRectBig*i,yRectSmall+2*wRectBig*i,wRectSmall) 
    //rect (xRectSmall+wRectBig*i,yRectSmall+3*wRectBig*i,wRectSmall) 

  }

  
}
