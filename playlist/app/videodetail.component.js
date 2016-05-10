System.register(['angular2/core', './video'], function(exports_1, context_1) {
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
    var core_1, video_1;
    var VideoDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (video_1_1) {
                video_1 = video_1_1;
            }],
        execute: function() {
            VideoDetailComponent = (function () {
                function VideoDetailComponent() {
                    this.editTitle = false;
                    this.newItem = false;
                    this.close = new core_1.EventEmitter();
                    this.adding = new core_1.EventEmitter();
                }
                VideoDetailComponent.prototype.onTitleClick = function () {
                    this.editTitle = true;
                };
                VideoDetailComponent.prototype.onButtonOkClick = function () {
                    this.editTitle = false;
                    this.close.next(null);
                };
                VideoDetailComponent.prototype.ngOnChanges = function () {
                    this.editTitle = false;
                };
                VideoDetailComponent.prototype.onButtonCancelClick = function () {
                    this.close.next({});
                };
                VideoDetailComponent.prototype.onAdding = function () {
                    console.log('adicionando....');
                    this.video.id += 1;
                    this.adding.next(this.video);
                };
                VideoDetailComponent.prototype.ngOnInit = function () {
                    //console.log(' '+this.editTitle);        
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', video_1.Video)
                ], VideoDetailComponent.prototype, "video", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], VideoDetailComponent.prototype, "newItem", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VideoDetailComponent.prototype, "close", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VideoDetailComponent.prototype, "adding", void 0);
                VideoDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'video-detail',
                        template: "\n        <style>\n            .h3Cursor {\n                cursor:pointer;                \n            }\n        </style>    \n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <iframe width=\"100%\" height=\"300\" src=\"{{video.url}}\"></iframe>\n            </div>\n            <div class=\"col-md-8\">\n                <form>                    \n                    <h3 class=\"h3Cursor\" *ngIf=\"editTitle\" (click)=\"onTitleClick()\">{{video.title}}</h3>\n                    <div *ngIf=\"!editTitle\" class=\"form-group\">\n                        <input type=\"input\" class=\"form-control\" id=\"title\" required placeholder=\"title\" [(ngModel)]=\"video.title\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"input\" class=\"form-control\" id=\"url\" required placeholder=\"url\" [(ngModel)]=\"video.url\">\n                    </div>\n                    <div class=\"form-group\">\n                        <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"video.desc\"></textarea>\n                    </div>\n                    <button *ngIf=\"!newItem\" type=\"button\" class=\"btn btn-success\" (click)=\"onButtonOkClick()\">Ok</button>\n                    <button *ngIf=\"newItem\" type=\"button\" class=\"btn btn-primary\" (click)=\"onAdding()\">\n                        <i class=\"glyphicon glyphicon-plus\"></i>&nbsp;Adicionar\n                    </button>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"onButtonCancelClick()\">Cancelar</button>\n                </form>\n            </div>\n        </div>\n    "
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