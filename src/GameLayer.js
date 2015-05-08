/**
 * Created by ChinNonaE-- on 24/3/2558.
 */
var GameLayer = cc.LayerColor.extend({
    init: function(){
        this.livingChar = [];

        this.map = new Map();
        this.addChild(this.map);

        this.charSpeed = 2;
        this.wordLength = 5;
        this.wordsBuilder = WordsBuilder.ctor(this);
        this.score = 0;

        this.addKeyboardHandlers();
        this.createScoreLabel();
        this.createInstruction();

        this.state = GameLayer.Start;
        this.retry = new Retry();
        cc.audioEngine.playMusic('res/sounds/Victory-relaxed-spacey-ambient-lounge-track.mp3');
    },

    update: function(){
        if(this.livingChar.length == 0){
            this.wordsBuilder.createNewWord( this.charSpeed, this.wordLength  );

        } else {
            this.checkEndGame();
        }
        this.calculateSpeedAndLength();
        this.checkLivingCharHitWall();

        if(!cc.audioEngine.isMusicPlaying()){
            cc.audioEngine.playMusic('res/sounds/Victory-relaxed-spacey-ambient-lounge-track.mp3');
        }


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
        if(this.state == GameLayer.Start){
            this.state = GameLayer.Playing;
            this.scheduleUpdate();
            this.instruction.removeFromParent();
        }
        if(this.state == GameLayer.Died && cc.KEY.r == keyCode){
            this.clear();
            this.scheduleUpdate();

        }

        if(this.isCharacterKey(keyCode)){
            if(String.fromCharCode(keyCode).toLowerCase()==this.livingChar[0].char){
                this.addScore(this.livingChar[0]);
                this.removeChild(this.livingChar.shift());
                cc.audioEngine.playEffect('res/sounds/ripping_open_a_pack_of_aaa_batteries.mp3');
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
        this.state = GameLayer.Died;
        this.unscheduleUpdate();
        this.addChild(this.retry);
        for(var i = 0; i < this.livingChar.length; i++){
            this.livingChar[i].unscheduleUpdate();
        }
    },

    createScoreLabel: function(){

        this.scoreLabel = cc.LabelTTF.create('Score : 0', 'Angsana New', 24);
        this.scoreLabel.setAnchorPoint(0,0);
        this.scoreLabel.setPosition(240,240);
        this.scoreLabel.setFontFillColor(cc.color(30, 30, 219, 255));
        this.addChild(this.scoreLabel);
    },

    checkLivingCharHitWall: function(){
        for(var i = 0; i < this.livingChar.length ; i++){
            var isBreaked = false;
            for(var j = 0; j < this.map.wall.length ; j++){
                var livingChar = this.livingChar[i];
                var wall = this.map.wall[j];
                if(livingChar.hitWall(wall)){
                    this.livingChar.splice(i, 1);
                    this.map.wall.splice(j, 1);
                    livingChar.removeFromParent();
                    wall.removeFromParent();
                    isBreaked = true;
                    cc.audioEngine.playEffect('res/sounds/car_crash.mp3');
                    break;
                }
            }
            if(isBreaked) break;
        }
    },

    calculateSpeedAndLength: function(){
        if(this.score <= 3000){
            this.charSpeed = 2;
            this.wordLength = 5;
        } else if(this.score <= 8000) {
            this.charSpeed = 2.5;
            this.wordLength = 6;
        } else if(this.score <= 15000) {
            this.charSpeed = 4;
            this.wordLength = 7;
        } else if(this.score <= 20000) {
            this.charSpeed = 5;
            this.wordLength = 8;
        }
    },

    addScore: function( char ){
        var numberOfWall = this.map.wall.length;
        var speed = char.moveSpeed;
        this.score = this.score + (numberOfWall * speed);
        this.scoreLabel.setString('Score : ' + this.score);
    },

    createInstruction: function(){
        this.instruction = new Instruction();
        this.instruction.setPosition(WIDTH/2, HEIGHT/2);
        this.addChild(this.instruction);
    },

    clear: function(){
        this.score = 0;
        this.charSpeed = 2;
        this.wordLength = 5;
        for(var i = 0; i < this.livingChar.length; i++){
            this.livingChar[i].removeFromParent();
        }
        this.livingChar = [];
        this.map.removeFromParent();
        this.map = new Map();
        this.addChild(this.map);
        this.scoreLabel.removeFromParent();
        this.addChild(this.scoreLabel);
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

GameLayer.Start = 0;
GameLayer.Playing = 1;
GameLayer.Died = 2;

