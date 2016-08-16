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
        .state("teams", {
            url:          "/",
            templateUrl:  "app/layout.html",
            controller:   "TeamLayoutController",
            controllerAs: "vm"
        });
    }
  });

  const SetupRunner = Runner.extend({
    $inject: ["$appContext"],
    constructor(appContext) {
      appContext.addHandlers(new TeamHandler());
    }
  });

  eval(this.exports);

};
