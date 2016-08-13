new function(){

	mlm.package(this,{
		name:    "team",
		imports: "miruken.callback,miruken.mvc,mlm,mlm.team",
		exports: "TeamHandler"
	});

	eval(this.imports);

	let _stateProvider;

	const TeamHandler = CallbackHandler.extend(TeamFeature, {
		constructor(stateProvider) {
			_stateProvider = stateProvider;
		},

		showTeams() {
      ViewRegion($composer).present({
        templateUrl:  "app/team/teams.html",
        controller:   TeamsController,
        controllerAs: "vm"
      });
		},
		showTeam() {
      ViewRegion($composer).present({
        templateUrl:  "app/team/team.html",
        controller:   TeamController,
        controllerAs: "vm"
      });
		},
		showCreateTeam() {
      ViewRegion($composer).present({
        templateUrl:  "app/team/createEditTeam.html",
        controller:   CreateTeamController,
        controllerAs: "vm"
      });
		}
	});

	eval(this.exports);
};
