// HELLO
const profileImage = [
    '<img src="https://kpauner.com/wp-content/uploads/2022/12/female_001.png" alt="">',
    '<img src="https://kpauner.com/wp-content/uploads/2022/12/female_003.png" alt="">',
    '<img src="https://kpauner.com/wp-content/uploads/2022/12/female_004.webp" alt="">',
    '<img src="https://kpauner.com/wp-content/uploads/2022/12/female_005.png" alt="">',
    '<img src="https://kpauner.com/wp-content/uploads/2022/12/female_006.png" alt="">',
    '<img src="https://kpauner.com/wp-content/uploads/2022/12/alchemist_001.png" alt="">',
    '<img src="https://kpauner.com/wp-content/uploads/2022/12/bartender_002.png" alt="">',
    '<img src="https://kpauner.com/wp-content/uploads/2022/12/male_003.png" alt="">',
    '<img src="https://kpauner.com/wp-content/uploads/2022/12/trainconductor_001.png" alt="">'
]
const firstNames = ["Hope", "Launa", "Katherine", "Walker", "Moses", "Tayna", "Rosia", "Yahaira", "Tommy", "Elwanda", "Clorinda", "Sheron", "Kayla", "Clementina", "Rene", "Rex", "Kathy", "Latoya", "Shirleen", "Shoshana"];
const secondNames = ["Chauncey", "Houchins", "Lama", "Frasca", "Houston", "Ake", "Shankles", "Cantor", "Mizell", "Cleland", "Maltby", "Tirrell", "Cary", "Mace", "Horta", "Carlile", "Deegan", "Torrez", "Humfeld", "Helgeson"];

const backstory = [
  'Was born into a typical family, growing up in a small town. they nearly died in an accident at a young age, and was trapped in a coma for a decade. By the time they recovered, their parents were gone and they where on their own.There are still aspects of modern life which bewilder them.',
  'When they where but 5 years old their parents immigrated from the south. When money was particularly tight they where walking through alleys when they overheard a Farmer hiring some criminals to sabotage a competitor. They made their way to the other competitor and parlayed their knowledge into a job. They where betrayed by a partner and left for dead, teaching them a humbling lesson in trusting others.',
  'They where born to a pair of big game hunters, but was frequently ill as a child. Their father was very strict, and drilled into them lessons on being the perfect person. She struck the Dilettante job and began their own company from there.',
  'They where raised happily, as a normal child born to their mother and father. Their mother taught them the rudiments of the Butcher arts, while their father instructed them in etiquette, music and courtly manner. Their mother had invested heavily in several trade routes and wanted them to inherit them. They made many enemies by not giving into corruption and outing many instances of it.',
]

const motivation = [
  'Balancing their hectic life and new Butcher responsibilities is difficult; and expand their business',
  'They feel the way they acts is they only way to get by in the world; and they dont get along with people that dont share their tastes',
  'They feel threatened by others; and nothing but the best is good enough for her',
  'Wants to open a new tavern; and they would like to get married and retire',
  'Theyd like to take their coworkers down a peg',
  'An old rival family wants them found; and find a way to reverse the transformation of their brother'
]

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () => 
  `${profileImage[getRandomNumber(profileImage.length)]} 
  ${firstNames[getRandomNumber(firstNames.length)]} 
  ${secondNames[getRandomNumber(secondNames.length)]}`;

const setRandomName = () => {
  document.getElementById('random-name').innerHTML = getRandomName();
}

document.getElementById('generate')
  .addEventListener('click', setRandomName);

setRandomName();

// BACKSTORY

const getRandomBackstory = () => 
  `${backstory[getRandomNumber(backstory.length)]}`;

const setRandomBackstory = () => {
  document.getElementById('random-backstory').innerHTML = getRandomBackstory();
}

document.getElementById('generate-backstory')
  .addEventListener('click', setRandomBackstory);

setRandomBackstory();

// MOTIVATION

const getRandomMotivation = () => 
  `${motivation[getRandomNumber(motivation.length)]}`;

const setRandomMotivation = () => {
  document.getElementById('random-motivation').innerHTML = getRandomMotivation();
}

document.getElementById('generate-motivation')
  .addEventListener('click', setRandomMotivation);

setRandomMotivation();