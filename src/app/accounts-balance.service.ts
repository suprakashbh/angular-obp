import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AccountsBalanceService {
  
   accountBalance : Observable<any[]>;

  constructor( private http:Http) { 
    
 }
  getAccountBalance(): Observable<Response>{
      return this.http.get("obp/accounts")
      
  }

}
