/**
 * Created by ChinNonaE-- on 7/5/2558.
 */
var Retry = cc.Sprite.extend({
    ctor: function(){
        this._super();
        this.initWithFile('res/images/retry.png');
        this.setPosition(WIDTH/2, HEIGHT/3);
    }
});