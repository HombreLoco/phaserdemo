var click;

demo.state3 = function(){};
demo.state3.prototype = {
  preload: function(){
    game.load.image('button1', 'assets/sprites/buttons/button1.png');
    game.load.image('button2', 'assets/sprites/buttons/button2.png');
    game.load.image('button3', 'assets/sprites/buttons/button3.png');
    game.load.audio('click', 'assets/sounds/clickOn.mp3');
  },
  create: function(){
    game.stage.backgroundColor = "#ff5050";
    addChangeStateEventListeners();

    click = game.add.audio('click');
    click.addMarker('low', 0.05, 0.15);
    click.addMarker('high', 0.25, 0.35);

    var b1 = game.add.button(100, 100, 'button1', function() {
      changeState(null, 1);
    });
    var b2 = game.add.button(100, 300, 'button2', function() {
      changeState(null, 2);
    });
    var b3 = game.add.button(100, 500, 'button3');

    b1.onInputDown.add(this.tint, b1);
    b2.onInputDown.add(this.tint, b2);
    b3.onInputDown.add(this.tint, b3);

    b1.onInputUp.add(this.untint, b1);
    b2.onInputUp.add(this.untint, b2);
    b3.onInputUp.add(this.untint, b3);

  },
  update: function(){

  },
  tint: function() {
    this.tint = 0xbbbbbb;
    click.play('low');
  },
  untint: function() {
    this.tint = 0xffffff;
    click.play('high');
  }
};