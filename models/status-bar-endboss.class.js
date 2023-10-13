class StatusBarEndboss extends DrawableObject {
    IMAGES = [
        'img/4. Marcadores/Purple/0_ .png',
        'img/4. Marcadores/Purple/20__1.png',
        'img/4. Marcadores/Purple/40_ .png',
        'img/4. Marcadores/Purple/60_ .png',
        'img/4. Marcadores/Purple/80_ .png',
        'img/4. Marcadores/Purple/100_ .png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(100);
        this.x = 500;
        this.y = 0;
        this.height = 60;
        this.width = 200;
    }

    
    /**
     * This function sets the percentage of the status bar
     * @param {number} percentage - number of character.energy
     */
    setPercentage(percentage) {
        this.percentage = percentage; 
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    /**
     * This function resolves the image index
     * @returns 
     */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        }else if (this.percentage > 40) {
            return 2;
        }else if (this.percentage >= 10) {
            return 1
        } else {
            return 0;
        }
    };
}