let randomColor;

function setup() {
    createCanvas(100*14, 1000);
    noLoop ();
}

function draw (){
    background("black");
    frameRate(1);

    //QUADRATI GRANDI
    let rectSize=100
    let columns = 14
    let rows = 10
    let colors = ["#ff5c00","#ffee8c"]; //orange, yellow
        //costruisco griglia con ciclo for
        for (let i=0; i<columns; i++) {

            //rect (xRect*i,yRect,rectSize)
            for (let j=0; j<rows; j++) { //variabile j per le colonne
                let xRect = i * rectSize;
                let yRect = j * rectSize;

                let xRectSmall = i * rectSize + rectSize/4;
                let yRectSmall = j * rectSize + rectSize/4;

                randomColor = random (colors);

                if (randomColor==="#ff5c00"){ //orange
                    fill (randomColor);
                    strokeWeight (7);
                    rect (xRect,yRect,rectSize);
                    fill ("#ffee8c");//yellow
                    strokeWeight (0);
                    rect (xRectSmall,yRectSmall,rectSize/2);
                } else {
                    fill ("#ffee8c");//yellow
                    strokeWeight (7);
                    rect (xRect,yRect,rectSize);
                    fill ("#ff5c00"); //orange
                    strokeWeight (0)
                    rect (xRectSmall,yRectSmall,rectSize/2);
                    
                }
                
            }
        }
   
   
}