/**
 * Created by ChinNonaE-- on 24/3/2558.
 */
var Map = cc.Node.extend({
   ctor: function(){
       this._super();

       this.setAnchorPoint(cc.p(0,0));

       for(var i = 0; i<Map.HEIGHT ; i++)
            for(var j = 0; j<Map.WIDTH ; j++){
                if(Map.STAGE_LAYOUT[i][j] == '-'){
                    var walkpath = new WalkPath();
                    walkpath.setPosition(cc.p( j*20, (Map.HEIGHT - i - 1)*20 ));
                    this.addChild(walkpath);
                }
                if(Map.STAGE_LAYOUT[i][j] == '*'){
                    var space = new Space();
                    space.setPosition(cc.p( j*20, (Map.HEIGHT - i - 1)*20 ));
                    this.addChild(space);
                }
            }
   }
});

Map.WIDTH = 22;
Map.HEIGHT = 22;
Map.STAGE_LAYOUT = [
    'bbbbebbbbbbbbbbbbbbbbb',
    'b***-****************b',
    'b***-****************b',
    'b***--------------***b',
    'b****************-***b',
    'b****************-***b',
    'b****************-***b',
    'b*********--------***b',
    'b*********-**********b',
    'b**--------**********b',
    'b**-*****************b',
    'b**----**************b',
    'b*****-**************b',
    'b*****-**************b',
    'b*****------------***b',
    'b****************-***b',
    'b****************-***b',
    'b****************-***b',
    'b****************-***b',
    'b****************-***b',
    'b****************-***b',
    'bbbbbbbbbbbbbbbbbgbbbb'
];