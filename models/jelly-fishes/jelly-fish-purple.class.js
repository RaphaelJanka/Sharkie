class JellyFishPurple extends MovableObject {
    width = 40;
    height = 60;
    soundPlayed = false;

    IMAGES_SWIMMING = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png',
    ];

    IMAGE_BUBBLE_JELLYFISH_LILAC = [
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png'
    ];
    JELLYFISH_DEAD = new Audio('audio/isHurtJellyfish.mp3');

    constructor(x, y) {
        super().loadImage(this.IMAGES_SWIMMING[0])
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGE_BUBBLE_JELLYFISH_LILAC);
        this.x = x +  Math.random() * 400;
        this.y = y;
        this.speed = 0.80 + Math.random() * 0.9;
        this.animate();    
    }


    /**
     * This function animates all purple jellyfishes
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
                this.playSwimmingAnimation(this.IMAGE_BUBBLE_JELLYFISH_LILAC);
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