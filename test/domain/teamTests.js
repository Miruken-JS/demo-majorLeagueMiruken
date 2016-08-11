describe("team", () => {
	
	eval(miruken.context.namespace);
	eval(miruken.validate.namespace);
	eval(mlm.namespace);

	let team;

	beforeEach(() => {
		team = new Team({
			name:    "Improving",
			coach:   "Neuwirt",
			manager: "O'Hara"
		});
	});

	it("can create a team", () => {
		team.should.not.be.nothing;
	});

	describe("validation", () => {
		var context;
	    beforeEach(function() {
	        context = new Context;
	        context.addHandlers(new ValidationCallbackHandler(), new ValidateJsCallbackHandler());
	    });

	    it("team is valid", () => {
	    	Validator(context).validate(team).valid.should.be.true;
	    });

	    it("requires name", () => {
	    	team.name = null;
	    	Validator(context).validate(team).valid.should.be.false;
	    });

	    it("requires coach", () => {
	    	team.coach = null;
	    	Validator(context).validate(team).valid.should.be.false;
	    });

	    it("requires manager", () => {
	    	team.manager = null;
	    	Validator(context).validate(team).valid.should.be.false;
	    });
	});
});
