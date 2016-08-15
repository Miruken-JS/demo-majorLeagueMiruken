new function(){

	mlm.package(this,{
		name:    "team",
		imports: "miruken.callback,miruken.mvc,mlm,mlm.team",
		exports: "TeamHandler"
	});

	eval(this.imports);

	let _stateProvider, _selectedTeam;

	const TeamHandler = CallbackHandler.extend(TeamFeature, MasterDetail, {
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
		},
		showEditTeam() {
      ViewRegion($composer).present({
        templateUrl:  "app/team/createEditTeam.html",
        controller:   EditTeamController,
        controllerAs: "vm"
      });
		},

    getSelectedDetail(type) {
      return type === Team && _selectedTeam
        ? Promise.resolve(_selectedTeam)
        : $NOT_HANDLED;
    },

    selectDetail(detail) {
      return detail instanceof Team
        ? _selectedTeam = detail
        : $NOT_HANDLED;
    }
	});

	eval(this.exports);
};
