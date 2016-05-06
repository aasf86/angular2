import {Component,EventEmitter,Input,Output,OnInit} from 'angular2/core';
import {Video} from './video';

@Component({
    selector:'video-detail',    
    template: `
        <style>
            .h3Cursor {
                cursor:pointer;                
            }
        </style>    
        <div class="row">
            <div class="col-md-4">
                <iframe width="100%" height="300" src="{{video.url}}"></iframe>
            </div>
            <div class="col-md-8">
                <form>                    
                    <h3 class="h3Cursor" *ngIf="video.title" (click)="onTitleClick()">{{video.title}}</h3>
                    <div *ngIf="!video.title" class="form-group">
                        <input type="input" class="form-control" id="title" required placeholder="title" [(ngModel)]="video.title">
                    </div>
                    <div class="form-group">
                        <input type="input" class="form-control" id="url" required placeholder="url" [(ngModel)]="video.url">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" rows="5" [(ngModel)]="video.desc"></textarea>
                    </div>
                    <button type="button" class="btn btn-success" (click)="onButtonOkClick()">Ok</button>
                    <button type="button" class="btn btn-danger" (click)="onButtonCancelClick()">Cancelar</button>
                </form>
            </div>
        </div>
    `
})

export class VideoDetailComponent implements OnInit {
    @Input()
    video:Video;    
    editTitle:boolean = false;
    @Output()
    close = new EventEmitter();    
    
    constructor(){   
                    
             
    }
    onTitleClick(){
        this.editTitle = true;
    }
    onButtonOkClick(){
        this.editTitle = false;
        this.close.next(null);
    }
    ngOnChanges(){
        this.editTitle = false;
    }
    onButtonCancelClick(){
        this.close.next({});
    }
    
    ngOnInit(){
        console.log(' '+this.editTitle);        
    }
}
