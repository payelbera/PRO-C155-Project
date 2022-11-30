AFRAME.registerComponent("game-play", {
    schema: {
      elementId: { type: "string", default: "#coin1" },      
    },
    
    update: function() {
      this.isCollided(this.data.elementId);
    },
  
    isCollided: function(elementId) {
      // define the function
    }
    
  });
  
