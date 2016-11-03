import "../../src/app/domain/player.js";

describe("player", () => {
	
	eval(miruken.context.namespace);
	eval(miruken.validate.namespace);
	eval(mlm.namespace);

	let player;

	beforeEach(() => {
		player = new Player({
			firstName:  "Scott",
			lastName :  "Sterling",
			number   :  2,
			birthdate : "01-31-1990"
		});
	});

	it("can create a player", () => {
		player.should.not.be.nothing;
	});

	describe("validation", () => {
		var context;
	    beforeEach(function() {
	        context = new Context();
	        context.addHandlers(new ValidationCallbackHandler(), new ValidateJsCallbackHandler());
	    });

	    it("player is valid", () => {
	    	Validator(context).validate(player).valid.should.be.true;
	    });

	    it("requires firstName", () => {
	    	player.firstName = null;
	    	Validator(context).validate(player).valid.should.be.false;
	    });

	    it("requires lastName", () => {
	    	player.lastName = null;
	    	Validator(context).validate(player).valid.should.be.false;
	    });

	    it("requires number", () => {
	    	player.number = null;
	    	Validator(context).validate(player).valid.should.be.false;
	    });

	    it("requires birthdate", () => {
	    	player.birthdate = null;
	    	Validator(context).validate(player).valid.should.be.false;
	    });

      it("must be a number", () => {
	    	player.number = "a";
	    	Validator(context).validate(player).valid.should.be.false;
	    });

	    it("number cannot be negative", () => {
	    	player.number = -1;
	    	Validator(context).validate(player).valid.should.be.false;
	    });

	});
});
