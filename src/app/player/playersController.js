new function() {

  mlm.package(this, {
    name:    "player",
    imports: "miruken.mvc",
    exports: "PlayersController"
  });

  eval(this.imports);

  const PlayersController = Controller.extend({
    $properties:{
      message: "Hello, world!"
    }
  });

  eval(this.exports);

};
