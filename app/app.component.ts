import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video'
import {VideoListComponent} from './videolist.component'

@Component({
    selector: 'my-app',
    template: `
        <h1 class="jumbotron">
            {{title}}
        </h1>
        <video-list [videos]="videos" (selectVideo)="onSelectVideo($event)"></video-list>    
    `,
    directives: [VideoListComponent]
})

export class AppComponent 
{
    title = Config.TITLE_PAGE;
    videos:Array<Video>;
    
    constructor(){
        this.videos = [
            new Video(1,"Test", "www.google.com.br", "Test no google"),
            new Video(2, "Test2", "www.tjmt.jus.br")  
        ];
    }
    
    onSelectVideo(video:Video){
        console.log(JSON.stringify(video));
    }    
}