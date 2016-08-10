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
		let calledCreateTeam, calledShowTeams;
		beforeEach(() => {
			calledCreateTeam = calledShowTeams = false;
			const Handler = CallbackHandler.extend(TeamFeature, {
				createTeam() {
					calledCreateTeam = true;
					return Promise.resolve();
				},
				showTeams() {
					calledShowTeams = true;
					return Promise.resolve();
				}	
			});
			context.addHandlers(new Handler());	
		});

		describe("valid team", () => {
			it("should call TeamFeature.createTeam()", (done) => {
				controller.create().then(() => {
					calledCreateTeam.should.be.true;
					calledShowTeams.should.be.true;
					done();
				});
			});
		});

		describe("invalid team", () => {

			beforeEach(() => {
				controller.team.name = null;
			});

			it("should throw error", (done) => {
				controller.create().catch(() => {
					done()
				});
			});

			it("should have validation data", (done) => {
				controller.create().catch(() => {
					controller.$validation.should.not.be.nothing;
					done();
				});
			});
		});
			
	});
		
});