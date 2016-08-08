new function() {

  mlm.package(this, {
    name:    "team",
    imports: "miruken.ng,miruken.ioc",
    exports: "SetupInstaller,SetupRunner"
  });

  eval(this.imports);

  var SetupInstaller = Installer.extend({
    $inject: ["$stateProvider"],
    constructor($stateProvider) {
      $stateProvider
        .state("team", {
            url:          "/",
            templateUrl:  "app/team/team.html",
            controller:   "TeamController",
            controllerAs: "vm"
        });
    }
  });

  var SetupRunner = Runner.extend({
    $inject: ["$envContext", "$q"],
    constructor(envContext, q){
      $envContext.addHandlers(new TeamHandlerMock(q));
    }
  });

  eval(this.exports);

};
