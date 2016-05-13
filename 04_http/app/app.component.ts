import {Component} from 'angular2/core'
import {User} from './user/user.model'
import {UserService} from './user/user.service'

@Component({
    selector: 'my-app',
    providers: [UserService],
    template: (`
    <ul>
        <li *ngFor="let u of users">
            {{u.id}} - {{u.name}}
        </li>
    </ul>
    `)
})
export class AppComponent {
    public users:Array<User>;
    constructor(userService:UserService){
        userService.getUsers()
        .subscribe(users => this.users = users);
    }
}