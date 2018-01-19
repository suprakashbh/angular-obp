import { Acctsubmissions } from './acctsubmissions';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AddAccountService {
  
  constructor( private http:Http) { 
  }

  addAccount(data:Acctsubmissions): Observable<Response>{
      console.log(data);
      return this.http.post("obp/accounts",data)
      
  }
}