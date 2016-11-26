import "../setup.js";
import "../domain/player.js";
import "./editPlayerController.js";

new function() {

    mlm.package(this, {
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
            mlm.player.EditPlayerController(this).next(
                ctrl => ctrl.showEditPlayer({id: this.player.id}));
        },
        showPlayer({id} = params) {
            const io = this.io; 
            PlayerFeature(io).player(id).then(player => {
                this.player = player;
                return ViewRegion(io).show("app/player/player.html");
            });
        }
    });

    eval(this.exports);

};

