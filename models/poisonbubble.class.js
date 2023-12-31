class PoisonBubble extends MovableObject {
    height = 40;
    width = 40;
    
    
    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.y = y + 50;
        this.x = x + 120;
        this.shootBubble(x);
    }
    

    /**
     * This function animates all poison bubbles
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