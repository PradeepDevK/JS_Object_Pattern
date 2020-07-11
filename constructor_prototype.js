/**
 * This is a combination of the constructor and prototype patterns. The constructor patterns defines object
 * properties, while the prototype pattern defines methods and shared properties.
 */

function Fruit() { }

Fruit.prototype.name = 'Apple';
Fruit.prototype.showName = function () {
    console.log("I'm " + this.name);
}

const fruit =  new Fruit();
fruit.showName();