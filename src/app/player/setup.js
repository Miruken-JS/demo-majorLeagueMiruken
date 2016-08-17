new function() {

  mlm.package(this, {
    name:    "player",
    imports: "miruken.ng,miruken.ioc",
    exports: "SetupInstaller,SetupRunner"
  });

  eval(this.imports);

  const SetupInstaller = Installer.extend({
    $inject: ["$stateProvider"],
    constructor($stateProvider) {
      $stateProvider
         .state("players", {
            url:          "/players",
            templateUrl:  "app/layout.html",
            controller:   "PlayerLayoutController",
            controllerAs: "vm"
        });
    }
  });

  const SetupRunner = Runner.extend({
    $inject: ["$appContext"],
    constructor(appContext){
      appContext.addHandlers(new PlayerHandler());
    }
  });

  eval(this.exports);

};

