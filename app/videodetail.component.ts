import {Component} from 'angular2/core';
import {Video} from './video';

@Component({
    selector:'video-detail',
    template: `
        <h2>{{video.title}}</h2>
    `,
    inputs: ['video']
})

export class VideoDetailComponent{
    video:Video;
}
