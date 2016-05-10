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
                    this.removeVideo = new core_1.EventEmitter();
                }
                VideoListComponent.prototype.onSelect = function (itemVideo, event) {
                    //console.log(JSON.stringify(vid));        
                    this.selectVideo.next({ itemVideo: itemVideo, event: event });
                };
                VideoListComponent.prototype.onRemover = function (itemVideo) {
                    this.removeVideo.next({ itemVideo: itemVideo, event: event });
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VideoListComponent.prototype, "selectVideo", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VideoListComponent.prototype, "removeVideo", void 0);
                VideoListComponent = __decorate([
                    core_1.Component({
                        selector: 'video-list',
                        template: "\n        <style>\n            .howTr {\n                cursor:pointer;                \n            }\n            .howTr:hover{\n                background-color: #fcf8e3 !important;\n            }\n        </style>\n        <table class=\"table\">\n            <thead>\n                <tr>\n                    <th>#ID</th>\n                    <th>Titulo</th>\n                    <th>Autor</th>\n                    <th width=\"3%\"></th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"#v of videos\" (click)=\"onSelect(v, $event)\" class='{{v[\"selected\"] ? \"info howTr\" : \"howTr\" }}'>\n                    <td>{{v.id}}</td>\n                    <td>{{v.title}}</td>\n                    <td>{{v.desc}}</td>\n                    <td>\n                        <button type=\"button\" class=\"btn btn-danger\" title=\"Remover item\" (click)=\"onRemover(v, $event)\">\n                            <i class=\"glyphicon glyphicon-remove\"></i>\n                        </button>                    \n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        ",
                        inputs: ['videos']
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