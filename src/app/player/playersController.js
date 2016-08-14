new function() {

  mlm.package(this, {
    name:    "player",
    imports: "miruken.mvc,mlm",
    exports: "PlayersController"
  });

  eval(this.imports);

  const PlayersController = Controller.extend({
    $properties: {
      players: {map: Player}
    },
    initialize() {
      PlayerFeature(this.controllerContext).players().then(players => this.players = players);
    }
  });

  eval(this.exports);

};
