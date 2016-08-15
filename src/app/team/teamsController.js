new function() {

  mlm.package(this, {
    name:    "team",
    imports: "mlm,miruken.mvc",
    exports: "TeamsController"
  });

  eval(this.imports);

  const TeamsController= Controller.extend(MasterDetail, {
    $properties:{
      teams: []
    },

    initialize() {
      this.base();
      return TeamFeature(this.context).getTeams().then(teams => this.teams = teams );
    },

    goToTeam(team) {
      MasterDetail(this.context).selectDetail(team);
      TeamFeature(this.context).showTeam();
    },

    create() {
      TeamFeature(this.context).showCreateTeam();
    }

  });

  eval(this.exports);

};
