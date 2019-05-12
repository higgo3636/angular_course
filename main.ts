import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);



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
