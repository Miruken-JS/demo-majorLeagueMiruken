import "./color.js";
import "./person.js";
import "./player.js";

new function(){

    base2.package(this, {
        name   : "mlm",
        imports: "miruken.mvc,miruken.validate",
        exports: "Team"
    });

    eval(this.imports);

    const Team = Model.extend({
        $properties: {
            id:      null,
            name:    { validate: $required },
            color:   { map: Color },
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
            roster:  {
                map:    Player,
                ignore: true
            }
        }
    });

    eval(this.exports);

};
