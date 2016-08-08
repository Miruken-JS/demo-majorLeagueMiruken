new function() {

  mlm.package(this, {
    name:    "team",
    imports: "mlm,miruken.mvc",
    exports: "TeamController"
  });

  eval(this.imports);

  const TeamController = Controller.extend({
    $properties:{
      teams: []
    },

    initialize() {
      this.base();
      TeamFeature(this.context).getTeams().then(teams => {
         this.teams = teams;
      });      
    },

    create() {
      TeamFeature(this.context).showCreateTeam();
    },

  });

  eval(this.exports);

};
