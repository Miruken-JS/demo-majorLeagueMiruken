import "./playerFeature.js";
import "./choosePlayerController.js";
import "./createPlayerController.js";
import "./editPlayerController.js";
import "./playerController.js";
import "./playersController.js";

new function(){

    mlm.package(this,{
        name:    "player",
        imports: "miruken.callback,miruken.mvc,mlm,mlm.player",
        exports: "PlayerHandler"
    });

    eval(this.imports);

    const PlayerHandler = CallbackHandler.extend(PlayerFeature, {
        showPlayers() {
            return ViewRegion($composer).present({
                templateUrl:  "app/player/players.html",
                controller:   PlayersController,
                controllerAs: "vm"
            }).then(() => this.adoptState("players"));
        },
        showPlayer(player) {
            return ViewRegion($composer.$$provide([Player, player])).present({
                templateUrl:  "app/player/player.html",
                controller:   PlayerController,
                controllerAs: "vm"
            }).then(() => this.adoptState("player", { id: player.id }));
        },
        showCreatePlayer() {
            return ViewRegion($composer).present({
                templateUrl:  "app/player/createEditPlayer.html",
                controller:   CreatePlayerController,
                controllerAs: "vm"
            }).then(() => this.adoptState("createPlayer"));
        },
        showEditPlayer(player) {
            return ViewRegion($composer.$$provide([Player, player])).present({
                templateUrl:  "app/player/createEditPlayer.html",
                controller:   EditPlayerController,
                controllerAs: "vm"
            }).then(() => this.adoptState("editPlayer", { id: player.id }));
        },
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
