/**
 * Created by ChinNonaE-- on 7/5/2558.
 */
var Words = {

    getRandom: function( length ){
        var arr;
        switch (length){
            case 5:
                arr = Words.L5;
                break;
            case 6:
                arr = Words.L6;
                break;
            case 7:
                arr = Words.L7;
                break;
            default:
                arr = Words.LongWord;
        }
        var index = Math.floor(Math.random()*arr.length);
        return arr[index];

    }
};
Words.L5 = ['akern', 'ariel', 'averi', 'barbs', 'chola', 'chong', 'chubb', 'cohen', 'cosam', 'cothe', 'croon', 'croze',
    'dimir', 'ebsee', 'faces', 'ferie', 'frits', 'garwi', 'gluma', 'greet', 'gundi', 'gunks', 'havre', 'hokum', 'humin',
    'ijiri', 'itchy', 'jekel', 'juger', 'kaese', 'kanal', 'keela', 'keezy', 'khass', 'khula', 'liggi', 'mabea', 'matli',
    'mawji', 'mowha', 'mplay', 'murut', 'mvuba', 'ndiff', 'noemi', 'nonah', 'nonda', 'nosko', 'ombai', 'optik', 'ozora',
    'pakir', 'queme', 'rames', 'rhody', 'rhomb', 'rudoy', 'sager', 'seied', 'shama', 'smous', 'stetz', 'thone', 'thrip',
    'tudel', 'ugele', 'unami', 'ungum', 'unite', 'uribe', 'vagdi', 'vleck', 'vougy', 'warch', 'whats', 'xyzzy', 'yoron',
    'zibet'];
Words.L6 = ['adyghe', 'ameban', 'arabit', 'atolls', 'aviary', 'bhungi', 'bladon', 'bogert', 'bojiin', 'bonerz',
    'bosons', 'brahms', 'bugfix', 'ceevee', 'chital', 'clione', 'cmucat', 'cockal', 'cozily', 'cranly', 'crater',
    'creole', 'cystal', 'dadgar', 'dapico', 'dekini', 'dredge', 'ekdahl', 'enacts', 'fenech', 'gagate', 'gggggg',
    'girard', 'gizmos', 'goeran', 'gossan', 'himeji', 'hiscoe', 'hitomi', 'hydric', 'imurud', 'itrack', 'ivanov',
    'jarett', 'jobson', 'kambun', 'karger', 'kinkly', 'kosach', 'kwundi', 'lahuna', 'leisha', 'leitre', 'lewgoy',
    'leyton', 'libers', 'lotted', 'loubet', 'lucida', 'madefy', 'maitsi', 'mallee', 'maxene', 'medawa', 'mengau',
    'merged', 'micron', 'neligh', 'nisula', 'noises', 'nunlet', 'oduber', 'ooidal', 'peluce', 'pervyj', 'phelan',
    'ponera', 'privee', 'procom', 'pursue', 'railer', 'redmon', 'reknow', 'rerake', 'rereel', 'retsof', 'salier',
    'scobey', 'sculch', 'sijali', 'skchip', 'streel', 'tabita', 'tahari', 'tarbes', 'tasman', 'tolowa', 'tongbo',
    'towles', 'tsilla', 'tuhina', 'tupman', 'twitty', 'typist', 'ubaldo', 'umload', 'unjust', 'utnetw', 'valise',
    'vannie', 'venita', 'verita', 'viasyn', 'warder', 'wedset', 'worley', 'wreath', 'xxxnhb', 'yarber', 'yeithi',
    'yildun'];
Words.L7 = ['alapaha', 'alkalis', 'alliana', 'allured', 'angevin', 'auteuil', 'balsame', 'bartang', 'bassari',
    'billows', 'blisses', 'borgato', 'bourget', 'butanol', 'butilku', 'callery', 'cayambe', 'chaebol', 'champac',
    'charice', 'cheered', 'chunari', 'cmccvma', 'contour', 'cuishes', 'danford', 'decadic', 'desists', 'dicycle',
    'diogene', 'dungari', 'ecphore', 'edwards', 'elfland', 'encreel', 'enounce', 'exhales', 'farlane', 'ferreux',
    'figging', 'filical', 'filters', 'findest', 'flogger', 'fourman', 'fruggan', 'gaiarsa', 'gastone', 'geisser',
    'gosmore', 'hamital', 'hemisch', 'hipmold', 'inflame', 'joebush', 'kapiton', 'karloff', 'kasonke', 'kerinci',
    'knagged', 'ledwich', 'libidos', 'locrian', 'loranza', 'ludolph', 'lutango', 'manuela', 'marecek', 'marissa',
    'masorah', 'matatua', 'melinda', 'milvago', 'miserly', 'monocle', 'moonman', 'neozoic', 'nonsale', 'nonterm',
    'orbital', 'oryssus', 'osholio', 'outlove', 'parella', 'pedrail', 'perpera', 'picidae', 'piddler', 'podical',
    'quaters', 'reclimb', 'relives', 'rentals', 'rinaldo', 'rubican', 'saracen', 'savings', 'schisma', 'scummed',
    'sherban', 'shikari', 'siladja', 'singako', 'skipman', 'smogghe', 'snively', 'soqotri', 'sowlike', 'spinule',
    'sposato', 'stapler', 'stetner', 'stilter', 'strifes', 'suchira', 'szekler', 'tableng', 'tanglao', 'tannage',
    'tanudan', 'tomfool', 'traxler', 'trunley', 'tucanae', 'tukaimi', 'twynham', 'umpires', 'unlearn', 'untewed',
    'unwindy', 'upspeak', 'ventpeg', 'volleys', 'wakonda', 'waldran', 'warding', 'waregga', 'warlock', 'whelker',
    'wyandot', 'zippier'];
Words.LongWord = ['absolutist', 'abstruseness', 'academias', 'aerostatical', 'aerotactic', 'agentival', 'agonists',
    'agrimotor', 'agustinas', 'albumoscope', 'alhousseyni', 'amebiform', 'amylaceous', 'anomalistic', 'antecedents',
    'antetype', 'antifanatic', 'antimasquer', 'antinegro', 'antitoxic', 'archdolt', 'archsteward', 'areologic',
    'argention', 'arsentiev', 'asheboro', 'assonance', 'asynartetic', 'autocratical', 'aviatory', 'bairnwort',
    'baldhead', 'ballrooms', 'bambacelli', 'barnegat', 'beaneries', 'bellacres', 'benefiter', 'bertrande', 'bestowing',
    'bethrall', 'betrinket', 'biannual', 'bilharzia', 'biliteralism', 'biscuitlike', 'bitterns', 'bodieron',
    'borboridae', 'bosworth', 'bottleneck', 'bowerlet', 'bowknots', 'boycottism', 'brahminic', 'brakehand', 'brassage',
    'breakerman', 'breathers', 'brideweed', 'burdocks', 'bystreet', 'campanist', 'camponotus', 'cantillon',
    'capriccioso', 'captionless', 'cardiopathy', 'cardiophobe', 'carposperm', 'cartucci', 'castelet', 'causidical',
    'centauridium', 'certainest', 'chalkstones', 'chapanec', 'chatinover', 'checkmated', 'chinbone', 'chlorochrous',
    'chorizontes', 'chromicize', 'chukokkala', 'chunkily', 'cicatrice', 'cifariello', 'circusclown', 'coagulant',
    'cocamaomagua', 'cockshot', 'cofreighter', 'colbourne', 'commonest', 'compendiate', 'confident', 'conscionably',
    'contrivement', 'conveyancing', 'coquinera', 'cordwains', 'coronels', 'corrupting', 'craniectomy', 'criminator',
    'cryptorchis', 'curseder', 'cyanoacetate', 'cynanche', 'dathanik', 'debassige', 'decempeda', 'decoctible',
    'demonizing', 'detrusion', 'devastative', 'devising', 'dewhurst', 'dialekts', 'diallelus', 'diffusers',
    'diprotodon', 'disarmingly', 'discovered', 'disemploying', 'distraught', 'disusance', 'ditchless', 'ditheism',
    'driblets', 'drummonds', 'echoingly', 'ecologically', 'ecuatoriano', 'edgestone', 'effectors', 'efoliose',
    'ehrenfest', 'elapinae', 'electrolytes', 'electroplax', 'ellansby', 'embryonal', 'emlenton', 'enamorment',
    'endagany', 'energetic', 'environm', 'eristical', 'eunuchism', 'extendedness', 'fellowman', 'fernandina',
    'ferryboats', 'feudejoie', 'fibrinogenic', 'fiddledeedee', 'filamentoid', 'filesmith', 'finedraw', 'finicking',
    'fissette', 'flamewar', 'footblower', 'footsoldier', 'fordicidia', 'fortythird', 'fragrances', 'fraternal',
    'fredville', 'fribourg', 'funneled', 'furrower', 'gagsters', 'galipidine', 'gastralgy', 'genetically',
    'georgesmills', 'gerbillus', 'gilbertian', 'ginnings', 'gobiiformes', 'goldlike', 'gonimium', 'gorblimy',
    'gosselin', 'gotovogo', 'gracindo', 'graining', 'grandgorge', 'guiltier', 'gulpilil', 'guttenberg', 'gwenette',
    'haemamoeba', 'hagrides', 'hallucinator', 'handsewn', 'harborton', 'haselwood', 'hautboys', 'havenless',
    'hazlehurst', 'headstick', 'hendrigg', 'henriques', 'hexapodan', 'hippological', 'historia', 'homodynamic',
    'homovanillic', 'hospitalize', 'hyalolith', 'hyalopterous', 'hydnocarpus', 'hyperanarchy', 'hypertonus',
    'illimitedly', 'illustrable', 'immoralize', 'impalements', 'inamorate', 'inbetween', 'indexically', 'indigenal',
    'inhabitress', 'inidoneity', 'inquieting', 'inquirant', 'insisted', 'installation', 'instigant', 'interdebate',
    'interludes', 'interposers', 'interrex', 'inwedged', 'isandrous', 'jahleelites', 'jargonize', 'karagass',
    'katrinka', 'kenrussell', 'ketangalan', 'klaeschen', 'knappers', 'knuckles', 'kukoline', 'kumejima', 'kwantlen',
    'lamellarly', 'languishing', 'lasciviency', 'latration', 'leuwerik', 'libatory', 'libellulid', 'linguagem',
    'lonkundo', 'lottsburg', 'lunchbreak', 'lunulate', 'lymphatical', 'lynngrove', 'magnetophone', 'mainpost',
    'malacopodous', 'malikana', 'malonylurea', 'manumitting', 'maplelake', 'marchetti', 'marquart', 'marsteller',
    'massicot', 'masterstroke', 'matagouri', 'mcdunnough', 'mcmullan', 'meanderer', 'medanales', 'meetting',
    'megalomania', 'meninggo', 'mesmerist', 'metathesis', 'methadone', 'middleboro', 'midewiwin', 'midwestern',
    'millercity', 'misrecite', 'mistyping', 'monotype', 'morulation', 'mtoliver', 'mucofibrous', 'nationalista',
    'ndendeuli', 'nebulium', 'neocrypt', 'nephradenoma', 'nephrectasia', 'nerthrus', 'ninotchka', 'nomocracy',
    'nonafrican', 'nonblended', 'noncoercion', 'nonimmunized', 'nonplusses', 'norwards', 'notabilities', 'nyangatom',
    'nyangumarta', 'nympholept', 'odontoclasis', 'olympians', 'oooaaahh', 'ordinally', 'ortyginae', 'oscheoncus',
    'overburst', 'overgrew', 'overlead', 'overrigorous', 'overrough', 'oxyosphresia', 'pactolus', 'palingenetic',
    'pandanaceous', 'pangtsah', 'pankarara', 'paraphrenia', 'parkinsonia', 'parucito', 'patriolatry', 'patrioteer',
    'pauldron', 'pauseless', 'peasecod', 'pentagynous', 'peramelidae', 'perceptions', 'perturbment', 'pfconfig',
    'pfeffermann', 'phthanite', 'phyllocyanin', 'pilulous', 'pinedale', 'piniferous', 'planimetry', 'planiscopic',
    'plantless', 'plastogene', 'plutocracy', 'polydactylus', 'polyemia', 'portuguese', 'postcornu', 'powerdesk',
    'prehazardous', 'premuddle', 'presacrifice', 'prescience', 'proctorize', 'prophesy', 'prosodist', 'pseudomancy',
    'pulsative', 'pyroxonium', 'quakerhill', 'quinamicine', 'rabbinist', 'radulescu', 'realaudio', 'reconfer',
    'reconsidered', 'redefined', 'redivert', 'refasten', 'refutability', 'reinserting', 'remedially', 'repellant',
    'repertorial', 'repunishment', 'revertal', 'rheocrat', 'rhipidistian', 'ridgetype', 'roguishness', 'rusticate',
    'sabadine', 'saccammina', 'saliniform', 'samaradasa', 'sapheaded', 'saurauia', 'scaledrake', 'schedulers',
    'scheffes', 'schizoidism', 'scoreless', 'scrivaille', 'seditionist', 'semiformal', 'semilunar', 'septicity',
    'shapelier', 'sharoncenter', 'shaveling', 'sheppherd', 'shewedst', 'shiftings', 'shrieker', 'shumasht',
    'signation', 'sillandar', 'similarize', 'simpletonic', 'sinnable', 'skurried', 'slideway', 'smallcoal',
    'smothery', 'snootier', 'socratism', 'solsticion', 'sombrero', 'soundboard', 'speltoid', 'sponging', 'squashed',
    'sssscissors', 'stepstrategy', 'stimulus', 'stonefolk', 'strasburg', 'strengthed', 'striatum', 'strongylidae',
    'suaviloquent', 'suchness', 'sudorific', 'sullivancity', 'sulphurwort', 'superelastic', 'supinely', 'survivorship',
    'swearingen', 'swinishly', 'swissvale', 'tadpolehood', 'tarryingness', 'tattered', 'tautousious', 'taxlessly',
    'taylorite', 'technologue', 'tehuelchean', 'tenchweed', 'thandiani', 'theaterlike', 'theberge', 'theerror',
    'theodolite', 'thimblefuls', 'tilletia', 'tonguesman', 'toothwash', 'trademaster', 'tragacanth', 'trendfree',
    'tresckow', 'tribeless', 'trigrams', 'trimodality', 'trinoctial', 'tulipist', 'turbiner', 'turpidly', 'twogroup',
    'txukuhamai', 'typewriters', 'unalterably', 'unbravely', 'unchaperoned', 'unchivalric', 'unclearing', 'unconfiding',
    'undaring', 'undecorously', 'underpeer', 'underread', 'unemerged', 'unfunniness', 'ungrooved', 'unhonored',
    'unixlike', 'unliving', 'unmercerized', 'unmetrical', 'unpatrolled', 'unpromised', 'unrefraining', 'unshielding',
    'unsolacing', 'unspurned', 'unstablished', 'unwhelmed', 'upwrought', 'userfriendly', 'ushnuiye', 'vasculature',
    'vegetalcule', 'venerance', 'viceroyal', 'vindemial', 'vyacheslav', 'wagontown', 'waygoose', 'wellfleet',
    'westnewyork', 'widdowson', 'wilfried', 'winnukez', 'wonderwell'];