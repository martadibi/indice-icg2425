let button;
let elem;
let dice=0;
function setup() {
  elem= createElement("h2","Keep rolling!") //definisco la varibaile "elem" come funzione createELement
  elem.position (0,0);
  createCanvas(400, 400);
  button = createButton ("roll the dice"); //associo alla variabile "button" la funzione createButton
  button.position(200,200);
  button.mousePressed (rollDice); //definisco che al click del mouse venga richiamata la funzione rollDice

}

function draw() {
  background(220);
  stroke ("white");
  strokeWeight (3);
  fill ("white");
  textSize (50);
  text ("Dice value"+ dice, 5, 300);

}

function rollDice (){
  dice = random (1,6);
  //vogliamo solo numeri interi; esistono due funzioni con diverse modalità di approssimazione: floor e ceil
  //dice = floor (dice) --> intero inferiore
  dice = ceil (dice); //intero superiore 

}
