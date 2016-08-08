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
			coach:   { validate: $required },
			manager: { validate: $required },
			roster:  { map:      Player }
		},
		constructor(data){
			this.base(data);
			_id = assignID(this);
		},

		get id(){
			return _id;
		},
		
		$validateThat: {
			teamHasEnoughPlayersToPlay: function(){
				
			}
		}
	});

	eval(this.exports);

};