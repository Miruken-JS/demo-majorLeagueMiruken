new function(){

	base2.package(this, {
		name   : "mlm",
		imports: "miruken.mvc,miruken.validate",
		exports: "toMoment,mapMoment"
	});

	eval(this.imports);

  	function toMoment(dateTime) {
        return dateTime && moment(dateTime, DATE_FORMATS, true);
    }

  	const mapMoment = Object.freeze({ map: toMoment });


	eval(this.exports);

};
