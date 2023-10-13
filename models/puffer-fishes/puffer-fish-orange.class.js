class PufferFishOrange extends MovableObject {
    width = 56;
    height = 56;
    soundPlayed = false;
    
    IMAGES_SWIMMING = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png'
    ];
    IMAGES_DEAD = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.2.png'
    ];

    PUFFERFISH_DEAD = new Audio('audio/isHurtPufferfish.mp3');

    constructor(x, y) {
        super().loadImage(this.IMAGES_SWIMMING[0])
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x +  Math.random() * 400;
        this.y = y - Math.random() * 50;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();    
    }


    /**
     * This function animates all green pufferfishes
     */
    animate() {
        this.moveLeft();
        const animationInterval = setInterval(() => {
            if (this.isDead()) {
                this.playDeathAnimation(this.IMAGES_DEAD);
                this.moveEnemyUpToSurfaceWhenDead();
                this.playDeathSound();
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
    playDeathSound() {
        if (sound) {
            if (!this.soundPlayed) {
                this.PUFFERFISH_DEAD.play();
                this.PUFFERFISH_DEAD.volume = 0.2;
                this.soundPlayed = true;
            }
        } else {
            this.soundPlayed = true;
        }
    }
}