speed = 4;
demo.state1 = function(){};
var cursors, vel = 300, rocks, grass;
demo.state1.prototype = {
  preload: function(){
    game.load.tilemap('map1', 'assets/tilemaps/maps/map1.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('Tile-Grass', 'assets/tilemaps/Tile-Grass.png');
    game.load.image('Tile-TreeBush', 'assets/tilemaps/Tile-TreeBush.png');
    game.load.image('Tile-Rock', 'assets/tilemaps/Tile-Rock.png');
    game.load.spritesheet('robot', 'assets/spritesheets/robotwalking.png', 320, 320);
    
  },
  create: function(){
    game.physics.startSystem(Phaser.Physics.ARCADE);    
    game.stage.backgroundColor = "#dddddd";
    addChangeStateEventListeners();
    game.world.setBounds(0, 0, 2000, 1000);
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    

    var map = game.add.tilemap('map1');
    map.addTilesetImage('Tile-Grass');
    map.addTilesetImage('Tile-TreeBush');
    map.addTilesetImage('Tile-Rock');

    grass = map.createLayer('GrassAndTrees');
    rocks = map.createLayer('Rocks');

    map.setCollisionBetween(1, 9, true, 'Rocks');
    map.setCollisionBetween(10, 11, true, 'GrassAndTrees');

    robot = game.add.sprite(200, 300, 'robot');
    robot.anchor.setTo(0.5, 0.5);
    robot.scale.setTo(0.1, 0.1);
    game.physics.enable(robot);

    cursors = game.input.keyboard.createCursorKeys();

    robot.body.collideWorldBounds = true;
    robot.animations.add('walking', [3, 0, 1, 2]);

    game.camera.follow(robot);
    game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000);
  },
  update: function(){

    game.physics.arcade.collide(robot, rocks, function(){ console.log('rock collision'); });
    game.physics.arcade.collide(robot, grass, function(){ console.log('grass collision'); });
    

    if(cursors.right.isDown) {
      robot.scale.setTo(0.1, 0.1);
      robot.body.velocity.x = vel;
      robot.animations.play('walking', 14, true);
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      robot.scale.setTo(-0.1, 0.1);
      robot.body.velocity.x = -vel;
      robot.animations.play('walking', 14, true);
    } else {
      robot.animations.stop('walking');
      robot.frame = 3;
      robot.body.velocity.x = 0;
    }

    if(game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      robot.body.velocity.y = -vel;
      if (robot.y < 0) {
        robot.y = 232;
      }
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      robot.body.velocity.y = vel;
      if (robot.y > 1000 - robot.height) {
        robot.y = 1000 - robot.height;
      }
    } else {
      robot.body.velocity.y = 0;
    }
  }
};