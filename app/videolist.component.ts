import {
    Component, 
    EventEmitter
} from 'angular2/core';

import {Video} from './video'

@Component({
    selector: 'video-list',
    template: `
        <style>
            .howTr {
                cursor:pointer;                
            }
            .howTr:hover{
                background-color: #fcf8e3 !important;
            }
        </style>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="#v of videos" (click)="onSelect(v)" class='{{v["selected"] ? "info howTr" : "howTr" }}'>
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
    onSelect(itemVideo:Video) {
        //console.log(JSON.stringify(vid));        
        this.selectVideo.next(itemVideo);
    }
}