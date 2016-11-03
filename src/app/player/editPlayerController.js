import "../setup.js";
import "../domain/player.js";

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

        $inject: [Player],
        constructor(player){
            this.player = new Player(player.toData());
        },

        save() {
            var ctx = this.controllerContext;
            return PlayerFeature(ctx).updatePlayer(this.player).then(player => {
                return PlayerFeature(ctx).showPlayers();
            });
        }
    });

    eval(this.exports);

};
