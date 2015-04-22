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
            charInWord.setPositionY(charInWord.getPosition().y + (20*i));
            this.gamelayer.addChild(charInWord);
            this.gamelayer.livingChar.push(charInWord);
            charInWord.scheduleUpdate();
        }

        this.wordIndex = this.wordIndex + 1;
    }

};

WordsBuilder.words = ['apple','screwing', 'screws', 'scribble', 'scribbled', 'scribbler',
    'scribbles', 'scribe', 'scribes', 'scribing', 'scrimmage', 'script', 'scripts',
    'scripture', 'scriptures', 'scroll', 'scrolled', 'scrolling', 'scrolls', 'scrounge',
    'scrub', 'scrumptious', 'scruple', 'scrupulous', 'scrupulously', 'scrutinize', 'scrutinized',
    'scrutinizing', 'scrutiny', 'scuba', 'scud', 'scuffle', 'scuffled', 'scuffles', 'scuffling',
    'sculpt', 'sculpted', 'sculptor', 'sculptors', 'sculpts', 'sculpture', 'sculptured',
    'sculptures', 'scurried', 'scurry', 'scurvy', 'scuttle', 'scuttled', 'scuttles', 'scuttling',
    'scythe', 'scythes', 'sea', 'seaboard', 'seacoast', 'seacoasts', 'seafood', 'seagull',
    'seahorse', 'seal', 'sealed', 'sealer', 'sealing', 'seals', 'sealy', 'seam', 'seaman',
    'seamed', 'seamen', 'seaming', 'seams', 'seamy', 'seaport', 'seaports', 'sear', 'search', 'searched'];
