class Bubble extends MovableObject {
    height = 35;
    width = 35;
    speedY = 1;
    
    
    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.y = y + 50;
        this.x = x + 120;
        this.shootBubble(x);
    }
    

    /**
     * This function animates all bubbles
     * @param {number} x - position x
     */
    shootBubble(x) {
        if (world.character.otherDirection) {
            this.moveBubblesToLeft();
            this.x = x + 20;
        } else {
            this.moveBubblesToRight(); 
        }
        setInterval(() => {
            this.y += Math.sin(Date.now() * 0.005) * 2;
        }, 40);
    }

    

}