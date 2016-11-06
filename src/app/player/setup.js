import "./playerFeature.js";
import "./playerHandler.js";
import "./choosePlayerController.js";
import "./createPlayerController.js";
import "./editPlayerController.js";
import "./playerController.js";
import "./playersController.js";

new function() {

    base2.mlm.package(this, {
        name:    "player",
        imports: "miruken.ng,miruken.ioc,miruken.mvc",
        exports: "SetupRunner"
    });

    eval(this.imports);

    const SetupRunner = Runner.extend({
        $inject: ["$appContext"],
        constructor(appContext){
            appContext.addHandlers(new PlayerHandler());
        }
    });

    eval(this.exports);

};

