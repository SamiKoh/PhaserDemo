var config = {
    type: Phaser.AUTO,
    width: 960,
    height: 655,
    physics: {
        default: 'arcade',
        arcade: {
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);


function preload () {
    this.load.image('ground', 'assets/ground.jpg');
    this.load.image('car', 'assets/sprites/car1.png');
    this.load.image('star', 'assets/sprites/star1.png');
}

var car;
var stars = [];
var start;
var timerText;

function create ()
{
    this.add.image(0, 0, 'ground').setOrigin(0, 0);
    car = this.physics.add.sprite(450, 450, 'car');
    car.setCollideWorldBounds(true);
    car.setScale(0.8);

    for (let i = 0; i < 10; i++) {
        stars.push(this.physics.add.sprite(50,50,'star'
        ));
        
    }
    stars.forEach(star => {
        this.physics.add.overlap(car, star, collectStar, null, this);
        star.setScale(0.4);
        star.x = Math.random() * config.width;
        star.y = Math.random() * config.height;
    });
    timerText = this.add.text(16, 16, 'Time: 0', { fontSize: '32px', fill: '#FFF' });
    
}



function collectStar (car, star){
    star.disableBody(true, true);
    stars.splice(star, 1);
}


function update () {

    

    cursors = this.input.keyboard.createCursorKeys();

    if (cursors.down.isDown) {
        if (start == undefined) start = Date.now();
        if (cursors.right.isDown) {
            car.angle -= 1;
        } else if (cursors.left.isDown) {
            car.angle += 1;
        }
        this.physics.velocityFromRotation(car.rotation, 50, car.body.velocity );
    } else if (cursors.up.isDown) {
        if (start == undefined) start = Date.now();
        if (cursors.right.isDown) {
            car.angle += 1.5;
        } else if (cursors.left.isDown) {
            car.angle -= 1.5;
        }
        this.physics.velocityFromRotation(car.rotation, -150, car.body.velocity);
    } else {
        this.physics.velocityFromRotation(car.rotation, -0, car.body.velocity);
    }
    let time = Date.now() - start;
    timerText.setText("Time: " + (time/1000).toFixed(2));

    if (stars.length == 0 ) {
        game.scene.pause("default");        
    }
}
