class World {
    character = new Character(); 
    lvl1 = level1;
    levelEnd_x = 720*9;
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    statusBarLife = new StatusBarLife();
    statusBarCoin = new StatusBarCoins();
    statusBarPoison = new StatusBarPoison();
    statusBarEndboss = new StatusBarEndboss();
    bubble = [];
    poisonBubble = [];
    collectedPoisonbottles = 0;
    BUBBLE_SHOT = new Audio('audio/bubble-shot.mp3');
    BUBBLE_POP = new Audio('audio/bubble-pop.mp3');
    COIN_SOUND = new Audio('audio/coin.mp3');
    POISON_BOTTLE_SOUND = new Audio('audio/collecting-poison-bottle.mp3');
    coinCounter = 0;
    enemyCounter = 0;
    endbossHasArrived = false;

    constructor(canvas, keyboard) { 
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard  = keyboard;
        this.create();
        this.setWorld();
        this.swim();
        this.attackWithBubbles();
    }; 

    /**
     * This function allows the character to get all information of world
     */
    setWorld() {  
        this.character.world = this;
    };

    /**
     * This function checks all collisions
     */
    swim() {
        setInterval(() => {
           this.checkCollisionOfCharacterWithPufferFish();
           this.checkCollisionOfCharacterWithJellyfish();
           this.checkJellyfishHitByBubble();
           this.checkPufferfishGotSlapped();
           this.checkCollectedCoins();
           this.checkCollectedPoisonBottles()
           this.checkEndbossHitByPoisonBubble();
           this.checkCollisionOfCharacterWithEndboss();
           this.checkEndbossIsCollidingWithCharacter();
           this.showGameOverScreen();
           this.checkBubbleIsLeavingWorld();
           this.checkContactBetweenCharacterAndBoss()
        }, 200);
    }
   
    /**
     * This function pushes all bubbles and poison bubbles
     */
    attackWithBubbles() {
        setInterval(() => {
            this.pushBubbles();
            this.pushPoisonBubbles();
        }, 750);
    }

    /**
     * This function checks the collision of the character with all pufferfishes
     */
    checkCollisionOfCharacterWithPufferFish() {
        this.lvl1.pufferfishes.forEach((enemy) => {
            if (!enemy.isDead() && this.character.isColliding(enemy)) {
                this.character.hitByPufferfish();
                this.statusBarLife.setPercentage(this.character.energy);
            }
        });
    }

    /**
     * This function checks the collision of the character with all jellyfishes
     */
    checkCollisionOfCharacterWithJellyfish() {
        this.lvl1.jellyfishes.forEach((enemy) => {
            if (!enemy.isDead() && this.character.isColliding(enemy)) {
                this.character.hitByJellyfish();
                this.statusBarLife.setPercentage(this.character.energy);
            }
        });
    }

    /**
     * This function checks the collision of the character with the endboss
     */
    checkCollisionOfCharacterWithEndboss() {
        this.lvl1.boss.forEach((boss) => {
            if (!boss.isDead() && this.character.isColliding(boss)) {
                this.character.hitByBoss();
                this.statusBarLife.setPercentage(this.character.energy);
            }
        })
    }

    /**
     * This function pushes the bubbles in the array bubble
     */
    pushBubbles() {
        if (this.keyboard.SPACE) {
            let bubble = new Bubble(this.character.x, this.character.y + 90);
            this.bubble.push(bubble);
            this.playSound(this.BUBBLE_SHOT);
            setTimeout(() => {
                this.keyboard.SPACE = false;
            }, 300);
            
        }
    }

    /**
     * This function pushes the poison bubbles in the array poisonBubble, updates the amount of collected poison
     * bottles and updates the statusBarPoison
     */
    pushPoisonBubbles() {
        if (this.keyboard.D && this.collectedPoisonbottles > 0) {
            let greenbubble = new PoisonBubble(this.character.x, this.character.y + 90);
            this.poisonBubble.push(greenbubble);
            this.collectedPoisonbottles -= 1;
            this.character.isUsingBottles();
            this.statusBarPoison.setPercentage(this.character.collectedBottles);
            this.playSound(this.BUBBLE_SHOT);
            setTimeout(() => {
                this.keyboard.D = false;
            }, 500);
        }
        if (this.collectedPoisonbottles <= 0) {
            this.keyboard.D = false;
        }
    }

    /**
     * This function checks the collision of all Jellyfishes with a bubble
     */
    checkJellyfishHitByBubble() {
        setInterval(() => {
            this.lvl1.jellyfishes.forEach((enemy) => {
                this.bubble.forEach((bubble) => {
                    if (enemy.isColliding(bubble)) {
                        enemy.hitEnemy();
                        enemy.energy;
                        this.removeBubble(bubble);
                        this.playSound(this.BUBBLE_POP);
                        this.removeJellyFish(enemy);
                    }
                });
            });
        });
    }

    /**
     * This function checks the collision of the character with all pufferfishes, when the key S is pressed
     */
    checkPufferfishGotSlapped() {
        setInterval(() => {
            this.lvl1.pufferfishes.forEach((fish) => {
                if (this.keyboard.S && fish.isColliding(this.character)) {
                    fish.hitEnemy();
                    fish.energy;
                    this.removeFish(fish);
                }
            })
        });
    }

    /**
     * This function checks the collision of the endboss with a poison bubble
     */
    checkEndbossHitByPoisonBubble() {
        setInterval(() => {
            this.lvl1.boss.forEach((boss) => {
                this.poisonBubble.forEach((bubble) => {
                    if (boss.isColliding(bubble)) {
                        boss.hitEndboss();
                        boss.energy;
                        this.removePoisonBubble(bubble);
                        this.playSound(this.BUBBLE_POP);
                        this.statusBarEndboss.setPercentage(boss.energy);
                    }
                })
            })
        });
    }

    /**
     * This function checks the collision of the endboss with the character
     */
    checkEndbossIsCollidingWithCharacter() {
        setInterval(() => {
            this.lvl1.boss.forEach((boss) => {
                if (boss.isColliding(this.character)) {
                    boss.isAttackingCharacter();
                }
            })
        });
    }

    /**
     * This function checks the collision of the character with all coins
     */
    checkCollectedCoins() {
        setInterval(() => {
            this.lvl1.coins.forEach((coin) => {
                if (this.character.isColliding(coin)) {
                    this.character.isCollectingCoins();
                    this.removeCoin(coin);
                    this.statusBarCoin.setPercentage(this.character.collectedCoins);
                    this.playSound(this.COIN_SOUND);
                    this.COIN_SOUND.volume = 0.2;
                    this.coinCounter++;
                }
            })
        }); 
    }

    /**
     * This function checks the collision of the character with all poison bottles
     */
    checkCollectedPoisonBottles() {
        setInterval(() => {
            this.lvl1.poisonBottles.forEach((bottle) => {
                if(this.character.isColliding(bottle)) {
                    this.character.isCollectingBottle();
                    this.removePoisonBottle(bottle);
                    this.collectedPoisonbottles += 1;
                    this.statusBarPoison.setPercentage(this.character.collectedBottles);
                    this.playSound(this.POISON_BOTTLE_SOUND);
                    this.POISON_BOTTLE_SOUND.volume = 0.2;
                }
            })
        });
    }

    /**
     * This function removes a pushed bubble from the array bubble
     * @param {string} bubble - img 
     */
    removeBubble(bubble) {
        let index = this.bubble.indexOf(bubble);
        this.bubble.splice(index, 1);
    }

    /**
     * This function removes every bubble, if it doesn't hit an enemy
     */
    checkBubbleIsLeavingWorld() {
        setInterval(() => {
            this.bubble.forEach((bubble) => {
                if (bubble.y <= 0 ) {
                    this.removeBubble(bubble);
                }
            })
        });
    }

    /**
     * This function removes a pushed poison bubble from the array poisonBubble
     * @param {*} bubble 
     */
    removePoisonBubble(bubble) {
        let index = this.poisonBubble.indexOf(bubble);
        this.poisonBubble.splice(index, 1);
    }

    /**
     * This function removes a coin
     * @param {*} coin 
     */
    removeCoin(coin) {
        let index = this.lvl1.coins.indexOf(coin);
        this.lvl1.coins.splice(index, 1);
    }

    /**
     * This function removes pufferfishes, when dead
     * @param {*} fish 
     */
    removeFish(fish) {
        setTimeout(() => {
            let index = this.lvl1.pufferfishes.indexOf(fish);
            if (index !== -1) {
                this.lvl1.pufferfishes.splice(index, 1);
            }
        }, 3000);
    }

    /**
     * This function removes jellyfishes, when dead
     * @param {string} fish 
     */
    removeJellyFish(fish) {
        setTimeout(() => {
            let index = this.lvl1.jellyfishes.indexOf(fish);
            if (index !== -1) {
                this.lvl1.jellyfishes.splice(index, 1);
            }
        }, 3000);
    }

    /**
     * This function removes a coin
     * @param {string} bottle - img
     */
    removePoisonBottle(bottle) {
        let index = this.lvl1.poisonBottles.indexOf(bottle);
        this.lvl1.poisonBottles.splice(index, 1);
    }

    /**
     * This function plays all audio from world
     * @param {string} audio - new Audio
     */
    playSound(audio) {
        if (sound) {
            audio.play();
        }
    }

    /**
     * This function initializes the canvas
     */
    create() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.lvl1.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0); //Back
        this.addAllStatusBars();
        this.ctx.translate(this.camera_x, 0); //Forwards
        this.addAllMovableObjects();
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function() {
            self.create();
        });
    }

    /**
     * This function inits all statusbars
     */
    addAllStatusBars() {
        this.addToMap(this.statusBarPoison);
        this.addToMap(this.statusBarLife);
        this.addToMap(this.statusBarCoin);
        if (this.endbossHasArrived) {
            this.addToMap(this.statusBarEndboss);
        }
       
    }

    /**
     * This function initializes all movable objects
     */
    addAllMovableObjects() {
        this.addObjectsToMap(this.lvl1.light);
        this.addToMap(this.character);
        this.addObjectsToMap(this.bubble);
        this.addObjectsToMap(this.poisonBubble);
        this.addObjectsToMap(this.lvl1.pufferfishes);
        this.addObjectsToMap(this.lvl1.jellyfishes);
        this.addObjectsToMap(this.lvl1.coins);
        this.addObjectsToMap(this.lvl1.poisonBottles);
        this.addObjectsToMap(this.lvl1.boss);
    }
    
    /**
     * This function adds all objects to the canvas
     * @param {string} objects - img
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    };

    /**
     * This function checks, if the character is near the endboss. Used to show the status bar of the endboss
     */
    checkContactBetweenCharacterAndBoss() {
        this.lvl1.boss.forEach((endboss) => {
            if (endboss.getsContactWith(this.character)) {
                this.endbossHasArrived = true;
            }
        })
    }

    /**
     * This function adds all movable objects to the canvas
     * @param {string} movableObject - img
     */
    addToMap(movableObject) {
        if(movableObject.otherDirection) {
            this.flipImage(movableObject)
        }
        movableObject.draw(this.ctx);
        if (movableObject.otherDirection) {
            this.flipImageBack(movableObject);
        }
    };

    /**
     * This function flips the movableobject(character) 
     * @param {string} movableObject - img
     */
    flipImage(movableObject) {
            this.ctx.save(); 
            this.ctx.translate(movableObject.width, 0); 
            this.ctx.scale(-1, 1); 
            movableObject.x = movableObject.x * -1;
    };

    /**
     * This function flips the movableobject(character) back
     * @param {string} movableObject - img
     */
    flipImageBack(movableObject) {
        movableObject.x = movableObject.x * -1;
            this.ctx.restore();
    }

    /**
     * This function shows the gameover-screen
     */
    showGameOverScreen() {
        let gameOver = document.getElementById('gameOver');
        if (this.character.energy == 0) {
            gameOver.classList.remove('d-none');
        }
    }
}