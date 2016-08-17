new function() {

  mlm.package(this, {
    name:    "team",
    imports: "miruken.mvc,mlm,mlm.player",
    exports: "EditTeamController"
  });

  eval(this.imports);

  const EditTeamController = Controller.extend(MasterDetail, {
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
    },
    addPlayer() {
      PlayerFeature(this.controllerContext).showChoosePlayer();
    },
    getSelectedDetail(type){
      return type === Team
        ? Promise.resolve(this.team)
        : $NOT_HANDLED;
    }
  });

  eval(this.exports);

};
