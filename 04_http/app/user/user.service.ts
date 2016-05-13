import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {Injectable} from 'angular2/core'
import 'rxjs/add/operator/map'
import {User} from './user.model'

@Injectable()
export class UserService {
    baseUrl:string = './app/user';
    constructor(private http: Http) { }
    public getUsers() {
        return this.http
            .get(this.baseUrl + '/user.json')
            .map(res => res.json());
    }
    public addUser(user:User) {
        return this.http
            .post(this.baseUrl + '/addUser', JSON.stringify(user))
            .map(res => res.json());
    }
}