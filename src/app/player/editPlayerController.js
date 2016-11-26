import "../setup.js";
import "../domain/player.js";
import playerController from "./playerController.js";

new function() {

    mlm.package(this, {
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

        showEditPlayer({id} = params) {
            const io = this.io;
            PlayerFeature(io)
                .player(id).then(player => {
                    this.player = new Player(player.toData());
                    return ViewRegion(io).show("app/player/createEditPlayer.html");

                });
        },
        savePlayer() {
            return PlayerFeature(this.ifValid)
                .updatePlayer(this.player)
                .then(mlm.player.PlayerController(this).next(
                    ctrl => ctrl.showPlayer({ id: this.player.id })));
        }        
    });

    eval(this.exports);

};
