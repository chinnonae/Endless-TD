/**
 * Created by ChinNonaE-- on 24/3/2558.
 */
var Map = cc.Node.extend({
   ctor: function(){
       this._super();

       this.setAnchorPoint(cc.p(0,0));

       for(var i = 0; i<Map.HEIGHT ; i++)
            for(var j = 0; j<Map.WIDTH ; j++){
                var item;
                if(Map.STAGE_LAYOUT[i][j] == '-'){
                    item = new WalkPath();
                    item.setPosition(cc.p( j*20, (Map.HEIGHT - i - 1)*20 ));
                    this.addChild(item);
                }
                if(Map.STAGE_LAYOUT[i][j] == '*'){
                    item = new Space();
                    item.setPosition(cc.p( j*20, (Map.HEIGHT - i - 1)*20 ));
                    this.addChild(item);
                }

                if(Map.STAGE_LAYOUT[i][j] == 'e'){
                    item = new StartPoint();
                    item.setPosition(cc.p( j*20, (Map.HEIGHT - i - 1)*20 ));
                    this.addChild(item);
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