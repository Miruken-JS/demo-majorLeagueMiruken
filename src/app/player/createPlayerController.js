new function() {

  mlm.package(this, {
    name:    "player",
    imports: "mlm,miruken.mvc",
    exports: "CreatePlayerController"
  });

  eval(this.imports);

  const CreatePlayerController = Controller.extend({
    $properties:{
      title:  "Create-A-Player",
      player: { map: Player }
    },
    constructor() {
      this.player = new Player();
    },

    create() {
      PlayerFeature(this.context).createPlayer(this.player).then(() => {
          PlayerFeature(this.context).showAllPlayers();
      });
    },

  });

  eval(this.exports);

};
