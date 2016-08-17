new function() {

  mlm.package(this, {
    name:    "player",
    imports: "miruken.mvc,mlm",
    exports: "PlayerController"
  });

  eval(this.imports);

  const PlayerController = Controller.extend({
    $properties:{
      player: undefined
    },

    $inject: [Player],
    constructor(player) {
      this.player = player;
    },

    edit() {
      PlayerFeature(this.context).showEditPlayer(this.player);
    }
  });

  eval(this.exports);

};

