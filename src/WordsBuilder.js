/**
 * Created by ChinNonaE-- on 19/4/2558.
 */
var WordsBuilder = {
    ctor: function( gameLayer ){
        this.gamelayer = gameLayer;
        this.charBuilder = CharacterBuilder.ctor();
        return this;
    },

    createNewWord: function( moveSpeed, length ){
        var word = Words.getRandom(length);
        console.log(word);
        for(var i = 0; i < word.length ; i++){
            var charInWord = this.charBuilder.createAChar(word[i], moveSpeed);
            charInWord.setPositionY(charInWord.getPosition().y + (20*i));
            this.gamelayer.addChild(charInWord);
            this.gamelayer.livingChar.push(charInWord);
            charInWord.scheduleUpdate();
        }

    }

};
