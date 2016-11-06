import "../setup.js";
import "../domain/player.js";
import "./editPlayerController.js";

new function() {

    base2.mlm.package(this, {
        name:    "player",
        imports: "miruken.mvc,mlm",
        exports: "PlayerController"
    });

    eval(this.imports);

    const PlayerController = Controller.extend({
        $properties:{
            player: undefined
        },

        edit() {
            this.next(mlm.player.EditPlayerController)
                .then(c => c.showEditPlayer({id: this.player.id}));
        },
        showPlayer(params) {
            PlayerFeature(this.context).player(params.id)
                .then(player => {
                    this.player = player;
                    return ViewRegion(this.context).present({
                        templateUrl:  "app/player/player.html",
                        controller:   PlayerController,
                        controllerAs: "vm"
                    }).then(() => this.adoptState("default", {
                        controller: "PlayerController",
                        action:     "showPlayer",
                        id:         player.id
                    }));
                });
        }
    });

    eval(this.exports);

};

