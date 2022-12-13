"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
document.getElementById('loginboton').addEventListener('click', function (e) {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    console.log((0, user_1.getuser)());
});
