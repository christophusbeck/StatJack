@component()
export class GameManager extends APJS.BasicScriptComponent {


  /** Generated Pokemon Data for Effect House TypeScript **/ 

private const HP: number[] = [
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

private const ATK: number[] = [
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

private const DEF: number[] = [
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

private const SPATK: number[] = [
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

private const SPDEF: number[] = [
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

private const SPD: number[] = [
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







  // --- Serialized UI Properties ---
  @serializeSceneObjectFlag
@serializeProperty
  private button_hit: APJS.SceneObject; // Reference to the "Hit" button in the scene
  @serializeSceneObjectFlag
@serializeProperty
  private button_stand: APJS.SceneObject; // Reference to the "Stand" button in the scene
  @serializeSceneObjectFlag
@serializeProperty
  private text_player: APJS.SceneObject; // Reference to the UI text object that displays player's score
  @serializeSceneObjectFlag
@serializeProperty
  private text_dealer: APJS.SceneObject; // Reference to the UI text object that displays dealer's score
  @serializeSceneObjectFlag
@serializeProperty
  private text_stat: APJS.SceneObject; // Reference to the UI text object that displays the chosen stat for the game (HP, ATK, etc.)
  @serializeSceneObjectFlag
@serializeProperty
  private uiCamera: APJS.SceneObject; // Reference to the UI Camera in the scene, used for converting touch positions

  @serializeSceneObjectFlag
@serializeProperty
  private card_backside: APJS.SceneObject; //image of backside of the playing card used for the draing animation

  @serializeSceneObjectFlag
@serializeProperty
  private card_player_front: APJS.SceneObject; //image of the front of the player's playing card as a background for the pokemon sprite (will be disabled on reset for invisibility)
  @serializeSceneObjectFlag
@serializeProperty
  private card_dealer_front: APJS.SceneObject; //image of the front of the dealer's playing card as a background for the pokemon sprite (will be disabled on reset for invisibility)

  @serializeProperty
  private sprite_array_player: APJS.Texture; //texture sequence to display player's drawn pokemon
  @serializeProperty
  private sprite_array_dealer: APJS.Texture; //texture sequence to display dealer's drawn pokemon

  @serializeSceneObjectFlag
@serializeProperty
  private player_poke_sprite: APJS.SceneObject; //object with image component to show player's drawn pokemon
  @serializeSceneObjectFlag
@serializeProperty
  private dealer_poke_sprite: APJS.SceneObject;  //object with image component to show dealer's drawn pokemon


  // --- Animation Settings ---
  @serializeProperty
  private startPos: APJS.Vector2f = new APJS.Vector2f(-205, -100);
  @serializeProperty
  private final_player: APJS.Vector2f = new APJS.Vector2f(0, 0);
  @serializeProperty
  private final_dealer: APJS.Vector2f = new APJS.Vector2f(0, 385);
  @serializeProperty
  private animDuration: number = 1.0;



  // --- Internal Variables ---
  private actualCamera: APJS.Camera;
  private playerScore: number = 0;
  private dealerScore: number = 0;
  private playerTextComp: APJS.Text;
  private dealerTextComp: APJS.Text;
  private isPlayersTurn: boolean = true;
  private isDealersTurn: boolean = false; 
  private statUsedForGame: number = 0; //0 = HP, 1 =ATK, ...
  private MAX_SCORE: number = 500;
  private DEALER_THRESHOLD: number = 400;
  private statArray = this.HP //default
  


  private isAnimatingCard: boolean = false;
  private animTimer: number = 0;
  private currentTargetPos: APJS.Vector2f;

  onStart() {
    if (this.text_player)
      this.playerTextComp = this.text_player.getComponent("Text") as APJS.Text;
    if (this.text_dealer)
      this.dealerTextComp = this.text_dealer.getComponent("Text") as APJS.Text;

    if (this.uiCamera) {
      this.actualCamera = this.uiCamera.getComponent("Camera") as APJS.Camera;
    }

    if (this.card_backside) {
      this.card_backside.enabled = false;
      const st = this.card_backside.getComponent(
        "ScreenTransform"
      ) as APJS.ScreenTransform;
      if (st) st.anchoredPosition = this.startPos;
    }

    this.resetGame();
    APJS.EventManager.getGlobalEmitter().on(
      APJS.EventType.Touch,
      this.onTouchEvent
    );
  }

  public resetGame() {
    this.playerScore = 0;
    this.dealerScore = 0;
    this.isPlayersTurn = true;
    this.isDealersTurn = false;

    this.statUsedForGame = Math.floor(Math.random() * 6); //pick a random stat to base game on
    
    switch(this.statUsedForGame){
      case 0: this.statArray = this.HP; break;
      case 1: this.statArray = this.ATK; break;
      case 2: this.statArray = this.DEF; break;
      case 3: this.statArray = this.SPATK; break;
      case 4: this.statArray = this.SPDEF; break;
      case 5: this.statArray = this.SPD; break;
    }

    //make these invisible until they are needed for the animation
    if (this.card_player_front) this.card_player_front.enabled = false;
    if (this.card_dealer_front) this.card_dealer_front.enabled = false;
    if (this.player_poke_sprite) this.player_poke_sprite.enabled = false;
    if (this.dealer_poke_sprite) this.dealer_poke_sprite.enabled = false;


    this.updateUI();
  }

  private updateUI() {
    if (this.playerTextComp)
      this.playerTextComp.text = this.playerScore.toString();
    if (this.dealerTextComp)
      this.dealerTextComp.text = this.dealerScore.toString();
    if(this.text_stat){
      const statNames = ["HP", "ATK", "DEF", "SP.ATK", "SP.DEF", "SPEED"];
      const chosenStat = statNames[this.statUsedForGame] || "Unknown";
      const textComp = this.text_stat.getComponent("Text") as APJS.Text;
      if(textComp) textComp.text = "Stat: " + chosenStat;
    }


  }



  onUpdate(deltaTime: number) {
    if (this.isAnimatingCard && this.card_backside && this.currentTargetPos) {
      this.animTimer += deltaTime;
      const t = Math.min(this.animTimer / this.animDuration, 1.0);

      // Smooth Ease-Out formula
      const easedT = 1 - Math.pow(1 - t, 3);

      const st = this.card_backside.getComponent(
        "ScreenTransform"
      ) as APJS.ScreenTransform;
      if (st) {
        const currentX =
          this.startPos.x + (this.currentTargetPos.x - this.startPos.x) * easedT;
        const currentY =
          this.startPos.y + (this.currentTargetPos.y - this.startPos.y) * easedT;
        st.anchoredPosition = new APJS.Vector2f(currentX, currentY);
      }

      if (t >= 1.0) {
        this.isAnimatingCard = false;
        this.finishAnimation();
      }
    }
  }

  private finishAnimation() {
    // Reset for next time
    const st = this.card_backside.getComponent(
      "ScreenTransform"
    ) as APJS.ScreenTransform;
    if (st) st.anchoredPosition = this.startPos;
    this.card_backside.enabled = false;

      if (this.isDealersTurn) {
        this.dealerTurn();
      }
  }

  /**
   * Universal helper to start the animation to a specific target
   */
  private triggerCardAnimation(target: APJS.Vector2f) {
    if (!this.card_backside || this.isAnimatingCard) return;

    this.currentTargetPos = target;
    this.card_backside.enabled = true;
    this.animTimer = 0;
    this.isAnimatingCard = true;


  }

  private isTouchingObject(
    touchPos: APJS.Vector2f,
    obj: APJS.SceneObject
  ): boolean {
    if (!obj || !this.actualCamera) return false;
    const st = obj.getComponent("ScreenTransform") as APJS.ScreenTransform;
    if (!st) return false;

    const objPos = this.actualCamera.worldToViewportPoint(st.getWorldPosition());
    const thresholdX = 0.15;
    const thresholdY = 0.1;

    return (
      Math.abs(touchPos.x - objPos.x) < thresholdX &&
      Math.abs(touchPos.y - objPos.y) < thresholdY
    );
  }

  private onTouchEvent = (event: APJS.IEvent) => {
    const touchData = event.args[0] as APJS.TouchData;
    if (touchData.phase === APJS.TouchPhase.Began) {
      const normalizedTouch = new APJS.Vector2f(
        touchData.position.x,
        1 - touchData.position.y
      );

      if (this.isTouchingObject(normalizedTouch, this.button_hit)) {
        this.handleHit();
      }
      if (this.isTouchingObject(normalizedTouch, this.button_stand)) {
        this.handleStand();
      }
    }
  };

  private setSpriteFrame(obj: APJS.SceneObject, frameIndex: number, texture: APJS.Texture) {
    if (!obj || !texture) return;

    const image = obj.getComponent("Image") as APJS.Image;
    if (image) {
      // Assign the specific sequence texture (Player or Dealer)
      image.texture = texture;

      // Get the provider from that specific texture
      const provider = texture.getControl() as APJS.AnimatedTextureProvider;
      
      if (provider) {
        // Pause to ensure it doesn't try to play through frames
        provider.pause();
        provider.playFromTo(frameIndex, frameIndex);
        provider.play(); 
      }
    }
  }


  private handleHit() {
    if (this.isAnimatingCard || this.isDealersTurn) return;

    this.triggerCardAnimation(this.final_player);

    //make card and sprite visible on the first player turn for the animation
    if (this.card_player_front && this.card_player_front.enabled == false) this.card_player_front.enabled = true;
    //if (this.card_dealer_front && this.card_dealer_front.enabled == false) this.card_dealer_front.enabled = true;
    if (this.player_poke_sprite && this.player_poke_sprite.enabled == false) this.player_poke_sprite.enabled = true;
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

  private handleStand() {
    if (this.isAnimatingCard || this.isDealersTurn) return;
    this.isDealersTurn = true;
    this.isPlayersTurn = false;
    this.dealerTurn();
    

  }

  //single turn of a dealer, can be called repeatedly until dealer stands or busts
  private dealerTurn() {
    if (this.isAnimatingCard) return;
    this.checkDealerOutcome();

    //make card and sprite visible on the first dealer turn for the animation
    if (this.card_dealer_front && this.card_dealer_front.enabled == false) this.card_dealer_front.enabled = true;
    if (this.dealer_poke_sprite && this.dealer_poke_sprite.enabled == false) this.dealer_poke_sprite.enabled = true;

    const dex_num = Math.floor(Math.random() * 151) + 1;
    this.dealerScore += this.statArray[dex_num];
    this.triggerCardAnimation(this.final_dealer);
    // Use the dealer-specific sprite array
    this.setSpriteFrame(this.dealer_poke_sprite, dex_num, this.sprite_array_dealer);
    this.updateUI();
  }

  private checkDealerOutcome() {
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
      } else if (this.dealerScore < this.playerScore) {
        // Player wins
        this.displayWin();
      } else {
        // Tie
        this.displayDraw();
      }
    }
    //this.resetGame();
  }

  private displayBust() {
    // Optionally change text color or show "Bust!" message
    
  }
  private displayWin() {
    // Optionally show "You Win!" message
  }
  private displayLose() {
    // Optionally show "You Lose!" message
  }
  private displayDraw() {
    // Optionally show "Draw!" message
  }


  onDestroy() {
    APJS.EventManager.getGlobalEmitter().off(
      APJS.EventType.Touch,
      this.onTouchEvent
    );
  }

  


}