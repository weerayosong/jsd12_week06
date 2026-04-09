// Example of inheritance
// Bird and Mammal gets everything from Animal via 'extends'
import Animal from './Animal.js';

export default class Mammal extends Animal {
    constructor(name, species, furColor) {
        super(name, species);
        this.furColor = furColor;
    }

    groom() {
        console.log(`${this.name} is brushing their ${this.furColor}`);
    }
}
