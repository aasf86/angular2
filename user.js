var User = (function () {
    function User(firstname, lastname) {
        this.fullname = firstname + " " + lastname;
    }
    User.prototype.hello = function () {
        return "Hello, " + this.fullname;
    };
    return User;
}());
var user = new User("Anderson", "Fernandes");
document.body.innerHTML = user.hello();
//# sourceMappingURL=user.js.map