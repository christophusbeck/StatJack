const {BasicScriptNode} = require('./BasicScriptNode');
const {
  customNode,
  component,
  input,
  output,
  serializeSceneObjectFlag,
  serializeProperty
} = require('./OrionDecorators');

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
let GameManager = class GameManager extends APJS.BasicScriptComponent {
    constructor() {
        /** Generated Pokemon Data for Effect House TypeScript **/
        super(...arguments);
        this.HP = [
            0, 45, 60, 80, 39, 58, 78, 44, 59, 79, 45, 50, 60, 40, 45, 65,
            40, 63, 83, 30, 75, 40, 65, 35, 60, 45, 60, 50, 75, 55, 70,
            90, 46, 61, 81, 70, 95, 38, 73, 115, 140, 40, 75, 45, 60, 75,
            35, 60, 60, 70, 10, 35, 50, 65, 50, 80, 40, 65, 60, 95, 40,
            65, 90, 25, 40, 55, 70, 80, 90, 50, 65, 80, 40, 80, 40, 55,
            80, 50, 65, 90, 95, 25, 50, 52, 35, 60, 65, 90, 80, 105, 30,
            50, 30, 45, 60, 35, 60, 85, 30, 55, 40, 60, 60, 95, 50, 60,
            50, 50, 90, 40, 65, 80, 105, 250, 65, 105, 30, 55, 45, 80, 30,
            60, 50, 70, 65, 65, 65, 65, 75, 20, 95, 130, 48, 65, 130, 65,
            65, 65, 35, 70, 30, 60, 80, 160, 90, 90, 90, 41, 61, 91, 106,
            100
        ];
        this.ATK = [
            0, 49, 62, 100, 52, 64, 104, 48, 63, 103, 30, 20, 45, 35, 25, 150,
            45, 60, 80, 56, 71, 60, 90, 60, 95, 80, 85, 75, 100, 47, 62,
            92, 57, 72, 102, 45, 70, 41, 67, 45, 70, 45, 80, 50, 65, 80,
            70, 95, 55, 65, 55, 100, 65, 60, 52, 82, 80, 105, 75, 115, 50,
            65, 95, 20, 35, 50, 80, 100, 130, 75, 90, 125, 40, 70, 80, 95,
            120, 85, 100, 65, 100, 35, 60, 95, 85, 110, 45, 70, 80, 105, 65,
            95, 35, 50, 65, 45, 48, 73, 105, 130, 30, 50, 40, 105, 50, 80,
            120, 105, 55, 65, 90, 85, 130, 5, 55, 125, 40, 65, 67, 92, 45,
            75, 65, 110, 50, 83, 95, 155, 110, 10, 155, 85, 48, 75, 65, 65,
            130, 60, 40, 60, 80, 115, 135, 110, 85, 125, 85, 64, 84, 124, 150,
            100
        ];
        this.DEF = [
            0, 49, 63, 123, 43, 58, 78, 65, 80, 120, 35, 55, 50, 30, 50, 40,
            40, 55, 80, 35, 70, 30, 65, 44, 69, 50, 50, 90, 120, 52, 67,
            87, 40, 57, 77, 48, 73, 40, 75, 20, 45, 35, 70, 55, 70, 85,
            55, 80, 50, 60, 30, 60, 55, 60, 48, 78, 35, 60, 45, 80, 40,
            65, 95, 15, 30, 65, 50, 70, 80, 35, 50, 85, 35, 65, 100, 115,
            130, 55, 70, 65, 95, 70, 95, 55, 45, 70, 55, 80, 50, 75, 100,
            180, 30, 45, 80, 160, 45, 70, 90, 115, 50, 70, 80, 85, 95, 110,
            53, 79, 75, 95, 120, 95, 120, 5, 115, 100, 70, 95, 60, 65, 55,
            85, 65, 80, 35, 57, 57, 120, 105, 55, 109, 80, 48, 70, 60, 60,
            60, 70, 100, 125, 90, 105, 85, 65, 85, 90, 90, 45, 65, 115, 70,
            100
        ];
        this.SPATK = [
            0, 65, 80, 122, 60, 80, 159, 50, 65, 135, 20, 25, 90, 20, 25, 15,
            35, 50, 135, 25, 40, 31, 61, 40, 65, 75, 95, 10, 25, 40, 55,
            75, 40, 55, 85, 60, 95, 50, 81, 45, 85, 30, 65, 75, 85, 110,
            45, 60, 40, 90, 35, 50, 40, 75, 65, 95, 35, 60, 65, 95, 40,
            50, 70, 105, 120, 175, 35, 50, 65, 70, 85, 135, 50, 80, 30, 45,
            55, 65, 80, 40, 100, 95, 120, 58, 35, 60, 45, 70, 40, 65, 45,
            85, 100, 115, 170, 30, 43, 73, 25, 50, 55, 80, 60, 125, 40, 50,
            35, 35, 60, 60, 85, 30, 45, 35, 100, 60, 70, 95, 35, 65, 70,
            100, 90, 55, 115, 95, 100, 65, 30, 15, 70, 85, 48, 65, 110, 110,
            95, 85, 90, 115, 55, 65, 70, 65, 125, 85, 100, 50, 70, 145, 194,
            100
        ];
        this.SPDEF = [
            0, 65, 80, 120, 50, 65, 115, 64, 80, 115, 20, 25, 80, 20, 25, 80,
            35, 50, 80, 35, 80, 31, 61, 54, 79, 60, 85, 35, 65, 40, 55,
            85, 40, 55, 75, 65, 90, 65, 100, 25, 50, 40, 75, 65, 75, 90,
            55, 80, 55, 75, 45, 70, 40, 65, 50, 80, 45, 70, 50, 80, 40,
            50, 90, 55, 70, 105, 35, 60, 85, 30, 45, 95, 100, 120, 30, 45,
            65, 65, 80, 40, 70, 55, 70, 62, 35, 60, 70, 95, 50, 100, 25,
            45, 35, 55, 95, 45, 90, 115, 25, 50, 55, 80, 45, 75, 50, 80,
            110, 110, 75, 45, 70, 30, 45, 105, 40, 100, 25, 45, 50, 80, 55,
            85, 90, 80, 95, 85, 85, 90, 70, 20, 130, 95, 48, 85, 95, 95,
            110, 75, 55, 70, 45, 70, 95, 110, 100, 90, 125, 50, 70, 125, 120,
            100
        ];
        this.SPD = [
            0, 45, 60, 80, 65, 80, 100, 43, 58, 78, 45, 30, 70, 50, 35, 145,
            56, 71, 121, 72, 77, 70, 100, 55, 80, 120, 110, 40, 65, 41, 56,
            76, 50, 65, 85, 35, 60, 65, 109, 20, 45, 55, 90, 30, 40, 50,
            25, 30, 45, 90, 90, 110, 40, 115, 55, 85, 70, 95, 55, 90, 90,
            90, 70, 90, 105, 150, 35, 45, 55, 40, 55, 70, 70, 100, 20, 35,
            45, 90, 105, 15, 30, 45, 70, 55, 75, 110, 45, 70, 25, 50, 40,
            70, 80, 95, 130, 70, 42, 67, 50, 75, 100, 150, 40, 45, 35, 45,
            87, 76, 30, 35, 60, 25, 40, 50, 60, 100, 60, 85, 63, 68, 85,
            115, 100, 105, 95, 105, 93, 105, 100, 80, 81, 60, 48, 75, 65, 130,
            65, 40, 35, 55, 55, 80, 150, 30, 95, 100, 90, 50, 70, 100, 140,
            100
        ];
        // --- Animation Settings ---
        this.startPos = new APJS.Vector2f(-205, -100);
        this.final_player = new APJS.Vector2f(0, 0);
        this.final_dealer = new APJS.Vector2f(0, 385);
        this.animDuration = 1.0;
        this.playerScore = 0;
        this.dealerScore = 0;
        this.isPlayersTurn = true;
        this.isDealersTurn = false;
        this.statUsedForGame = 0; //0 = HP, 1 =ATK, ...
        this.MAX_SCORE = 500;
        this.DEALER_THRESHOLD = 400;
        this.statArray = this.HP; //default
        this.isAnimatingCard = false;
        this.animTimer = 0;
        this.onTouchEvent = (event) => {
            const touchData = event.args[0];
            if (touchData.phase === APJS.TouchPhase.Began) {
                const normalizedTouch = new APJS.Vector2f(touchData.position.x, 1 - touchData.position.y);
                if (this.isTouchingObject(normalizedTouch, this.button_hit)) {
                    this.handleHit();
                }
                if (this.isTouchingObject(normalizedTouch, this.button_stand)) {
                    this.handleStand();
                }
            }
        };
    }
    onStart() {
        if (this.text_player)
            this.playerTextComp = this.text_player.getComponent("Text");
        if (this.text_dealer)
            this.dealerTextComp = this.text_dealer.getComponent("Text");
        if (this.uiCamera) {
            this.actualCamera = this.uiCamera.getComponent("Camera");
        }
        if (this.card_backside) {
            this.card_backside.enabled = false;
            const st = this.card_backside.getComponent("ScreenTransform");
            if (st)
                st.anchoredPosition = this.startPos;
        }
        this.resetGame();
        APJS.EventManager.getGlobalEmitter().on(APJS.EventType.Touch, this.onTouchEvent);
    }
    resetGame() {
        this.playerScore = 0;
        this.dealerScore = 0;
        this.isPlayersTurn = true;
        this.isDealersTurn = false;
        this.statUsedForGame = Math.floor(Math.random() * 6); //pick a random stat to base game on
        switch (this.statUsedForGame) {
            case 0:
                this.statArray = this.HP;
                break;
            case 1:
                this.statArray = this.ATK;
                break;
            case 2:
                this.statArray = this.DEF;
                break;
            case 3:
                this.statArray = this.SPATK;
                break;
            case 4:
                this.statArray = this.SPDEF;
                break;
            case 5:
                this.statArray = this.SPD;
                break;
        }
        //make these invisible until they are needed for the animation
        if (this.card_player_front)
            this.card_player_front.enabled = false;
        if (this.card_dealer_front)
            this.card_dealer_front.enabled = false;
        if (this.player_poke_sprite)
            this.player_poke_sprite.enabled = false;
        if (this.dealer_poke_sprite)
            this.dealer_poke_sprite.enabled = false;
        this.updateUI();
    }
    updateUI() {
        if (this.playerTextComp)
            this.playerTextComp.text = this.playerScore.toString();
        if (this.dealerTextComp)
            this.dealerTextComp.text = this.dealerScore.toString();
        if (this.text_stat) {
            const statNames = ["HP", "ATK", "DEF", "SP.ATK", "SP.DEF", "SPEED"];
            const chosenStat = statNames[this.statUsedForGame] || "Unknown";
            const textComp = this.text_stat.getComponent("Text");
            if (textComp)
                textComp.text = "Stat: " + chosenStat;
        }
    }
    onUpdate(deltaTime) {
        if (this.isAnimatingCard && this.card_backside && this.currentTargetPos) {
            this.animTimer += deltaTime;
            const t = Math.min(this.animTimer / this.animDuration, 1.0);
            // Smooth Ease-Out formula
            const easedT = 1 - Math.pow(1 - t, 3);
            const st = this.card_backside.getComponent("ScreenTransform");
            if (st) {
                const currentX = this.startPos.x + (this.currentTargetPos.x - this.startPos.x) * easedT;
                const currentY = this.startPos.y + (this.currentTargetPos.y - this.startPos.y) * easedT;
                st.anchoredPosition = new APJS.Vector2f(currentX, currentY);
            }
            if (t >= 1.0) {
                this.isAnimatingCard = false;
                this.finishAnimation();
            }
        }
    }
    finishAnimation() {
        // Reset for next time
        const st = this.card_backside.getComponent("ScreenTransform");
        if (st)
            st.anchoredPosition = this.startPos;
        this.card_backside.enabled = false;
        if (this.isDealersTurn) {
            this.dealerTurn();
        }
    }
    /**
     * Universal helper to start the animation to a specific target
     */
    triggerCardAnimation(target) {
        if (!this.card_backside || this.isAnimatingCard)
            return;
        this.currentTargetPos = target;
        this.card_backside.enabled = true;
        this.animTimer = 0;
        this.isAnimatingCard = true;
    }
    isTouchingObject(touchPos, obj) {
        if (!obj || !this.actualCamera)
            return false;
        const st = obj.getComponent("ScreenTransform");
        if (!st)
            return false;
        const objPos = this.actualCamera.worldToViewportPoint(st.getWorldPosition());
        const thresholdX = 0.15;
        const thresholdY = 0.1;
        return (Math.abs(touchPos.x - objPos.x) < thresholdX &&
            Math.abs(touchPos.y - objPos.y) < thresholdY);
    }
    setSpriteFrame(obj, frameIndex, texture) {
        if (!obj || !texture)
            return;
        const image = obj.getComponent("Image");
        if (image) {
            // Assign the specific sequence texture (Player or Dealer)
            image.texture = texture;
            // Get the provider from that specific texture
            const provider = texture.getControl();
            if (provider) {
                // Pause to ensure it doesn't try to play through frames
                provider.pause();
                provider.playFromTo(frameIndex, frameIndex);
                provider.play();
            }
        }
    }
    handleHit() {
        if (this.isAnimatingCard || this.isDealersTurn)
            return;
        this.triggerCardAnimation(this.final_player);
        //make card and sprite visible on the first player turn for the animation
        if (this.card_player_front && this.card_player_front.enabled == false)
            this.card_player_front.enabled = true;
        //if (this.card_dealer_front && this.card_dealer_front.enabled == false) this.card_dealer_front.enabled = true;
        if (this.player_poke_sprite && this.player_poke_sprite.enabled == false)
            this.player_poke_sprite.enabled = true;
        //if (this.dealer_poke_sprite && this.dealer_poke_sprite.enabled == false) this.dealer_poke_sprite.enabled = true;
        const dex_num = Math.floor(Math.random() * 151) + 1;
        //this.playerScore =dex_num;
        // Use the player-specific sprite array
        this.setSpriteFrame(this.player_poke_sprite, dex_num, this.sprite_array_player);
        this.playerScore += this.statArray[dex_num];
        this.updateUI();
        if (this.playerScore > this.MAX_SCORE) {
            // Player busts, dealer wins
            this.isPlayersTurn = false;
            this.isDealersTurn = false;
            // Optionally, trigger some end game UI here
            this.displayBust();
        }
    }
    handleStand() {
        if (this.isAnimatingCard || this.isDealersTurn)
            return;
        this.isDealersTurn = true;
        this.isPlayersTurn = false;
        this.dealerTurn();
    }
    //single turn of a dealer, can be called repeatedly until dealer stands or busts
    dealerTurn() {
        if (this.isAnimatingCard)
            return;
        this.checkDealerOutcome();
        //make card and sprite visible on the first dealer turn for the animation
        if (this.card_dealer_front && this.card_dealer_front.enabled == false)
            this.card_dealer_front.enabled = true;
        if (this.dealer_poke_sprite && this.dealer_poke_sprite.enabled == false)
            this.dealer_poke_sprite.enabled = true;
        const dex_num = Math.floor(Math.random() * 151) + 1;
        this.dealerScore += this.statArray[dex_num];
        this.triggerCardAnimation(this.final_dealer);
        // Use the dealer-specific sprite array
        this.setSpriteFrame(this.dealer_poke_sprite, dex_num, this.sprite_array_dealer);
        this.updateUI();
    }
    checkDealerOutcome() {
        if (this.dealerScore > this.MAX_SCORE) {
            // Dealer busts, player wins
            this.isPlayersTurn = false;
            this.isDealersTurn = false;
            // Optionally, trigger some end game UI here
            this.displayWin();
        }
        else if (this.dealerScore >= this.DEALER_THRESHOLD) {
            // Dealer stands, determine winner
            this.isPlayersTurn = false;
            this.isDealersTurn = false;
            if (this.dealerScore > this.playerScore) {
                // Dealer wins
                this.displayLose();
            }
            else if (this.dealerScore < this.playerScore) {
                // Player wins
                this.displayWin();
            }
            else {
                // Tie
                this.displayDraw();
            }
        }
        //this.resetGame();
    }
    displayBust() {
        // Optionally change text color or show "Bust!" message
    }
    displayWin() {
        // Optionally show "You Win!" message
    }
    displayLose() {
        // Optionally show "You Lose!" message
    }
    displayDraw() {
        // Optionally show "Draw!" message
    }
    onDestroy() {
        APJS.EventManager.getGlobalEmitter().off(APJS.EventType.Touch, this.onTouchEvent);
    }
};
__decorate([
    serializeSceneObjectFlag,
    serializeProperty
], GameManager.prototype, "button_hit", void 0);
__decorate([
    serializeSceneObjectFlag,
    serializeProperty
], GameManager.prototype, "button_stand", void 0);
__decorate([
    serializeSceneObjectFlag,
    serializeProperty
], GameManager.prototype, "text_player", void 0);
__decorate([
    serializeSceneObjectFlag,
    serializeProperty
], GameManager.prototype, "text_dealer", void 0);
__decorate([
    serializeSceneObjectFlag,
    serializeProperty
], GameManager.prototype, "text_stat", void 0);
__decorate([
    serializeSceneObjectFlag,
    serializeProperty
], GameManager.prototype, "uiCamera", void 0);
__decorate([
    serializeSceneObjectFlag,
    serializeProperty
], GameManager.prototype, "card_backside", void 0);
__decorate([
    serializeSceneObjectFlag,
    serializeProperty
], GameManager.prototype, "card_player_front", void 0);
__decorate([
    serializeSceneObjectFlag,
    serializeProperty
], GameManager.prototype, "card_dealer_front", void 0);
__decorate([
    serializeProperty
], GameManager.prototype, "sprite_array_player", void 0);
__decorate([
    serializeProperty
], GameManager.prototype, "sprite_array_dealer", void 0);
__decorate([
    serializeSceneObjectFlag,
    serializeProperty
], GameManager.prototype, "player_poke_sprite", void 0);
__decorate([
    serializeSceneObjectFlag,
    serializeProperty
], GameManager.prototype, "dealer_poke_sprite", void 0);
__decorate([
    serializeProperty
], GameManager.prototype, "startPos", void 0);
__decorate([
    serializeProperty
], GameManager.prototype, "final_player", void 0);
__decorate([
    serializeProperty
], GameManager.prototype, "final_dealer", void 0);
__decorate([
    serializeProperty
], GameManager.prototype, "animDuration", void 0);
GameManager = __decorate([
    component()
], GameManager);
exports.GameManager = GameManager;
