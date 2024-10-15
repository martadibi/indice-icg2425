function setup() {
    createCanvas(800, 800);
}

function draw (){
    background("black");
    frameRate(1);

    //QUADRATI GRANDI
    let rectSize=100
    let columns = 14
    let rows = 10
    let colors = ["orange","yellow"];

        //costruisco griglia con ciclo for
        for (let i=0; i<columns; i++) {

            //rect (xRect*i,yRect,rectSize)
            for (let j=0; j<rows; j++) { //variabile j per le colonne
                let xRect = i * rectSize;
                let yRect = j * rectSize;
                let randomColorBig = random (colors);
                fill(randomColorBig);
                rect (xRect,yRect,rectSize);
            }
        }

        //QUADRATI PICCOLI
        for (let k=0; k<rows; k++){
            for (let h=0; h<rows; h++){
                let xRectSmall = k * rectSize + rectSize/4;
                let yRectSmall = h * rectSize + rectSize/4;
                let randomColorSmall = random (colors);
                fill(randomColorSmall);
                rect (xRectSmall,yRectSmall,rectSize/2);

            }
        }
    

        

    
   
}