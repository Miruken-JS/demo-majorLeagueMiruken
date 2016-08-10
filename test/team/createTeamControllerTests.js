describe("CreateTeamController", () => {
	
	eval(miruken.context.namespace);
	eval(miruken.callback.namespace);
	eval(miruken.validate.namespace);
	eval(mlm.team.namespace);
	eval(mlm.namespace);
	eval(miruken.mvc.namespace);

	let context;
	let controller;

	beforeEach(() => {
		context = new Context();
		context.addHandlers(
			new ValidationCallbackHandler(),
			new ValidateJsCallbackHandler()
			);
		controller = new CreateTeamController();
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

		describe("invalid team", () => {
			it("should not call handler", () => {
				controller.team.name = null;
				controller.create();
				called.should.be.false;
			});

			it("has $validation data on the team", (done) => {
				controller.team.name = null;

				Validator(context).validateAsync(controller.team).then(result => {
					result.valid.should.be.false;
					controller.team.$validation.should.not.be.nothing;
					done();
				});
			});

			it("has $validation data on the controller", (done) => {
				controller.team.name = null;

				Validator(context).validateAsync(controller).then(result => {
					result.valid.should.be.false;
					controller.$validation.should.not.be.nothing;
					done();
				});
			});

			it("should have validation data when team is invalid", (done) => {
				controller.team.name = null;
				controller.create();
				controller.$validation.should.not.be.nothing;
			});

			it("should validate the controller implicitly", (done) => {
				controller.context.$validAsync(controller)
	                .resolve(Controller).catch(function (err) {
	                    expect(controller.$validation.valid).to.be.false;
	                    // expect(controller.$validation.person.errors.presence).to.eql([{
	                    //     message: "Person can't be blank",
	                    //     value:   undefined
	                    // }]);
	                     done();
	                });
			});
		});
			
	});
	
});