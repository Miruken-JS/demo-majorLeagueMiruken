new function() {

  mlm.package(this, {
    name:    "team",
    imports: "miruken.mvc",
    exports: "TeamLayoutController"
  });

  eval(this.imports);

  const TeamLayoutController = Controller.extend({
    constructor() {
      
    }
  });

  eval(this.exports);
};
