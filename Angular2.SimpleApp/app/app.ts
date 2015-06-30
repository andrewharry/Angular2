/// <reference path="_all.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {Person} from 'person/person';

// Annotation section
@Component({
    selector: 'simple-app'
})
@View({
    template: '<div><h1>Hello {{ title }}</h1></div><person><person>',
    directives: [Person]
})
// Component controller
class MyApp {
    constructor() {
        this.title = 'World';
    }
    public title: string = '';
}

bootstrap(MyApp)