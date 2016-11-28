import "./playerFeature.js";
import "./createPlayerController.js";

new function() {

    mlm.package(this, {
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
            return ViewRegion(this.io).show("app/player/players");
        },
        goToPlayer(player) {
            PlayerController(this.io).next(ctrl => ctrl.showPlayer({ id: player.id }));
        },
        create() {
            CreatePlayerController(this.io).next(ctrl => ctrl.createPlayer());
        }
    });

    eval(this.exports);

};
