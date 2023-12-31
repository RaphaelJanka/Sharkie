class JellyFishDeadlyPink extends MovableObject {
    width = 70;
    height = 90;
    soundPlayed = false; 

    IMAGES_SWIMMING = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png',
    ];

    IMAGE_BUBBLE_JELLYFISH_PINK = [
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Pink/P4.png',
    ];
    JELLYFISH_DEAD = new Audio('audio/isHurtJellyfish.mp3');

    constructor(x, y) {
        super().loadImage(this.IMAGES_SWIMMING[0])
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGE_BUBBLE_JELLYFISH_PINK)
        this.x = x +  Math.random() * 400;
        this.y = y;
        this.speed = 0.90 + Math.random() * 0.8;
        this.animate();    
    }


    /**
     * This function animates all pink jellyfishes
     */
    animate() {
        this.moveLeft();
        let verticalMovementInterval = null;
        if (!this.isDead()) {
            verticalMovementInterval = setInterval(() => {
                this.y += Math.sin(Date.now() * 0.005) * 3; 
            }, 30); 
        }
        const animationInterval = setInterval(() => {
            if (this.isDead()) {
                this.playSwimmingAnimation(this.IMAGE_BUBBLE_JELLYFISH_PINK);
                this.moveEnemyUpToSurfaceWhenDead();
                this.playDeathSoundJellyFish();
                if (verticalMovementInterval) {
                    clearInterval(verticalMovementInterval);
                }
                setTimeout(() => {
                    clearInterval(animationInterval);
                }, 5000);
            } else {
                this.playSwimmingAnimation(this.IMAGES_SWIMMING);
            }
        }, 150);
    }

    
    /**
     * This function plays the dying sound
     */
    playDeathSoundJellyFish() {
         if (sound) {
            if (!this.soundPlayed) {
                this.JELLYFISH_DEAD.play()
                this.soundPlayed = true;
            }
        } else {
            this.soundPlayed = true;
        }
    }
}