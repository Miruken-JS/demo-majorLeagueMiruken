new function() {

  mlm.package(this, {
    name:    "player",
    imports: "miruken.mvc",
    exports: "PlayerController"
  });

  eval(this.imports);

  const PlayerController = Controller.extend({
    $properties:{
    },
    constructor: function(){
    }
  });

  eval(this.exports);

};
