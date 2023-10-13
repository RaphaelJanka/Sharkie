/**
 * This function the template for the help-movement-information
 * @returns template
 */
function showMovementInfo() {
    return /*html*/ `
        <div class="movement d-flex justify-content-center align-items-center flex-column">
            <div class="d-flex gap-60">
                <div class="d-flex width-50 align-items-center justify-content-center">
                    <img src="img/1.Sharkie/3.Swim/3.png" alt="sharkie-swimming" class="sharkie-movement">
                </div>
                <div class="d-flex width-50 flex-column align-items-center justify-content-center gap-4">
                    <button class="back d-flex justify-content-center align-items-center" onclick="hideInstructions()">
                        <span>X</span>
                    </button>
                    <img src="img/6.Botones/Key/arrow keys.png" alt="arrow keys" class="arrow-keys mt-80">
                    <span class="fs-32">Move</span>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-3">
                <button class="info-buttons rounded-3 d-flex align-items-center justify-content-center hover-buttons" onclick="renderInfoAttackFinSlap()">
                    <span>Next</span>
                </button>
            </div>
        </div>
    `;
}


/**
 * This function the template for the help-fin-slap-information
 * @returns template
 */
function showAttackInfoFinSlap() {
    return /*html*/ `
        <div class="movement d-flex justify-content-center align-items-center flex-column">
            <div class="d-flex gap-60">
                <div class="d-flex width-50 align-items-center justify-content-center">
                    <img src="img/1.Sharkie/4.Attack/Fin slap/5.png" alt="sharkie-fin-slap" class="sharkie-movement">
                    <img src="img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/2.3.png" alt="pufferfish-orange" class="fish-info">
                </div>
                <div class="d-flex width-50 flex-column align-items-center justify-content-center gap-4">
                    <button class="back d-flex justify-content-center align-items-center" onclick="hideInstructions()">
                        <span>X</span>
                    </button>
                    <div class="attack-buttons rounded-3 d-flex justify-content-center align-items-center mt-80">
                        <span>S</span>
                    </div>
                    <span class="fs-32">Fin Slap</span>
                </div>
            </div>
            <div class="d-flex gap-5 justify-content-center mt-3">
                <button class="info-buttons rounded-3 d-flex align-items-center justify-content-center hover-buttons" onclick="renderInfoMovement()">
                    <span>Back</span>
                </button>
                <button class="info-buttons rounded-3 d-flex align-items-center justify-content-center hover-buttons" onclick="renderInfoAttackBubble()">
                    <span>Next</span>
                </button>
            </div>
        </div>
    `;
}


/**
 * This function the template for the help-bubble-information
 * @returns template
 */
function showAttackInfoBubble() {
    return /*html*/ `
        <div class="movement d-flex justify-content-center align-items-center flex-column">
            <div class="d-flex gap-60">
                <div class="d-flex width-50 align-items-center justify-content-center">
                    <img src="img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png" alt="sharkie-fin-slap" class="sharkie-movement">
                    <img src="img/2.Enemy/2 Jelly fish/Dead/green/g1.png" alt="jellyfish" class="jellyfish-info">
                </div>
                <div class="d-flex width-50 flex-column align-items-center justify-content-center gap-4">
                    <button class="back d-flex justify-content-center align-items-center" onclick="hideInstructions()">
                        <span>X</span>
                    </button>
                    <img src="img/6.Botones/Key/Space Bar key.png" alt="space" class="space mt-80">
                    <span class="fs-32">Shoot Bubble</span>
                </div>
            </div>
            <div class="d-flex gap-5 justify-content-center mt-3">
                <button class="info-buttons rounded-3 d-flex align-items-center justify-content-center hover-buttons" onclick="renderInfoAttackFinSlap()">
                    <span>Back</span>
                </button>
                <button class="info-buttons rounded-3 d-flex align-items-center justify-content-center hover-buttons" onclick="renderInfoAttackPoison()">
                    <span>Next</span>
                </button>
            </div>
        </div>
    `;
}


/**
 * This function the template for the help-poison-attack-information
 * @returns template
 */
function showAttackInfoPoison() {
    return /*html*/ `
        <div class="movement d-flex justify-content-center align-items-center flex-column">
            <div class="d-flex gap-60">
                <div class="d-flex width-50 align-items-center justify-content-center">
                    <img src="img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png" alt="sharkie-fin-slap" class="sharkie-movement">
                    <img src="img/2.Enemy/3 Final Enemy/Hurt/2.png" alt="endboss" class="endboss-info">
                </div>
                <div class="d-flex width-50 flex-column align-items-center justify-content-center gap-4">
                    <button class="back d-flex justify-content-center align-items-center" onclick="hideInstructions()">
                        <span>X</span>
                    </button>
                    <div class="attack-buttons rounded-3 d-flex justify-content-center align-items-center mt-80 mt-responsive">
                        <span>D</span>
                    </div>
                    <div class="d-flex flex-column align-items-center justify-content-center">
                        <span class="fs-responsive">Shoot Poison Bubble</span>
                        <span class="subline">(For Endboss)</span>
                    </div>
                </div>
            </div>
            <div class="d-flex gap-5 justify-content-center mt-3">
                <button class="info-buttons rounded-3 d-flex align-items-center justify-content-center hover-buttons" onclick="renderInfoAttackBubble()">
                    <span>Back</span>
                </button>
            </div>
        </div>
    `;
}