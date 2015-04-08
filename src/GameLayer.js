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

        this.turret = new Turret();
        this.addChild(this.turret);

        this.scheduleUpdate();
    },

    update: function(){
        var isInRange = this.checkMobInTurretRange();
        if(isInRange){
            console.log("Inrange");
        }
    },



    checkMobInTurretRange: function(){
        var mobPos = this.mob.getPosition();
        var range = this.turret.range;
        var turretPos = this.turret.getPosition();

        var distance = Math.sqrt(Math.pow( mobPos.x - turretPos.x,2 ) + Math.pow( mobPos.y - turretPos.y, 2));
        if(distance <= range){
            return true;
        }
        return false;
        // 51 mins
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

