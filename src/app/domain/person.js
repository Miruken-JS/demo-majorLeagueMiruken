new function(){

	base2.package(this, {
		name   : "mlm",
		imports: "miruken.mvc,miruken.validate",
		exports: "Person"
	});

	eval(this.imports);


	const Person = Model.extend({
		$properties: {
      id:        null,
			firstName: { validate: $required },
			lastName:  { validate: $required },
      birthdate: {
        get() {
					if (!this.dob)
						return null;

          return moment(this.dob);
        }
			},
			dob: null
		},

		get fullName() {
			return `${this.firstName || ""} ${this.lastName || ""}`;
		},
    get age() {
      if(!this.birthdate || !this.birthdate.isValid()) return null;
      const years =  moment().diff(this.birthdate, "years");
      return years >= 0
        ? years
        : null;
    }
	});

	eval(this.exports);

};
