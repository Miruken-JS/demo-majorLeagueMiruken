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
         .state("allPlayers", {
            url:          "/players",
            templateUrl:  "app/player/players.html",
            controller:   "PlayersController",
            controllerAs: "vm"
        })
        .state("player", {
            url:          "/player",
            templateUrl:  "app/player/player.html",
            controller:   "PlayerController",
            controllerAs: "vm"
        })
        .state("createPlayer", {
            url:          "/createPlayer",
            templateUrl:  "app/player/createEditPlayer.html",
            controller:   "CreatePlayerController",
            controllerAs: "vm"
        })
        .state("editPlayer", {
            url:          "/editPlayer",
            templateUrl:  "app/player/createEditPlayer.html",
            controller:   "EditPlayerController",
            controllerAs: "vm"
        });
    }
  });

  const SetupRunner = Runner.extend({
    $inject: ["$appContext", "$envContext", "$state"],
    constructor(appContext, envContext, state){
      appContext.addHandlers(new PlayerHandler(state));
      envContext.addHandlers(new PlayerHandlerMock());
    }
  });

  eval(this.exports);

};
