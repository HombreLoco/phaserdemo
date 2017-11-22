var a1, a2, a3, a4, a5, easeOutElastic;

demo.state4 = function(){};
demo.state4.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = "#006666";
    addChangeStateEventListeners();

    a1 = game.add.sprite(0, 100, 'robot');
    a2 = game.add.sprite(300, 100, 'robot');
    a3 = game.add.sprite(600, 100, 'robot');
    a4 = game.add.sprite(900, 100, 'robot');
    a5 = game.add.sprite(1200, 100, 'robot');

    game.add.tween(a1).to({y: '+400'}, 2000, 'Quad.easeOut', true);
    easeOutElastic = game.add.tween(a2).to({x: 100, y: 0}, 1000, 'Elastic.easeOut')
    game.add.tween(a3).from({y: 1000}, 1500, 'Circ.easeOut', true);
    game.add.tween(a4.anchor).to({x: 1}, 1000, 'Linear', true, 1000, 2, true);
    game.add.tween(a5).to({alpha: 0}, 1000, 'Bounce', true, 1000, false, true).loop(true);
  },
  update: function(){}
};