import {Component} from 'angular2/core';
import {Video} from './video';

@Component({
    selector:'video-detail',    
    inputs: ['video'],
    template: `
        <div class="row">
            <div class="col-md-4">
                <iframe width="100%" height="300" src="{{video.url}}"></iframe>
            </div>
            <div class="col-md-8">
                <form>
                    <h3>{{video.title}}</h3>
                    <div class="form-group">
                        <input type="input" class="form-control" id="url" required placeholder="url" [(ngModel)]="video.url">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" rows="5" [(ngModel)]="video.desc"></textarea>
                    </div>
                    <button type="button" class="btn btn-default" (click)="onButtonOkClick()">Ok</button>
                </form>
            </div>
        </div>
    `
})

export class VideoDetailComponent{
    video:Video;
}
