// Memory Game JavaScript - V1.0.0.1

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
const postElt = document.getElementById('post');
const finalElt = document.getElementById('final');
const nextLevelBtn = document.getElementById('next-level');
const retryBtn = document.getElementById('retry');
const exitBtn = document.getElementById('exit');

// Add event listeners for post-game buttons
nextLevelBtn.addEventListener('click', nextLevel);
retryBtn.addEventListener('click', retryLevel);
exitBtn.addEventListener('click', exitGame);

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
        images.push(library.colors[i % library.colors.length]); // Use modulo to cycle images
        images.push(library.colors[i % library.colors.length]);
    }
    return images.sort(() => Math.random() - 0.5); // Shuffle images
}

// Function to handle the logic after winning a level
function levelCompleted() {
    clearTimeout(timer); // Stop the timer
    finalElt.innerHTML = `You won ${score} points in ${time} seconds on Level ${level}`;
    postElt.classList.remove('hidden'); // Show post-game modal
}

// Event handler for 'Next Level' button
function nextLevel() {
    level++; // Increase level
    resetGame(); // Reset the game
    generateGrid(level); // Generate the new grid for the next level
    postElt.classList.add('hidden'); // Hide the post-game modal
    levelElt.textContent = `Level: ${level}`; // Update the level display
}

// Event handler for 'Retry' button
function retryLevel() {
    resetGame(); // Reset game state
    generateGrid(level); // Generate grid for the same level
    postElt.classList.add('hidden'); // Hide post-game modal
}

// Event handler for 'Exit' button
function exitGame() {
    window.location.reload(); // Reload the page (exit to the initial state)
}

// Reset the game state
function resetGame() {
    win = 0;
    score = 0;
    time = 0;
    scoreElt.textContent = score;
    timeElt.textContent = time;
}

// Initial call to generate the grid for Level 1
generateGrid(level);