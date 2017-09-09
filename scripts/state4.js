demo.state4 = function(){};
demo.state4.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = "#006666";
    console.log("in state4");

    addChangeStateEventListeners();
    
  },
  update: function(){}
};