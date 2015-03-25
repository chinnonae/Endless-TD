/**
 * Created by ChinNonaE-- on 24/3/2558.
 */
var Space = cc.Sprite.extend({
    ctor: function(){
        this._super();
        this.initWithFile('res/images/space.png');
        this.setAnchorPoint(cc.p(0,0));
    }

});