new function() {

  mlm.package(this, {
    name:    "player",
    imports: "miruken.mvc,mlm.player",
    exports: "PlayerLayoutController"
  });

  eval(this.imports);

  const PlayerLayoutController = Controller.extend({
    viewRegionCreated: function(region) {
      return PlayerFeature(region.context).showPlayers();
    }
  });

  eval(this.exports);

};

