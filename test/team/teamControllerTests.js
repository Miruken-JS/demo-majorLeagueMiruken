describe("teamController", () => {
	
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
		controller = new TeamController();
		controller.context = context;
	});

	it("initialize resolves team from the context", (done) => {
    const team = new Team();
    const Handler = CallbackHandler.extend(MasterDetail, {
      getSelectedDetail(type){
        if(type === Team)
          return Promise.resolve(team);
      }
    });
    context.addHandlers(new Handler());

    controller.initialize().then(() => {
      controller.team.should.equal(team);
      done();
    });
	});
});
