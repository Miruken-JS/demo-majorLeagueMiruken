new function(){

	base2.package(this, {
		name   : "mlm",
		imports: "miruken.mvc,miruken.validate",
		exports: "Team"
	});

	eval(this.imports);

	const Team = Model.extend({
		$properties: {
			name:    { validate: $required },
			coach:   { validate: $required },
			manager: { validate: $required },
			roster:  { map:      Player }
		}
	});

	eval(this.exports);

};