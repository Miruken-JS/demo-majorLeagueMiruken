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
      },
      color: Color
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
      var ctx = this.controllerContext;
      return PlayerFeature(ctx).showChoosePlayer().then(players => {
        if(players) {
          return TeamFeature(ctx).addPlayers(players, this.team);
        };
      });
    },
    getSelectedDetail(type) {
      return type === Team
        ? Promise.resolve(this.team)
        : $NOT_HANDLED;
    },
    selectColor(color) {
      this.team.color = color;
    }
  });

  eval(this.exports);

};
