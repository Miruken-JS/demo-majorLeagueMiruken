new function(){

	mlm.package(this,{
		name:    "team",
		imports: "miruken.callback,miruken.mvc,mlm,mlm.team",
		exports: "TeamHandler"
	});

	eval(this.imports);

	const TeamHandler = CallbackHandler.extend(TeamFeature, {
		showTeams() {
      ViewRegion($composer).present({
          templateUrl:  "app/team/teams.html",
          controller:   TeamsController,
          controllerAs: "vm"
      });
		},
		showTeam(team) {
      ViewRegion($composer.$$provide([Team, team])).present({
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
		},
		showEditTeam(team) {
      ViewRegion($composer.$$provide([Team, team])).present({
        templateUrl:  "app/team/createEditTeam.html",
        controller:   EditTeamController,
        controllerAs: "vm"
      });
		}
	});

	eval(this.exports);
};
