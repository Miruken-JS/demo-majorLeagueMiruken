describe("person", () => {
	
	eval(miruken.context.namespace);
	eval(miruken.validate.namespace);
	eval(mlm.namespace);

	let person;

	beforeEach(() => {
		person = new Person({
			firstName:  "Scott",
			lastName :  "Sterling",
			birthdate : "01-31-1990"
		});
	});

	it("can create a person", () => {
		person.should.not.be.nothing;
	});

	it("has a fullName", () => {
		person.fullName.should.equal("Scott Sterling");
	});

	describe("validation", () => {
		var context;
	    beforeEach(function() {
	        context = new Context();
	        context.addHandlers(new ValidationCallbackHandler(), new ValidateJsCallbackHandler());
	    });

	    it("person is valid", () => {
	    	Validator(context).validate(person).valid.should.be.true;
	    });

	    it("requires firstName", () => {
	    	person.firstName = null;
	    	Validator(context).validate(person).valid.should.be.false;
	    });

	    it("requires lastName", () => {
	    	person.lastName = null;
	    	Validator(context).validate(person).valid.should.be.false;
	    });

	    it("birthdate is a moment object", () => {
	    	moment.isMoment(person.birthdate).should.be.true;
	    });

	});
});
