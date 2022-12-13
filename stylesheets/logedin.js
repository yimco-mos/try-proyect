"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    if (localStorage.username)
        document.getElementById("botonhtml").innerHTML = '<span>hoal,$(getuser()[0].username) </span>';
    document.getElementById("addfoto").innerHTML = '<button class="btn btn-primary btn-block">Agregar Foto </button>';
}
exports.default = default_1;
