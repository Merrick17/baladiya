import { Injectable } from '@angular/core';
import {environment} from '../environments/environment'; 
import { HttpClient, } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }


  loginUser(matricule,password):any
  {
    return this.http.post(environment.BASE_URL+'/users/login',{'matricule':matricule,'mdp':password}) 
  }

  addUser(name,firstname,password,matricule,type,phone)
  {
    return this.http.post(environment.BASE_URL+'/users/register',{
      'name':name,
      'firstname':firstname,
      'password':password,
      'matricule':matricule,
      'type':type,
      'phone':phone
    })
  }

  getAllUsers(type)
  {let token = localStorage.getItem('token'); 

   return this.http.get(environment.BASE_URL+'/users/'+type,{headers:{'x-access-token':token}}) ; 
  }
}
