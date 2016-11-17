import "../setup.js";
import "../domain/team.js";
import "../player/playerFeature.js";
import * as foo from "./teamController.js";

new function() {

    base2.mlm.package(this, {
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

        save() {
            return TeamFeature(this.io)
                .updateTeam(this.team).then(
                    team => this.next(mlm.team.TeamController,
                    ctrl => ctrl.showTeam({id: team.id})));
        },
        addPlayer() {
            const io = this.io;
            return PlayerFeature(io).showChoosePlayer()
                .then(players => players &&
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
        showEditTeam(params){
            const io = this.io;
            return TeamFeature(io).team(params.id)
                .then(team => {
                    this.team = new Team(team.toData());
                    return ViewRegion(io).show("app/team/editTeam.html")
                        .then(() => this.adoptState("default", { 
                            controller: "EditTeamController",
                            action:     "showEditTeam",
                            id: team.id 
                        }));
                });
        }
    });

    eval(this.exports);

};
