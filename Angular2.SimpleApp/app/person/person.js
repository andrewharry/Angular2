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
define(["require", "exports", 'angular2/angular2', 'angular2/forms'], function (require, exports, angular2_1, forms_1) {
    var Person = (function () {
        function Person() {
            var _this = this;
            this.firstName = new forms_1.Control({});
            this.lastName = new forms_1.Control({});
            this.fullName = 'John Smith';
            this.onChange = function ($event) {
                _this.fullName = (_this.firstName + ' ' + _this.lastName).trim();
            };
        }
        Person = __decorate([
            angular2_1.Component({
                selector: 'person'
            }),
            angular2_1.View({
                templateUrl: 'app/person/person.html'
            }), 
            __metadata('design:paramtypes', [])
        ], Person);
        return Person;
    })();
    exports.Person = Person;
});
//# sourceMappingURL=person.js.map