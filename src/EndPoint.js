/**
 * Created by ChinNonaE-- on 22/4/2558.
 */
var EndPoint = cc.Sprite.extend({
    ctor: function(){
        this._super();
        this.initWithFile('res/images/startPoint.png');

    },

    isReachedBy: function( character ){
        var charPos = character.getPosition();
        var endPos = this.getPosition();
        var isReached = 15 > Math.sqrt(Math.pow(endPos.x-charPos.x, 2) + Math.pow(endPos.y-charPos.y, 2));
        console.log(isReached);
        return isReached;
    }
})