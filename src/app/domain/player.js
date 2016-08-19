new function(){

	base2.package(this, {
		name   : "mlm",
		imports: "miruken.mvc,miruken.validate",
		exports: "Player"
	});

	eval(this.imports);

	const Player = Person.extend({
		$properties: {
      id:        null,
      number: {
				validate: {
					presence: true,
					numericality: {
              onlyInteger: true,
              greaterThanOrEqualTo: 0
          }
        }
			},
      teamId: null,
      team:   { ignore: true }
    },

    $validateThat: {
      dateIsProvided(validation) {
        const birthdate = this.birthdate;
        if (!birthdate) {
          validation.results.addKey("birthdate").addError("presence");
        }
        if(birthdate && !birthdate.isValid()){
          validation.results.addKey("birthdate") .addError("invalid");
        }
      }
    }
  });

	eval(this.exports);

};
