class BackgroundObject extends MovableObject {
    width = 720;
    height = 400;
    
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.y = 400 - this.height;
        this.x = x;
    }
}