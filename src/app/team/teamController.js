new function() {

  mlm.package(this, {
    name:    "team",
    imports: "mlm,miruken.mvc",
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
      TeamFeature(this.context).showEditTeam();
    }
  });

  eval(this.exports);

};
