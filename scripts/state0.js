var demo = {};
var centerX = 1500 / 2, centerY = 1000 / 2;
var robot, speed = 5;
demo.state0 = function(){};
demo.state0.prototype = {
  preload: function(){
    game.load.image('robot', 'assets/sprites/robotwalker/robot1.png');


  },
  create: function(){
    game.stage.backgroundColor = "#ffffff";
    console.log("in state0");
    addChangeStateEventListeners();
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    
    robot = game.add.sprite(centerX, centerY, 'robot');
    robot.anchor.setTo(0.5, 0.5);
  },
  update: function(){
    if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      robot.x += speed;
    }
    if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      robot.x -= speed;
    }
    if(game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      robot.y -= speed;
    }
    if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      robot.y += speed;
    }
  }
};

function changeState(i, stateNum) {
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
};