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

        save() {
            return PlayerFeature(this.io)
                .createPlayer(this.player).then(
                    player => this.next(PlayerController,
                    ctrl => ctrl.showPlayer({id: player.id })));
        },
        showCreatePlayer() {
            return ViewRegion(this.io).show("app/player/createEditPlayer.html")
                .then(() => this.adoptState("default", {
                    controller: "CreatePlayerController",
                    action:     "showCreatePlayer",
                    id:         undefined
                }));
        }

    });

    eval(this.exports);

};
