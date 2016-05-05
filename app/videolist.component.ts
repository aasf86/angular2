import {
    Component, 
    EventEmitter
} from 'angular2/core'

import {Video} from './video'

@Component({
    selector: 'video-list',
    template: `
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="#v of videos" (click)="onSelect(v)">
                    <td>{{v.id}}</td>
                    <td>{{v.title}}</td>
                </tr>
            </tbody>
        </table>
        `,
    inputs: ['videos'],
    outputs: ['selectVideo']
})

export class VideoListComponent {
    selectVideo = new EventEmitter();
    onSelect(vid:Video) {
        console.log(JSON.stringify(vid));        
    }    
}
