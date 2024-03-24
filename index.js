//EJERCICIO 1
//Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre por consola la suma de los dos parametros.
const suma = (a = 10, b = 5) => {
    console.log(a + b);
  };
//1.1 Ejecuta esta función sin pasar ningún parametro
suma();
//1.2 Ejecuta esta función pasando un solo parametro
suma(8);
//1.3 Ejecuta esta función pasando dos parametros
suma(8,3);

//EJERCICIO 2
//2.1 En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. Cuidado, no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020};
const { title, gender, year } = game;
console.log(title);
console.log(gender);
console.log(year);

//2.2 En base al siguiente javascript, usa destructuring para crear 3 variables llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruits1,fruits2,fruits3] = fruits;
console.log(fruits1);
console.log(fruits2);
console.log(fruits3);

//2.3 En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
    return {name1: 'Bengal Tiger', race: 'Tiger'}
};
const {name1,race} = animalFunction();
console.log(name1);
console.log(race);

//2.4 En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] };
const { name, itv } = car;
const [itv1, itv2, itv3] = itv;
console.log(name); 
console.log(itv1); 
console.log(itv2); 
console.log(itv3); 

//EJERCICIO 3
//3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsCopy = [...pointsList];
console.log(pointsCopy);

//3.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy = {...toy};
console.log(toyCopy);

//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsList3 = [54,87,99,65,32];
const combinedPoints = [...pointsList2, ...pointsList3];
console.log(combinedPoints);

//3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
const mergedToy = {...toy2, ...toyUpdate};
console.log(mergedToy);

//3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)];
console.log(colorsCopy);

//EJERCICIO 4
//4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const names = users.map(user => user.name);
console.log(names);

//4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.
const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const modifiedNames = users2.map(user => {
  if (user.name.startsWith('A')) {
      return 'Anacleto';
  } else {
      return user.name;
  }
});
console.log(modifiedNames);

//4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];
const modifiedNames2 = cities.map(city => {
  return city.isVisited ? `${city.name} (Visitado)` : city.name;
});
console.log(modifiedNames2);

//EJERCICIO 5
//5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const greaterThan18 = ages.filter(age => age > 18);
console.log(greaterThan18);

//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const evenNumbers = ages2.filter(age => age % 2 === 0);
console.log(evenNumbers);

//5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const lolStreamers = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');
console.log(lolStreamers);

//5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const streamersWithU = streamers2.filter(streamer => streamer.name.includes('u'));
console.log(streamersWithU);

//5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.
const filteredStreamers = streamers.filter(streamer => {
  if (streamer.gameMorePlayed.includes('Legends')) {
      if (streamer.age > 35) {
          streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
      }
      return true;
  }
  return false;
});
console.log(filteredStreamers);

//5.6 Dado el siguiente javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Siintroduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
function filterStreamers(inputValue) {
    const filteredStreamers = streamers3.filter(streamer => streamer.name.toLowerCase().includes(inputValue.toLowerCase()));
    console.log(filteredStreamers);
}
const inputElement = document.querySelector('[data-function="toFilterStreamers"]');

inputElement.addEventListener('input', function(event) {
    const inputValue = event.target.value;
    filterStreamers(inputValue);
});
//EJERCICIO 6
//6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
const numbers = [32, 21, 63, 95, 100, 67, 43];
const foundNumber = numbers.find(number => number === 100);
console.log(foundNumber);

//6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];
const movie2010 = movies.find(movie => movie.date === 2010);
console.log(movie2010);

//6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación lo queremos meter en la propiedad .mutation del objeto fusionado.
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];
const foundAlien = aliens.find(alien => alien.name === 'Cucushumushu');
const foundMutation = mutations.find(mut => mut.name === 'Porompompero');
if (foundAlien && foundMutation) {
    const fusedObject = {
        ...foundAlien,
        mutation: { ...foundMutation }
    };
    console.log(fusedObject);
} else {
    console.log('No se encontró el alien o la mutación.');
}

//EJERCICIO 7
//7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];
const totalScore = exams.reduce((accumulator, exam) => accumulator + exam.score, 0);
console.log(totalScore);

//7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los alumnos que esten aprobados usando la función .reduce().
const totalPassedScore = exams
    .filter(exam => exam.score >= 5)
    .reduce((accumulator, exam) => accumulator + exam.score, 0);
console.log(totalPassedScore);

//7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().
const averageScore = totalScore / exams.length;
console.log(averageScore);

//EJERCICIO 8
//8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando .filter() y usa .reduce() para conseguir la media de sus .score. La función .find() también podría ayudarte para el contrar el genero 'RPG' en el array .gender.
const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
];
const RPGVideogames = videogames.filter(game => game.genders.includes('RPG'));
const totalScore2 = RPGVideogames.reduce((accumulator, game) => accumulator + game.score, 0);
const averageScore2 = totalScore2 / RPGVideogames.length;
console.log(averageScore2);

//EJERCICIO 9
//Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.
//Para filtrar las categorías puedes ayudarte de la función .includes().

const movies2 = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];
const uniqueCategories = [];
for (const movie of movies2) {
  for (const category of movie.categories) {
    if (!uniqueCategories.includes(category)) {
      uniqueCategories.push(category);
    }
  }
}
console.log(uniqueCategories);

//EJERCICIO 10
//Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users3 = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];
let totalVolume = 0;
let soundsCount = 0;
for (const user of users3) {
  for (const sound in user.favoritesSounds) {
    totalVolume += user.favoritesSounds[sound].volume;
    soundsCount++;
  }
}
const averageVolume = totalVolume / soundsCount;
console.log("Media del volumen de los sonidos favoritos:", averageVolume);

//EJERCICIO 11
//Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.
//Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
//Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.
//Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que hay muchas formas de hacer las cosas en javascript.

const users4 = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];
const soundCount = {};
for (const user of users4) {
  for (const sound in user.favoritesSounds) {
    soundCount[sound] = (soundCount[sound] || 0) + 1;
  }
}
for (const sound in soundCount) {
  console.log(`El sonido "${sound}" ha sido agregado ${soundCount[sound]} veces.`);
}

//EJERCICIO 12
//Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.
//Haz varios ejemplos y compruebalos.
//Sugerencia de función:
function findArrayIndex(array, text) {
	for (let i = 0; i < array.length; i++) {
	  if (array[i] === text) {
		return i;
	  }
	}
	return -1;
  }
//Ej array:
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];
console.log(findArrayIndex(mainCharacters, "Han Solo"));
console.log(findArrayIndex(mainCharacters, "Rey"));
console.log(findArrayIndex(mainCharacters, "Darth Vader"));

//EJERCICIO 13
//Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada removeItem que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) llame a la función anteriormente creada findArrayIndex y obten el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
//Finalmente retorna el array.
//De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.
function removeItem(array, text) {
	const index = findArrayIndex(array, text);
	if (index !== -1) {
	  array.splice(index, 1);
	}
	return array;
  }
console.log(removeItem(mainCharacters, "Han Solo"));
console.log(removeItem(mainCharacters, "Rey"));
console.log(removeItem(mainCharacters, "Darth Vader"));

//EJERCICIO 14
//Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! Busca información sobre la función de javascript Math.random()
function rollDice(numFaces) {
	const result = Math.floor(Math.random() * numFaces) + 1;
	return result;
  }
  
  console.log(rollDice(6));
  console.log(rollDice(10));
  console.log(rollDice(20));

//EJERCICIO 15
//Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.
//Sugerencia de array:
const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];
function swap(array, index1, index2) {
	if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
	  console.log("Índices inválidos.");
	  return array;
	}
	const temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
	return array;
  }
  console.log(swap(fantasticFour, 0, 3));
  console.log(swap(fantasticFour, 1, 2));
  console.log(swap(fantasticFour, 0, 10));