new function() {

  mlm.package(this, {
    name:    "team",
    imports: "mlm,miruken.mvc",
    exports: "TeamsController"
  });

  eval(this.imports);

  let selectedTeam;

  const TeamsController= Controller.extend(MasterDetail, {
    $properties:{
      teams: []
    },

    initialize() {
      this.base();
      return TeamFeature(this.context).getTeams().then(teams => {
         this.teams = teams;
      });
    },

    getSelectedDetail(type){
      return type === Team && selectedTeam
        ? Promise.resolve(selectedTeam)
        : $NOT_HANDLED;
    },

    goToTeam(team) {
      selectedTeam = team;
      TeamFeature(this.context).showTeam();
    },

    create() {
      TeamFeature(this.context).showCreateTeam();
    }

  });

  eval(this.exports);

};
