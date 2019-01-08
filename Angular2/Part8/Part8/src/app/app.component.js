"use strict";
//import { Component } from '@angular/core';
//@Component({
//    selector: 'my-app',
//    //template: `<h1>Hello {{name}}</h1>`,
//    templateUrl: '/HtmlPage1.html',
//})
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//export class AppComponent { name: string = "Angular 2."; }
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.imagePath = '/Images/RSA setup.png';
    }
    AppComponent.prototype.getName = function () {
        return "Krishna Kumar";
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h3> {{ getName()? getName():'Name not Specified'}}</h3> \n    <img [src] = '[imagePath]' />\n<input id='inputId' type='text' value='Tom'>"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//import { Component } from '@angular/core';
//@Component({
//  selector: 'my-app',
//  template: `<h1>Hello {{name}}</h1>`,
//})
//export class AppComponent  { name = 'Angular2.'; }
//# sourceMappingURL=app.component.js.map