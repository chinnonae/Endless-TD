/**
 * Created by ChinNonaE-- on 24/3/2558.
 */
var Map = cc.Node.extend({
    ctor: function() {
        this._super();
        this.wall = [];
        this.setAnchorPoint(cc.p(0, 0));

        for (var i = 0; i < Map.HEIGHT; i++) {
            for (var j = 0; j < Map.WIDTH; j++) {
                var Pos = this.computePosition(i, j);
                var composition;
                if (Map.STAGE_LAYOUT[i][j] == '-') {
                    composition = this.createWalkpath();
                }
                if (Map.STAGE_LAYOUT[i][j] == '*') {
                    composition = this.createSpace();
                }

                if (Map.STAGE_LAYOUT[i][j] == 'e') {
                    composition = this.createStartPoint();
                }

                if (Map.STAGE_LAYOUT[i][j] == 'b') {
                    composition = this.createBorder();
                }

                if (Map.STAGE_LAYOUT[i][j] == 'g') {
                    composition = this.createEndPoint();
                }

                if (Map.STAGE_LAYOUT[i][j] == 'w') {
                    var walkpath = this.createWalkpath();
                    walkpath.setPosition(Pos);
                    composition = this.createWall();
                    this.wall.push(composition);

                }
                composition.setPosition(Pos);
            }
        }
    },

    computePosition: function(i, j){
        return cc.p( j*20+10, (Map.HEIGHT - i - 1)*20+10);
    },

    createWalkpath: function(){
        var walkpath = new WalkPath();
        this.addChild(walkpath);
        return walkpath;
    },

    createSpace: function(){
        var space = new Space();
        this.addChild(space);
        return space;
    },

    createStartPoint: function() {
        var startpoint = new StartPoint();
        this.addChild(startpoint);
        return startpoint;
    },

    createBorder: function() {
        var border = new Border();
        this.addChild(border);
        return border;
    },

    createEndPoint: function(){
        this.endPoint = new EndPoint();
        this.addChild(this.endPoint);
        return this.endPoint;
    },

    createWall: function(){
        var wall = new Wall();
        this.addChild(wall);
        return wall;
    }

});

Map.WIDTH = 22;
Map.HEIGHT = 22;
Map.STAGE_LAYOUT = [
    'bbbbebbbbbbbbbbbbbbbbb',
    'b***-****************b',
    'b***-****************b',
    'b***-----wwwwwwwww***b',
    'b****************w***b',
    'b****************w***b',
    'b****************w***b',
    'b*********wwwwwwww***b',
    'b*********w**********b',
    'b**wwwwwwww**********b',
    'b**w*****************b',
    'b**wwww**************b',
    'b*****w**************b',
    'b*****w**************b',
    'b*****wwwwwwwwwwww***b',
    'b****************w***b',
    'b****************w***b',
    'b****************w***b',
    'b****************w***b',
    'b****************w***b',
    'b****************w***b',
    'bbbbbbbbbbbbbbbbbgbbbb'
];