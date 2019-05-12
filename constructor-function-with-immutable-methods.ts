// Create a function called 'ShoppingList'
function ShoppingList() {
    // this.groceries initiliazed to an array
    this.groceries = [];
}

// Creating a Public Method using 'prototype'
// Then creating a function called 'addItem' for the ShoppingList
// Acting like a Constructor Function, with an array called 'groceries'
ShoppingList.prototype.addItem = function (item) { // pass the 'item' in
      // This is an immutable method to use for allowing items to be added
      // angular prefers using .concat over pushing items for adding to array
      // makes change detection easier as well too
      // and using this way creates an immutable state for the object
    this.groceries = this.groceries.concat([item]);  
};

// Creating a Public Method using 'prototype'
// Then creating a function called 'removeItem' for the ShoppingList
ShoppingList.prototype.removeItem = function (item) {  // pass the 'item' in
    // use immutable method
    // use .filter to iterate over the groceries []

    this.groceries = this.groceries.filter(function (grocery) { // iteration that passes each grocery individually to this inner function
// which then gets tested like below
        return item !== grocery; // has to pass this test to get passed back/added to the initial groceries []
   
    }) 
}

// To create an instance of the ShoppingList(); 
var mylist = new ShoppingList(); // this treats the 'ShoppingList();' like a "constructor function"


// use function and methods

mylist.addItem('bananna');
mylist.addItem('apple');

// report in browser

console.log(mylist.groceries);

mylist.removeItem('bananna');

console.log(mylist.groceries);


/////////////////////////////////////////////////////

// example of doing same thing as above using Typesript, using JS functions using ES6 classes 

class ShoppingList2 { // use class to act as function would in JS
    groceries: string[]; // this declares a property called groceries as an array using strings, which helps to pick up any errors we might make usin this later
    constructor() { // specify a constructor
        this.groceries = [];
    }
    addItem(item) { // public property on our ShoppingList2 class
        this.groceries = [...this.groceries, item]; // merges new item into groceries array
    }
    removeItem(item) {
        this.groceries = this.groceries.filter(function (grocery) {            
            return item !== grocery;
        });
    }
     // example using ES6 Array Functions to do same this for removeItem
     removeItemES6Way(item) {
         this.groceries = this.groceries.filter((grocery) => item !== grocery);
     }
}


const myNewList = new ShoppingList2();

myNewList.addItem('pear');
myNewList.addItem('pizza');
myNewList.addItem('pie');

myNewList.removeItem('pear');
myNewList.removeItemES6Way('pizza');



console.log(myNewList.groceries); // get array object and groceries array object