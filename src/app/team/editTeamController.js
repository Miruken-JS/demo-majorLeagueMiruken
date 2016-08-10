new function() {

  mlm.package(this, {
    name:    "team",
    imports: "mlm,miruken.mvc",
    exports: "EditTeamController"
  });

  eval(this.imports);

  const EditTeamController = Controller.extend({
    $properties:{
      title:      "Edit Team",
      buttonText: "Save",
      team:       { map: Team }
    },

    save() {
      TeamFeature(this.context).createTeam(this.team).then(() => {
          TeamFeature(this.context).showTeams();
      });
    },

    addPlayer() {
      
    }

  });

  eval(this.exports);

};
