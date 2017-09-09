demo.state8 = function(){};
demo.state8.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = "#993366";
    console.log("in state8");

    addChangeStateEventListeners();

  },
  update: function(){}
};