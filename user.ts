import { Point } from "./ts_modules/geo";

class User {
    fullname : string;
    constructor(firstname:string,lastname:string) {
        this.fullname = firstname + " " + lastname;
    }
    hello():string{        
        var ponto:Point = new Point({x:0,y:1});
        return "Hello, " + this.fullname + " -> ponte é 3d: " + ponto.is3d() + ".";
        //return "Hello, " + this.fullname+"asdf"; 
    }
}
var user = new User("Anderson de Almeida Santos", "Fernandes");
//import { Point } from "./ts_modules/geo";
document.body.innerHTML = user.hello();