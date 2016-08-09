new function() {

  mlm.package(this, {
    name:    "team",
    imports: "mlm,miruken.mvc",
    exports: "EditTeamController"
  });

  eval(this.imports);

  const EditTeamController = Controller.extend({
    $properties:{
      title: "Edit Team",
      team:  { map: Team }
    },

    create() {
      TeamFeature(this.context).createTeam(this.team).then(() => {
          TeamFeature(this.context).showAllTeams();
      });
    }

  });

  eval(this.exports);

};
