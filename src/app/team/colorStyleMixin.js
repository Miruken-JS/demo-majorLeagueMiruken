new function(){

    mlm.package(this, {
        name   : "team",
        imports: "miruken",
        exports: "ColorStyleMixin"
    });

    eval(this.imports);

    const ColorStyleMixin = Base.extend({
        getColorButtonStyle(color){
                return this.team.color == color
                ? [color.toString(), 'active']
                : [color.toString()];
        }
    });
    
    eval(this.exports);
};
