let canvas; 
let world;
let keyboard = new Keyboard();
let sound = false;
let isloading = false;

/**
 * This function inits the mobile mode
 */
function initMobile() {
    bindKeyPressEvents();
    bindKeyReleaseEvents();
}


/**
 * This function shows the loading-bubble-animation and starts the game
 */
async function startGame() {
    let bubble1 = document.getElementById('startBubble');
    let bubble2 = document.getElementById('startBubble1');
    let bubble3 = document.getElementById('startBubble2');
    animateBubbles(bubble1, bubble2, bubble3);
    if (!isloading) {
        isloading = true;
        await init();
        isloading = false;
        setTimeout(() => {
            hideStartScreen();
        }, 1000);
       
    }
}


/**
 * This functioen initializes the game
 */
async function init() {
    canvas = document.getElementById('canvas');
    initLevel();
    world = new World(canvas, keyboard);
}


/**
 * Thiss function shows every loading-bubble in a specific time-intervall
 * @param {string} bubble1 - img bubble 1
 * @param {string} bubble2 - img bubble 2
 * @param {string} bubble3 - img bubble 3
 */
function animateBubbles(bubble1, bubble2, bubble3) {
    setTimeout(() => {
        bubble3.classList.remove('hidden');
    }, 50);
    setTimeout(() => {
        bubble1.classList.remove('hidden');
    }, 500);
    setTimeout(() => {
        bubble2.classList.remove('hidden');
    }, 900);
}


/**
 * event listener for the used keys
 */
window.addEventListener("keydown", (event) => {
    if(event.keyCode == 38) {
        keyboard.UP = true;
    }
    if(event.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if(event.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if(event.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if(event.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if(event.keyCode == 68) {
        keyboard.D = true;
    }
    if(event.keyCode == 83) {
        keyboard.S = true;
    }
});


/**
 * event listener for the used keys
 */
window.addEventListener("keyup", (event) => {
    if(event.keyCode == 38) {
        keyboard.UP = false;
    }
    if(event.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if(event.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if(event.keyCode == 37) {
        keyboard.LEFT = false;
    }
});


/**
 * This function sets the keys to true, when touching them (mobile)
 */
function bindKeyPressEvents() {
    // "Up" Button
    const upButton = document.getElementById('up_button');
    upButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.UP = true;
    });

    // "Down" Button
    const downButton = document.getElementById('down_button');
    downButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.DOWN = true;
    });

    // "Left" Button
    const leftButton = document.getElementById('left_button');
    leftButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    // "Right" Button
    const rightButton = document.getElementById('right_button');
    rightButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    //"Slap" Button
    const slapButton = document.getElementById('slap_button');
    slapButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.S = true;
    });

    //"Slap" Button
    const bubbleButton = document.getElementById('bubble_button');
    bubbleButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    //"Slap" Button
    const poisonButton = document.getElementById('poison_button');
    poisonButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.D = true;
    });
}


/**
 * This function sets the key to false, after releasing them (mobile)
 */
function bindKeyReleaseEvents() {
    // "Up" Button
    const upButton = document.getElementById('up_button');
    upButton.addEventListener('touchend', () => {
        keyboard.UP = false;
    });

    // "Down" Button
    const downButton = document.getElementById('down_button');
    downButton.addEventListener('touchend', () => {
        keyboard.DOWN = false;
    });

    // "Left" Button
    const leftButton = document.getElementById('left_button');
    leftButton.addEventListener('touchend', () => {
        keyboard.LEFT = false;
    });

    // "Right" Button
    const rightButton = document.getElementById('right_button');
    rightButton.addEventListener('touchend', () => {
        keyboard.RIGHT = false;
    });
}


/**
 * This function hides the startscreen
 */
function hideStartScreen() {
    let start = document.getElementById('startscreen');
    start.style = 'display: none';
}


/**
 * This fucntion shows the help-instructions
 */
function showInstructions() {
    let instruction = document.getElementById('info');
    instruction.classList.remove('d-none');
    renderInfoMovement();
}


/**
 * This function renders the movement information
 */
function renderInfoMovement() {
    let instruction = document.getElementById('info');
    instruction.innerHTML = '';
    instruction.innerHTML += showMovementInfo();
}


/**
 * This function renders the slap-attack information
 */
function renderInfoAttackFinSlap() {
    let instruction = document.getElementById('info');
    instruction.innerHTML = '';
    instruction.innerHTML += showAttackInfoFinSlap();
}


/**
 * This function renders the bubble attack information
 */
function renderInfoAttackBubble() {
    let instruction = document.getElementById('info');
    instruction.innerHTML = '';
    instruction.innerHTML += showAttackInfoBubble();
}


/**
 * This function renders the poison bubble attack information
 */
function renderInfoAttackPoison() {
    let instruction = document.getElementById('info');
    instruction.innerHTML = '';
    instruction.innerHTML += showAttackInfoPoison();
}


/**
 * This function hides the help-instructions
 */
function hideInstructions() {
    let instructions = document.getElementById('info');
    instructions.classList.add('d-none');
}


/**
 * This function reloads the page
 */
function restartGame() {
    location.reload();
}



/**
 * This function plays the background audio und switches the mute and volume images within the canvas
 */
function playAudio() {
    let audio = document.getElementById('backgroundMusic');
    let img = document.getElementById('sound');
    if (img.getAttribute('src') === 'img/mute.png') {
        img.setAttribute('src', 'img/volume.png');
        audio.play();
        audio.volume = 0.3;
        sound = true;
    } else if (img.getAttribute('src') === 'img/volume.png') {
        img.setAttribute('src', 'img/mute.png');
        audio.pause();
        sound = false;
    }
}


/**
 * This function shows the score area
 */
function showScore() {
    let score = document.getElementById('result');
    score.classList.toggle('hidden');
    renderScore();
}


/**
 * This function renders the score
 */
function renderScore() {
    let result = document.getElementById('finalScore');
    result.innerHTML = '';
    result.innerHTML += /*html*/ `
        <div class="d-flex flex-column justify-content-center align-items-center">
            <img src="img/4. Marcadores/1. Coins/3.png" alt="coin" class="coin">
            <span>${world.coinCounter}</span>
        </div>
    `;
}


/**
 * This function toggles the full screen mode
 */
function toggleFullscreen() {
    let img = document.getElementById('fullscreen_img');
    let content = document.getElementById('fullscreen')
    let canvas = document.getElementById('canvas');
    if (img.getAttribute('src') === 'img/full_screen.png') {
        img.setAttribute('src', 'img/small_screen.png');
        canvas.classList.add('canvas-style');
        enterFullscreen(content)
    } else if (img.getAttribute('src') === 'img/small_screen.png') {
        img.setAttribute('src', 'img/full_screen.png');
        exitFullscreen();
        canvas.classList.remove('canvas-style');
    }
}

document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);


/**
 * This function activates the full screen
 * @param {string} element 
 */
function enterFullscreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.msRequestFullscreen) { 
      element.msRequestFullscreen();
    } else if(element.webkitRequestFullscreen) { 
    }
  }


  /**
   * This function reszizes the screen back
   */
  function exitFullscreen() {
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if(document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }

  /**
   * This function handles the fullscreen if ESC is pressed
   */
  function exitHandler() {
    let canvas = document.getElementById('canvas');
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        document.getElementById("fullscreen_img").src = 'img/full_screen.png';
        canvas.classList.remove('canvas-style');
    }
}