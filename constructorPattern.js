/**
 * In the constructor pattern, instead of returning the instance from the function, we use the new operator along
 * with the function name
 */

function createFruit(name) {
    this.name =  name;
    this.showName = function () {
        console.log("I'm " + this.name);
    }
}

const fruitOne = new createFruit('Apple');
const fruitTwo = new createFruit('Orange');

fruitOne.showName();
fruitTwo.showName();