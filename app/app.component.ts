import {Component} from 'angular2/core';
import {Config} from './config.service';

@Component({
    selector: 'my-app',
    template: '<h1 class="jumbotron">{{title}}</h1>'
})
export class AppComponent 
{
    title = Config.TITLE_PAGE;    
}