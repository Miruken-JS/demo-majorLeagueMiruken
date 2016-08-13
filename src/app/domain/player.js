new function(){

	base2.package(this, {
		name   : "mlm",
		imports: "miruken.mvc,miruken.validate",
		exports: "Player"
	});

	eval(this.imports);

	const Player = Person.extend({
		$properties: {
			birthdate: { 
				map:      toMoment,
				validate: $required
			},
			number: { 
				validate: {
					presence: true,
					numericality: {
              onlyInteger: true,
              greaterThanOrEqualTo: 0
          }
        }
			}
		},

	});

	eval(this.exports);

};
