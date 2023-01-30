const Trex = {
    name: "Tyrannosaurus Rex",
    power: 81
}

const Ankylosaurus = {
    name: "Ankylosaurus",
    power: 75
}

const Spinosaurus = {
    name: "Spinosaurus",
    power: 95
}

const Pachycephalosaurus = {
    name: "Pachycephalosaurus",
    power: 20
}

const Supersaurus = {
    name: "Supersaurus",
    power: 90
}

const Stegosaurus = {
    name: "Stegosaurus",
    power: 50
}

const Pteradactyl = {
    name: "Pteradactyl",
    power: 55
}

const Velociraptor = {
    name: "Velociraptor",
    power: 80
}

const Micropachycephalosaurus = {
    name: "Micropachycephalosaurus",
    power: 5
}
const Carnotaurus = {
    name: "Carnotaurus",
    power: 95
}

const dinosaurs = [Trex, Ankylosaurus, Spinosaurus, Pachycephalosaurus, Supersaurus, Stegosaurus, Pteradactyl, Velociraptor, Micropachycephalosaurus, Carnotaurus];






let select1 = document.getElementById("dinosaur-one");
for(index in dinosaurs) {
    select1.options[select1.options.length] = new Option(dinosaurs[index].name);
}

let select2 = document.getElementById("dinosaur-two");
for(index in dinosaurs) {
    select2.options[select2.options.length] = new Option(dinosaurs[index].name);
}

/*


*/

const winningParagraph = document.getElementById('the-winner');

let firstFighter = document.getElementById('dinosaur-one').value;
let secondFighter = document.getElementById('dinosaur-two').value;

const fightButton = document.getElementById('winner-button')

fightButton.onclick = function() {ultimateRumble(firstFighter, secondFighter)};

console.log(firstFighter.power)

const ultimateRumble = ( Dino1, Dino2 ) => {
console.log(`testing: ${Dino1.power}`)

winningParagraph.innerHTML = "This part isn't working yet lol ¯\_(ツ)_/¯"

    let rollOfTheDice = 100 * Math.random();
    let winner;
    let likelyWinner;
    let likelyLoser;
   
    //determine the likely winner based on power
   if (Dino1.power >= Dino2.power) {
        likelyWinner = Dino1;
        likelyLoser = Dino2;
    } else if (Dino2.power >= Dino1.power){
        likelyWinner = Dino2;
        likelyLoser - Dino1;
    }
    
    /*
    console.log(`${likelyWinner.name} is the likely winner`)
    console.log(`${likelyLoser.name} is the likely loser`)
    */
  
    let num1 = likelyWinner.power;
    let num2 = likelyLoser.power;

  
    //determine how much of an advantage the likely winner has
        let advantageAmount = num1 - num2;
    //console.log(advantageAmount)

    let winningLine = 50 - (50 * (advantageAmount / 100));
    
    //console.log(rollOfTheDice);
    //console.log(winningLine);

    //determine winner comparing the roll of the dice against the adjusted "midpoint"
    if (rollOfTheDice >= winningLine) {
        winner = likelyWinner
    } else {
        winner = likelyLoser
    }

  
    //console.log(`And the winner is the ${winner.name}!`)
    winningParagraph.innerHTML = `And the winner is the ${winner}`;
 
}


//console.log(ultimateRumble(trex, ankylosaurus));



//ultimateRumble(firstFighter, secondFighter);





/*

let arr = [

  {id: 1,
  name: 'Dan',
  age: 42},

  {id: 2,
    name: 'Jenn',
    age: 43},

{id: 3,
  name: 'Rohen',
  age: 5},
];

let select1 = document.getElementById('dropdownId1');
let select2 = document.getElementById('dropdownId2');
let clicked = document.getElementById('clicked');

for (let obj of arr) {
  let option = document.createElement("option");
  option.text = obj.name;
  option.value = JSON.stringify(obj);
  select1.add(option);
}

  for (let obj of arr) {
    let option = document.createElement("option");
    option.text = obj.name;
    option.value = JSON.stringify(obj);
    select2.add(option);
}

clicked.onclick = function() {myFunction()}

function myFunction() {

  let selected1 = document.getElementById('dropdownId1').value;
  let selected2 = document.getElementById('dropdownId2').value;
  let obj1 = JSON.parse(selected1);
  let obj2 = JSON.parse(selected2);


  if (obj1.age > obj2.age) {
    console.log(`${obj1.name} is older than ${obj2.name}`)
  } else  if (obj1.age < obj2.age) {
    console.log(`${obj2.name} is older than ${obj1.name}`)
  } else {
    console.log(`${obj1.name} is the same age as ${obj2.name}`)
  }


};

*/