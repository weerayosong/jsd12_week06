// Example of inheritance
// Bird and Mammal gets everything from Animal via 'extends'
import Animal from './Animal.js';

export default class Bird extends Animal {
    constructor(name, species, wingspan) {
        super(name, species);
        this.wingspan = wingspan;
    }

    // This is an example of polymorphism; overide the parent's method

    makeSound() {
        console.log(`${this.name} chirps: Tweet! Tweet!`);
    }
}

//console.log(zazu);
