/**
 * Created by ChinNonaE-- on 25/3/2558.
 */
var Mob = cc.Sprite.extend({
   ctor: function(){
       this._super();
       this.initWithFile('res/images/mobs.png');
       this.setAnchorPoint(cc.p(0,0));
       this.walkpath = this.cloneMap(Map.STAGE_LAYOUT);

       this.analyzeStartPoint();
       this.setPosition(cc.p(20*this.startPointX ,(Map.HEIGHT-this.startPointY-1)*20));
       console.log(this.getPosition().x + ' ' + this.getPosition().y);

   },

    update: function(){

    },

    analyzeStartPoint: function(){
        this.startPointY = 0;
        for(var x = 0; x < Map.WIDTH; x++){
            if(Map.STAGE_LAYOUT[0][x] == 'e'){

                this.startPointX = x;
            }
        }
    },

    cloneMap: function(map){
        var thisMap = map.slice();
        for(var i=0 ; Map.HEIGHT > i ; i++)thisMap[i] = new String(map[i]);
        return thisMap;
    },

    calculateWalkPath: function(){

    }
});
