new function(){

	mlm.package(this,{
		name:    "player",
		imports: "mlm,miruken.callback",
		exports: "PlayerHandler"
	});

	eval(this.imports);

	let _stateProvider;

	const PlayerHandler = CallbackHandler.extend(PlayerFeature, {
		constructor(stateProvider) {
			_stateProvider = stateProvider;
		},

    showPlayers() {
			_stateProvider.go("allPlayers");
		},

		showCreatePlayer() {
			_stateProvider.go("createPlayer");
		}
	});

	eval(this.exports);
};
