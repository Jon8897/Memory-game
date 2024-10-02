// Memory Game JavaScript - V1.0.0.3
// V1.0.0.3 - Added section transitions between login, game mode selection, and game start

let level = 1; // Initial level
let time = 0;
let score = 0;
let win = 0;
let maxGridSize = 10; // Maximum number of rows/columns

// DOM Elements
const cardContainer = document.getElementById('card-container');
const timeElt = document.getElementById('time');
const scoreElt = document.getElementById('score');
const levelElt = document.getElementById('level');

// Function to handle guest login
function startAsGuest() {
    console.log("Guest login");
    hideLoginSection();
    showInitialPage();
}

// Function to hide the login section
function hideLoginSection() {
    document.getElementById('login-section').classList.add('hidden');
}

// Function to show the initial page (game mode selection)
function showInitialPage() {
    document.getElementById('initial-page').classList.remove('hidden');
}

// Social login buttons (same as guest, just a placeholder for now)
function socialLogin(platform) {
    console.log(`Login with ${platform}`);
    hideLoginSection();
    showInitialPage();
}

// Function to open single-player mode
function openSinglePlayer() {
    document.getElementById('initial-page').classList.add('hidden');
    document.getElementById('single-player-modal').classList.remove('hidden');
}

// Function to open multiplayer mode
function openMultiplayer() {
    document.getElementById('initial-page').classList.add('hidden');
    document.getElementById('multiplayer-modal').classList.remove('hidden');
}

// Function to open leaderboard
function openLeaderboard() {
    document.getElementById('initial-page').classList.add('hidden');
    document.getElementById('leaderboard-modal').classList.remove('hidden');
}

// Function to close the leaderboard modal
function closeLeaderboard() {
    document.getElementById('leaderboard-modal').classList.add('hidden');
    showInitialPage();
}

// Function to start single-player game
function startSinglePlayerGame() {
    document.getElementById('single-player-modal').classList.add('hidden');
    startGame();
}

// Function to start multiplayer game
function startMultiplayerGame() {
    document.getElementById('multiplayer-modal').classList.add('hidden');
    startGame(); // Can be expanded with multiplayer logic later
}

// Function to start the game
function startGame() {
    document.getElementById('main-game-section').classList.remove('hidden');
    document.getElementById('footer-section').classList.remove('hidden');
    generateGrid(level); // Can add game grid logic here
}

// Function to generate a dynamic grid based on the level
function generateGrid(level) {
    cardContainer.innerHTML = ''; // Clear existing cards
    let pairs = Math.min(Math.floor(level / 5) + 2, maxGridSize); // Number of pairs increases with level
    let totalCards = pairs * 2; // Each pair has 2 cards

    // Calculate rows and columns based on totalCards
    let gridSize = Math.ceil(Math.sqrt(totalCards));
    cardContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; // Dynamic columns
    cardContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;    // Dynamic rows

    // Shuffle and generate the cards for the level
    let shuffledImages = getShuffledImages(pairs);
    for (let i = 0; i < totalCards; i++) {
        let card = document.createElement('div');
        card.classList.add('box', 'play');
        card.innerHTML = `<img src="${shuffledImages[i]}" alt="image" class="hidden">`;
        cardContainer.appendChild(card);
    }

    attachGameLogic(); // Attach game logic after grid generation
}

// Function to shuffle images
function getShuffledImages(pairs) {
    let images = [];
    for (let i = 0; i < pairs; i++) {
        images.push(`image_${i % 10}.jpg`); // Use modulo to cycle images
        images.push(`image_${i % 10}.jpg`);
    }
    return images.sort(() => Math.random() - 0.5); // Shuffle images
}

// Placeholder function to attach game logic to cards
function attachGameLogic() {
    // Game logic can be implemented here
}