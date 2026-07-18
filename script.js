let score = 0;
let autoClickers = 0;

function clickSwitch() {
    score++;
    updateDisplay();
}

function buyAutoClicker() {
    if (score >= 10) {
        score -= 10;
        autoClickers++;
        updateDisplay();
    } else {
        alert("Not enough games played!");
    }
}

function updateDisplay() {
    document.getElementById('score').innerText = score;
    document.getElementById('auto-count').innerText = autoClickers;
}

// This makes the game run automatically
setInterval(() => {
    score += autoClickers;
    updateDisplay();
}, 1000);
