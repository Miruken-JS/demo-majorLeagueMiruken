import "../setup.js";
import "./teamFeature.js";
import "./createTeamController.js";

new function() {

    base2.mlm.package(this, {
        name:    "team",
        imports: "mlm,miruken.mvc",
        exports: "TeamsController"
    });

    eval(this.imports);

    const TeamsController= Controller.extend({
        $properties:{
            teams: []
        },
        initialize() {
            this.base();
            return TeamFeature(this.context).teams()
                .then(teams => this.teams = teams );
        },

        showTeams(){
            return ViewRegion(this.context).present({
                templateUrl:  "app/team/teams.html",
                controller:   TeamsController,
                controllerAs: "vm"
            }).then(() => this.adoptState("default", {
                controller: "Teams",
                action:     "showTeams",
                id:         undefined
            }));
        },
        goToTeam(team) {
            this.next(TeamController)
                .then(ctrl => ctrl.showTeam({ id: team.id }));
        },
        create() {
            this.next(CreateTeamController)
                .then(ctrl => ctrl.showCreateTeam());
        }

    });

    eval(this.exports);

};
