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
    select1.options[select1.options.length] = new Option(dinosaurs[index].name, index);
}

let select2 = document.getElementById("dinosaur-two");
for(index in dinosaurs) {
    select2.options[select2.options.length] = new Option(dinosaurs[index].name, index);
}

/*


*/





const ultimateRumble = (Dino1, Dino2) => {
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
    
 

    console.log(`${likelyWinner.name} is the likely winner`)
    console.log(`${likelyLoser.name} is the likely loser`)
    
  

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
    document.getElementById("thewinner").innerHTML = `And the winner is the ${winner}`;
 
}


//console.log(ultimateRumble(trex, ankylosaurus));

let firstFighter = document.getElementById('dinosaur-one');
let secondFighter = document.getElementById('dinosaur-two');

ultimateRumble(firstFighter, secondFighter);


const fightButton = document.getElementById('winner-button')

fightButton.onclick = ultimateRumble();
