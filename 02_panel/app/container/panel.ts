import {
    Component,
    Input
} from 'angular2/core';

@Component({
    selector: 'panel',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading" *ngIf="title"><h1>{{title}}</h1></div>
            <div class="panel-body">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class Panel 
{ 
    @Input()
    title:string = '';    
}
