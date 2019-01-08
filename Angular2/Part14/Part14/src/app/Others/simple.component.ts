import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'

@Component({
    selector: 'simplecomp',
    template: ` You Entered : {{simpleInput}}
                `
})
export class SimpleComponent implements OnChanges {
    @Input() simpleInput: string;

    ngOnChanges(changes: SimpleChanges) {
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let currenctval = JSON.stringify(change.currentValue);
            let previousval = JSON.stringify(change.previousValue);
            console.log(propertyName + ': Current Value =' + currenctval + ' Previous Value ='+ previousval);
            console.log(`${propertyName}: Current Value =${currenctval} Previous Value =${previousval}`);
    }
}