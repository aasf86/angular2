import {Component} from 'angular2/core';
import {Config} from '././config.service';
import {Video} from '././video';
import {VideoListComponent} from '././videolist.component';
import {VideoDetailComponent} from '././videodetail.component';

enum EstadoTela
{
    Fechado,
    Novo,
    Editando, 
    Removido
}

@Component({    
    selector: 'my-app',
    directives: [VideoListComponent,VideoDetailComponent],
    template: (`
        <h1 class="jumbotron">
            {{title}}
        </h1>
        <video-list [videos]="videos" (selectVideo)="onSelectVideo($event)" (removeVideo)="onRemoveVideo($event)"></video-list>
        <video-detail *ngIf="showEditando" [video]="selectedVideo" (close)="onCloseDetailForm($event)"></video-detail>
        <video-detail *ngIf="showNovo" [video]="newVideo" (close)="onCloseAddForm($event)" [newItem]="true" (adding)="onAddNovo($event)"></video-detail>
        <button *ngIf="showButtonNovo" type="button" class="btn btn-primary" (click)="onAddVideo()">
            <i class="glyphicon glyphicon-plus"></i>&nbsp;Novo
        </button>
    `)
})

export class AppComponent 
{
    title = Config.TITLE_PAGE;
    videos:Array<Video>;
    selectedVideo:Video;
    adicionando:boolean = false;
    newVideo:Video;    
    estado:EstadoTela = EstadoTela.Fechado;
    
    get showNovo(){
        return this.estado == EstadoTela.Novo; 
    }
    
    get showEditando(){
        return this.estado == EstadoTela.Editando; 
    }    
    
    get showButtonNovo(){
        return this.estado == EstadoTela.Fechado; 
    } 
    
    constructor(){
        this.videos = [
            new Video(1,"Git", "https://www.youtube.com/embed/C18qzn7j4SM", "Rodrigo Branas (git)"),
            new Video(2, "Gulp vs Grunt", "https://www.youtube.com/embed/ZG0fSXOKcGM", "Rodrigo Branas (Gulp vs Grunt)"),
            new Video(3, "Bower", "https://www.youtube.com/embed/ZA06skH73gg", "Rodrigo Branas (Bower)")  
        ];
    }
    
    onSelectVideo(event){
        console.log('select');
        this.videos.forEach(item => {
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
    }
    
    onRemoveVideo(event){
        this.estado = EstadoTela.Removido;
        console.log('remove');
        if (confirm('Deseja realmente apagar \'' + event.itemVideo.title + ' - ' + event.itemVideo.url+'\'?')) {
            console.log('apagando');
            this.videos = this.videos.filter(x=> x.id != event.itemVideo.id);
            this.onCloseAddForm();
            this.estado = EstadoTela.Removido;
        }
    }
    
    onAddNovo(newItem:Video){
        
        this.videos.push(newItem);
        this.onCloseAddForm();
    }
    
    onCloseDetailForm(event){
        console.log('fechando...');
        this.selectedVideo = null;
        this.videos.forEach(item => { item["selected"] = false; });
        this.estado = EstadoTela.Fechado;
    }
    
    onCloseAddForm(){
        this.adicionando = false;
        this.estado = EstadoTela.Fechado;
        this.selectedVideo = null;
    }
    
    onAddVideo(){
        this.estado = EstadoTela.Novo;
        this.adicionando = true;
        this.newVideo = new Video(this.videos.length,'','');
    }
}