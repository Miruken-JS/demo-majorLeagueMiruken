describe("player", () => {
	
	eval(miruken.context.namespace);
	eval(miruken.validate.namespace);
	eval(mlm.domain.namespace);

	const player = new Player({
		firstName: "Scott",
		lastName : "Sterling",
		number   : 2,
		birthdate : "01-31-1990"
	});

	it("can create a player", () => {
		player.should.not.be.nothing;
	});

	it("has a fullName", () => {
		player.fullName.should.equal("Scott Sterling");
	});

	describe("validation", () => {
		var context;
	    beforeEach(function() {
	        context = new Context;
	        context.addHandlers(new ValidationCallbackHandler, new ValidateJsCallbackHandler);
	    });

	    it("player is valid", () => {
	    	Validator(context).validate(player).valid.should.be.true;
	    });

	    it("requires firstName", () => {
	    	player.firstName = null;
	    	Validator(context).validate(player).valid.should.be.false;
	    });
	});
});