new function() {

  mlm.package(this, {
    name:    "team",
    imports: "mlm,miruken.mvc",
    exports: "CreateTeamController"
  });

  eval(this.imports);

  const CreateTeamController = Controller.extend({
    $properties:{
      team: { map: Team }
    },
    constructor() {
      this.team = new Team();
    },

    create() {
      TeamFeature(this.context).createTeam(this.team).then(() => {
          TeamFeature(this.context).showAllTeams();
      });
    },

  });

  eval(this.exports);

};
