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

const dinosaurs = [Ankylosaurus, Brachiosaurus, Carnotaurus, Dilophosaurus, Micropachycephalosaurus, Pachycephalosaurus, Parasaurolophus, Pteradactyl, Spinosaurus, Stegosaurus, Supersaurus, Triceratops, Trex, Velociraptor];

let select1 = document.getElementById('dinosaur-one');
let select2 = document.getElementById('dinosaur-two');
const winningParagraph = document.getElementById('the-winner');

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


const fightButton = document.getElementById('winner-button')

fightButton.onclick = function() {ultimateRumble(select1, select2)};

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
    
    let num1 = likelyWinner.power;
    let num2 = likelyLoser.power;

  
    //determine how much of an advantage the likely winner has
    let advantageAmount = num1 - num2;
    let winningLine = 50 - (50 * (advantageAmount / 100));

    //determine winner comparing the roll of the dice against the adjusted "midpoint"
    if (rollOfTheDice >= winningLine) {
        winner = likelyWinner
    } else {
        winner = likelyLoser
    }

    winningParagraph.innerHTML = `And the winner is the ${winner.name}`;
  
  };

