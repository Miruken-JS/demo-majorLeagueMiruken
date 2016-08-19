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
          return this._birthdate;
        },
        set(value) {
          this._birthdate = toMoment(value);
        }
      }
		},

		get fullName() {
			return `${this.firstName} ${this.lastName}`;
		},
    get age() {
      if(!this.birthdate) return null;
      return moment().diff(this.birthdate, "years");
    }
	});

	eval(this.exports);

};
