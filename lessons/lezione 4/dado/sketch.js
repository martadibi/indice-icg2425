let button;
let elem;
let dice=0;
let numbers = [1,2,5,79];
let colors = ["red","gren","pink","blue", "orange","yellow"];
//#elem???????
//colors.lenght == 6

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
  strokeWeight (2);

  //if (dice==1){
  //  color ="red"
  //} else if (dice==2){
  //  color ="green";
  //}

  //INVECE DI FARE CATENA DI IF USO ARRAY
  let color = colors [dice - 1]; //l'indice dell'array asusme il valore del dado (meno 1 così parto da uno e non da 0)
  fill (color);
  textSize (50);
  text ("Dice value "+dice, 5, 300);

}

function rollDice (){
  dice = random (1,6);
  //vogliamo solo NUMERI INTERI; esistono due funzioni con diverse modalità di approssimazione: floor e ceil
  //dice = floor (dice) --> intero inferiore
  dice = ceil (dice); //intero superiore 

}
