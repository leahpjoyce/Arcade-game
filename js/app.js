
class Enemy { // Use ES6 class syntax
    constructor(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
 }


update(dt) {
    this.x += this.speed * dt;
    
    this.x += 1;
        if (this.x > 500) {
        this.x = 0;
    }
}

// Draw the enemy on the screen, required method for game
render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

} 


class Player { // Use ES6 class syntax
     constructor(x,y) {
        this.sprite = 'images/char-boy.png';
        this.x = x;
        this.y = y;
     }

    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    }

// Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    
    //moves the player using the arrow key
    handleInput(dt) {
        switch (dt) {
        case 'up': 
          this.y -= 83;
          break;
        case 'down':
          this.y += 83;
          break;
        case 'right':
          this.x += 101;
          break;
        case 'left':
          this.x -= 101;
          break;
        default:
          break;
      }
    }
} 

// Now instantiate your objects. or Create your objects
// Place all enemy objects in an array called allEnemies
const bug1 = new Enemy(0, 55, 105);
const bug2 = new Enemy(80, 200, 95);
const bug3 = new Enemy(155, 155, 100); // 3rd grid
const bug4 = new Enemy(100, 95, 80);
const bug5 = new Enemy(0, 48, 80);
const bug6 = new Enemy(100, 150, 100);
const bug7 = new Enemy(0, 60, 50);
const bug8 = new Enemy(0, 80, 155);

let allEnemies = [bug1, bug2, bug3, bug4, bug5, bug6, bug7, bug8];
var player = new Player(200, 400);



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});