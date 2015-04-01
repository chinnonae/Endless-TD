/**
 * Created by ChinNonaE-- on 25/3/2558.
 */
var Border = cc.Sprite.extend({
   ctor: function(){
       this._super();
       this.initWithFile('res/images/border.png');
       this.setAnchorPoint(cc.p(0,0));
   }
});