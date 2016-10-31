new function() {

  mlm.package(this, {
    name:    "player",
    imports: "miruken.ng,miruken.ioc,miruken.mvc",
    exports: "SetupInstaller,SetupRunner," + 
        "PlayersRoute"
  });

  eval(this.imports);

  const SetupInstaller = Installer.extend({
    $inject: ["$stateProvider"],
    constructor($stateProvider) {
      $stateProvider
         .state("players", {
            url:          "/players",
            templateUrl:  "app/region.html",
            controller:   "PlayersRoute",
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

  const PlayersRoute = Controller.extend({
    viewRegionCreated: function(region) {
      return PlayerFeature(region.context).showPlayers();
    }
  });

  eval(this.exports);

};

