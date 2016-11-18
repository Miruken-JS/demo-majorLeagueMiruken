import "./teamFeature.js";
import "./createTeamController.js";

new function() {

    base2.mlm.package(this, {
        name:    "team",
        imports: "mlm,miruken.mvc",
        exports: "TeamsController"
    });

    eval(this.imports);

    const TeamsController = Controller.extend({
        $properties:{
            teams: []
        },
        initialize() {
            this.base();
            return TeamFeature(this.io).teams()
                .then(teams => this.teams = teams);
        },

        showTeams(){
            return ViewRegion(this.io).show("app/team/teams.html");
        },
        goToTeam(team) {
            this.next(TeamController, ctrl => ctrl.showTeam({ id: team.id }));
        },
        createTeam() {
            this.next(CreateTeamController, ctrl => ctrl.createTeam());
        }
    });

    eval(this.exports);

};
