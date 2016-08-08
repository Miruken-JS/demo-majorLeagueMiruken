new function() {

  mlm.package(this, {
    name:    "team",
    imports: "mlm,miruken.mvc",
    exports: "TeamController"
  });

  eval(this.imports);

  const TeamController = Controller.extend({
    $properties:{
    },

    initialize() {
      this.base();
    }  
  });

  eval(this.exports);

};
