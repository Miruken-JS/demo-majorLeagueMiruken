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
            return PlayerFeature(this.context).updatePlayer(this.player)
                .then(player => {
                    return this.next(mlm.player.PlayerController)
                        .then(c => c.showPlayer({ id: this.player.id }));
                });
        },
        showEditPlayer(params) {
            PlayerFeature(this.context).player(params.id)
                .then(player => {
                    this.player = new Player(player.toData());
                    return ViewRegion(this.context).present({
                        templateUrl:  "app/player/createEditPlayer.html",
                        controller:   EditPlayerController,
                        controllerAs: "vm"
                    }).then(() => this.adoptState("default", { 
                        controller: "EditPlayerController",
                        action:     "showEditPlayer",
                        id:         player.id
                    }));

                });
        }
    });

    eval(this.exports);

};
