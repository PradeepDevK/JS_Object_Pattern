/**
 * The prototype pattern adds the properties of the object to the prototype object. Then, these
 * properties are available and shared among all instances.
 */

function Fruit(name) {
    this.name = name;
}

Fruit.prototype.showName = function () {
    console.log("I'm " + this.name);
}

const fruitOne = new Fruit('Apple');
fruitOne.showName();

const fruitTwo = new Fruit('Orange');
fruitTwo.showName();