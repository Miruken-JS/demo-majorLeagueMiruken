new function(){

	mlm.package(this,{
		name:    "team",
		imports: "miruken.callback,miruken.mvc,mlm,mlm.team",
		exports: "TeamHandler"
	});

	eval(this.imports);

	const TeamHandler = CallbackHandler.extend(TeamFeature, {
        constructor($state){

        },
		showTeams() {
            return ViewRegion($composer).present({
                templateUrl:  "app/team/teams.html",
                controller:   TeamsController,
                controllerAs: "vm"
            }).then(() => this.adoptState("teams"));
		},
		showTeam(team) {
            return ViewRegion($composer.$$provide([Team, team])).present({
                templateUrl:  "app/team/team.html",
                controller:   TeamController,
                controllerAs: "vm"
            }).then(() => this.adoptState("team", { id: team.id }));
		},
		showCreateTeam() {
            return ViewRegion($composer).present({
                templateUrl:  "app/team/createTeam.html",
                controller:   CreateTeamController,
                controllerAs: "vm"
            }).then(() => this.adoptState("createTeam"));
		},
		showEditTeam(team) {
            return ViewRegion($composer.$$provide([Team, team])).present({
                templateUrl:  "app/team/editTeam.html",
                controller:   EditTeamController,
                controllerAs: "vm"
            }).then(() => this.adoptState("editTeam", { id: team.id }));
		}
	});

	eval(this.exports);
};
