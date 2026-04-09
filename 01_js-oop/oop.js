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

console.log('-=-=-==-=-=-=-=-=-=-');

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

const myDog = new Animal('จ้าวหยุน', 'สุนัขชิบะ');
const myDog2 = new Animal('จ้าวเข้ม', 'สุนัขลอตไวเลอร์');
const myDog3 = new Animal('จ้าวทอง', 'สุนัขลาบาดอร์');
const myCat = new Animal('จ้าวส้ม', 'แมวส้ม');

console.log(myDog.name);
console.log(myCat.species);

myDog.makeSound();

myDog.eat();
myDog.eat();

myCat.runFast();
myCat.runFast();

console.log('-=-=-==-=-=-=-=-=-=-');

// Specialized classes (Inheritance)
class Mammal extends Animal {
    constructor(name, species, furColor) {
        super(name, species); // Calls the parens constructor
        this.furColor = furColor;
    }

    groom() {
        console.log(`${this.name} is brushing its ${this.furColor} fur.`);
    }
}

const myLion = new Mammal('จ้าวลีโอ', 'สิงโตแอฟริกัน', 'สีทอง');
myLion.groom();

class Bird extends Animal {
    constructor(name, species, wingSpan) {
        super(name, species);
        this.wingSpan = wingSpan;
    }

    makeSound() {
        console.log(`${this.name} chirps "Tweet Tweet!"`);
    }

    changeName(newName) {
        const oldName = this.name;
        this.name = newName;
        console.log(
            `${oldName} was changed name, this bird's name is ${this.name} now!`,
        );
    }
}

const myBird = new Bird('จ้าวขุนทอง', 'นกขุนทอง', '20cm');
const myBird2 = new Bird('จ้าวaaa', 'นกยูง', '20cm');
const myBird3 = new Bird('จ้าวbbb', 'นกแก้ว', '20cm');
const myBird4 = new Bird('จ้าวcccc', 'นกอินทรี', '20cm');
myBird.makeSound();
myBird2.makeSound();
myBird3.makeSound();

myBird4.makeSound();
myBird4.changeName('จ้าวอินทรี');
