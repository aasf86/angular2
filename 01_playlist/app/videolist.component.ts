import {
    Component,    
    EventEmitter,
    Output,
    Input
} from 'angular2/core';

import {Video} from '././video'

@Component({
    selector: 'video-list',
    template: (`
        <style>
            .howTr {
                cursor:pointer;                
            }
            .howTr:hover{
                background-color: #fcf8e3 !important;
            }
            .zebra {
                background-color: lightgray;
            }
        </style>
        <div class="table-responsive">
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
                    <tr *ngFor="#v of videos, #i=index" (click)="onSelect(v, $event)" class='{{v["selected"] ? getClassTr(i, "info howTr") : getClassTr(i, "howTr") }}'>
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
        </div>
        `),
    inputs: ['videos']    
})

export class VideoListComponent {
    @Output()
    selectVideo = new EventEmitter();
    
    @Output()
    removeVideo = new EventEmitter();   
    
    getClassTr(index, className) {
        console.log();
        return index%2==0 ?  className+' zebra' : className;
    }
    
    onSelect(itemVideo:Video, event) {                
        this.selectVideo.next({itemVideo, event});
    }
    
    onRemover(itemVideo:Video){
        this.removeVideo.next({itemVideo, event});
    }
}