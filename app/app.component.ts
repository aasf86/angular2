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
            new Video(1,"Test", "www.google.com.br", "Test no google"),
            new Video(2, "Test2", "www.tjmt.jus.br"),
            new Video(3, "Test3", "www.tjmt.jus.br3")  
        ];
    }
    
    onSelectVideo(video:Video){
        //--console.log(JSON.stringify(video));
        this.selectedVideo = video;
    }    
}