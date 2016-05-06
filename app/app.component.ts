import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {VideoListComponent} from './videolist.component';
import {VideoDetailComponent} from './videodetail.component';

@Component({
    selector: 'my-app',
    directives: [VideoListComponent,VideoDetailComponent],
    template: `
        <h1 class="jumbotron">
            {{title}}
        </h1>
        <video-list [videos]="videos" (selectVideo)="onSelectVideo($event)"></video-list>
        <video-detail *ngIf="selectedVideo" [video]="selectedVideo" (closeForm)="onCloseDetailForm($event)"></video-detail>
        <video-detail *ngIf="adicionando" [video]="newVideo" (closeForm)="onCloseAddForm($event)"></video-detail>
        <button ngShow="!adicionando" type="button" class="btn btn-primary" (click)="onAddVideo()">
            <i class="glyphicon glyphicon-plus"></i>&nbsp;Novo
        </button>
    `
})

export class AppComponent 
{
    title = Config.TITLE_PAGE;
    videos:Array<Video>;
    selectedVideo:Video;
    adicionando:boolean = false;
    newVideo:Video;
    
    constructor(){
        this.videos = [
            new Video(1,"Git", "https://www.youtube.com/embed/C18qzn7j4SM", "Rodrigo Branas (git)"),
            new Video(2, "Gulp vs Grunt", "https://www.youtube.com/embed/ZG0fSXOKcGM", "Rodrigo Branas (Gulp vs Grunt)"),
            new Video(3, "Bower", "https://www.youtube.com/embed/ZA06skH73gg", "Rodrigo Branas (Bower)")  
        ];
    }
    
    onSelectVideo(itemVideo:Video){
        //--console.log(JSON.stringify(video));
        this.videos.forEach(item => {
            item["selected"] = false;
        });
        itemVideo["selected"] = true;        
        this.selectedVideo = itemVideo;
    }
    
    onCloseDetailForm(event){
        console.log('fechando...');
        this.selectedVideo = null;
        this.videos.forEach(item => { item["selected"] = false; });        
    }
    
    onCloseAddForm(event){
        
    }
    onAddVideo(){
        this.adicionando = true;
        this.newVideo = new Video(0,'','');
    }
}