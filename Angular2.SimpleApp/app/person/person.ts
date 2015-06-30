/// <reference path="../_all.ts" />
import { Component, View } from 'angular2/angular2';

@Component({
    selector: 'person'
})
@View({
    templateUrl: 'app/person/person.html'
})

export class Person {
    constructor() { }
    public firstName: string = 'John';
    public lastName: string = 'Smith';
    public fullName: string = 'John Smith';

    private onChange = () => {
        this.fullName = (this.firstName || '' + ' ' + this.lastName || '').trim();
    }
}