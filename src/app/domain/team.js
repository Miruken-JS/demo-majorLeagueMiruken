new function(){

	base2.package(this, {
		name   : "mlm",
		imports: "miruken.mvc,miruken.validate",
		exports: "Team"
	});

	eval(this.imports);

	let _id;
	const Team = Model.extend({
		$properties: {
			name:    { validate: $required },
			coach:   {
        map: Person,
        validate: {
          presence: true,
          nested:   true
        }
      },
			manager: {
        map: Person,
        validate: {
          presence: true,
          nested:   true
        }
      },
			roster:  { map: Player }
		},
		constructor(data){
			this.base(data);
			_id = assignID(this);
		},

		get id(){
			return _id;
		}
		
	});

	eval(this.exports);

};
