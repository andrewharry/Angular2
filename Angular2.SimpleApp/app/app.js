var __decorate = this.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = this.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'angular2/angular2', 'person/person'], function (require, exports, angular2_1, person_1) {
    // Annotation section
    var MyApp = (function () {
        function MyApp() {
            this.title = '';
            this.title = 'World';
        }
        MyApp = __decorate([
            angular2_1.Component({
                selector: 'simple-app'
            }),
            angular2_1.View({
                template: '<div><h1>Hello {{ title }}</h1></div><person><person>',
                directives: [person_1.Person]
            }), 
            __metadata('design:paramtypes', [])
        ], MyApp);
        return MyApp;
    })();
    angular2_1.bootstrap(MyApp);
});
//# sourceMappingURL=app.js.map