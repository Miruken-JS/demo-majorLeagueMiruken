import "./playerFeature.js";
import "./choosePlayerController.js";
import "./createPlayerController.js";
import "./editPlayerController.js";
import "./playerController.js";
import "./playersController.js";

new function(){

    base2.mlm.package(this,{
        name:    "player",
        imports: "miruken.callback,miruken.mvc,mlm,mlm.player",
        exports: "PlayerHandler"
    });

    eval(this.imports);

    const PlayerHandler = CallbackHandler.extend(PlayerFeature, {
        showChoosePlayer() {
            return ViewRegion($composer.modal({
                title: "Select Your Players",
                buttons: [
                    { text: "Ok", css: "btn-sm btn-primary" },
                    "Cancel" ]
            })).present({
                templateUrl:  "app/player/choosePlayer.html",
                controller:   ChoosePlayerController,
                controllerAs: "vm"
            }).then(context => {
                return context.modalResult.then(function (result) {
                    if (result && result.button != 'Cancel') {
                        const controller = ViewRegion(context).controller;
                        return controller.selectedPlayers;
                    }
                });
            });
        }
    });

    eval(this.exports);

};
