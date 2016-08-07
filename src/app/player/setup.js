new function() {

  mlm.package(this, {
    name:    "player",
    imports: "miruken.ioc",
    exports: "SetupInstaller"
  });

  eval(this.imports);

  const SetupInstaller = Installer.extend({
    $inject: ["$stateProvider"],
    constructor($stateProvider) {
      $stateProvider
        .state("player", {
            url:          "/player",
            templateUrl:  "app/player/player.html",
            controller:   "PlayerController",
            controllerAs: "vm"
        });
    }
  });

  eval(this.exports);

};
