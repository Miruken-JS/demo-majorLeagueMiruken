new function(){

	mlm.package(this, {
		name   : "domain",
		imports: "miruken.mvc",
		exports: "Player"
	});

	eval(this.imports);

	const Player = Model.extend({
		$properties: {
			name     : null,
			number   : null,
			birthdate: null
		}
	});

	eval(this.exports);

};