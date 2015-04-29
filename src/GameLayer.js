/**
 * Created by ChinNonaE-- on 24/3/2558.
 */
var GameLayer = cc.LayerColor.extend({
    init: function(){
        this.livingChar = [];

        this.map = new Map();
        this.addChild(this.map);

        this.wordsBuilder = WordsBuilder.ctor(this);

        this.addKeyboardHandlers();
        this.scheduleUpdate();

    },

    update: function(){
        if(this.livingChar.length == 0){
            this.wordsBuilder.createNewWord();

        } else {
            this.checkEndGame();
        }
        this.checkLivingCharHitWall();

    },

    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
            },
            onKeyReleased: function( keyCode, event ) {
                self.onKeyUp( keyCode, event );
            }
        }, this);
    },

    onKeyDown: function( keyCode, event ) {
        if(this.isCharacterKey(keyCode)){
            if(String.fromCharCode(keyCode).toLowerCase()==this.livingChar[0].char){
                this.removeChild(this.livingChar.shift());
            }
        }
    },

    onKeyUp: function( keyCode, event ) {

    },

    checkEndGame: function(){
        for(var i = 0; i < this.livingChar.length; i++){
            if(this.map.endPoint.isReachedBy(this.livingChar[i])){
                this.endGame();
            }
        }
    },

    endGame: function(){
        this.unscheduleUpdate();
        for(var i = 0; i < this.livingChar.length; i++){
            this.livingChar[i].unscheduleUpdate();
        }
    },

    checkLivingCharHitWall: function(){
        for(var i = 0; i < this.livingChar.length ; i++){
            var isBreaked = false;
            for(var j = 0; j < this.map.wall.length ; j++){
                var livingChar = this.livingChar[i];
                var wall = this.map.wall[j];
                console.log(livingChar.hitWall(wall));
                if(livingChar.hitWall(wall)){
                    this.livingChar.splice(i, 1);
                    this.map.wall.splice(j, 1);
                    livingChar.removeFromParent();
                    wall.removeFromParent();
                    isBreaked = true;
                    break;
                }
            }
            if(isBreaked) break;
        }
    },

    isCharacterKey: function(keyCode){
        switch(keyCode){
            case cc.KEY.a:
            case cc.KEY.b:
            case cc.KEY.c:
            case cc.KEY.d:
            case cc.KEY.e:
            case cc.KEY.f:
            case cc.KEY.g:
            case cc.KEY.h:
            case cc.KEY.i:
            case cc.KEY.j:
            case cc.KEY.k:
            case cc.KEY.l:
            case cc.KEY.m:
            case cc.KEY.n:
            case cc.KEY.o:
            case cc.KEY.p:
            case cc.KEY.q:
            case cc.KEY.r:
            case cc.KEY.s:
            case cc.KEY.t:
            case cc.KEY.u:
            case cc.KEY.v:
            case cc.KEY.w:
            case cc.KEY.x:
            case cc.KEY.y:
            case cc.KEY.z:
                return true;
        default:
            return false;
        }
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

