class DrawableObject {
    x = 120;
    y = 200;
    img;
    imageCache = {}; //Bilderspeicher als JSON;
    currentImage = 0;
    height = 200;
    width = 180;


    /**
     * This function loads the first img of each object
     * @param {string} path - img
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
     * This function draws the canvas
     * @param {string} ctx - canvas
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    /**
    * This function loads all img-arrays
    * @param {array} arr -[img/img1.png, img/img2.png,...]
    */
    loadImages(arr) {
        arr.forEach(path => {
        let img = new Image();
        img.src = path;
        this.imageCache[path] = img;
        })
    };

};