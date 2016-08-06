new function(){

	mlm.package(this, {
		name   : "domain",
		imports: "miruken.mvc,miruken.validate",
		exports: "Player"
	});

	eval(this.imports);

	const Player = Model.extend({
		$properties: {
			firstName: { validate: $required },
			lastName : { validate: $required },
			number   : { validate: $required },
			birthdate: { validate: $required }
		},

		get fullName(){
			return `${this.firstName} ${this.lastName}`;
		}
	});

	eval(this.exports);

};