const Trex = {
    name: "Tyrannosaurus Rex",
    power: 81
}

const Ankylosaurus = {
    name: "Ankylosaurus",
    power: 74
}

const Spinosaurus = {
    name: "Spinosaurus",
    power: 96
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
    power: 83
}

const Micropachycephalosaurus = {
    name: "Micropachycephalosaurus",
    power: 5
}
const Carnotaurus = {
    name: "Carnotaurus",
    power: 94
}

const Parasaurolophus = {
    name: "Parasaurolophus",
    power: 50
}

const Triceratops = {
    name: "Triceratops",
    power: 70
}

const Dilophosaurus = {
    name: "Dilophosaurus",
    power: 82
}

const Brachiosaurus = {
    name: "Brachiosaurus",
    power: 78
}

const dinosaurs = [Trex, Ankylosaurus, Spinosaurus, Pachycephalosaurus, Supersaurus, Stegosaurus, Pteradactyl, Velociraptor, Micropachycephalosaurus, Carnotaurus, Parasaurolophus, Triceratops, Dilophosaurus, Brachiosaurus];

let select1 = document.getElementById('dinosaur-one');
let select2 = document.getElementById('dinosaur-two');

for (let obj of dinosaurs) {
    let option = document.createElement("option");
    option.text = obj.name;
    option.value = JSON.stringify(obj);
    select1.add(option);
  }
  
    for (let obj of dinosaurs) {
      let option = document.createElement("option");
      option.text = obj.name;
      option.value = JSON.stringify(obj);
      select2.add(option);
  }

const winningParagraph = document.getElementById('the-winner');

let firstFighter = document.getElementById('dinosaur-one').value;
let secondFighter = document.getElementById('dinosaur-two').value;

const fightButton = document.getElementById('winner-button')

fightButton.onclick = function() {ultimateRumble(firstFighter, secondFighter)};

const ultimateRumble = () => {

    let selected1 = document.getElementById('dinosaur-one').value;
    let selected2 = document.getElementById('dinosaur-two').value;
    let dinosaur1 = JSON.parse(selected1);
    let dinosaur2 = JSON.parse(selected2);
  
    let rollOfTheDice = 100 * Math.random();
    let winner;
    let likelyWinner;
    let likelyLoser;
   
    //determine the likely winner based on power
   if (dinosaur1.power >= dinosaur2.power) {
        likelyWinner = dinosaur1;
        likelyLoser = dinosaur2;
    } else if (dinosaur2.power >= dinosaur1.power){
        likelyWinner = dinosaur2;
        likelyLoser - dinosaur1;
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

    winningParagraph.innerHTML = `And the winner is the ${winner.name}`;
  
  };

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