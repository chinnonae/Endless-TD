/**
 * Created by ChinNonaE-- on 25/3/2558.
 */
var Character = cc.Sprite.extend({
    ctor: function( imageFile, char ){

        this.char = char;

        this._super();
        this.initWithFile( imageFile );
        this.setAnchorPoint(cc.p(0,0));

        this.analyzeStartPoint();
        this.setPosition(cc.p(20*this.startPointX ,(Map.HEIGHT-this.startPointY-1)*20));
        this.moveSpeed = 1;
        this.index = 0;
    },

    update: function(){


        var pos = this.getPosition();
        var nextTurn = Character.WalkPath[this.index];
        if(pos.x != nextTurn.x || pos.y != nextTurn.y) {
            //console.log("Move!");
            if (pos.x < nextTurn.x) {
                this.setPosition(pos.x + this.moveSpeed, pos.y);
            } else if (pos.x > nextTurn.x) {
                this.setPosition(pos.x - this.moveSpeed, pos.y);
            }
            if (pos.y > nextTurn.y) {
                this.setPosition(pos.x, pos.y - this.moveSpeed);
            }
        }
        else {
            this.index = this.index + 1;
        }
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
        for(var i=0 ; Map.HEIGHT > i ; i++) {
            thisMap[i] = new String(map[i]);
        }
        return thisMap;
    }


});

Character.WalkPath = [cc.p(80,360), cc.p(340,360), cc.p(340,280), cc.p(200,280), cc.p(200,240),
    cc.p(60,240), cc.p(60,200), cc.p(120,200), cc.p(120,140), cc.p(340,140), cc.p(340,0)];
