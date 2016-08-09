describe("CreateTeamController", () => {
	
	eval(miruken.context.namespace);
	eval(miruken.callback.namespace);
	eval(mlm.team.namespace);

	let context;
	let controller;

	beforeEach(() => {
		context = new Context();
		controller = new CreateTeamController();
		controller.context = context;

		controller.team.name    = "Team Name";
		controller.team.coach   = "Coach";
		controller.team.manager = "Manager"
		controller.team.roster  = [];
	});

	it("can create the controller", () => {
		controller.should.not.be.nothing;
		controller.controllerContext.should.not.be.nothing;
	});

	describe("with mock createTeam", () => {
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

		it("can create a team", () => {
			controller.create();
			called.should.be.true;
		});	
	});
	
});