new function() {

  mlm.package(this, {
    name:    "player",
    imports: "miruken.mvc,mlm",
    exports: "PlayersController"
  });

  eval(this.imports);

  const PlayersController = Controller.extend({
    $properties: {
      players:   [] 
    },
    initialize() {
      this.base();
      return PlayerFeature(this.context).players()
        .then(players => this.players = players);
    },

    goToPlayer(player) {
      PlayerFeature(this.context).showPlayer(player);
    },

    create() {
      PlayerFeature(this.context).showCreatePlayer();
    }
  });

  eval(this.exports);

};
