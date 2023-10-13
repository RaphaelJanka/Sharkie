let level1;


/**
 * This function initializes the level 1 content
 */
function initLevel() {
    level1 = new Level(
        [
            new PufferFishGreen(620, 315),
            new PufferFishGreen(620, 315),
            new PufferFishGreen(620, 315),
            new PufferFishOrange(620*2, 200),
            new PufferFishOrange(620*2, 300),
            new PufferFishOrange(720*3, 200),
            new PufferFishGreen(720*3, 215),
            new PufferFishGreen(720*3, 300),
            new PufferFishDeadly(720*7, 300),
            new PufferFishDeadly(720*7, 180),
            new PufferFishDeadly(720*7, 60),
        ],
        [
            new JellyFishPurple(720*4, 300),
            new JellyFishYellow(720*4, 250),
            new JellyFishPurple(720*4, 200),
            new JellyFishYellow(720*4, 150),
            new JellyFishDeadlyPink(720*7, 150),
            new JellyFishDeadlyGreen(720*7, 70),
        ],
        [   
            new Light('img/3. Background/Layers/1. Light/1.png', 0),
            new Light('img/3. Background/Layers/1. Light/2.png', 720),
            new Light('img/3. Background/Layers/1. Light/1.png', 720*2),
            new Light('img/3. Background/Layers/1. Light/2.png', 720*3),
            new Light('img/3. Background/Layers/1. Light/1.png', 720*8),
            new Light('img/3. Background/Layers/1. Light/2.png', 720*9),

        ],
        [
            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', -720),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', -720),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', -720),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', -720),

            new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 0),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0),
            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 720),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 720),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720),
            
            new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 720*2),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 720*2),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 720*2),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 720*2),
            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 720*3),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 720*3),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720*3),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720*3),

            new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 720*4),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 720*4),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 720*4),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 720*4),
            new BackgroundObject('img/3. Background/Barrier/1.png', 720*4),
            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 720*5),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 720*5),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720*5),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720*5),
            new BackgroundObject('img/3. Background/Barrier/1.png', 720*5-100),

            new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 720*6),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 720*6),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 720*6),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 720*6),
            new BackgroundObject('img/3. Background/Barrier/1.png', 720*6-200),
            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 720*7),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 720*7),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720*7),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720*7),
            new BackgroundObject('img/3. Background/Barrier/1.png', 720*7-300),

            new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 720*8),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 720*8),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 720*8),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 720*8),
            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 720*9),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 720*9),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 720*9),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 720*9),
          

        ],
        [
            new Coins(1000, 280),
            new Coins(1100, 200),
            new Coins(1200, 150),
            new Coins(1300, 200),
            new Coins(1400, 280),
            new Coins(2800, 300),
            new Coins(2950, 250),
            new Coins(3100, 200),
            new Coins(3250, 150),
            new Coins(3400, 100),
        ],
        [
            new PoisonBottles(730, 200),
            new PoisonBottles(1500, 80),
            new PoisonBottles(2500, 150),
            new PoisonBottles(3600, 50),
            new PoisonBottles(720*7, 200),
        ],
        [
            new Endboss(720*9),
        ],
    );
}