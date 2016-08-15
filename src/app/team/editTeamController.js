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
      team:       {
        validate: {
          presence: true,
          nested:   true
        }
      }
    },

    $inject: [Team],
    constructor(team){
      this.team = new Team(team.toData());
    },

    save() {
      var ctx = this.controllerContext;
      return TeamFeature(ctx).updateTeam(this.team).then(() => {
        return TeamFeature(ctx).showTeams();
      });
    }
  });

  eval(this.exports);

};
