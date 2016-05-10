import {
    Component,    
    EventEmitter,
    Output,
    Input
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
                    <th>#ID</th>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th width="3%"></th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="#v of videos" (click)="onSelect(v, $event)" class='{{v["selected"] ? "info howTr" : "howTr" }}'>
                    <td>{{v.id}}</td>
                    <td>{{v.title}}</td>
                    <td>{{v.desc}}</td>
                    <td>
                        <button type="button" class="btn btn-danger" title="Remover item" (click)="onRemover(v, $event)">
                            <i class="glyphicon glyphicon-remove"></i>
                        </button>                    
                    </td>
                </tr>
            </tbody>
        </table>
        `,
    inputs: ['videos']    
})

export class VideoListComponent {
    @Output()
    selectVideo = new EventEmitter();
    
    @Output()
    removeVideo = new EventEmitter();   
        
    
    onSelect(itemVideo:Video, event) {
        //console.log(JSON.stringify(vid));        
        this.selectVideo.next({itemVideo, event});
    }
    
    onRemover(itemVideo:Video){
        this.removeVideo.next({itemVideo, event});
    }
}