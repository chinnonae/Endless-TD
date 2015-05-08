/**
 * Created by ChinNonaE-- on 19/4/2558.
 */
var CharacterBuilder = {
    ctor: function(){
        this.dir = 'res/images/char';
        return this;
    },

    createAChar: function( char, moveSpeed ){
        var filename = this.dir + '/*.png'.replace('*', char);

        var character = new Character(filename, char, moveSpeed);

        return character;
    }
};

