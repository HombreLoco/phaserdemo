demo.state3 = function(){};
demo.state3.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = "#ff5050";
    console.log("in state3");

    addChangeStateEventListeners();
    
  },
  update: function(){}
};