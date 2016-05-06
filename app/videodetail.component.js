System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var VideoDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VideoDetailComponent = (function () {
                function VideoDetailComponent() {
                    this.editTitle = false;
                    this.editTitle = false;
                }
                VideoDetailComponent.prototype.onTitleClick = function () {
                    this.editTitle = true;
                };
                VideoDetailComponent.prototype.onButtonOkClick = function () {
                    this.editTitle = false;
                };
                VideoDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'video-detail',
                        inputs: ['video'],
                        template: "\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <iframe width=\"100%\" height=\"300\" src=\"{{video.url}}\"></iframe>\n            </div>\n            <div class=\"col-md-8\">\n                <form>                    \n                    <h3 *ngIf=\"!editTitle\" (click)=\"onTitleClick()\">{{video.title}}</h3>\n                    <div *ngIf=\"editTitle\" class=\"form-group\">\n                        <input type=\"input\" class=\"form-control\" id=\"title\" required placeholder=\"title\" [(ngModel)]=\"video.title\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"input\" class=\"form-control\" id=\"url\" required placeholder=\"url\" [(ngModel)]=\"video.url\">\n                    </div>\n                    <div class=\"form-group\">\n                        <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"video.desc\"></textarea>\n                    </div>\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"onButtonOkClick()\">Ok</button>\n                </form>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], VideoDetailComponent);
                return VideoDetailComponent;
            }());
            exports_1("VideoDetailComponent", VideoDetailComponent);
        }
    }
});
//# sourceMappingURL=videodetail.component.js.map