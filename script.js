// V1.0.0.0

// other themes to add ?
// bigger memory?

var library = {
  colors: [
    'https://upload.wikimedia.org/wikipedia/commons/2/25/Red.svg',
    'https://upload.wikimedia.org/wikipedia/commons/3/32/Auto_Racing_Green.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a8/Purple.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/68/Solid_black.png',
    'https://upload.wikimedia.org/wikipedia/commons/7/70/Solid_white.svg',
    'https://upload.wikimedia.org/wikipedia/en/6/6d/Orange_flag.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG',
    'https://upload.wikimedia.org/wikipedia/en/f/fb/Yellow_icon.svg',
    'https://upload.wikimedia.org/wikipedia/commons/8/89/Color_icon_Light_Cornflower_blue.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/69/Dark_green.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/25/Red.svg',
    'https://upload.wikimedia.org/wikipedia/commons/3/32/Auto_Racing_Green.svg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a8/Purple.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/68/Solid_black.png',
    'https://upload.wikimedia.org/wikipedia/commons/7/70/Solid_white.svg',
    'https://upload.wikimedia.org/wikipedia/en/6/6d/Orange_flag.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/5f/Grey.PNG',
    'https://upload.wikimedia.org/wikipedia/en/f/fb/Yellow_icon.svg',
    'https://upload.wikimedia.org/wikipedia/commons/8/89/Color_icon_Light_Cornflower_blue.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/69/Dark_green.svg',
  ]
  //more options to be added

  /*numbers: [
    
   
  ],
  letters: [
    
    
  ],
  emojis: [
   
 
  shapes: [
    '
    
  ],
  signs: [

  ]*/
    
    
} 

var images = [],
    tempElt1 = "",
    tempElt2 = "",
    click = -1,
    win = 0,
    score = 0,
    time = 0;

var preElt = document.querySelector("#pre"),
    themesElt = document.querySelector("#themes"),
    boxElts = document.getElementsByClassName("box"),
    mainElt = document.querySelector(".main"),
    timeElt = document.querySelector("#time"),
    scoreElt = document.querySelector("#score"),
    postElt = document.querySelector("#post"),
    finalElt = document.querySelector("#final"),
    againElt = document.querySelector("#again");


// initiate the game with chosen theme
themesElt.addEventListener("click", function(e) {
  if (e.target.classList.contains("themes")) {
    activateTheme(e.target.id);
    preElt.classList.add("hidden");
  }
});

function activateTheme(theme) {
  // insert theme in images array
  switch (theme) {
    case "colors":
      for (let i=0; i<20; i++) {images.push(library.colors[i]);}
      break;
    case "numbers":
      for (let i=0; i<20; i++) {images.push(library.numbers[i]);}
      break;
    case "letters":
      for (let i=0; i<20; i++) {images.push(library.letters[i]);}
      break;
    case "emojis":
      for (let i=0; i<20; i++) {images.push(library.emojis[i]);}
      break;
    case "shapes":
      for (let i=0; i<20; i++) {images.push(library.shapes[i]);}
      break;
    case "signs":
      for (let i=0; i<20; i++) {images.push(library.signs[i]);}
      break;
  }
  // insert images in memory game
  for (let i=0; i<20; i++) {
    var rand = Math.floor(Math.random() * (images.length-1));
    boxElts[i].innerHTML = "<img src='" + images[rand] + "' alt='image' class='hidden'>";
    images.splice(rand, 1);
  }
}


// Handle the play
mainElt.addEventListener("click", gameLogic);

function gameLogic(e) {
  // make sure the box is playable
  if (e.target.classList.contains("play")) {
    e.target.firstChild.classList.remove("hidden");
    // first of two click
    if (click < 1) {
      tempElt1 = e.target;
      // timer
      if (click === -1) {
        timer = setInterval(function() {
          time++;
          timeElt.innerHTML = time;
        }, 1000);
      }
      click = 1;
    }

    // second click
    else if (e.target !== tempElt1) {
      tempElt2 = e.target;

      // different images
      if (tempElt1.firstChild.src !== tempElt2.firstChild.src) {
        mainElt.removeEventListener("click", gameLogic);
        setTimeout( function() {
          tempElt1.firstChild.classList.add("hidden");
          tempElt2.firstChild.classList.add("hidden");
          mainElt.addEventListener("click", gameLogic);
        }, 400);
        if (score > 0){
          score -= 2;
        }
        scoreElt.innerHTML = score;
      }

      // same images
      else {
        score += 10;
        win += 2;
        tempElt1.firstChild.classList.add("outlined");
        tempElt2.firstChild.classList.add("outlined");
        tempElt1.classList.remove("play");
        tempElt2.classList.remove("play");
        scoreElt.innerHTML = score;

        // game won
        if (win === 20) {
          clearTimeout(timer);
          finalElt.innerHTML = "You won " + score + " points <br> in " + time + " seconds";
          postElt.classList.remove("hidden");
        }
      }
      click = 0;
    }
  }
}

againElt.addEventListener("click", resetGame);

function resetGame() {
  // reset game
  tempElt1 = "";
  tempElt2 = "";
  click = -1;
  win = 0;
  score = 0;
  time = 0;
  postElt.classList.add("hidden");
  preElt.classList.remove("hidden");
  for (let i=0; i<20; i++) {
    boxElts[i].classList.add("play");
    boxElts[i].firstChild.classList.add("hidden");
  }
  timeElt.textContent = time;
  scoreElt.textContent = score;
}