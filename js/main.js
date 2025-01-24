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

class Obstacle {
  constructor() {
    this.width = 20;
    this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
    this.positionY = 90;
    this.height = 5;

    this.createDomElement();
  }
  createDomElement() {
    //step 1 : cretae the element:
    this.obstacleElm = document.createElement("div");

    //step 2 : add content or modify (ex: innerHTML...)
    this.obstacleElm.className = "obstacle";
    this.obstacleElm.style.width = this.width + "vw";
    this.obstacleElm.style.height = this.height + "vh";
    this.obstacleElm.style.left = this.positionX + "vw";
    this.obstacleElm.style.bottom = this.positionY + "vh";
    //step 3 : append to the dom (allows us to see it in the html)
    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.obstacleElm);
  }
  moveDown() {
    this.positionY--;
    this.obstacleElm.style.bottom = this.positionY + "vh";
  }
}
const player = new Player();
const obstacleArr = []; // will store instances of the class obstacle (everything related to the class Obstacle including metthods and specs)

//create obstacles
setInterval(() => {
  const newObstacle = new Obstacle();
  obstacleArr.push(newObstacle);
}, 2000);

// move obstacle
setInterval(() => {
  obstacleArr.forEach((obstacleInstance, i, arr) => {
    obstacleInstance.moveDown();
  });
}, 50);

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    player.moveLeft();
  } else if (event.code === "ArrowRight") {
    player.moveRight();
  }
});
