import "../setup.js";
import "./playerFeature.js";

new function() {

    base2.mlm.package(this, {
        name:    "player",
        imports: "miruken.mvc,mlm",
        exports: "PlayersController"
    });

    eval(this.imports);

    const PlayersController = Controller.extend({
        $properties: {
            players:   [] 
        },
        initialize() {
            this.base();
            return PlayerFeature(this.context).players()
                .then(players => this.players = players);
        },

        showPlayers() {
            return ViewRegion(this.context).present({
                templateUrl:  "app/player/players.html",
                controller:   PlayersController,
                controllerAs: "vm"
            }).then(() => {
                return this.adoptState("default", {
                    controller: "Players",
                    action:     "showPlayers",
                    id:         undefined
                });
            });
        },
        goToPlayer(player) {
            this.next(PlayerController)
                .then(c => c.showPlayer({ id: player.id }));
        },
        create() {
            this.next(CreatePlayerController)
                .then(c => c.showCreatePlayer());
        }
    });

    eval(this.exports);

};
