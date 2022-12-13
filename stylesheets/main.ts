import {getuser} from './user'
import login from './login'


document.getElementById('loginboton')!.addEventListener('click',function(e){

        e.preventDefault()
        let username:string= (<HTMLInputElement>document.getElementById('username')).value
let password:string= (<HTMLInputElement>document.getElementById('password')).value
console.log(getuser())
})


