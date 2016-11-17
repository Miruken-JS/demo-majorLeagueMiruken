import "../setup.js";
import "../domain/player.js";
import playerController from "./playerController.js";

new function() {

    base2.mlm.package(this, {
        name:    "player",
        imports: "mlm,miruken.mvc",
        exports: "EditPlayerController"
    });

    eval(this.imports);

    const EditPlayerController = Controller.extend({
        $properties:{
            title:      "Edit Player",
            buttonText: "Save",
            player:     { 
                validate: {
                    presence: true,
                    nested:   true
                }
            }
        },

        save() {
            return PlayerFeature(this.io)
                .updatePlayer(this.player).then(
                    player => this.next(mlm.player.PlayerController,
                    ctrl => ctrl.showPlayer({ id: this.player.id })));
        },
        showEditPlayer(params) {
            const io = this.io;
            PlayerFeature(io).player(params.id)
                .then(player => {
                    this.player = new Player(player.toData());
                    return ViewRegion(io).show("app/player/createEditPlayer.html")
                        .then(() => this.adoptState("default", { 
                            controller: "EditPlayerController",
                            action:     "showEditPlayer",
                            id:         player.id
                        }));

                });
        }
    });

    eval(this.exports);

};
