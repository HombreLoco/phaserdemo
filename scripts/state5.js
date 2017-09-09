demo.state5 = function(){};
demo.state5.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = "#9999ff";
    console.log("in state5");

    addChangeStateEventListeners();
    
  },
  update: function(){}
};