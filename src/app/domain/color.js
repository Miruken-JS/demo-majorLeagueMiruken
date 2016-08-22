new function(){

	base2.package(this, {
		name   : "mlm",
		imports: "miruken",
		exports: "Color"
	});

	eval(this.imports);

	const Color = Enum({
    black:     "black",
    blue:      "blue",
    green:     "green",
    lightBlue: "lightBlue",
    maroon:    "maroon",
    orange:    "orange",
    red:       "red",
    white:     "white",
    yellow:    "yellow"
	});

	eval(this.exports);

};
