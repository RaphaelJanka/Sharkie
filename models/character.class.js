class Character extends MovableObject {
    height = 270;
    width = 200;
    y = 150;
    speed = 10;
    soundisDead = false;
    isHurtAudioPlaying = false;
    
    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];

    IMAGES_SWIMMING = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];


    IMAGES_BUBBLE_TRAP = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
    ];

    IMAGES_FINSLAP = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/2.png',
        'img/1.Sharkie/4.Attack/Fin slap/3.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png'
    ];

    IMAGES_BUBBLE_TRAP_POISON = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ];

    IMAGES_DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00000.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00001.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00002.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00003.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00004.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00005.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00006.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00007.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00008.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00009.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00010.png',
        'img/1.Sharkie/6.dead/1.Poisoned/sin subir/DES 2_00011.png'
    ];

    IMAGES_HURT_POISENED = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png'
    ];

    IMAGES_HURT_ELECTRICSHOCK = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png',
    ];

    world;
    SWIMMING_SOUND = new Audio('audio/swimming.mp3');
    FINSLAP_SOUND = new Audio('audio/fin-slap.mp3');
    CHARACTER_DEAD = new Audio('audio/character-dying.mp3');
    ISHURT = new Audio('audio/isHurt.mp3');
    GOTSHOCKED = new Audio('audio/shock.mp3');
  

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_BUBBLE_TRAP);
        this.loadImages(this.IMAGES_BUBBLE_TRAP_POISON);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT_POISENED);
        this.loadImages(this.IMAGES_FINSLAP);
        this.loadImages(this.IMAGES_HURT_ELECTRICSHOCK);
        this.animate();
        this.moveCharacter();
    };


    /**
     * This function animates the character
     */
    animate() {
        this.showAllAnimations();
        this.playBubbleAttack();
        this.playPoisonBubbleAttack();
        this.playFinSlap();
    };


    /**
     * This function moves the character
     */
    moveCharacter() {
        setInterval(() => {   
            if (this.isDead()) {
                this.moveToSurfaceWhenDead();
            } else if (this.world.keyboard.RIGHT && this.x < this.world.levelEnd_x) {      
                    this.moveCharacterRight();
                    this.moveUpandDown();
                } else if (this.world.keyboard.LEFT && this.x > 0) {                            
                    this.moveCharacterLeft();
                    this.moveUpandDown();
                } else if (this.world.keyboard.UP && this.y > -100) {                            
                    this.moveCharacterUp();
                } else if (this.world.keyboard.DOWN && this.y < this.world.lvl1.levelBottom) {                            
                    this.moveCharacterDown();
                } else {    
                    this.stopSwimmingSound();                                                                                                           
                }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
    }


    /**
     * This function animates the bubble attack
     */
    playBubbleAttack() {
        setInterval(() => {
            if (this.world.keyboard.SPACE) {
                this.playSwimmingAnimation(this.IMAGES_BUBBLE_TRAP);
            }
        }, 1000/ 5) 
    }


    /**
     * This function animates the fin slap
     */
    playFinSlap() {
        setInterval(() => {
            if (this.world.keyboard.S) {
                this.playSwimmingAnimation(this.IMAGES_FINSLAP);
                this.playFinSlapSound();
                setTimeout(() => {
                    this.world.keyboard.S = false;
                }, 500);
            }
        }, 1000 / 10);
    }


    /**
     * This function animates the poison bubble attack
     */
    playPoisonBubbleAttack() {
        setInterval(() => {
            if (this.world.keyboard.D && this.world.collectedPoisonbottles > 0) {
                this.playSwimmingAnimation(this.IMAGES_BUBBLE_TRAP_POISON);
            }
        }, 1000 / 5)

    }


    /**
     * This function starts all animations
     */
    showAllAnimations() {
        setInterval(() => {
            if (this.isDead()) {
                this.playDeathAnimation(this.IMAGES_DEAD);
                this.playIsDeadAudio();
            } else if (this.isHurt()) {
                this.playSwimmingAnimation(this.IMAGES_HURT_POISENED);
                this.playIsHurtAudio();
            } else if (this.isHurtByJellyFish()) {
                this.playSwimmingAnimation(this.IMAGES_HURT_ELECTRICSHOCK);
                this.playGotShocked();
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playSwimmingAnimation(this.IMAGES_SWIMMING);
            } else {
                this.playSwimmingAnimation(this.IMAGES_IDLE);
                this.isHurtAudioPlaying = false;
            }
        }, 200)
    }


    /**
     * This function moves the character to the right
     */
    moveCharacterRight() {
        this.x += this.speed;                                                      
        this.otherDirection = false;                                               
        this.playSwimmingSound();                                             
    }

    
    /**
     * This function moves the character to the left 
     */
    moveCharacterLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
        this.playSwimmingSound();
    }


    /**
     * This function moves the character up and down, if left or right is pressed
     */
    moveUpandDown() {
        if (this.world.keyboard.UP && this.y > -100){
            this.moveCharacterUp();
        }
        if (this.world.keyboard.DOWN && this.y < this.world.lvl1.levelBottom) {
            this.moveCharacterDown();
        }
    }


    /**
     * This function moves the character up 
     */
    moveCharacterUp() {
        this.y -= this.speed;
        this.rotation = -90;
        this.playSwimmingSound();
    }


    /**
     * This function moves the character down  
     */
    moveCharacterDown() {
        this.y += this.speed;
        this.rotation = 90;
        this.playSwimmingSound();
    }


    /**
     * This function plays the swimming sound
     */
    playSwimmingSound() {
        if (sound) {
            this.SWIMMING_SOUND.play();
            this.FINSLAP_SOUND.volume = 0.1;
        }
        
    }


    /**
     * This function plays the fin slap sound
     */
    playFinSlapSound() {
        if (sound) {
            this.FINSLAP_SOUND.play();
            this.FINSLAP_SOUND.volume = 0.1;
            this.FINSLAP_SOUND.playbackRate = 1;
        }
    }


    /**
     * This function plays the isHurt sound
     */
    playIsHurtAudio() {
        if (sound && !this.isHurtAudioPlaying) {
            this.ISHURT.play();
            this.isHurtAudioPlaying = true;
        }
    }


    /**
     * This function plays the isDead audio
     */
    playIsDeadAudio() {
        if (sound) {
            if (!this.soundisDead) {
                this.CHARACTER_DEAD.play();
                this.CHARACTER_DEAD.volume = 0.4;
                this.soundisDead = true;
            }
        } else {
            this.soundisDead = true;
        }
    }


    /**
     * This function plays the shocked sound
     */
    playGotShocked() {
        if (sound) {
            this.GOTSHOCKED.play();
            this.GOTSHOCKED.volume = 0.4;
        }
    }


    /**
     * This function stops the swimming sound
     */
    stopSwimmingSound() {
        this.SWIMMING_SOUND.pause();
        this.SWIMMING_SOUND.currentTime = 0;        
    }
}

