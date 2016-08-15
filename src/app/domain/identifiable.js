new function(){

	base2.package(this, {
		name   : "mlm",
		imports: "miruken.mvc,miruken.validate",
		exports: "Identifiable"
	});

	eval(this.imports);

	const Identifiable = Model.extend({
		$properties: {
			id: null
		}
	});

	eval(this.exports);

};
