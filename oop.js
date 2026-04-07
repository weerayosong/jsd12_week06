// Building a project using Object-Oriented Programming (OOP) is like building with LEGO:
// you define the "molds" (Classes) and then snap together the "bricks" (Objects).

// We’ll build a Virtual Zoo starting from a simple object and evolving into
// a full implementation using Encapsulation, Inheritance, and Polymorphism.

// Plain Function
const lion = {
    name: 'Zimba',
    species: 'Lion',
    makeSound: function () {
        console.log(`${this.name} says: ROAR!!`);
    },
};

lion.makeSound();

// Class Template (Encapsulation)
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this._hunger = 50; // Internal state (protected by _)
        this._stamina = 100;
        this._happy = 20;
    }

    makeSound() {
        console.log(`${this.name} make a sound...`);
    }

    eat() {
        this._hunger -= 10;
        console.log(
            `${this.name} the ${this.species} ate. Hunger is now ${this._hunger}`,
        );
    }

    runFast() {
        this._stamina -= 5;
        this._happy += 2;
        console.log(
            `${this.name} the ${this.species}'s running very fast. Stamina is decrease to ${this._stamina} but its happiness's increase to ${this._happy}`,
        );
    }
}

const myDog = new Animal('ด่าง', 'สุนัขจรจัด');
const myCat = new Animal('นวล', 'แมวไทย');

console.log(myDog.name);
console.log(myCat.species);

myDog.makeSound();

myDog.eat();
myDog.eat();

myCat.runFast();
myCat.runFast();
