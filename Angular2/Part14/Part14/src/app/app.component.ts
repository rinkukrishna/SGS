import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
                Your Simple Text : <input type="Text" [(ngModel)]='userText' />
                <br>
                <br>
                <simplecomp [simpleInput]='userText' ></simplecomp>
                <br>
                <br>
                <button (click)='onClick()' >Click me</button>
                <br>
                <br>
                 Name : <input [value]='name' (input)='name = $event.target.value'>
                <br>
                <br>
                <input [(ngModel)]='name'>
                <br>
                <br>
                You entered : {{name}}
                <br>
                <br>
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
