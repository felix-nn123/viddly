import http from "./httpService"
import config from "../config.json"
import jwtDecode from "jwt-decode";


http.setJwt(getJwt())

export function login(email, password){

return http.post("http://localhost:3900/api/auth", {"email":email, "password":password})


// localStorage.setItem("token")

}

export function loginWithJwt(jwt){

    localStorage.setItem("token", jwt)

}


export function logout(){

localStorage.removeItem("token")


}

export function getCurrentUser(){
    try {
   
        const jwt =localStorage.getItem("token");
  
        return  jwtDecode(jwt)
  

        
      } catch (ex) {
        
        return null

      }

}

export function getJwt(){

return localStorage.getItem("token")

}


export default {
login,
loginWithJwt,
logout,
getCurrentUser,
getJwt

}
