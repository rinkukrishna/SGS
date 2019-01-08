import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `<div>
                <h2> {{pageHeader}}</h2>
                <my-employee></my-employee>
                </div>`,
})

export class AppComponent { pageHeader: string = "Employee Details"; }




//import { Component } from '@angular/core';

//@Component({
//  selector: 'my-app',
//  template: `<h1>Hello {{name}}</h1>`,
//})
//export class AppComponent  { name = 'Angular2.'; }
