//import { Component } from '@angular/core';
//@Component({
//    selector: 'my-app',
//    //template: `<h1>Hello {{name}}</h1>`,
//    templateUrl: '/HtmlPage1.html',
//})

//export class AppComponent { name: string = "Angular 2."; }


import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `<h3> {{ getName()? getName():'Name not Specified'}}</h3> 
    <img [src] = '[imagePath]' />
<input id='inputId' type='text' value='Tom'>`
})

export class AppComponent {
    imagePath: string = '/Images/RSA setup.png';
    getName(): string {
        return "Krishna Kumar";
    }
}

//import { Component } from '@angular/core';

//@Component({
//  selector: 'my-app',
//  template: `<h1>Hello {{name}}</h1>`,
//})
//export class AppComponent  { name = 'Angular2.'; }
