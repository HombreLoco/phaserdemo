var demo = {};
var centerX = 1500 / 2, centerY = 1000 / 2;
var robot, speed = 8;
demo.state0 = function(){};
demo.state0.prototype = {
  preload: function(){
    game.load.image('hallway', 'assets/backgrounds/hallway2000.png');
    game.load.spritesheet('robot', 'assets/spritesheets/robotwalking.png', 320, 320);


  },
  create: function(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.stage.backgroundColor = "#ffffff";
    addChangeStateEventListeners();
    game.world.setBounds(0, 0, 2000, 1000);
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    var hallwayBG = game.add.sprite(0, 0, 'hallway');
    robot = game.add.sprite(centerX, centerY, 'robot');
    robot.anchor.setTo(0.5, 0.5);
    robot.scale.setTo(0.7, 0.7);
    game.physics.enable(robot);
    robot.body.collideWorldBounds = true;
    robot.animations.add('walking', [3, 0, 1, 2]);

    game.camera.follow(robot);
    game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000);
    
  },
  update: function(){
    if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      robot.scale.setTo(0.7, 0.7);
      robot.x += speed;
      robot.animations.play('walking', 14, true);
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      robot.scale.setTo(-0.7, 0.7);
      robot.x -= speed;
      robot.animations.play('walking', 14, true);
    } else {
      robot.animations.stop('walking');
      robot.frame = 3;
    }

    if(game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      robot.y -= speed;
      if (robot.y < 232) {
        robot.y = 232;
      }
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      robot.y += speed;
      if (robot.y > 720) {
        robot.y = 720;
      }
    }
  }
};

function changeState(i, stateNum) {
  console.log('state'+ stateNum);
  console.log(i);
  game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args) {
  game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
};

function addChangeStateEventListeners(){
  addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
  addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
  addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
  addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
  addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
  addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
  addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
  addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
  addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
  addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
  // addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
};