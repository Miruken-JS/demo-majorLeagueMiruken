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
            return PlayerFeature(this.io).players()
                .then(players => this.players = players);
        },

        showPlayers() {
            return ViewRegion(this.io).show("app/player/players.html");
        },
        goToPlayer(player) {
            this.next(PlayerController, ctrl => ctrl.showPlayer({ id: player.id }));
        },
        create() {
            this.next(CreatePlayerController, ctrl => ctrl.createPlayer());
        }
    });

    eval(this.exports);

};
