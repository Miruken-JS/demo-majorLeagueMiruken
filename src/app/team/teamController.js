new function() {

    mlm.package(this, {
        name:    "team",
        imports: "miruken.mvc,mlm",
        exports: "TeamController"
    });

    eval(this.imports);

    const TeamController = Controller.extend({
        $properties:{
            team: undefined
        },

        $inject: [Team],
        constructor(team) {
            this.team = team;
        },

        edit() {
            TeamFeature(this.context).showEditTeam(this.team);
        }
    });

    eval(this.exports);

};

