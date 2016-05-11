import {Component} from 'angular2/core'
import {Config} from '././config.service'
import {Mock} from './mock'
import {Person} from './model'

@Component({    
    selector: 'my-app',    
    template: (`
    {{user | json}}
    <style>
    .ng-invalid {
        border-left: 5px solid #a94442;
    }    
    </style>
    <form>
        <input type="hidden" id="id" name="id" [(ngModel)]="user.id"/>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" name="name" required [(ngModel)]="user.name" ngControl="name" #name="ngForm">
            <div [hidden]="name.valid" class="alert alert-danger">
                Nome inválido!
            </div>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" class="form-control" required [(ngModel)]="user.email">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
    </form> 

    `)
})

export class AppComponent 
{ 
    user:Person;
    constructor(_mock:Mock){
        this.user = _mock.mike;
    }    
}