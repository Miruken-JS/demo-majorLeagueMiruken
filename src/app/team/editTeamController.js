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

    $inject: [Team],
    constructor(team){
      this.team = new Team(team.toData());
    },

    save() {
      TeamFeature(this.context).updateTeam(this.team).then(() => {
          TeamFeature(this.context).showTeams();
      });
    }
  });

  eval(this.exports);

};
