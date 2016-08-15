describe("editTeamController", () => {
	
	eval(miruken.context.namespace);
	eval(miruken.callback.namespace);
	eval(miruken.validate.namespace);
	eval(miruken.mvc.namespace);
	eval(mlm.team.namespace);
	eval(mlm.namespace);

	let context;
	let controller;

	beforeEach(() => {
		context = new Context;
		context.addHandlers(new ValidationCallbackHandler(), new ValidateJsCallbackHandler());
		controller = new EditTeamController();
		controller.context = context;
	});

	describe("something", () => {

    let team;

    beforeEach(done => {
      team = new Team({manager: {firstName: "firstName"}});
      const Handler = CallbackHandler.extend(MasterDetail, {
        getSelectedDetail(type){
          if(type === Team)
            return Promise.resolve(team);
        }
      });
      context.addHandlers(new Handler());
      controller.initialize().then(() => {
        done();
      });
    });

    it("does not edit the team detail from MasterDetail", () => {
      controller.team.manager.firstName = "foo";

      team.manager.firstName.should.equal("firstName");
    });

	});
});
