import { Injectable } from '@angular/core';
import {environment} from '../environments/environment'; 
import { HttpClient, } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BinService {

  BASE_URL =environment.BASE_URL+'/bin' ;
  constructor(private http:HttpClient) { }

  getAllBin()
  { let token = localStorage.getItem('token');
       return this.http.get(this.BASE_URL,{headers:{'x-access-token':token}}) ;
  }

  addBin(location,weight,alt,lng,driver)
  { let token = localStorage.getItem('token');
   return this.http.post(this.BASE_URL+'/add',{
      'location':location,
      'wieght':weight,
      'alt':alt,
      'lng':lng,
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

  assignBin(binId,driverID)
  {
    let token = localStorage.getItem('token');
   return this.http.put(this.BASE_URL+'/update/'+binId,{
     'column':'assignedto',
     'value':driverID
   },{
      'headers':{'x-access-token':token}
    }
    )
  }
}
