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
            var ctx = this.controllerContext;
            return TeamFeature(ctx).updateTeam(this.team)
                .then(() => {
                    return this.next(mlm.team.TeamController)
                        .then(c => c.showTeam({id: this.team.id}));
                });
        },
        addPlayer() {
            var ctx = this.controllerContext;
            return PlayerFeature(ctx).showChoosePlayer()
                .then(players => {
                    if(players) {
                        return TeamFeature(ctx).addPlayers(players, this.team);
                    };
                });
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
            return TeamFeature(this.context).team(params.id)
                .then(team => {
                    this.team = new Team(team.toData());
                    return ViewRegion(this.context).present({
                        templateUrl:  "app/team/editTeam.html",
                        controller:   EditTeamController,
                        controllerAs: "vm"
                    }).then(() => this.adoptState("default", { 
                        controller: "EditTeamController",
                        action:     "showEditTeam",
                        id: team.id 
                    }));
                });
        }
    });

    eval(this.exports);

};
