System.register(["./ts_modules/geo"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var geo_1;
    var User, user;
    return {
        setters:[
            function (geo_1_1) {
                geo_1 = geo_1_1;
            }],
        execute: function() {
            User = (function () {
                function User(firstname, lastname) {
                    this.fullname = firstname + " " + lastname;
                }
                User.prototype.hello = function () {
                    var ponto = new geo_1.Point({ x: 0, y: 1 });
                    return "Hello, " + this.fullname + " -> ponte é 3d: " + ponto.is3d() + ".";
                    //return "Hello, " + this.fullname+"asdf"; 
                };
                return User;
            }());
            user = new User("Anderson de Almeida Santos", "Fernandes");
            //import { Point } from "./ts_modules/geo";
            document.body.innerHTML = user.hello();
        }
    }
});
//# sourceMappingURL=user.js.map