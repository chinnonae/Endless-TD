/**
 * Created by ChinNonaE-- on 7/5/2558.
 */
var Instruction = cc.Sprite.extend({

    ctor: function(){
        this._super();
        this.initWithFile('res/images/Instruction.png');
        this.setPosition(WIDTH/2, HEIGHT/4);
    }
});

