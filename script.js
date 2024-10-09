// Memory Game JavaScript - V1.0.0.4

let level = 1; // Initial level
let time = 0;
let score = 0;
let matches = 0; // Track the number of matches
let maxGridSize = 10; // Maximum number of rows/columns
let firstCard, secondCard; // Track selected cards
let lockBoard = false; // Prevent further clicks during comparison
let matchCount = 0; // Count matched pairs
let totalPairs = 0; // Total pairs based on level

// DOM Elements
const cardContainer = document.getElementById('card-container');
const timeElt = document.getElementById('time');
const scoreElt = document.getElementById('score');
const levelElt = document.getElementById('level');

// Function to handle guest login
function startAsGuest() {
    try {
        console.log("Guest login");
        hideLoginSection();
        showInitialPage();
    } catch (error) {
        console.error("Error in startAsGuest:", error);
    }
}

// Function to hide the login section
function hideLoginSection() {
    try {
        document.getElementById('login-section').classList.add('hidden');
    } catch (error) {
        console.error("Error in hideLoginSection:", error);
    }
}

// Function to show the initial page (game mode selection)
function showInitialPage() {
    try {
        document.getElementById('initial-page').classList.remove('hidden');
    } catch (error) {
        console.error("Error in showInitialPage:", error);
    }
}

// Social login buttons (same as guest, just a placeholder for now)
function socialLogin(platform) {
    try {
        console.log(`Login with ${platform}`);
        hideLoginSection();
        showInitialPage();
    } catch (error) {
        console.error("Error in socialLogin:", error);
    }
}

// Function to open single-player mode
function openSinglePlayer() {
    try {
        document.getElementById('initial-page').classList.add('hidden');
        document.getElementById('single-player-modal').classList.remove('hidden');
    } catch (error) {
        console.error("Error in openSinglePlayer:", error);
    }
}

// Function to open multiplayer mode
function openMultiplayer() {
    try {
        document.getElementById('initial-page').classList.add('hidden');
        document.getElementById('multiplayer-modal').classList.remove('hidden');
    } catch (error) {
        console.error("Error in openMultiplayer:", error);
    }
}

// Function to open leaderboard
function openLeaderboard() {
    try {
        document.getElementById('initial-page').classList.add('hidden');
        document.getElementById('leaderboard-modal').classList.remove('hidden');
    } catch (error) {
        console.error("Error in openLeaderboard:", error);
    }
}

// Function to close the leaderboard modal
function closeLeaderboard() {
    try {
        document.getElementById('leaderboard-modal').classList.add('hidden');
        showInitialPage();
    } catch (error) {
        console.error("Error in closeLeaderboard:", error);
    }
}

// Function to start single-player game
function startSinglePlayerGame() {
    try {
        document.getElementById('single-player-modal').classList.add('hidden');
        startGame();
    } catch (error) {
        console.error("Error in startSinglePlayerGame:", error);
    }
}

// Function to start multiplayer game
function startMultiplayerGame() {
    try {
        document.getElementById('multiplayer-modal').classList.add('hidden');
        startGame(); // Can be expanded with multiplayer logic later
    } catch (error) {
        console.error("Error in startMultiplayerGame:", error);
    }
}

// Function to start the game
function startGame() {
    try {
        document.getElementById('main-game-section').classList.remove('hidden');
        document.getElementById('footer-section').classList.remove('hidden');
        generateGrid(level);
        time = 0;
        score = 0;
        matches = 0;
        matchCount = 0;
        totalPairs = Math.min(Math.floor(level / 5) + 2, maxGridSize); // Calculate total pairs
        updateScore();
        updateTime();
        startTimer();
    } catch (error) {
        console.error("Error in startGame:", error);
    }
}

// Function to generate a dynamic grid based on the level using colors
function generateGrid(level) {
    try {
        cardContainer.innerHTML = ''; // Clear existing cards
        let pairs = Math.min(Math.floor(level / 5) + 2, maxGridSize); // Number of pairs increases with level
        let totalCards = pairs * 2; // Each pair has 2 cards

        // Calculate rows and columns based on totalCards
        let gridSize = Math.ceil(Math.sqrt(totalCards));
        cardContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; // Dynamic columns
        cardContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;    // Dynamic rows

        // Shuffle and generate the cards for the level using colors
        let shuffledColors = getShuffledColors(pairs);
        for (let i = 0; i < totalCards; i++) {
            let card = document.createElement('div');
            card.classList.add('box', 'play');
            card.dataset.color = shuffledColors[i];
            card.style.backgroundColor = "#333"; // Hidden state color
            card.addEventListener('click', flipCard);
            cardContainer.appendChild(card);
        }
    } catch (error) {
        console.error("Error in generateGrid:", error);
    }
}

// Function to generate shuffled colors for pairs
function getShuffledColors(pairs) {
    try {
        let colors = [];
        for (let i = 0; i < pairs; i++) {
            let color = getRandomColor();
            colors.push(color); // Add the same color twice for a matching pair
            colors.push(color);
        }
        return colors.sort(() => Math.random() - 0.5); // Shuffle the colors
    } catch (error) {
        console.error("Error in getShuffledColors:", error);
    }
}

// Function to generate a random color
function getRandomColor() {
    try {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    } catch (error) {
        console.error("Error in getRandomColor:", error);
    }
}

// Function to flip card
function flipCard() {
    try {
        if (lockBoard) return;
        if (this === firstCard) return; // Prevent clicking the same card

        this.style.backgroundColor = this.dataset.color; // Show the card's color
        this.classList.add('flipped');

        if (!firstCard) {
            // First card clicked
            firstCard = this;
        } else {
            // Second card clicked
            secondCard = this;
            lockBoard = true;
            checkMatch();
        }
    } catch (error) {
        console.error("Error in flipCard:", error);
    }
}

// Function to check if the two flipped cards match
function checkMatch() {
    try {
        if (firstCard.dataset.color === secondCard.dataset.color) {
            disableCards(); // Cards matched
        } else {
            unflipCards(); // No match, flip back
        }
    } catch (error) {
        console.error("Error in checkMatch:", error);
    }
}

// Function to disable cards after a match
function disableCards() {
    try {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
        matchCount++;
        score += 10;
        updateScore();

        if (matchCount === totalPairs) {
            setTimeout(() => nextLevel(), 1000); // Advance to next level
        }
    } catch (error) {
        console.error("Error in disableCards:", error);
    }
}

// Function to unflip cards if they don't match
function unflipCards() {
    try {
        setTimeout(() => {
            firstCard.style.backgroundColor = '#333'; // Reset to hidden state
            secondCard.style.backgroundColor = '#333'; // Reset to hidden state
            resetBoard();
        }, 1000);
    } catch (error) {
        console.error("Error in unflipCards:", error);
    }
}

// Function to reset the board state
function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

// Function to update score display
function updateScore() {
    scoreElt.textContent = `Score: ${score}`;
}

// Timer logic to update the timer display
function startTimer() {
    try {
        time = 0;
        const timer = setInterval(() => {
            time++;
            updateTime();
            if (matchCount === totalPairs) clearInterval(timer); // Stop timer if level is complete
        }, 1000);
    } catch (error) {
        console.error("Error in startTimer:", error);
    }
}

// Function to update the time display
function updateTime() {
    timeElt.textContent = `Time: ${time} sec`;
}

// Function to proceed to next level
function nextLevel() {
    try {
        level++;
        matchCount = 0;
        generateGrid(level);
        updateScore();
        updateTime();
    } catch (error) {
        console.error("Error in nextLevel:", error);
    }
}

// Global error handler for uncaught errors
window.onerror = function (message, source, lineno, colno, error) {
    console.error(`Global Error: ${message} at ${source}:${lineno}:${colno}`, error);
};