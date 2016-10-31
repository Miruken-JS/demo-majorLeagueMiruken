new function() {

    mlm.package(this, {
        name:    "player",
        imports: "miruken.ng,miruken.ioc,miruken.mvc",
        exports: "SetupInstaller,SetupRunner," + 
            "PlayersRoute,PlayerRoute,CreatePlayerRoute,EditPlayerRoute"
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
                })
                .state("player", {
                    url:          "/player/{id}",
                    templateUrl:  "app/region.html",
                    controller:   "PlayerRoute",
                    controllerAs: "vm"
                })
                .state("createPlayer", {
                    url:          "/create/player",
                    templateUrl:  "app/region.html",
                    controller:   "CreatePlayerRoute",
                    controllerAs: "vm"
                })
                .state("editPlayer", {
                    url:          "/edit/player/{id}",
                    templateUrl:  "app/region.html",
                    controller:   "EditPlayerRoute",
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

    const PlayerRoute = Controller.extend({
        inject: ["$stateParams"],
        constructor(params){
            this.extend({
                viewRegionCreated: function(region) {
                    PlayerFeature(region.context).player(params.id).then(player => {
                        return PlayerFeature(region.context).showPlayer(player);
                    });
                }
            });
        }
    });

    const CreatePlayerRoute = Controller.extend({
        viewRegionCreated(region) {
            return PlayerFeature(region.context).showCreatePlayer();
        }
    });

    const EditPlayerRoute = Controller.extend({
        inject: ["$stateParams"],
        constructor(params){
            this.extend({
                viewRegionCreated: function(region) {
                    PlayerFeature(region.context).player(params.id).then(player => {
                        return PlayerFeature(region.context).showEditPlayer(player);
                    });
                }
            });
        }
    });

    eval(this.exports);

};

