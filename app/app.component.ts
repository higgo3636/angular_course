import { Component } from '@angular/core' // import the Component function, which is also a decorator from angular/core

// decorator is a TypeScript feature
// because the Component function is a decorator, can use @ prefix to reference it
// import Component from angular's core
@Component({  // this registers our new component with Angular
  // a component holds meta data for our particular component 'AppComponent'
  selector: 'app-root', // this selector creates the element in the HTML, which acts as the 'base root component' allowing the entire app to render from
  
  // assign a template to our component
  // using back ticks to use inline string
  template: ` 
    <div>
     {{ title }}
    </div>
  `  // template with an inline string for better readability
  // use the 'title' property using interpilation
  // 
})

export class AppComponent {
  title: string; // create property called 'title'
  constructor() {
    this.title = 'Ultimate Angular'; // bounding the property to the component
  }
}


