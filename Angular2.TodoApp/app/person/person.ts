/// <reference path="../_all.ts" />

import { Component, View } from 'angular2/angular2';
import { coreDirectives } from 'angular2/directives';
let template = require('./person.html');

@Component({
    selector: 'person'
})
@View({
    template: `${template}`,
    directives: [coreDirectives]
})

export class Person {
    constructor() {
        Object.observe(this.firstName, () => this.setFullName());
        Object.observe(this.lastName, () => this.setFullName());
    }

    public firstName: string = 'John';
    public lastName: string = 'Smith';
    public fullName: string = 'John Smith';

    private setFullName = () => {
        this.fullName = (this.firstName || '' + ' ' + this.lastName || '').trim();
    }
}