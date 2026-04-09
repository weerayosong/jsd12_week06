// Zoo Manager
// A class to hold and run our animal objects:

export default class Zoo {
    constructor(zooName) {
        this.zooName = zooName;
        this.animals = [];
    }

    addAnimal(animal) {
        this.animals.push(animal);
        console.log(`Added ${animal.name} to the ${this.zooName}`);
    }

    showAllAnimals() {
        console.log(`\n--- Welcome to ${this.zooName} ---`);
        this.animals.forEach((animal) => {
            // Accessing properties and calling methods
            console.log('Here -->', animal);
            console.log(
                Object.getOwnPropertyNames(Object.getPrototypeOf(animal)),
            );
            console.log(
                `Animal: ${animal.name} | Status: ${animal.getStatus()}`,
            );
            // console.log(`Animal: ${animal.name} `);

            animal.makeSound();
            animal.eat();
            // console.log(`Animal Status: ${animal.getStatus()}`);
            console.log('-------------------');
        });
    }
}
