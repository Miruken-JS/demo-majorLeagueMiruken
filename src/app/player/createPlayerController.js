import "../setup.js";
import "../domain/player.js";
import "./playerController.js";
new function() {

    base2.mlm.package(this, {
        name:    "player",
        imports: "mlm,miruken.mvc,miruken.validate",
        exports: "CreatePlayerController"
    });

    eval(this.imports);

    const CreatePlayerController = Controller.extend({
        $properties:{
            title:      "Create-A-Player",
            buttonText: "Create Player",
            player:     { validate: $nested }
        },
        constructor() {
            this.player = new Player();
        },

        createPlayer() {
            return ViewRegion(this.io)
                .show("app/player/createEditPlayer.html");
        },
        savePlayer() {
            return PlayerFeature(this.ifValid)
                .createPlayer(this.player).then(
                    player => this.next(PlayerController,
                    ctrl => ctrl.showPlayer({id: player.id })));
        }
    });

    eval(this.exports);

};
