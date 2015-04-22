/**
 * Created by ChinNonaE-- on 19/4/2558.
 */
var WordsBuilder = {
    ctor: function( gameLayer ){
        this.gamelayer = gameLayer;
        this.wordIndex = 0;
        this.charBuilder = CharacterBuilder.ctor();
        return this;
    },

    createNewWord: function(){
        var word = WordsBuilder.words[this.wordIndex];
        for(var i = 0; i < word.length ; i++){
            var charInWord = this.charBuilder.createAChar(word[i]);
            this.gamelayer.addChild(charInWord);
            this.gamelayer.livingChar.push(charInWord);
            charInWord.scheduleUpdate();
        }

        this.wordIndex = this.wordIndex + 1;
    }

};

WordsBuilder.words = ['apple'];
