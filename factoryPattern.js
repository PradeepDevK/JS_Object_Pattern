/**
 * The factory pattern uses a function to abstract away the process of creating specific 
 * objects and returning their reference. It returns a new instance whenever called.
 */

function createFruit(name) {
    const obj = new Object();
    obj.name = name;
    obj.showName = function () {
        console.log("I'm " + obj.name);
    }
    return obj;
}

const fruitOne = createFruit('Apple');
const fruitTwo = createFruit('Orange');

fruitOne.showName();
fruitTwo.showName();