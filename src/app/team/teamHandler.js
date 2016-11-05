import "./teamFeature.js";
import "./teamController.js";
import "./teamsController.js";
import "./createTeamController.js";
import "./editTeamController.js";

new function(){

	base2.mlm.package(this,{
		name:    "team",
		imports: "miruken.callback,miruken.mvc,mlm,mlm.team",
		exports: "TeamHandler"
	});

	eval(this.imports);

	const TeamHandler = CallbackHandler.extend(TeamFeature, {
	});

	eval(this.exports);
};
