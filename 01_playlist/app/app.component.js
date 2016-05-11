System.register(['angular2/core', '././config.service', '././video', '././videolist.component', '././videodetail.component'], function(exports_1, context_1) {
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
    var core_1, config_service_1, video_1, videolist_component_1, videodetail_component_1;
    var EstadoTela, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_service_1_1) {
                config_service_1 = config_service_1_1;
            },
            function (video_1_1) {
                video_1 = video_1_1;
            },
            function (videolist_component_1_1) {
                videolist_component_1 = videolist_component_1_1;
            },
            function (videodetail_component_1_1) {
                videodetail_component_1 = videodetail_component_1_1;
            }],
        execute: function() {
            (function (EstadoTela) {
                EstadoTela[EstadoTela["Fechado"] = 0] = "Fechado";
                EstadoTela[EstadoTela["Novo"] = 1] = "Novo";
                EstadoTela[EstadoTela["Editando"] = 2] = "Editando";
                EstadoTela[EstadoTela["Removido"] = 3] = "Removido";
            })(EstadoTela || (EstadoTela = {}));
            AppComponent = (function () {
                function AppComponent() {
                    this.title = config_service_1.Config.TITLE_PAGE;
                    this.adicionando = false;
                    this.estado = EstadoTela.Fechado;
                    this.videos = [
                        new video_1.Video(1, "Git", "https://www.youtube.com/embed/C18qzn7j4SM", "Rodrigo Branas (git)"),
                        new video_1.Video(2, "Gulp vs Grunt", "https://www.youtube.com/embed/ZG0fSXOKcGM", "Rodrigo Branas (Gulp vs Grunt)"),
                        new video_1.Video(3, "Bower", "https://www.youtube.com/embed/ZA06skH73gg", "Rodrigo Branas (Bower)")
                    ];
                }
                Object.defineProperty(AppComponent.prototype, "showNovo", {
                    get: function () {
                        return this.estado == EstadoTela.Novo;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppComponent.prototype, "showEditando", {
                    get: function () {
                        return this.estado == EstadoTela.Editando;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AppComponent.prototype, "showButtonNovo", {
                    get: function () {
                        return this.estado == EstadoTela.Fechado;
                    },
                    enumerable: true,
                    configurable: true
                });
                AppComponent.prototype.onSelectVideo = function (event) {
                    console.log('select');
                    this.videos.forEach(function (item) {
                        item["selected"] = false;
                    });
                    if (this.estado == EstadoTela.Removido) {
                        event.event.preventDefault();
                        this.estado = EstadoTela.Editando;
                        this.onCloseAddForm();
                        return;
                    }
                    event.itemVideo["selected"] = true;
                    this.estado = EstadoTela.Editando;
                    this.selectedVideo = event.itemVideo;
                };
                AppComponent.prototype.onRemoveVideo = function (event) {
                    this.estado = EstadoTela.Removido;
                    console.log('remove');
                    if (confirm('Deseja realmente apagar \'' + event.itemVideo.title + ' - ' + event.itemVideo.url + '\'?')) {
                        console.log('apagando');
                        this.videos = this.videos.filter(function (x) { return x.id != event.itemVideo.id; });
                        this.onCloseAddForm();
                        this.estado = EstadoTela.Removido;
                    }
                };
                AppComponent.prototype.onAddNovo = function (newItem) {
                    this.videos.push(newItem);
                    this.onCloseAddForm();
                };
                AppComponent.prototype.onCloseDetailForm = function (event) {
                    console.log('fechando...');
                    this.selectedVideo = null;
                    this.videos.forEach(function (item) { item["selected"] = false; });
                    this.estado = EstadoTela.Fechado;
                };
                AppComponent.prototype.onCloseAddForm = function () {
                    this.adicionando = false;
                    this.estado = EstadoTela.Fechado;
                    this.selectedVideo = null;
                };
                AppComponent.prototype.onAddVideo = function () {
                    this.estado = EstadoTela.Novo;
                    this.adicionando = true;
                    this.newVideo = new video_1.Video(this.videos.length, '', '');
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [videolist_component_1.VideoListComponent, videodetail_component_1.VideoDetailComponent],
                        template: ("\n        <h1 class=\"jumbotron\">\n            {{title}}\n        </h1>\n        <video-list [videos]=\"videos\" (selectVideo)=\"onSelectVideo($event)\" (removeVideo)=\"onRemoveVideo($event)\"></video-list>\n        <video-detail *ngIf=\"showEditando\" [video]=\"selectedVideo\" (close)=\"onCloseDetailForm($event)\"></video-detail>\n        <video-detail *ngIf=\"showNovo\" [video]=\"newVideo\" (close)=\"onCloseAddForm($event)\" [newItem]=\"true\" (adding)=\"onAddNovo($event)\"></video-detail>\n        <button *ngIf=\"showButtonNovo\" type=\"button\" class=\"btn btn-primary\" (click)=\"onAddVideo()\">\n            <i class=\"glyphicon glyphicon-plus\"></i>&nbsp;Novo\n        </button>\n    ")
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map