new function(){

	mlm.package(this, {
		name   : "domain",
		imports: "miruken.mvc,miruken.validate",
		exports: "Team"
	});

	eval(this.imports);

	const Team = Model.extend({
		$properties: {
			name:    { validate: $required },
			coach:   { validate: $required },
			manager: { validate: $required },
			roster:  { type:     Player }
		}
	});

	eval(this.exports);

};