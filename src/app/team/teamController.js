import "../setup.js";
import "../domain/team.js";

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
            TeamFeature(this.context).showEditTeam(this.team);
        },
        showTeam(params) {
            return TeamFeature(this.context)
                .team(params.id).then(team => {
                    this.team = team;
                    return ViewRegion(this.context).present({
                        templateUrl:  "app/team/team.html",
                        controller:   TeamController,
                        controllerAs: "vm"
                    });
                });
        }
    });

    eval(this.exports);

};

