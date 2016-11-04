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
            });
        },
        goToPlayer(player) {
            PlayerFeature(this.context).showPlayer(player);
        },

        create() {
            PlayerFeature(this.context).showCreatePlayer();
        }
    });

    eval(this.exports);

};
