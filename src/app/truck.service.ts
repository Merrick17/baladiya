
import { Injectable } from '@angular/core';
import {environment} from '../environments/environment'; 
import { HttpClient, } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TruckService {
 BASE_URL =environment.BASE_URL+'/truck' ;
  constructor(private http:HttpClient) { }

  getAllTrucks()
  { let token = localStorage.getItem('token');
       return this.http.get(this.BASE_URL,{headers:{'x-access-token':token}}) ;
  }

  addTruck(matricule,weight,driver)
  { let token = localStorage.getItem('token');
   return this.http.post(this.BASE_URL+'/add',{
      'matricule':matricule,
      'weight':weight,
      'driver':driver
    },{
      'headers':{'x-access-token':token}
    }
    )
  }

  deleteTruck(truckID)
  {
    let token = localStorage.getItem('token');
   return this.http.delete(this.BASE_URL+'/delete/'+truckID,{
      'headers':{'x-access-token':token}
    }
    )
  }

  assignTruck(driverId,truckId)
  {
    let token = localStorage.getItem('token');
   return this.http.delete(this.BASE_URL+'/assign/'+driverId+'/'+truckId,{
      'headers':{'x-access-token':token}
    }
    )
  }
}
