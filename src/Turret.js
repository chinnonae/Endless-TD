/**
 * Created by ChinNonaE-- on 1/4/2558.
 */
var Turret = cc.Sprite.extend({
    ctor: function(){
        this._super();
        this.initWithFile('res/images/dot.png');

        this.setPosition(cc.p(110,390));

        this.range = 50;
    }


});