demo.state1 = function(){};
demo.state1.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = "#dddddd";
    console.log("in state1");

    addChangeStateEventListeners();
    
  },
  update: function(){}
};