export class User{
constructor(private user_name:string,private _password:string){}

get username():string{
return this.user_name
}

set username(username){
    this.user_name=username

}



get password():string{
    return this.password
}



set password(password){
        this._password=password

    }



}


let users:User[]=[]

let user1 = new User('yimco','123456edf')
users.push(user1)

export function getuser(){

    return users
}