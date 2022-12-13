import {User} from '../stylesheets/user'
import logedin from './logedin'
export default function(dbuser:User, forinfo:{username:string,password:string}){

if (forinfo.username=== dbuser.username){
    if(forinfo.password=== dbuser.password){

        localStorage.setimtem('username',forinfo.username)
        logedin()
    }
else{

    return
}


}

else{
    return
}
}