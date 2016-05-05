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
    var VideoListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VideoListComponent = (function () {
                function VideoListComponent() {
                    this.selectVideo = new core_1.EventEmitter();
                }
                VideoListComponent.prototype.onSelect = function (vid) {
                    console.log(JSON.stringify(vid));
                };
                VideoListComponent = __decorate([
                    core_1.Component({
                        selector: 'video-list',
                        template: "\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>ID</th>\n                    <th>Title</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"#v of videos\" (click)=\"onSelect(v)\">\n                    <td>{{v.id}}</td>\n                    <td>{{v.title}}</td>\n                </tr>\n            </tbody>\n        </table>\n        ",
                        inputs: ['videos'],
                        outputs: ['selectVideo']
                    }), 
                    __metadata('design:paramtypes', [])
                ], VideoListComponent);
                return VideoListComponent;
            }());
            exports_1("VideoListComponent", VideoListComponent);
        }
    }
});
//# sourceMappingURL=videolist.component.js.map