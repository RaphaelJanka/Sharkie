class PoisonBottles extends MovableObject {
    width = 40;
    height = 60;
    IMAGES_POISONBOTTLES = [
        'img/4. Marcadores/Posión/Animada/1.png',
        'img/4. Marcadores/Posión/Animada/2.png',
        'img/4. Marcadores/Posión/Animada/3.png',
        'img/4. Marcadores/Posión/Animada/4.png',
        'img/4. Marcadores/Posión/Animada/5.png',
        'img/4. Marcadores/Posión/Animada/6.png',
        'img/4. Marcadores/Posión/Animada/7.png',
        'img/4. Marcadores/Posión/Animada/8.png'
    ];


    constructor(x, y) {
        super().loadImage(this.IMAGES_POISONBOTTLES[0])
        this.loadImages(this.IMAGES_POISONBOTTLES);
        this.x = x;
        this.y = y; 
        this.speed = 0.15;
        this.animate();    
    }


    /**
     * This function animates all poison bottles
     */
    animate() {
        setInterval(() => {
            this.playSwimmingAnimation(this.IMAGES_POISONBOTTLES);
        }, 150)
    }
}