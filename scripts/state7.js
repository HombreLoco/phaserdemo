demo.state7 = function(){};
demo.state7.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = "#ffff99";
    console.log("in state7");

    addChangeStateEventListeners();
    
  },
  update: function(){}
};