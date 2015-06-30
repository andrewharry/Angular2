/// <reference path="../_all.ts" />
import { Component, View } from 'angular2/angular2';
import { Control } from 'angular2/forms';

@Component({
    selector: 'person'
})
@View({
    templateUrl: 'app/person/person.html'
})

export class Person {
    constructor() {}
    public firstName = new Control({});
    public lastName = new Control({});
    public fullName: string = 'John Smith';

    private onChange = ($event: any) => {
        this.fullName = (this.firstName + ' ' + this.lastName).trim();
    }
}