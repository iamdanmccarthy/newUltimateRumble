const trex = {
    name: "Tyrannosaurus Rex",
    power: 80
}

const ankylosaurus = {
    name: "Ankylosaurus",
    power: 75
}

const spinosaurus = {
    name: "Spinosaurus",
    power: 95
}

const pachycephalosaurus = {
    name: "Pachycephalosaurus",
    power: 20
}

const supersaurus = {
    name: "Supersaurus",
    power: 90
}




let dino1 = document.getElementById('dinosaur-one').value;
let dino2 = document.getElementById('dinosaur-two').value;

const ultimateRumble = (dino1, dino2) => {
    let rollOfTheDice = 100 * Math.random();
    let winner;
    let likelyWinner;
    let likelyLoser;

    //determine the likely winner based on power
   if (dino1.power >= dino2.power) {
        likelyWinner = dino1;
        likelyLoser = dino2;
    } else {
        likelyWinner = dino2;
        likelyLoser - dino1;
    }

    //console.log(`${likelyWinner} is the likely winner`)

    //determine how much of an advantage the likely winner has
        let advantageAmount = likelyWinner.power - likelyLoser.power;
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



    document.getElementById("thewinner").innerHTML = `And the winner is the ${winner}`;
}


console.log(ultimateRumble(trex, ankylosaurus));


