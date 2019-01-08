import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
                <div>
                <my-employee></my-employee>
                </div>

                <div>
                <list-employee></list-employee>
                </div>`,
})
export class AppComponent {
    onClick(): void {
        console.log('Button Clicked');
    }
    name: string = 'Krishna Kumar';
    userText: string = 'User Text';
}
