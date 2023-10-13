class Endboss extends MovableObject {
    height = 500;
    width = 500;
    y = -50 ;
    hadFirstContact = false;
    soundIntro = false;
    soundDeath = false;
    isHurtTimeout = null;
    i = 0;

    IMAGES_INTRODUCE = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png',
    ];

    IMAGES_SWIMMING = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];
    IMAGES_ATTACK = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png'
    ];
    IMAGES_HURT = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png',
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
    ];

    ENDBOSS_INTRO = new Audio('audio/endboss_intro.mp3');
    ENDBOSS_DEATH = new Audio('audio/endboss_death.mp3');
    ENDBOSS_HURT = new Audio('audio/endboss_hurt.mp3');

    constructor(x) {
        super();this.loadImage(this.IMAGES_SWIMMING[0]);
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.x = x;
        this.y = -100;
        this.animate();
      
    }
    

    /**
     * This function animates the endboss
     */
    animate() {
        setInterval(() => {
            if (this.i < 5) {
                this.playSwimmingAnimation(this.IMAGES_INTRODUCE);
            } else if (this.isHurt()) {
                this.showEndbossIsHurt();
            } else if (this.isDead()) {
               this.showEndBossIsDead();
            } else if (this.isAttacking) {
                this.playSwimmingAnimation(this.IMAGES_ATTACK);
                this.isAttacking = false;
            } else {
                this.playSwimmingAnimation(this.IMAGES_SWIMMING);
            }
            this.i++;
            if (this.getsContactWith(world.character) && !this.hadFirstContact) {
                this.introduceEndboss();
            }
        }, 150);
        this.startMovingEndboss();
    }


    /**
     * This function starts the animation of isHurt
     */
    showEndbossIsHurt() {
        this.speed = 0.01; 
        this.playSwimmingAnimation(this.IMAGES_HURT);
        this.playEndbossIsHurtSound();
        this.reduceSpeedOfEndboss();
    }


    /**
     * This function plays the sound of isHurt
     */
    playEndbossIsHurtSound() {
        if (sound) {
            this.ENDBOSS_HURT.play();
            this.ENDBOSS_HURT.volume = 0.3;
        }
    }


    /**
     * This function reduces the speed of the endboss, when isHurt
     */
    reduceSpeedOfEndboss() {
        this.isHurtTimeout = setTimeout(() => {
            this.speed = 0.09; 
        }, 300);
    }


    /**
     * This function starts the animation of isDead
     */
    showEndBossIsDead() {
        this.playDeathAnimation(this.IMAGES_DEAD);
        this.moveEnemyUpToSurfaceWhenDead();
        this.playEndbossIsDeadSound();
        if (!world.character.isDead()) {
            this.showWinningScreen();
        }
    }


    /**
     * This function plays the isDead sound
     */
    playEndbossIsDeadSound() {
        if (sound) {
            if (!this.soundDeath) {
                this.ENDBOSS_DEATH.play();
                this.soundDeath = true;
            }
        } else {
            this.soundDeath = true;
        }
    }

    
    /**
     * This function starts the intro of the endboss
     */
    introduceEndboss() {
        this.i = 0;
        this.hadFirstContact = true;
        this.playIntroSound();
    }


    /**
     * This function plays the intro sound
     */
    playIntroSound() {
        if (sound) {
            if (!this.soundIntro) {
                this.ENDBOSS_INTRO.play();
                this.soundIntro = true;
            }
        }
    }


    /**
     * This function starts the movement of the endboss
     */
    startMovingEndboss() {
        setInterval(() => {
            if (this.hadFirstContact && this.i > 9) {
                this.moveEndboss();
            }
        }, 1000 / 60);
        this.endbossHasArrived = true;
    }
    

    /**
     * This function determines the movement speed
     */
    moveEndboss() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 20);
    }


    /**
     * This function shows the winning screen
     */
    showWinningScreen() {
        setTimeout(() => {
            let gameWon = document.getElementById('gameWon');
            gameWon.classList.remove('d-none');
        }, 2000);
    }

}