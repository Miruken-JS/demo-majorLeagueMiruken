new function(){

	mlm.package(this,{
		name:    "team",
		imports: "mlm,miruken.callback",
		exports: "TeamHandler"
	});

	eval(this.imports);

	let _stateProvider;

	const TeamHandler = CallbackHandler.extend(TeamFeature, {
		constructor(stateProvider) {
			_stateProvider = stateProvider;
		},

		showAllTeams() {
			_stateProvider.go("allTeams");
		},

		showCreateTeam() {
			_stateProvider.go("createTeam");
		}
	});

	eval(this.exports);
};