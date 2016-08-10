describe("CreateTeamController", () => {
	
	eval(miruken.context.namespace);
	eval(miruken.callback.namespace);
	eval(miruken.validate.namespace);
	eval(mlm.team.namespace);

	let context;
	let controller;

	beforeEach(() => {
		context = new Context;
		context.addHandlers(new ValidationCallbackHandler,new ValidateJsCallbackHandler);
		controller = new CreateTeamController;
		controller.context = context;

		controller.team.name    = "Team Name";
		controller.team.coach   = "Coach";
		controller.team.manager = "Manager";
		controller.team.roster  = [];
	});

	it("can create the controller", () => {
		controller.should.not.be.nothing;
		controller.controllerContext.should.not.be.nothing;
	});

	describe("create", () => {
		let called = false;
		beforeEach(() => {
			const Handler = CallbackHandler.extend(TeamFeature, {
				createTeam() {
					called = true;
					return Promise.resolve();
				}	
			});
			context.addHandlers(new Handler());	
		});

		describe("valid team", () => {

			beforeEach(() => {
				controller.team.name = null;
			});

			it("should not call handler", () => {
				controller.team.name = null;
				controller.create();
				called.should.be.false;
			});

			it("should have validation data when team is invalid", (done) => {
				controller.create().catch(() => {
					controller.$validation.should.not.be.nothing;
					done();
				});
			});
		});

		describe("invalid team", () => {

			beforeEach(() => {
				controller.team.name = null;
			});

			it("should not call handler", () => {
				controller.team.name = null;
				controller.create();
				called.should.be.false;
			});

			it("should have validation data when team is invalid", (done) => {
				controller.create().catch(() => {
					controller.$validation.should.not.be.nothing;
					done();
				});
			});
		});
			
	});
	
});