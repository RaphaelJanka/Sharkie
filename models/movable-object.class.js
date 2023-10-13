class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    rotation = 0;
    energy = 100;
    lastHit = 0;
    lastShock = 0;
    speedY = 0;
    collectedCoins = 0;
    collectedBottles = 0;
    usedBottles = 0;
    acceleration = 1
    isAttacking = false;

    /**
     * This function sets the colliding parameters of each movable object
     * @param {*string} mo 
     * @returns - parameters
     */
    isColliding(mo) {
        if (this instanceof Character) {
            return this.x + 60 + this.width - 105 >= mo.x &&
                this.x + 60 <= mo.x + mo.width &&
                this.y + 130 + this.height - 190 > mo.y &&
                this.y + 130 <= mo.y + mo.height
        } else if (this instanceof Endboss) {
            return this.x + 40 + this.width - 100 >= mo.x &&
                this.x + 40 <= mo.x + mo.width &&
                this.y + this.height > mo.y &&
                this.y <= mo.y + mo.height
        } else if (this instanceof PufferFishOrange || this instanceof PufferFishGreen || this instanceof PufferFishDeadly) {
            return this.x + 40 + this.width -50 >= mo.x &&
                this.x + 40 <= mo.x + mo.width &&
                this.y + 80 + this.height - 200 > mo.y &&
                this.y + 80 <= mo.y + mo.height
        } else {
            return this.x + this.width >= mo.x &&
                this.x <= mo.x + mo.width &&
                this.y + this.height > mo.y &&
                this.y <= mo.y + mo.height
        }
    }


    /**
     * This function switches through an image-array
     * @param {*} images 
     */
    playSwimmingAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    /**
     * This function switches through an image-array and stops at the last image
     * @param {*} images 
     */
    playDeathAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        
        if (i === images.length - 1) {
            this.currentImage = images.length - 1;
        } else {
            this.currentImage++;
        }
    }


    /**
     * This function is used to move a movable object to the right
     */
    moveRight() {
        setInterval(() => {
            this.speed = 0.6;
            this.x += this.speed;
        }, 1000 / 60)
    }


    /**
     * This function is used to move a movable object to the left
     */
    moveLeft() {
        setInterval( () => {
            this.x -= this.speed;
        }, 1000 / 60)
    }
   
    /**
     * This function is used to move a bubble to the right
     */
    moveBubblesToRight() {
        setInterval(() => {
            this.speed = 7;
            this.speedY = 1;
            this.x += this.speed;
            this.y -= this.speedY + this.acceleration;
        }, 1000/ 60);
    }

    
    /**
     * This function is used to move a bubble to the left
     */
    moveBubblesToLeft() {
        setInterval(() => {
            this.speed = 7;
            this.speedY = 1;
            this.x -= this.speed;
            this.y -= this.speedY + this.acceleration;
        }, 1000/ 60);
    }


    /**
     * This function is used to move a movable object up
     */
    moveUp() {
        setInterval( () => {
            this.y -= this.speed;
        }, 1000 / 60)
    }


    /**
     * This function reduces the energy of the character when hit by a pufferfish
     */
    hitByPufferfish() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /**
     * This function reduces the energy of the character when hit by a jellyfish
     */
    hitByJellyfish() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastShock = new Date().getTime();
        }
    }


    /**
     * This function reduces the energy of the character when hit by the endboss
     */
    hitByBoss() {
        this.energy -= 50;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    
    /**
     * This function reduces the energy of each enemy when hit by a bubble
     */
    hitEnemy() {
        this.energy -= 100;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /**
     * This function reduces the energy of the endboss when hit by a poison bubble
     */
    hitEndboss() {
        this.energy -= 25;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /**
     * This function sets the isHurt-statement
     * @returns - time difference
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    
    /**
     * This function sets the isHurtByJellyfish-statement
     * @returns - time difference
     */
    isHurtByJellyFish() {
        let timepassed = new Date().getTime() - this.lastShock; // Difference in ms
        timepassed = timepassed / 1000; // Difference in s
        return timepassed < 1;
    }


    /**
     * This function sets the isDead-statement nad reduces the energy of each moveable object to 0
     * @returns - energy = 0
     */
    isDead() {
        return this.energy == 0;
    }
    

    /**
     * This function sets isAttacking to true, when endboss did collide with the character
     * @returns 
     */
    isAttackingCharacter() {
        return this.isAttacking = true;
    }


    /**
     * This function moves the character up, when dead
     */
    moveToSurfaceWhenDead() {
        this.speed = 0;
        this.speedY = 2;
        this.y -= this.speedY;
    }


    /**
     * This function moves each enemy up, when dead
     */
    moveEnemyUpToSurfaceWhenDead() {
        this.speed = 0;
        this.speedY = 15;
        this.y -= this.speedY;
    }


    /**
     * This function sets the number of each collected coin
     * @returns - increased number of coins
     */
    isCollectingCoins() {
        return this.collectedCoins += 10;
    }


    /**
     * This function sets the number of each collected poison bottle
     * @returns - increased number of poison bottles
     */
    isCollectingBottle() {
        return this.collectedBottles += 20;
    }


    /**
     * This function reduces the number of the collected poison bottles, when a poison bubble is used
     * @returns - reduced number of poison bottles
     */
    isUsingBottles() {
        return this.collectedBottles -= 20;
    }

    getsContactWith(mo) {
        return (mo.x > 5600)
    }
}
