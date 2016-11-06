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
            return PlayerFeature(this.controllerContext).createPlayer(this.player)
                .then(() => {
                    return this.next(mlm.player.PlayerController)
                        .then(c => c.showPlayer({id: this.player.id }));
                }); 
        },
        showCreatePlayer() {
            return ViewRegion(this.context).present({
                templateUrl:  "app/player/createEditPlayer.html",
                controller:   CreatePlayerController,
                controllerAs: "vm"
            }).then(() => this.adoptState("default", {
                controller: "CreatePlayerController",
                action:     "showCreatePlayer",
                id:         undefined
            }));
        }

    });

    eval(this.exports);

};
