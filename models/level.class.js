class Level {
    pufferfishes;
    jellyfishes;
    light;
    backgroundObjects;
    levelBottom = 180;
    levelTop = 100;
    coins;
    poisonBottles;
    boss;

    constructor(pufferfishes, jellyfishes, light, backgroundObjects, coins, poisonBottles, endBoss) {
        this.pufferfishes = pufferfishes;
        this.jellyfishes = jellyfishes;
        this.light = light;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.poisonBottles = poisonBottles;
        this.boss = endBoss;
    }
}