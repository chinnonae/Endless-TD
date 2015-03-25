/**
 * Created by ChinNonaE-- on 24/3/2558.
 */
var GameLayer = cc.LayerColor.extend({
    init: function(){
        this.map = new Map();
        this.addChild(this.map);

        this.mob = new Mob();
        this.addChild(this.mob);
        this.mob.scheduleUpdate();
    }
});

var StartScene = cc.Scene.extend({
    onEnter: function(){
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild(layer);
    }
});

