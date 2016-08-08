new function() {

  mlm.package(this, {
    name:    "team",
    imports: "mlm,miruken.mvc",
    exports: "TeamsController"
  });

  eval(this.imports);

  const TeamsControllers = Controller.extend({
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
