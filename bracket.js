const allDinosaurs = [
    { name: "Allosaurus",             power: 79 },
    { name: "Ankylosaurus",           power: 74 },
    { name: "Brachiosaurus",          power: 78 },
    { name: "Carnotaurus",            power: 94 },
    { name: "Dilophosaurus",          power: 82 },
    { name: "Iguanodon",              power: 48 },
    { name: "Micropachycephalosaurus",power: 5  },
    { name: "Pachycephalosaurus",     power: 20 },
    { name: "Parasaurolophus",        power: 50 },
    { name: "Pteradactyl",            power: 55 },
    { name: "Spinosaurus",            power: 96 },
    { name: "Stegosaurus",            power: 50 },
    { name: "Supersaurus",            power: 90 },
    { name: "Triceratops",            power: 70 },
    { name: "Tyrannosaurus Rex",      power: 81 },
    { name: "Velociraptor",           power: 83 },
];

let playerDinos = [];
let bracket = null;
let activeRound = 0;
let activeMatchIndex = 0;

function isPlayerDino(dino) {
    return dino && playerDinos.some(d => d.name === dino.name);
}

function fight(d1, d2) {
    const roll = 100 * Math.random();
    let likelyWinner, likelyLoser;

    if (d1.power >= d2.power) {
        likelyWinner = d1;
        likelyLoser = d2;
    } else {
        likelyWinner = d2;
        likelyLoser = d1;
    }

    const advantage = likelyWinner.power - likelyLoser.power;
    const winningLine = 50 - (50 * (advantage / 100));

    return roll >= winningLine ? likelyWinner : likelyLoser;
}

function startTournament() {
    const selects = document.querySelectorAll('.dino-pick');
    playerDinos = [];
    const seen = new Set();

    for (const sel of selects) {
        const name = sel.value;
        if (seen.has(name)) {
            alert('Please pick 8 different dinosaurs — no duplicates!');
            return;
        }
        seen.add(name);
        playerDinos.push(allDinosaurs.find(d => d.name === name));
    }

    // House gets the remaining 8, shuffled for variety
    let houseDinos = allDinosaurs
        .filter(d => !seen.has(d.name))
        .sort(() => Math.random() - 0.5);

    // Round 1: player[i] vs house[i]
    bracket = [
        playerDinos.map((d, i) => ({ d1: d, d2: houseDinos[i], winner: null })),
        Array.from({ length: 4 }, () => ({ d1: null, d2: null, winner: null })),
        Array.from({ length: 2 }, () => ({ d1: null, d2: null, winner: null })),
        [{ d1: null, d2: null, winner: null }]
    ];

    activeRound = 0;
    activeMatchIndex = 0;

    document.getElementById('selection-phase').style.display = 'none';
    document.getElementById('bracket-phase').style.display = 'flex';
    renderBracket();
}

function doFight(round, matchIndex) {
    // Find the active card and animate it
    const cards = document.getElementById(`round-${round}`).querySelectorAll('.match-card');
    const card = cards[matchIndex];
    card.classList.add('fighting');

    setTimeout(() => {
        const match = bracket[round][matchIndex];
        match.winner = fight(match.d1, match.d2);

        if (round < 3) {
            const nextMatch = Math.floor(matchIndex / 2);
            const nextSlot  = matchIndex % 2;
            if (nextSlot === 0) bracket[round + 1][nextMatch].d1 = match.winner;
            else                bracket[round + 1][nextMatch].d2 = match.winner;
        }

        // Advance to next match before re-rendering
        if (activeMatchIndex + 1 < bracket[activeRound].length) {
            activeMatchIndex++;
        } else if (activeRound < 3) {
            activeRound++;
            activeMatchIndex = 0;
        }

        renderBracket();
    }, 800);
}

function renderBracket() {
    for (let r = 0; r < 4; r++) {
        const col = document.getElementById(`round-${r}`);
        col.innerHTML = '';
        bracket[r].forEach((match, i) => {
            col.innerHTML += buildMatchCard(r, i, match);
        });
    }

    // Check end state
    const finalMatch = bracket[3][0];
    const banner = document.getElementById('champion');
    if (finalMatch.winner) {
        const playerWon = isPlayerDino(finalMatch.winner);
        banner.className = playerWon ? 'banner win' : 'banner loss';
        banner.textContent = playerWon
            ? `⭐ ${finalMatch.winner.name} wins the tournament! Your team prevails!`
            : `${finalMatch.winner.name} wins the tournament! Better luck next time.`;
        banner.style.display = 'block';
        return;
    }

    // Check if all player dinos have been eliminated before the final
    const allRoundsDone = bracket.slice(0, 3).every(round =>
        round.every(match => match.winner !== null)
    );
    if (allRoundsDone) {
        const playerStillAlive = isPlayerDino(bracket[3][0].d1) || isPlayerDino(bracket[3][0].d2);
        if (!playerStillAlive && !bracket[3][0].winner) {
            banner.className = 'banner loss';
            banner.textContent = 'All your dinos have been eliminated! The house wins.';
            banner.style.display = 'block';
        }
    }
}

function buildMatchCard(round, index, match) {
    const isExpanded = (round === activeRound && index === activeMatchIndex);
    const pairGap = (round === 0 && index % 2 === 1 && index < 7) ? ' pair-gap' : '';

    // --- Collapsed card ---
    if (!isExpanded) {
        const d1Name   = match.d1 ? match.d1.name : '???';
        const d2Name   = match.d2 ? match.d2.name : '???';
        const d1Star   = isPlayerDino(match.d1) ? ' ⭐' : '';
        const d2Star   = isPlayerDino(match.d2) ? ' ⭐' : '';

        let summary;
        if (match.winner) {
            const winnerName = match.winner.name;
            const loserName  = match.winner.name === d1Name ? d2Name : d1Name;
            const winnerStar = isPlayerDino(match.winner) ? ' ⭐' : '';
            const loserStar  = (winnerName === d1Name ? isPlayerDino(match.d2) : isPlayerDino(match.d1)) ? ' ⭐' : '';
            summary = `<span class="won">${winnerName}${winnerStar}</span> <span class="defeated">defeated</span> <span class="lost">${loserName}${loserStar}</span>`;
        } else {
            summary = `<span>${d1Name}${d1Star}</span> <span class="vs-sep">vs</span> <span>${d2Name}${d2Star}</span>`;
        }

        return `<div class="match-card collapsed${pairGap}"><div class="match-summary">${summary}</div></div>`;
    }

    // --- Expanded card ---
    const d1Pending = !match.d1;
    const d2Pending = !match.d2;
    const d1Name    = match.d1 ? match.d1.name : '???';
    const d2Name    = match.d2 ? match.d2.name : '???';
    const d1Won     = match.winner && match.winner.name === d1Name;
    const d2Won     = match.winner && match.winner.name === d2Name;
    const canFight  = match.d1 && match.d2 && !match.winner;

    const d1Slot = d1Pending ? 'pending' : d1Won ? 'winner' : match.winner ? 'loser' : '';
    const d2Slot = d2Pending ? 'pending' : d2Won ? 'winner' : match.winner ? 'loser' : '';

    const d1Player = isPlayerDino(match.d1) ? ' <span class="player-mark">⭐</span>' : '';
    const d2Player = isPlayerDino(match.d2) ? ' <span class="player-mark">⭐</span>' : '';

    return `
        <div class="match-card expanded${pairGap}">
            <div class="dino-slot ${d1Slot} ${isPlayerDino(match.d1) ? 'is-player' : ''}">${d1Name}${d1Player}</div>
            <div class="vs-label">VS</div>
            <div class="dino-slot ${d2Slot} ${isPlayerDino(match.d2) ? 'is-player' : ''}">${d2Name}${d2Player}</div>
            ${canFight ? `<button class="button fight-btn" onclick="doFight(${round}, ${index})">FIGHT!</button>` : ''}
        </div>
    `;
}

// Populate selection dropdowns on page load
window.onload = function () {
    const container = document.getElementById('dino-selects');

    for (let i = 0; i < 8; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'pick-wrapper';

        const label = document.createElement('label');
        label.textContent = `Dino ${i + 1}`;

        const sel = document.createElement('select');
        sel.className = 'dino-pick dropbtn';

        allDinosaurs.forEach(d => {
            const opt = document.createElement('option');
            opt.value = d.name;
            opt.textContent = d.name;
            sel.appendChild(opt);
        });

        sel.selectedIndex = i;

        wrapper.appendChild(label);
        wrapper.appendChild(sel);
        container.appendChild(wrapper);
    }
};
