System.register(['angular2/core', './mock'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_1_1) {
                mock_1 = mock_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_mock) {
                    this.user = _mock.mike;
                }
                AppComponent.prototype.onSubmit = function (f) {
                    var _this = this;
                    this.submitted = true;
                    console.log(f);
                    console.log("sending..." + JSON.stringify(this.user));
                    setTimeout(function (x) {
                        _this.submitted = false;
                        console.log("x..." + JSON.stringify(x));
                    }, 3000, this.user);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: ("\n    {{user | json}}\n    <style>\n    .ng-invalid {\n        border-left: 5px solid #a94442;\n    }\n    </style>\n    <div [hidden]=\"submitted\"> \n        <form (ngSubmit)=\"onSubmit(form)\" #form=\"ngForm\">\n            <input type=\"hidden\" id=\"id\" name=\"id\" [(ngModel)]=\"user.id\"/>\n            <div class=\"form-group\">\n                <label for=\"name\">Nome</label>\n                <input type=\"text\" class=\"form-control\" name=\"name\" required [(ngModel)]=\"user.name\" ngControl=\"name\" #name=\"ngForm\">\n                <div [hidden]=\"name.valid\" class=\"alert alert-danger\">\n                    Nome inv\u00E1lido!\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"user.email\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!form.valid\">Salvar</button>\n        </form> \n    </div>\n    <div [hidden]=\"!submitted\">\n        Sending... {{user|json}}\n    </div>\n    ")
                    }), 
                    __metadata('design:paramtypes', [mock_1.Mock])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map