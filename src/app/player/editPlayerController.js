new function() {

  mlm.package(this, {
    name:    "player",
    imports: "mlm,miruken.mvc",
    exports: "EditPlayerController"
  });

  eval(this.imports);

  const EditPlayerController = Controller.extend({
    $properties:{
      title:  "Edit Player",
      player: { map: Player }
    }
  });

  eval(this.exports);

};
