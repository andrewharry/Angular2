/// <reference path="_all.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
    selector: 'simple-app'
})
@View({
    template: '<div><h1>Hello {{ title }}</h1></div>'
})
// Component controller
class MyApp {
    constructor() {
        this.title = 'World';
    }
    public title: string = '';
}

bootstrap(MyApp)