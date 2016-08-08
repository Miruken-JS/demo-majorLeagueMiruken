new function() {

  mlm.package(this, {
    name:    "team",
    imports: "miruken.mvc",
    exports: "TeamController"
  });

  eval(this.imports);

  const TeamController = Controller.extend({
    $properties:{
      teams: null,
      foo:   "bar"
    },
    initialize() {
      this.base();
      TeamFeature(this.context).getTeams().then(teams => {
         this.teams = teams;
      });      
    }
  });

  eval(this.exports);

};
