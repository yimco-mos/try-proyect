"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logedin_1 = __importDefault(require("./logedin"));
function default_1(dbuser, forinfo) {
    if (forinfo.username === dbuser.username) {
        if (forinfo.password === dbuser.password) {
            localStorage.setimtem('username', forinfo.username);
            (0, logedin_1.default)();
        }
        else {
            return;
        }
    }
    else {
        return;
    }
}
exports.default = default_1;
