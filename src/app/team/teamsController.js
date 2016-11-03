import "../setup.js";
import "./teamFeature.js";

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

        goToTeam(team) {
            TeamFeature(this.context).showTeam(team);
        },
        create() {
            TeamFeature(this.context).showCreateTeam();
        }

    });

    eval(this.exports);

};
