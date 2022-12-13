import { getuser } from "./user"
export default function(){
    if (localStorage.username)
    document.getElementById("botonhtml")!.innerHTML ='<span>hoal,$(getuser()[0].username) </span>'

    document.getElementById("addfoto")!.innerHTML= '<button class="btn btn-primary btn-block">Agregar Foto </button>'


   


}