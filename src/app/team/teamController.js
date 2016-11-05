import "../setup.js";
import "../domain/team.js";
import "./editTeamController.js";

new function() {

    base2.mlm.package(this, {
        name:    "team",
        imports: "miruken.mvc,mlm",
        exports: "TeamController"
    });

    eval(this.imports);

    const TeamController = Controller.extend({
        $properties:{
            team: undefined
        },

        edit() {
            return this.next(EditTeamController)
                .then(ctrl => ctrl.showEditTeam({id: this.team.id}));
        },
        showTeam(params) {
            return TeamFeature(this.context).team(params.id)
                .then(team => {
                    this.team = team;
                    return ViewRegion(this.context).present({
                        templateUrl:  "app/team/team.html",
                        controller:   TeamController,
                        controllerAs: "vm"
                    }).then(() => {
                        this.adoptState("default", {
                            controller: "TeamController",
                            action:     "showTeam",
                            id:         params.id
                        });
                    });
                });
        }
    });

    eval(this.exports);

};

