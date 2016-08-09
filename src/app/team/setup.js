new function() {

  mlm.package(this, {
    name:    "team",
    imports: "miruken.ng,miruken.ioc",
    exports: "SetupInstaller,SetupRunner"
  });

  eval(this.imports);

  const SetupInstaller = Installer.extend({
    $inject: ["$stateProvider"],
    constructor($stateProvider) {
      $stateProvider
        .state("allTeams", {
            url:          "/",
            templateUrl:  "app/team/teams.html",
            controller:   "TeamsController",
            controllerAs: "vm"
        })
        .state("team", {
            url:          "/team",
            templateUrl:  "app/team/team.html",
            controller:   "TeamController",
            controllerAs: "vm"
        })
        .state("createTeam", {
            url:          "/createTeam",
            templateUrl:  "app/team/createEditTeam.html",
            controller:   "CreateTeamController",
            controllerAs: "vm"
        })
        .state("editTeam", {
            url:          "/editTeam",
            templateUrl:  "app/team/createEditTeam.html",
            controller:   "EditTeamController",
            controllerAs: "vm"
        });
    }
  });

  const SetupRunner = Runner.extend({
    $inject: ["$appContext", "$envContext", "$q", "$state"],
    constructor(appContext, envContext, q, state){
      appContext.addHandlers(new TeamHandler(state));
      envContext.addHandlers(new TeamHandlerMock(q));
    }
  });

  eval(this.exports);

};
