"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'Krishna Kumar';
        this.userText = 'User Text';
    }
    AppComponent.prototype.onClick = function () {
        console.log('Button Clicked');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n                Your Simple Text : <input type=\"Text\" [(ngModel)]='userText' />\n                <br>\n                <br>\n                <simplecomp [simpleInput]='userText' ></simplecomp>\n                <br>\n                <br>\n                <button (click)='onClick()' >Click me</button>\n                <br>\n                <br>\n                 Name : <input [value]='name' (input)='name = $event.target.value'>\n                <br>\n                <br>\n                <input [(ngModel)]='name'>\n                <br>\n                <br>\n                You entered : {{name}}\n                <br>\n                <br>\n                <div>\n                <my-employee></my-employee>\n                </div>\n\n                <div>\n                <list-employee></list-employee>\n                </div>",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map