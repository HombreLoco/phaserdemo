demo.state9 = function(){};
demo.state9.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = "#80ff80";
    console.log("in state9");

    addChangeStateEventListeners();
    
  },
  update: function(){}
};