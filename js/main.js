class Player {
  constructor() {
    this.positionX = 10;
    this.positionY = 0;
    this.width = 20;
    this.height = 10;
    this.playerElm = document.getElementById("player");
    this.updateUI();
  }
  updateUI() {
    // styling the player in DOM instead of css
    this.playerElm.style.width = this.width + "vw";
    this.playerElm.style.height = this.height + "vh";
    this.playerElm.style.left = this.positionX + "vw";
    this.playerElm.style.bottom = this.positionY + "vh";
  }
  moveLeft() {
    this.positionX--;
    this.updateUI();
  }
  moveRight() {
    this.positionX++;
    this.updateUI();

  }
}

const player = new Player();

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    player.moveLeft();
  } else if (event.code === "ArrowRight") {
    player.moveRight();
  }
});
