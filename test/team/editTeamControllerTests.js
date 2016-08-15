describe("editTeamController", () => {
	
	eval(miruken.context.namespace);
	eval(miruken.callback.namespace);
	eval(miruken.validate.namespace);
	eval(miruken.mvc.namespace);
	eval(mlm.team.namespace);
	eval(mlm.namespace);


  let context    = new Context();
  context.addHandlers(new ValidationCallbackHandler(), new ValidateJsCallbackHandler());
  let team       = new Team({manager: {firstName: "firstName"}});
  let controller = new EditTeamController(team);
  controller.context = context;

  it("does not change the actual team object detail past in", () => {
    controller.team.manager.firstName = "foo";
    team.manager.firstName.should.equal("firstName");
  });

  describe("validation", () => {

    controller.team.manager.firstName = null;

    it("is nested", () => {
      let result = controller.validate();
      result.valid.should.be.false;
    });

    it("validates before saving", done => {
      controller.save().catch(() => {
        done();
      });
    });
  });

});
