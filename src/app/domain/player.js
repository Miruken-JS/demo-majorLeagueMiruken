new function(){

	mlm.package(this, {
		name   : "domain",
		imports: "miruken.mvc",
		exports: "Player"
	});

	eval(this.imports);

	const Player = Model.extend({
		$properties: {
			firstName: null,
			lastName : null,
			number   : null,
			birthdate: null
		},

		get fullName(){
			return `${this.firstName} ${this.lastName}`;
		}
	});

	eval(this.exports);

};