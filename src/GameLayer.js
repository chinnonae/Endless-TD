/**
 * Created by ChinNonaE-- on 24/3/2558.
 */
var GameLayer = cc.LayerColor.extend({
    init: function(){

    }
});

var StartScene = Scene.extend({
    onEnter: function(){
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild(layer);
    }
});

