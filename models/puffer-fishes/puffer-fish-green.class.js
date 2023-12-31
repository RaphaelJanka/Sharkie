class PufferFishGreen extends MovableObject {
    width = 40;
    height = 40;
    soundPlayed = false;
    IMAGES_SWIMMING = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png',
    ]
    PUFFERFISH_DEAD = new Audio('audio/isHurtPufferfish.mp3');

    constructor(x, y) {
        super().loadImage(this.IMAGES_SWIMMING[0])
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x +  Math.random() * 300;
        this.y = y - Math.random() * 200;
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
    
};
        

       
           
        
                
           
   
