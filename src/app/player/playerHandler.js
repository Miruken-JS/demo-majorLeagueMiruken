new function(){

	mlm.package(this,{
		name:    "player",
		imports: "miruken.callback,miruken.mvc,mlm,mlm.player",
		exports: "PlayerHandler"
	});

	eval(this.imports);

	const PlayerHandler = CallbackHandler.extend(PlayerFeature, {
		showPlayers() {
      ViewRegion($composer).present({
          templateUrl:  "app/player/players.html",
          controller:   PlayersController,
          controllerAs: "vm"
      });
		},
		showPlayer(player) {
      ViewRegion($composer.$$provide([Player, player])).present({
          templateUrl:  "app/player/player.html",
          controller:   PlayerController,
          controllerAs: "vm"
      });
		},
		showCreatePlayer() {
      ViewRegion($composer).present({
        templateUrl:  "app/player/createEditPlayer.html",
        controller:   CreatePlayerController,
        controllerAs: "vm"
      });
		},
		showEditPlayer(player) {
      ViewRegion($composer.$$provide([Player, player])).present({
        templateUrl:  "app/player/createEditPlayer.html",
        controller:   EditPlayerController,
        controllerAs: "vm"
      });
		}
	});

	eval(this.exports);
};
