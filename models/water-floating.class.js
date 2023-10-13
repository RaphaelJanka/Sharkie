class Light extends MovableObject {
    y= 0;
    height = 400;
    width = 720;
    
    constructor(path, x) {
        super().loadImage(path);
        this.animate();
        this.x = x;
    }


    /**
     * This function animates all lights
     */
    animate() {
        this.moveLeft();
    }

    
}