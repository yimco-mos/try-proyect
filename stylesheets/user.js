"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getuser = exports.User = void 0;
class User {
    constructor(user_name, _password) {
        this.user_name = user_name;
        this._password = _password;
    }
    get username() {
        return this.user_name;
    }
    set username(username) {
        this.user_name = username;
    }
    get password() {
        return this.password;
    }
    set password(password) {
        this._password = password;
    }
}
exports.User = User;
let users = [];
let user1 = new User('yimco', '123456edf');
users.push(user1);
function getuser() {
    return users;
}
exports.getuser = getuser;
