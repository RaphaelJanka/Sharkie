class Coins extends MovableObject {
    width = 50;
    height = 50;
    IMAGES_COIN = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png',
    ];


    constructor(x, y) {
        super().loadImage(this.IMAGES_COIN[0])
        this.loadImages(this.IMAGES_COIN);
        this.x = x;
        this.y = y; 
        this.speed = 0.15;
        this.animate();    
    }


    /**
     * This function animates all coins
     */
    animate() {
        setInterval(() => {
            this.playSwimmingAnimation(this.IMAGES_COIN);
        }, 150)
    }
}