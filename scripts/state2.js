var cannonBarrel, bullets, velocity = 1000, nextFire = 0, fireRate = 200, enemy, bullet, enemyGroup;

demo.state2 = function(){};
demo.state2.prototype = {
  preload: function(){
    game.load.image('cannonWheel', 'assets/sprites/cannonWheel.png');
    game.load.image('cannonBarrel', 'assets/sprites/cannonBarrel.png');
    game.load.image('bullet', 'assets/sprites/bullet.png');
    game.load.image('enemyRobot', 'assets/sprites/robotwalker/robot1.png');
    
  },
  create: function(){
    game.stage.backgroundColor = "#66ffcc";
    addChangeStateEventListeners();

    var cannonWheel = game.add.sprite(centerX, centerY, 'cannonWheel');
    cannonWheel.anchor.setTo(0.5);
    cannonWheel.scale.setTo(5);

    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(200, 'bullet');
    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('anchor.x', 1.5);
    bullets.setAll('anchor.y', 0.5);
    bullets.setAll('scale.x', -5);
    bullets.setAll('scale.y', -5);

    cannonBarrel = game.add.sprite(centerX, centerY, 'cannonBarrel');
    cannonBarrel.anchor.setTo(0.8, 0.45);
    cannonBarrel.scale.setTo(-5);

    enemy = game.add.sprite(100, 200, 'enemyRobot');
    game.physics.enable(enemy);

    enemyGroup = game.add.group();
    enemyGroup.enableBody = true;
    enemyGroup.physicsBodyType = Phaser.Physics.ARCADE;

    for (var i = 0; i < 3; i++) {
      enemyGroup.create(1300, 350 * i + 100, 'enemyRobot');
    }

    enemyGroup.setAll('anchor.x', 0.5);
    enemyGroup.setAll('anchor.y', 0.5);
    enemyGroup.setAll('scale.x', 0.4);
    enemyGroup.setAll('scale.y', 0.4);

  },
  update: function(){
    cannonBarrel.rotation = game.physics.arcade.angleToPointer(cannonBarrel);
    if (game.input.activePointer.isDown) {
      this.fire();
    }
    game.physics.arcade.overlap(bullets, enemy, this.hitEnemy);
    game.physics.arcade.overlap(bullets, enemyGroup, this.hitGroup);
    
  },
  fire: function() {
    if(game.time.now > nextFire) {
      nextFire = game.time.now + fireRate;
      console.log('firing');
      bullet =  bullets.getFirstDead();
      bullet.reset(cannonBarrel.x, cannonBarrel.y);
  
      game.physics.arcade.moveToPointer(bullet, velocity);
      bullet.rotation = game.physics.arcade.angleToPointer(bullet);
    }
    
  },
  hitEnemy: function() {
    console.log('hit');
    enemy.kill();
    bullet.kill();
  },
  hitGroup: function(b, e) {
    b.kill();
    e.kill();
  }


};