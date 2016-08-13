new function(){

	base2.package(this, {
		name   : "mlm",
		imports: "miruken.mvc,miruken.validate",
		exports: "Person"
	});

	eval(this.imports);

	let _id;
	const Person = Model.extend({
		$properties: {
			firstName: { validate: $required },
			lastName:  { validate: $required },
			birthdate: {
				map: toMoment
			}
		},
		constructor(data){
			this.base(data);
			_id = assignID(this);
		},

		get fullName(){
			return `${this.firstName} ${this.lastName}`;
		},

		get id(){
			return _id;
		}
	});

	eval(this.exports);

};
