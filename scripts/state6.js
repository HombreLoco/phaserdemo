demo.state6 = function(){};
demo.state6.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = "#996633";
    console.log("in state6");

    addChangeStateEventListeners();
    
  },
  update: function(){}
};