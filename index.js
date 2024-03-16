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