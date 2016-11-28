import "../setup.js";
import "../domain/team.js";
import "../player/playerFeature.js";
import * as foo from "./teamController.js";

new function() {

    mlm.package(this, {
        name:    "team",
        imports: "miruken.mvc,mlm,mlm.player",
        exports: "EditTeamController"
    });

    eval(this.imports);

    const EditTeamController = Controller.extend(MasterDetail, {
        $properties:{
            title:      "Edit Team",
            buttonText: "Save",
            team:       {
                validate: {
                    presence: true,
                    nested:   true
                }
            },
            color: Color
        },

        editTeam({id} = params) {
            const io = this.io;
            return TeamFeature(io)
                .team(id).then(team => {
                    this.team = new Team(team.toData());
                    return ViewRegion(io).show("app/team/editTeam.html");
                });
        },        
        addPlayer() {
            const io = this.io;
            return PlayerFeature(io)
                .showChoosePlayer().then(players => players &&
                      TeamFeature(io).addPlayers(players, this.team));
        },
        getSelectedDetail(type) {
            return type === Team
                ? Promise.resolve(this.team)
                : $NOT_HANDLED;
        },
        selectColor(color) {
            this.team.color = color;
        },
        saveTeam() {
            return TeamFeature(this.ifValid)
                .updateTeam(this.team)
                .then(team => mlm.team.TeamController(this.io).next(
                    ctrl => ctrl.showTeam({id: team.id})));
        }        
    });

    eval(this.exports);

};
