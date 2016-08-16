new function(){

	mlm.package(this,{
		name:    "player",
		imports: "mlm,miruken.callback",
		exports: "PlayerHandler"
	});

	eval(this.imports);

	const PlayerHandler = CallbackHandler.extend(PlayerFeature, {
    showPlayers() {
			_stateProvider.go("allPlayers");
		},
		showCreatePlayer(player) {
			_stateProvider.go("createPlayer");
		}
	});

	eval(this.exports);
};
