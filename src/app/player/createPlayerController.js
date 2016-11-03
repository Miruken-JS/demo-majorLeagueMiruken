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
            return PlayerFeature(this.controllerContext)
                .createPlayer(this.player).then(() => PlayerFeature(this.context).showPlayers());
        }

    });

    eval(this.exports);

};
