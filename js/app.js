class Enemy { // Use ES6 class syntax
    constructor(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.positionX = -400;
 }

    update(dt) {
        this.x += this.speed * dt;

        this.x += 1;
            if (this.x > 500) {
            this.x = 0;
        }
        
        // if player collides with the bugs back to position Player(200, 400)
        if(player.x < this.x + 80 &&
          player.x + 80 > this.x &&
          player.y < this.y + 60 &&
          60 + player.y > this.y) {
            player.x = 202;
            player.y = 405;
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

    
    handleInput(position) {
        if (position == 'left' && this.x > 0) {
             this.x -= 101;
        }
        
       if (position == 'right' && this.x < 400) {
            this.x += 101;
        }
       if (position == 'up' && this.y > 0) {
            this.y -= 83;
        }
       if (position == 'down' && this.y < 400) {
           this.y += 83;
       }
        if (this.y < 0) {
            setTimeout(function () {
                player.x = 200;
                player.y = 400;
            },300);
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
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});