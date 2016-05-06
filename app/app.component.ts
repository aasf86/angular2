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
        <video-detail *ngIf="selectedVideo" [video]="selectedVideo"></video-detail>            
    `
})

export class AppComponent 
{
    title = Config.TITLE_PAGE;
    videos:Array<Video>;
    selectedVideo:Video;
    
    constructor(){
        this.videos = [
            new Video(1,"Git", "https://www.youtube.com/embed/C18qzn7j4SM", "Rodrigo Branas (git)"),
            new Video(2, "Gulp vs Grunt", "https://www.youtube.com/embed/ZG0fSXOKcGM", "Rodrigo Branas (Gulp vs Grunt)"),
            new Video(3, "Bower", "https://www.youtube.com/embed/ZA06skH73gg", "Rodrigo Branas (Bower)")  
        ];
    }
    
    onSelectVideo(video:Video){
        //--console.log(JSON.stringify(video));
        this.selectedVideo = video;
    }    
}