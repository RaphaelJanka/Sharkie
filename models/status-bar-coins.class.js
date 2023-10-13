class StatusBarCoins extends DrawableObject {
    IMAGES = [
        'img/4. Marcadores/green/Coin/0_  copia 4.png',
        'img/4. Marcadores/green/Coin/20_  copia 2.png',
        'img/4. Marcadores/green/Coin/40_  copia 4.png',
        'img/4. Marcadores/green/Coin/60_  copia 4.png',
        'img/4. Marcadores/green/Coin/80_  copia 4.png',
        'img/4. Marcadores/green/Coin/100_ copia 4.png'
    ];

    
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(0);
        this.x = 40;
        this.y = 40;
        this.height = 60;
        this.width = 200;
    }


    /**
     * This function sets the percentage of the status bar
     * @param {number} percentage - number of collected coins
     */
    setPercentage(percentage) {
        this.percentage = percentage; // => 0....5
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
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        }else if (this.percentage >= 30) {
            return 2;
        }else if (this.percentage >= 10) {
            return 1
        } else {
            return 0;
        }
    };
};