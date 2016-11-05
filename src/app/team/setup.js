import "../env/mock/handlerMocks.js";
import "./createTeamController.js";
import "./editTeamController.js";
import "./teamController.js";
import "./teamsController.js";

new function() {

    base2.mlm.package(this, {
        name:    "team",
        imports: "miruken,miruken.ng,miruken.ioc,miruken.mvc",
    });

    eval(this.imports);

    eval(this.exports);

};

