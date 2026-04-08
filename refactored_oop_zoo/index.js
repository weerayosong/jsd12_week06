import Animal from './animals/Animal.js';
import Mammal from './animals/Mammal.js';
import Bird from './animals/Bird.js';
import Zoo from './Zoo.js';

const myZoo = new Zoo('The JS Terminal Zoo');

console.log(typeof Zoo);
console.log(typeof myZoo);

// create instances of class Animal, Mammal, and/or Bird
const leo = new Animal('Leo', 'Lion');
const zazu = new Bird('Zazu', 'Hornbill', '2 feet');
const baloo = new Mammal('Baloo', 'Bear', 'Brown');

myZoo.addAnimal(leo);
myZoo.addAnimal(zazu);
myZoo.addAnimal(baloo);

myZoo.showAllAnimals();
